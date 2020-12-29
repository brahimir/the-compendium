import { Component, OnInit } from '@angular/core';
// CdkDragDrop
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
// RxJS
import { Observable } from 'rxjs';
// NGRX
import { select, Store } from '@ngrx/store';
// State
import { AppState } from 'src/app/core/reducers';
import { currentUser, User } from 'src/app/core/auth';

/**
 * Storyboard Kanban Board.
 *
 * @export
 * @class StoryboardComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'kt-storyboard',
  templateUrl: './storyboard.component.html',
  styleUrls: ['./storyboard.component.scss']
})
export class StoryboardComponent implements OnInit {
  // Public properties
  $user: Observable<User>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.$user = this.store.pipe(select(currentUser));
  }

  // todo:: need to figure out how to access the arrays Plot Objects to assign new properties with regards to their position.
  // todo:: ERROR TypeError: Cannot assign to read only property '0' of object '[object Array]'
  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }

    else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
