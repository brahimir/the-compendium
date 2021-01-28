import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
// Models
import { currentUser, User } from "src/app/core/auth";
import { CombatInstance } from "./_models/combat-instance.model";
// Services
import { CombatTrackerService } from "./combat-tracker.service";
import { FormattingService } from "src/app/core/resources/_services/formatting.service";
import { LayoutUtilsService } from "src/app/core/_base/crud";
// MatDialog
import { MatDialog } from "@angular/material/dialog";
// RxJS
import { Observable } from "rxjs";
// NGRX
import { select, Store } from "@ngrx/store";
import { AppState } from "src/app/core/reducers";
import { CombatUnit } from "./_models/combat-unit.model";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "kt-combat-tracker",
  templateUrl: "./combat-tracker.component.html",
  styleUrls: ["./combat-tracker.component.scss"],
})
export class CombatTrackerComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  // Public properties
  user$: Observable<User>;
  userId: string;
  userCombatTrackers: CombatInstance[];

  displayedColumns: string[] = ["name", "initiative", "hitpoints", "actions"];

  constructor(
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog,
    private apiService: CombatTrackerService,
    public formattingService: FormattingService,
    private layoutUtilsService: LayoutUtilsService
  ) {}

  ngOnInit(): void {
    // todo - This is getting a "snapshot" of the user - on refresh, the User Observable doesn't have
    // todo - "data" to subscribe to - need to fix this.
    this.user$ = this.store.pipe(select(currentUser));
    this.user$.subscribe((user: User) => {
      this.userId = user._id;
    });

    this.refreshCombatTrackers();
  }

  /**
   * Gets updated Combat Tracker arrays for the User.
   */
  refreshCombatTrackers(): void {
    this.apiService.getUserCombatTrackers(this.userId).subscribe((data: CombatInstance[]) => {
      this.userCombatTrackers = data;
    });
  }

  /**
   * Updates the User's Combat Trackers on the server.
   */
  updateCombatTrackers(): void {
    this.apiService
      .updateUserCombatTrackers(this.userId, this.userCombatTrackers)
      .subscribe((res: any) => {
        if (res.status === 200) {
          // todo - show confirmation snackbar message
        } else {
          // todo - show error snackbar message
        }
      });
  }

  /**
   * Adds a Combat Instance to the userCombatTrackers arraay.
   *
   * @memberof CombatTrackerComponent
   */
  addCombatInstance(): void {
    // todo
  }

  generateDataSource(unitArray: CombatUnit[]): MatTableDataSource<CombatUnit> {
    return new MatTableDataSource(unitArray);
  }
}
