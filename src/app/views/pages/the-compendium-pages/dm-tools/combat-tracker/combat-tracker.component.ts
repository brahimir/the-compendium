import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
// Models
import { currentUser, User } from "src/app/core/auth";
import { CombatInstance } from "./_models/combat-instance.model";
import { CombatUnit } from "./_models/combat-unit.model";
// Services
import { CombatTrackerService } from "./combat-tracker.service";
import { FormattingService } from "src/app/core/resources/_services/formatting.service";
import { LayoutUtilsService, MessageType } from "src/app/core/_base/crud";
// MatDialog
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { AddUnitDialogComponent } from "./_dialogs/add-unit-dialog/add-unit-dialog.component";
// MatTable
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
// RxJS
import { Observable } from "rxjs";
// NGRX
import { select, Store } from "@ngrx/store";
import { AppState } from "src/app/core/reducers";

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

  // MatTable
  displayedColumns: string[] = ["name", "initiative", "hitpoints", "actions"];
  // datasources: MatTableDataSource<CombatUnit>[] = [];

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

  addCombatUnit(combatInstance: CombatInstance): void {
    // Open the dialog, sending the title of the Combat Instance.
    let dialogData: any = {
      combatInstanceTitle: combatInstance.instanceName,
    };
    let dialogRef: MatDialogRef<AddUnitDialogComponent> = this.dialog.open(AddUnitDialogComponent, {
      data: dialogData,
    });

    // Update combatInstance with the newly created Unit, and save it to the server.
    dialogRef.afterClosed().subscribe((newUnit: CombatUnit) => {
      if (!newUnit) return;
      else {
        // Get index of the combatInstance to update.
        let index: number = this.userCombatTrackers.indexOf(combatInstance);

        // Copy existing array for modification.
        let newUnitsArray = Object.assign([], combatInstance.units);
        newUnitsArray.push(newUnit);

        // Overwrite old array of Units.
        combatInstance.units = newUnitsArray;

        // Modify existing array of Combat Trackers.
        this.userCombatTrackers.splice(index, 1, combatInstance);

        // Save updated Combat Instance to the server.
        this.apiService
          .updateUserCombatTrackers(this.userId, this.userCombatTrackers)
          .subscribe((res) => {
            if (res.status === 200) {
              // Show success snackbar message.
              const message = `${newUnit.name} successfully added to "${combatInstance.instanceName}" Combat.`;
              this.layoutUtilsService.showActionNotification(
                message,
                MessageType.Create,
                5000,
                true,
                true
              );
            } else {
              // Show error snackbar message.
              const message = `There was an error adding "${newUnit.name}" to "${combatInstance.instanceName}" Combat.`;
              this.layoutUtilsService.showActionNotification(
                message,
                MessageType.Create,
                5000,
                true,
                true
              );
            }
          });
      }
    });
  }

  generateDataSource(unitArray: CombatUnit[]): MatTableDataSource<CombatUnit> {
    let newDataSource = new MatTableDataSource(unitArray);
    newDataSource.sort = this.sort;

    return newDataSource;
  }

  // todo
  refreshSorts(): void {
    // this.datasources.forEach((element) => {
    //   element.sort = this.sort;
    // });
  }
}
