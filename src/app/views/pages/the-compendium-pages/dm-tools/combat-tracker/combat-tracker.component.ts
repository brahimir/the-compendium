import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
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
import { AddCombatInstanceComponent } from "./_dialogs/add-combat-instance/add-combat-instance.component";
import { AddUnitDialogComponent } from "./_dialogs/add-unit-dialog/add-unit-dialog.component";
import { EditUnitDialogComponent } from "./_dialogs/edit-unit-dialog/edit-unit-dialog.component";
import { ConfirmationDialogComponent } from "src/app/views/components/_global-dialogs/confirmation-dialog/confirmation-dialog.component";
import { ConfirmationDialog } from "src/app/views/components/_global-dialogs/confirmation-dialog/confirmation-dialog.model";
// MatTable
import { MatSort, MatSortable, Sort } from "@angular/material/sort";
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
export class CombatTrackerComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  // @ViewChildren(MatSort) sorts = new QueryList<MatSort>();

  // Public properties
  user$: Observable<User>;
  userId: string;
  userCombatTrackers: CombatInstance[];

  // MatTable
  displayedColumns: string[] = ["name", "initiative", "hitpoints", "actions"];
  dataSources: MatTableDataSource<CombatUnit>[] = [];
  dataSorts: MatSort[] = [];

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

  ngAfterViewInit(): void {}

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
    // Open the dialog.
    let dialogRef: MatDialogRef<AddCombatInstanceComponent> = this.dialog.open(
      AddCombatInstanceComponent
    );

    // Update combatInstance with the newly created Unit, and save it to the server.
    dialogRef.afterClosed().subscribe((newCombatInstance: CombatInstance) => {
      if (!newCombatInstance) return;
      else {
        let newUserCombatTrackers = Object.assign([], this.userCombatTrackers);
        newUserCombatTrackers.push(newCombatInstance);

        // Save updated Combat Instance to the server.
        this.apiService.updateUserCombatTrackers(this.userId, newUserCombatTrackers).subscribe((res) => {
          if (res.status === 200) {
            // Show success snackbar message.
            const message = `"${newCombatInstance.name}" successfully added.`;
            this.layoutUtilsService.showActionNotification(
              message,
              MessageType.Create,
              5000,
              true,
              true
            );
          } else {
            // Show error snackbar message.
            const message = `There was an error adding "${newCombatInstance.name}".`;
            this.layoutUtilsService.showActionNotification(
              message,
              MessageType.Create,
              5000,
              true,
              true
            );
          }

          this.userCombatTrackers = newUserCombatTrackers;
          this.cdr.detectChanges();
        });
      }
    });
  }

  removeCombatInstance(combatInstance: CombatInstance): void {
    // Open the dialog, sending the title of the Combat Instance.
    let dialogData: ConfirmationDialog = {
      headerTitle: "Remove Combat Instance",
      confirmationMessage: `Are you sure you want to remove "${combatInstance.name}"?`,
      textAgreeButton: "Remove",
      textCancelButton: "Cancel",
      warnNoUndo: true,
    };

    let dialogRef: MatDialogRef<ConfirmationDialogComponent> = this.dialog.open(
      ConfirmationDialogComponent,
      {
        data: dialogData,
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;
      if (result.isConfirmed) {
        // Get indexes for the removed Unit and the Combat Instance to update.
        let index: number = this.userCombatTrackers.indexOf(combatInstance);

        // Modify existing array of Combat Trackers.
        this.userCombatTrackers.splice(index, 1);

        // Save updated Combat Instance to the server.
        this.apiService
          .updateUserCombatTrackers(this.userId, this.userCombatTrackers)
          .subscribe((res) => {
            if (res.status === 200) {
              // Show success snackbar message.
              const message = `"${combatInstance.name}" successfully removed.`;
              this.layoutUtilsService.showActionNotification(
                message,
                MessageType.Create,
                5000,
                true,
                true
              );
            } else {
              // Show error snackbar message.
              const message = `There was an error removing "${combatInstance.name}".`;
              this.layoutUtilsService.showActionNotification(
                message,
                MessageType.Create,
                5000,
                true,
                true
              );
            }

            this.cdr.detectChanges();
          });
      } else return;
    });
  }

  /**
   * Adds a Unit to the specified Combat Instance.
   *
   * @param {CombatInstance} combatInstance The Combat Instance.
   */
  addCombatUnit(combatInstance: CombatInstance): void {
    // Open the dialog, sending the title of the Combat Instance.
    let dialogData: any = {
      combatInstanceTitle: combatInstance.name,
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
              const message = `"${newUnit.name}" successfully added to "${combatInstance.name}".`;
              this.layoutUtilsService.showActionNotification(
                message,
                MessageType.Create,
                5000,
                true,
                true
              );
            } else {
              // Show error snackbar message.
              const message = `There was an error adding "${newUnit.name}" to "${combatInstance.name}".`;
              this.layoutUtilsService.showActionNotification(
                message,
                MessageType.Create,
                5000,
                true,
                true
              );
            }

            this.cdr.detectChanges();
          });
      }
    });
  }

  /**
   * Updates an existing Unit in the specified Combat Instance.
   *
   * @param {CombatInstance} combatInstance The Combat Instance.
   * @param {CombatUnit} unit The Unit to update.
   */
  editCombatUnit(combatInstance: CombatInstance, unit: CombatUnit): void {
    // Open the dialog, sending the title of the Combat Instance.
    let dialogData: any = {
      unit: unit,
    };

    let dialogRef: MatDialogRef<EditUnitDialogComponent> = this.dialog.open(EditUnitDialogComponent, {
      data: dialogData,
    });

    // Update combatInstance with the newly created Unit, and save it to the server.
    dialogRef.afterClosed().subscribe((updatedUnit: CombatUnit) => {
      if (!updatedUnit) return;
      else {
        // Get indexes for the removed Unit and the Combat Instance to update.
        let indexUnit: number = combatInstance.units.indexOf(unit);
        let indexCombatInstance: number = this.userCombatTrackers.indexOf(combatInstance);

        // Copy existing array for modification.
        let newUnitsArray = Object.assign([], combatInstance.units);
        newUnitsArray.splice(indexUnit, 1, updatedUnit);

        // Overwrite old array of Units.
        combatInstance.units = newUnitsArray;

        // Modify existing array of Combat Trackers.
        this.userCombatTrackers.splice(indexCombatInstance, 1, combatInstance);

        // Save updated Combat Instance to the server.
        this.apiService
          .updateUserCombatTrackers(this.userId, this.userCombatTrackers)
          .subscribe((res) => {
            if (res.status === 200) {
              // Show success snackbar message.
              const message = `"${unit.name}" successfully updated in "${combatInstance.name}".`;
              this.layoutUtilsService.showActionNotification(
                message,
                MessageType.Create,
                5000,
                true,
                true
              );
            } else {
              // Show error snackbar message.
              const message = `There was an error updating "${unit.name}" in "${combatInstance.name}".`;
              this.layoutUtilsService.showActionNotification(
                message,
                MessageType.Create,
                5000,
                true,
                true
              );
            }
            this.cdr.detectChanges();
          });
      }
    });
  }

  /**
   * Removes a Unit from the specified Combat Instance.
   *
   * @param {CombatInstance} combatInstance The Combat Instance.
   */
  removeCombatUnit(combatInstance: CombatInstance, unit: CombatUnit): void {
    // Open the dialog, sending the title of the Combat Instance.
    let dialogData: ConfirmationDialog = {
      headerTitle: "Remove Unit",
      confirmationMessage: `Are you sure you want to remove "${unit.name}" from "${combatInstance.name}"?`,
      textAgreeButton: "Remove",
      textCancelButton: "Cancel",
      warnNoUndo: false,
    };

    let dialogRef: MatDialogRef<ConfirmationDialogComponent> = this.dialog.open(
      ConfirmationDialogComponent,
      {
        data: dialogData,
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;
      if (result.isConfirmed) {
        // Get indexes for the removed Unit and the Combat Instance to update.
        let indexUnit: number = combatInstance.units.indexOf(unit);
        let indexCombatInstance: number = this.userCombatTrackers.indexOf(combatInstance);

        // Copy existing array for modification.
        let newUnitsArray = Object.assign([], combatInstance.units);
        newUnitsArray.splice(indexUnit, 1);

        // Overwrite old array of Units.
        combatInstance.units = newUnitsArray;

        // Modify existing array of Combat Trackers.
        this.userCombatTrackers.splice(indexCombatInstance, 1, combatInstance);

        // Save updated Combat Instance to the server.
        this.apiService
          .updateUserCombatTrackers(this.userId, this.userCombatTrackers)
          .subscribe((res) => {
            if (res.status === 200) {
              // Show success snackbar message.
              const message = `"${unit.name}" successfully removed from "${combatInstance.name}".`;
              this.layoutUtilsService.showActionNotification(
                message,
                MessageType.Create,
                5000,
                true,
                true
              );
            } else {
              // Show error snackbar message.
              const message = `There was an error removing "${unit.name}" from "${combatInstance.name}".`;
              this.layoutUtilsService.showActionNotification(
                message,
                MessageType.Create,
                5000,
                true,
                true
              );
            }
            this.cdr.detectChanges();
          });
      } else return;
    });
  }

  /**
   * Dynamically generated MatTableDataSources for each array of Units, from each Combat Instance,
   * retreived from the server.
   *
   * @param {CombatUnit[]} unitArray The Unit arrays.
   * @returns {MatTableDataSource<CombatUnit>} The MatTableDataSource.
   */
  generateDataSource(unitArray: CombatUnit[]): MatTableDataSource<CombatUnit> {
    let newDataSource = new MatTableDataSource(unitArray);
    this.dataSources.push(newDataSource);

    newDataSource.sort = this.sort;

    return newDataSource;
  }
}
