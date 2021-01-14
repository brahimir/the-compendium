import { Component, OnInit } from "@angular/core";
// Constants
import { CONSTANTS_STORYBOARD } from "./constants";
// Models
import { Plot } from "src/app/core/resources/_models/dm_tools/storyboard/storyboard.model";
// Services
import { StoryboardService } from "src/app/core/resources/_services/dm-tools-services/storyboard.service";
// CdkDragDrop
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
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
import { AddPlotDialogComponent } from "../../_dialogs/storyboard-dialogs/add-plot-dialog/add-plot-dialog.component";
import { RemovePlotDialogComponent } from "../../_dialogs/storyboard-dialogs/remove-plot-dialog/remove-plot-dialog.component";
import { EditPlotDialogComponent } from "../../_dialogs/storyboard-dialogs/edit-plot-dialog/edit-plot-dialog.component";

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

  // Storyboard Plots
  plotsMain: Object[];
  plotsInProgress: Object[];
  plotsDone: Object[];

  constructor(
    private store: Store<AppState>,
    private apiService: StoryboardService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // todo - This is getting a "snapshot" of the user - need to explicitly call the API to get
    // todo - up-to-date information on the Storyboard plots for the user.
    this.user$ = this.store.pipe(select(currentUser));
    this.user$.subscribe((data) => {
      this.userId = data._id;
    });
    this.refreshStoryboard().subscribe((data) => {
      this.plotsMain = data.userSettings.storyboard.plotsMain;
      this.plotsInProgress = data.userSettings.storyboard.plotsInProgress;
      this.plotsDone = data.userSettings.storyboard.plotsDone;
    });
  }

  /**
   * Handles the movement of array elements for the DragDrop.
   *
   * @param {CdkDragDrop<string[]>} event The drag/drop event.
   */
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      // Update the user's storyboard on the server.
      this.updateStoryBoard();
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      // Update the user's storyboard on the server.
      this.updateStoryBoard();
    }
  }

  /**
   * Gets the most current version of the user's Storyboard.
   *
   * @returns {Observable<any>} Resulting Storyboard.
   */
  refreshStoryboard(): Observable<any> {
    return this.apiService.getStoryboard(this.userId);
  }

  /**
   * Updates the user's Storyboard on the server.
   *
   * @returns {Observable<any>} The resulting Storyboard.
   */
  updateStoryBoard(): void {
    let bodyStoryboard = {
      plotsMain: this.plotsMain,
      plotsInProgress: this.plotsInProgress,
      plotsDone: this.plotsDone,
    };

    this.apiService
      .updateStoryboard(this.userId, bodyStoryboard)
      .subscribe((data) => {});
  }

  /**
   * Adds a plot to the corresponding array column.
   *
   * @param {string} plotColumn The array column to add the plot to.
   */
  addStoryboardPlot(plotColumn: string): void {
    let dialogRef: any;

    switch (plotColumn) {
      case "plotsMain":
        // Open the Dialog.
        dialogRef = this.dialog.open(AddPlotDialogComponent, {
          data: { title: "Create a Main Plot" },
        });

        // Subscribe to result after Dialog is closed, and push the new
        // plot to the corresponding local array.
        dialogRef.afterClosed().subscribe((result) => {
          if (!result) {
            return;
          } else {
            this.plotsMain.push(result);

            // Update plot arrays on the server and refresh the Storyboard.
            this.updateStoryBoard();
            this.refreshStoryboard();
            this.cdr.detectChanges();
          }
        });
        break;

      case "plotsInProgress":
        // Open the Dialog.
        dialogRef = this.dialog.open(AddPlotDialogComponent, {
          data: { title: "Create a Plot in Progress" },
        });

        // Subscribe to result after Dialog is closed, and push the new
        // plot to the corresponding local array.
        dialogRef.afterClosed().subscribe((result) => {
          if (!result) {
            return;
          } else {
            this.plotsInProgress.push(result);

            // Update plot arrays on the server and refresh the Storyboard.
            this.updateStoryBoard();
            this.refreshStoryboard();
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
  modifyStoryboardPlot(
    plotColumn: string,
    modifyOption: string,
    plot: any,
    plotIndex: number
  ): void {
    let dialogRef: any;

    switch (plotColumn) {
      case "plotsMain":
        switch (modifyOption) {
          case "Remove":
            dialogRef = this.dialog.open(RemovePlotDialogComponent, {
              data: {
                plotTitle: plot.title,
                plotDescription: plot.description,
              },
            });

            // Subscribe to result after Dialog is closed, and push the new
            // plot to the corresponding local array.
            dialogRef.afterClosed().subscribe((result) => {
              if (!result) {
                return;
              } else {
                // Check if the delete is confirmed by the user, then delete the plot from the array.
                if (result.isConfirmedDelete) {
                  this.plotsMain.splice(plotIndex, 1);
                } else {
                  return;
                }

                // Update plot arrays on the server and refresh the Storyboard.
                this.updateStoryBoard();
                this.refreshStoryboard();
                this.cdr.detectChanges();
              }
            });
            break;

          case "Edit":
            dialogRef = this.dialog.open(EditPlotDialogComponent, {
              data: {
                plotTitle: plot.title,
                plotDescription: plot.description,
              },
            });
            break;
        }
        break;

      case "plotsInProgress":
        switch (modifyOption) {
          case "Remove":
            dialogRef = this.dialog.open(RemovePlotDialogComponent, {
              data: {
                plotTitle: plot.title,
                plotDescription: plot.description,
              },
            });

            // Subscribe to result after Dialog is closed, and push the new
            // plot to the corresponding local array.
            dialogRef.afterClosed().subscribe((result) => {
              if (!result) {
                return;
              } else {
                // Check if the delete is confirmed by the user, then delete the plot from the array.
                if (result.isConfirmedDelete) {
                  this.plotsInProgress.splice(plotIndex, 1);
                } else {
                  return;
                }

                // Update plot arrays on the server and refresh the Storyboard.
                this.updateStoryBoard();
                this.refreshStoryboard();
                this.cdr.detectChanges();
              }
            });
            break;

          case "Edit":
            dialogRef = this.dialog.open(EditPlotDialogComponent, {
              data: {
                plotTitle: plot.title,
                plotDescription: plot.description,
              },
            });
            break;
        }
        break;
    }

    // todo - this.updateStoryBoard() after adding a plot to it's corresponding array.
  }
}
