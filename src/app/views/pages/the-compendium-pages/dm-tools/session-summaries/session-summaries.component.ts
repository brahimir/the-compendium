import { Component, OnInit, ViewChild } from "@angular/core";
// Models
import { currentUser, User } from "src/app/core/auth";
import { Session } from "../../../../../core/resources/_models/dm_tools/session_summaries/session.model";
// Services
import { SessionSummariesService } from "../../../../../core/resources/_services/dm-tools-services/session_summaries.service";
import { DateService } from "src/app/core/resources/_services/date.service";
// Angular Material
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
// Dialog Component
import { SessionSummariesDialogComponent } from "../../_dialogs/session-summaries-dialogs/details-dialog/session-summaries-details-dialog.component";
// RxJS
import { Observable } from "rxjs";
// NGRX
import { select, Store } from "@ngrx/store";
// State
import { AppState } from "src/app/core/reducers";

@Component({
  selector: "kt-session-summaries",
  templateUrl: "./session-summaries.component.html",
  styleUrls: ["./session-summaries.component.scss"],
})
export class SessionSummariesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // Public properties
  user$: Observable<User>;
  userId: string;

  columnsToDisplay: any[] = ["chapter", "episode", "date"];

  // Datasource for MatTable
  dataSource: any;

  // Sessions
  TABLE_DATA: Session[] = [];

  constructor(
    private store: Store<AppState>,
    private apiService: SessionSummariesService,
    public dateService: DateService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // todo - This is getting a "snapshot" of the user - need to explicitly call the API to get
    // todo - up-to-date information on the Storyboard plots for the user.
    this.user$ = this.store.pipe(select(currentUser));
    this.user$.subscribe((data) => {
      this.userId = data._id;
    });

    this.refreshSessions();
  }

  refreshSessions(): void {
    this.apiService.getSessionSummaries(this.userId).subscribe((data) => {
      let sessions = data.userSettings.dmTools.sessions;
      this.TABLE_DATA = this.apiService.generateSessionObjects(sessions);

      // Set the DataSource for MatTableData.
      this.dataSource = new MatTableDataSource<Session>(this.TABLE_DATA);

      // Set Paginators and Sorts.
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDetails(element: Session): void {
    // Pass the Armor object to the dialog here.
    const dialogData = element;

    // Set the dialog window options here.
    const dialogOptions = {
      data: dialogData,
    };

    // Opens the dialog window.
    const dialogRef = this.dialog.open(
      SessionSummariesDialogComponent,
      dialogOptions
    );

    // Handles dialog closing - can do something when the dialog is closed.
    dialogRef.afterClosed().subscribe((result) => {});
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