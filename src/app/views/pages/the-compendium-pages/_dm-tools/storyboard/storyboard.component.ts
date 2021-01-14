import { Component, OnInit } from "@angular/core";
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
  // Public properties
  user$: Observable<User>;
  userId: string;

  // Storyboard Plots
  plotsMain: any[];
  plotsInProgress: any[];
  plotsDone: any[];

  constructor(
    private store: Store<AppState>,
    private apiService: StoryboardService
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
}
