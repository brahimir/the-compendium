import { Component, OnInit } from "@angular/core";
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
 * Story plot model
 */
export class StoryPlot {
  title: string;
  description: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}

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
  plotsMain: StoryPlot[] = [];
  plotsInProgress: StoryPlot[] = [];
  plotsDone: StoryPlot[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // todo - I think this is getting a "snapshot" of the user - need to explicitly call the API to get
    // todo - up-to-date information on the Storyboard plots for the user.
    this.user$ = this.store.pipe(select(currentUser));
    this.user$.subscribe((data) => {
      let plots_main: any = data.userSettings.storyboard.plotsMain;
      let plots_in_progress: any = data.userSettings.storyboard.plotsInProgress;
      let plots_done: any = data.userSettings.storyboard.plotsDone;

      plots_main.forEach((element) => {
        this.plotsMain.push(new StoryPlot(element.title, element.description));
      });

      plots_in_progress.forEach((element) => {
        this.plotsInProgress.push(
          new StoryPlot(element.title, element.description)
        );
      });

      plots_done.forEach((element) => {
        this.plotsDone.push(new StoryPlot(element.title, element.description));
      });
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
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  // todo
  updateStoryBoard(): void {}
}
