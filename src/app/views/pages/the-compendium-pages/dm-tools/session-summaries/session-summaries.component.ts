import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
// Models
import { currentUser, User } from "src/app/core/auth";
import { Session } from "./_models/session.model";
// Services
import { SessionSummariesService } from "./session-summaries.service";
import { DateService } from "src/app/core/resources/_services/date.service";
// Angular Material
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
// Dialog Component
import { SessionSummariesDetailsDialogComponent } from "./session-summaries-dialogs/details-dialog/session-summaries-details-dialog.component";
// RxJS
import { Observable, Subject } from "rxjs";
// NGRX
import { select, Store } from "@ngrx/store";
// State
import { AppState } from "src/app/core/reducers";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "kt-session-summaries",
  templateUrl: "./session-summaries.component.html",
  styleUrls: ["./session-summaries.component.scss"],
})
export class SessionSummariesComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // Public properties
  user$: Observable<User>;
  userId: string;
  userSessionSummaries: Session[];

  // ? Implement this in other Components that subscribe to the User State.
  destroy: Subject<any> = new Subject();

  columnsToDisplay: any[] = ["chapter", "episode", "date"];

  // Datasource for MatTable
  dataSource: any;

  // Sessions
  TABLE_DATA: Session[];

  constructor(
    private store: Store<AppState>,
    private apiService: SessionSummariesService,
    public dateService: DateService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {
    // todo - This is getting a "snapshot" of the user - on refresh, the User Observable doesn't have
    // todo - "data" to subscribe to - need to fix this.
    // ?
    this.user$ = this.store.pipe(select(currentUser));
    this.user$.pipe(takeUntil(this.destroy)).subscribe((data) => {
      this.userId = data._id;
    });
  }

  ngOnInit(): void {
    this.refreshSessions();
  }

  ngOnDestroy(): void {
    this.destroy.next();
  }

  refreshSessions(): void {
    this.apiService.getSessionSummaries(this.userId).subscribe((sessions: Session[]) => {
      this.userSessionSummaries = sessions;
      this.TABLE_DATA = this.userSessionSummaries;

      // Set the DataSource for MatTableData.
      this.dataSource = new MatTableDataSource<Session>(this.TABLE_DATA);

      // Set Paginators and Sorts.
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.cdr.detectChanges();
    });
  }

  openDetails(session: Session): void {
    // Pass the object to the dialog here.
    const sessionIndex = this.TABLE_DATA.indexOf(session);

    const dialogData = {
      data: session,
      index: sessionIndex,
      sessionSummaries: this.userSessionSummaries,
    };

    // Set the dialog window options here.
    const dialogOptions = {
      data: dialogData,
    };

    // Opens the dialog window.
    const dialogRef = this.dialog.open(SessionSummariesDetailsDialogComponent, dialogOptions);

    // Handles dialog closing - can do something when the dialog is closed.
    dialogRef.afterClosed().subscribe(() => {
      this.refreshSessions();
      this.cdr.detectChanges();
    });
  }

  /**
   * Filters the MatTable based on a passed value.
   * @param filterValue The values to filter for in the table.
   */
  applyFilter(filterValue: string) {
    // Remove whitespace
    filterValue = filterValue.trim();

    // MatTableDataSource defaults to lowercase matches
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
