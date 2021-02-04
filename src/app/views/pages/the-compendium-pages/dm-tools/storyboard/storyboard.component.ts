import { Component, OnInit } from "@angular/core";
// Constants
import { CONSTANTS_STORYBOARD } from "./constants";
// Models
import { Plot } from "./_models/plot.model";
import { Storyboard } from "./_models/storyboard.model";
import { ConfirmationDialog } from "src/app/views/components/_global-dialogs/confirmation-dialog/confirmation-dialog.model";
// Services
import { StoryboardService } from "src/app/views/pages/the-compendium-pages/dm-tools/storyboard/storyboard.service";
// CdkDragDrop
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
// RxJS
import { Observable } from "rxjs";
// NGRX
import { select, Store } from "@ngrx/store";
// State
import { AppState } from "src/app/core/reducers";
import { currentUser, User } from "src/app/core/auth";
// ChangeDetectorRef
import { ChangeDetectorRef } from "@angular/core";
// MatDialog
import { MatDialog } from "@angular/material/dialog";
import { AddPlotDialogComponent } from "./storyboard-dialogs/add-plot-dialog/add-plot-dialog.component";
import { EditPlotDialogComponent } from "./storyboard-dialogs/edit-plot-dialog/edit-plot-dialog.component";
import { ConfirmationDialogComponent } from "src/app/views/components/_global-dialogs/confirmation-dialog/confirmation-dialog.component";
import { LayoutUtilsService, MessageType } from "src/app/core/_base/crud";

/**
 * Storyboard Kanban Board.
 *
 * @implements {OnInit}
 */
@Component({
  selector: "kt-storyboard",
  templateUrl: "./storyboard.component.html",
  styleUrls: ["./storyboard.component.scss"],
})
export class StoryboardComponent implements OnInit {
  // Constants
  PLOT_OPTIONS = CONSTANTS_STORYBOARD.PLOT_OPTIONS;

  // Public properties
  user$: Observable<User>;
  userId: string;
  userStoryboard: Storyboard;
  isLoading: boolean;

  // Storyboard Plots
  plotsMain: Plot[];
  plotsInProgress: Plot[];
  plotsDone: Plot[];

  constructor(
    private store: Store<AppState>,
    private apiService: StoryboardService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog,
    public layoutUtilsService: LayoutUtilsService
  ) {
    // todo - This is getting a "snapshot" of the user - on refresh, the User Observable doesn't have
    // todo - "data" to subscribe to - need to fix this.
    this.user$ = this.store.pipe(select(currentUser));
    this.user$.subscribe((user: User) => {
      this.userId = user._id;
    });
  }

  ngOnInit(): void {
    this.refreshStoryboard();
  }

  /**
   * Handles the movement of array elements for the DragDrop.
   *
   * @param {CdkDragDrop<string[]>} event The drag/drop event.
   */
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      // Update the user's storyboard on the server.
      this.updateStoryBoard().subscribe();
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      // Update the user's storyboard on the server.
      this.updateStoryBoard().subscribe();
    }
  }

  /**
   * Gets the most current version of the user's Storyboard.
   */
  refreshStoryboard(): void {
    this.isLoading = true;
    this.apiService.getStoryboard(this.userId).subscribe((storyboard: Storyboard) => {
      this.plotsMain = storyboard.plotsMain;
      this.plotsInProgress = storyboard.plotsInProgress;
      this.plotsDone = storyboard.plotsDone;
      this.isLoading = false;
    });

    this.cdr.detectChanges();
  }

  /**
   * Updates the user's Storyboard on the server.
   *
   * @returns {Observable<any>} The resulting Storyboard.
   */
  updateStoryBoard(): Observable<any> {
    let storyboard: Storyboard = {
      plotsMain: this.plotsMain,
      plotsInProgress: this.plotsInProgress,
      plotsDone: this.plotsDone,
    };

    return this.apiService.updateStoryboard(this.userId, storyboard);
  }

  /**
   * Adds a plot to the corresponding array column.
   * todo - this NEEDS to be refactored in the future.
   *
   * @param {string} plotColumn The array column to add the plot to.
   */
  addStoryboardPlot(plotColumn: string): void {
    let dialogRef: any;

    switch (plotColumn) {
      case "plotsMain":
        // Open the Dialog.
        dialogRef = this.dialog.open(AddPlotDialogComponent, {
          data: { plot: "Main Plot" },
        });

        // Subscribe to result after Dialog is closed, and push the new
        // plot to the corresponding local array.
        dialogRef.afterClosed().subscribe((plot: Plot) => {
          if (!plot) {
            return;
          } else {
            this.plotsMain.push(plot);

            // Update plot arrays on the server and refresh the Storyboard.
            this.updateStoryBoard().subscribe((res) => {
              if (res.status === 200) {
                // Show confirmation snackbar message.
                const message = `"${plot.title}" successfully added.`;
                this.layoutUtilsService.showActionNotification(
                  message,
                  MessageType.Create,
                  5000,
                  true,
                  true
                );
              } else {
                // Show error snackbar message.
                const message = `There was a problem adding "${plot.title}". Please try again.`;
                this.layoutUtilsService.showActionNotification(
                  message,
                  MessageType.Create,
                  5000,
                  true,
                  true
                );
              }
            });
            this.cdr.detectChanges();
          }
        });
        break;

      case "plotsInProgress":
        // Open the Dialog.
        dialogRef = this.dialog.open(AddPlotDialogComponent, {
          data: { plot: "Plot in Progress" },
        });

        // Subscribe to result after Dialog is closed, and push the new
        // plot to the corresponding local array.
        dialogRef.afterClosed().subscribe((plot: Plot) => {
          if (!plot) {
            return;
          } else {
            this.plotsInProgress.push(plot);

            // Update plot arrays on the server and refresh the Storyboard.
            this.updateStoryBoard().subscribe((res) => {
              if (res.status === 200) {
                // Show confirmation snackbar message.
                const message = `"${plot.title}" successfully added.`;
                this.layoutUtilsService.showActionNotification(
                  message,
                  MessageType.Create,
                  5000,
                  true,
                  true
                );
              } else {
                // Show error snackbar message.
                const message = `There was a problem adding "${plot.title}". Please try again.`;
                this.layoutUtilsService.showActionNotification(
                  message,
                  MessageType.Create,
                  5000,
                  true,
                  true
                );
              }
            });
            this.cdr.detectChanges();
          }
        });
        break;
    }
  }

  /**
   * Modifies a plot from the corresponding array column.
   *
   * @param {string} plotColumn The array column to modify the plot from.
   * @param {string} modifyOption The modification option (i.e remove, edit)
   * @param {*} plot The plot Object.
   */
  modifyStoryboardPlot(plotColumn: string, modifyOption: string, plot: Plot, plotIndex: number): void {
    let dialogRef: any;

    switch (plotColumn) {
      // Plots Main - Remove/Edit
      case "plotsMain":
        switch (modifyOption) {
          case "Remove":
            let dialogData: ConfirmationDialog = {
              headerTitle: "Confirm Plot Removal",
              confirmationMessage: `Are you sure you want to remove "${plot.title}"?`,
              textAgreeButton: "Remove",
              textCancelButton: "Cancel",
              warnNoUndo: true,
            };

            dialogRef = this.dialog.open(ConfirmationDialogComponent, {
              data: dialogData,
            });

            // Subscribe to result after Dialog is closed, and push the new
            // plot to the corresponding local array.
            dialogRef.afterClosed().subscribe((data) => {
              // Checks for null data return.
              if (!data) return;

              // If the User confirms removal.
              if (data.isConfirmed) {
                this.plotsMain.splice(plotIndex, 1);
                // Update plot arrays on the server and refresh the Storyboard.
                this.updateStoryBoard().subscribe((res) => {
                  if (res.status === 200) {
                    // Show confirmation snackbar message.
                    const message = `"${plot.title}" successfully removed.`;
                    this.layoutUtilsService.showActionNotification(
                      message,
                      MessageType.Create,
                      5000,
                      true,
                      true
                    );
                  } else {
                    // Show error snackbar message.
                    const message = `There was a problem removing "${plot.title}. Please try again.`;
                    this.layoutUtilsService.showActionNotification(
                      message,
                      MessageType.Create,
                      5000,
                      true,
                      true
                    );
                  }
                });
                this.cdr.detectChanges();
              }
            });
            break;

          case "Edit":
            dialogRef = this.dialog.open(EditPlotDialogComponent, {
              data: {
                plot: `${plot.title}`,
                plotTitle: plot.title,
                plotDescription: plot.description,
              },
            });

            // Subscribe to result after Dialog is closed, and push the new
            // plot to the corresponding local array.
            dialogRef.afterClosed().subscribe((updatedPlot: Plot) => {
              if (!updatedPlot) {
                return;
              } else {
                // Check if the delete is confirmed by the user, then delete the plot from the array.
                this.plotsMain.splice(plotIndex, 1, updatedPlot);

                // Update plot arrays on the server and refresh the Storyboard.
                this.updateStoryBoard().subscribe((res) => {
                  if (res.status === 200) {
                    // Show confirmation snackbar message.
                    const message = `Successfully updated "${updatedPlot.title}".`;
                    this.layoutUtilsService.showActionNotification(
                      message,
                      MessageType.Create,
                      5000,
                      true,
                      true
                    );
                  } else {
                    // Show confirmation snackbar message.
                    const message = `There was a problem updating "${updatedPlot.title}". Please try again.`;
                    this.layoutUtilsService.showActionNotification(
                      message,
                      MessageType.Create,
                      5000,
                      true,
                      true
                    );
                  }
                });
                this.cdr.detectChanges();
              }
            });
            break;
        }
        break;

      // Plots In Progress - Remove/Edit
      case "plotsInProgress":
        switch (modifyOption) {
          case "Remove":
            let dialogData: ConfirmationDialog = {
              headerTitle: "Confirm Plot Removal",
              confirmationMessage: `Are you sure you want to remove "${plot.title}"?`,
              textAgreeButton: "Remove",
              textCancelButton: "Cancel",
              warnNoUndo: true,
            };

            dialogRef = this.dialog.open(ConfirmationDialogComponent, {
              data: dialogData,
            });
            // Subscribe to result after Dialog is closed, and push the new
            // plot to the corresponding local array.
            dialogRef.afterClosed().subscribe((res) => {
              // Checks for null data return.
              if (!res) return;

              // If the User confirms removal.
              if (res.isConfirmed) {
                this.plotsInProgress.splice(plotIndex, 1);
                // Update plot arrays on the server and refresh the Storyboard.
                this.updateStoryBoard().subscribe((res) => {
                  if (res.status === 200) {
                    // Show confirmation snackbar message.
                    const message = `Successfully removed "${plot.title}".`;
                    this.layoutUtilsService.showActionNotification(
                      message,
                      MessageType.Create,
                      5000,
                      true,
                      true
                    );
                  } else {
                    // Show error snackbar message.
                    const message = `There was a problem removing "${plot.title}". Please try again.`;
                    this.layoutUtilsService.showActionNotification(
                      message,
                      MessageType.Create,
                      5000,
                      true,
                      true
                    );
                  }
                });
                this.cdr.detectChanges();
              }
            });
            break;

          case "Edit":
            dialogRef = this.dialog.open(EditPlotDialogComponent, {
              data: {
                plot: `${plot.title}`,
                plotTitle: plot.title,
                plotDescription: plot.description,
              },
            });

            // Subscribe to result after Dialog is closed, and push the new
            // plot to the corresponding local array.
            dialogRef.afterClosed().subscribe((updatedPlot: Plot) => {
              if (!updatedPlot) {
                return;
              } else {
                // Check if the delete is confirmed by the user, then delete the plot from the array.
                this.plotsInProgress.splice(plotIndex, 1, updatedPlot);

                // Update plot arrays on the server and refresh the Storyboard.
                this.updateStoryBoard().subscribe((res) => {
                  if (res.status === 200) {
                    // Show confirmation snackbar message.
                    const message = `Successfully updated "${updatedPlot.title}".`;
                    this.layoutUtilsService.showActionNotification(
                      message,
                      MessageType.Create,
                      5000,
                      true,
                      true
                    );
                  } else {
                    // Show error snackbar message.
                    const message = `There was an problem updating "${updatedPlot.title}". Please try again.`;
                    this.layoutUtilsService.showActionNotification(
                      message,
                      MessageType.Create,
                      5000,
                      true,
                      true
                    );
                  }
                });
                this.cdr.detectChanges();
              }
            });
            break;
        }
        break;

      // Plots Done - Remove/Edit
      case "plotsDone":
        switch (modifyOption) {
          case "Remove":
            let dialogData: ConfirmationDialog = {
              headerTitle: "Confirm Plot Removal",
              confirmationMessage: `Are you sure you want to remove "${plot.title}"?`,
              textAgreeButton: "Remove",
              textCancelButton: "Cancel",
              warnNoUndo: true,
            };

            dialogRef = this.dialog.open(ConfirmationDialogComponent, {
              data: dialogData,
            });

            // Subscribe to result after Dialog is closed, and push the new
            // plot to the corresponding local array.
            dialogRef.afterClosed().subscribe((data) => {
              // Checks for null data return.
              if (!data) return;

              // If the User confirms removal.
              if (data.isConfirmed) {
                this.plotsDone.splice(plotIndex, 1);
                // Update plot arrays on the server and refresh the Storyboard.
                this.updateStoryBoard().subscribe((res) => {
                  if (res.status === 200) {
                    // Show confirmation snackbar message.
                    const message = `Successfully removed "${plot.title}".`;
                    this.layoutUtilsService.showActionNotification(
                      message,
                      MessageType.Create,
                      5000,
                      true,
                      true
                    );
                  } else {
                    // Show error snackbar message.
                    const message = `There was an problem removing "${plot.title}". Please try again.`;
                    this.layoutUtilsService.showActionNotification(
                      message,
                      MessageType.Create,
                      5000,
                      true,
                      true
                    );
                  }
                });
                this.cdr.detectChanges();
              }
            });
            break;

          case "Edit":
            dialogRef = this.dialog.open(EditPlotDialogComponent, {
              data: {
                headerTitle: "Edit Plot",
                plotTitle: plot.title,
                plotDescription: plot.description,
              },
            });

            // Subscribe to result after Dialog is closed, and push the new
            // plot to the corresponding local array.
            dialogRef.afterClosed().subscribe((updatedPlot: Plot) => {
              if (!updatedPlot) {
                return;
              } else {
                // Check if the delete is confirmed by the user, then delete the plot from the array.
                this.plotsDone.splice(plotIndex, 1, updatedPlot);

                // Update plot arrays on the server and refresh the Storyboard.
                this.updateStoryBoard().subscribe((res) => {
                  if (res.status === 200) {
                    // Show confirmation snackbar message.
                    const message = `Successfully updated "${updatedPlot.title}".`;
                    this.layoutUtilsService.showActionNotification(
                      message,
                      MessageType.Create,
                      5000,
                      true,
                      true
                    );
                  } else {
                    // Show error snackbar message.
                    const message = `There was an problem updating "${updatedPlot.title}". Please try again.`;
                    this.layoutUtilsService.showActionNotification(
                      message,
                      MessageType.Create,
                      5000,
                      true,
                      true
                    );
                  }
                });
                this.cdr.detectChanges();
              }
            });
            break;
        }
        break;
    }
  }
}
