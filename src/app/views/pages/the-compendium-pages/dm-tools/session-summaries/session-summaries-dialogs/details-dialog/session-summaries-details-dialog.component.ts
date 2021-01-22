import { Component, Inject, OnInit } from "@angular/core";
// Models
import { currentUser, User } from "src/app/core/auth";
import { Session } from "../../../../../../../core/resources/_models/dm_tools/session_summaries/session.model";
// Services
import { SessionSummariesService } from "src/app/views/pages/the-compendium-pages/dm-tools/session-summaries/session-summaries.service";
// MatDialog
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
// Dialogs
import { EditSessionDialogComponent } from "../edit-session-dialog/edit-session-dialog.component";
import { RemoveSessionDialogComponent } from "../remove-session-dialog/remove-session-dialog.component";
// RxJS
import { Observable } from "rxjs";
// State
import { select, Store } from "@ngrx/store";
import { AppState } from "src/app/core/reducers";

@Component({
  selector: "session-summaries-details-dialog.component.ts",
  templateUrl: "./session-summaries-details-dialog.component.html",
  styleUrls: ["./session-summaries-details-dialog.component.scss"],
})
export class SessionSummariesDetailsDialogComponent implements OnInit {
  // Session Public properties
  sessionData: Session;
  sessionIndex: number;

  // User properties
  user$: Observable<User>;
  userId: string;

  // Data to pass to Edit and Remove Dialogs.
  dialogData: any;

  constructor(
    public dialogRef: MatDialogRef<SessionSummariesDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialog: MatDialog,
    private apiService: SessionSummariesService,
    private store: Store<AppState>
  ) {
    // Sets the incoming data to this Component's data references.
    this.sessionData = data.data;
    this.sessionIndex = data.index;

    // Set dialogData to pass to Edit and Remove Dialogs.
    this.dialogData = {
      data: this.sessionData,
      index: this.sessionIndex,
    };
  }

  ngOnInit(): void {
        // todo - This is getting a "snapshot" of the user - on refresh, the User Observable doesn't have 
    // todo - "data" to subscribe to - need to fix this.
    this.user$ = this.store.pipe(select(currentUser));
    this.user$.subscribe((user) => {
      // Get the User's ID
      this.userId = user._id;
    });
  }

  /**
   * Opens the EditSessionDialogComponent to edit a Session Summary.
   */
  editSession(): void {
    // Set the dialogOptions.
    const dialogOptions = {
      data: this.dialogData,
    };

    // Opens the dialog window.
    const dialogRef = this.dialog.open(
      EditSessionDialogComponent,
      dialogOptions
    );

    // Handles dialog closing - can do something when the dialog is closed.
    dialogRef.afterClosed().subscribe((payload) => {
      if (!payload) {
        return;
      } else {
        this.apiService
          .getSessionSummaries(this.userId)
          .subscribe((data: User) => {
            let userSessionSummaries = data.userSettings.dmTools.sessions;

            // Edit the Session Summary
            let newArray = userSessionSummaries;
            newArray.splice(this.sessionIndex, 1, payload);

            // Update User Session Summaries on server.
            this.apiService
              .updateSessionSummaries(this.userId, newArray)
              .subscribe((data) => {});

            this.dialog.closeAll();
          });
      }
    });
  }

  /**
   * Opens the RemoveSessionDialogComponent to remove a Session Summary.
   */
  removeSession(): void {
    // Set the dialogOptions.
    const dialogOptions = {
      data: this.dialogData,
    };

    // Opens the dialog window.
    const dialogRef = this.dialog.open(
      RemoveSessionDialogComponent,
      dialogOptions
    );

    // Handles dialog closing - can do something when the dialog is closed.
    dialogRef.afterClosed().subscribe((isDeleted: boolean) => {
      if (!isDeleted) {
        return;
      } else {
        this.apiService
          .getSessionSummaries(this.userId)
          .subscribe((data: User) => {
            let userSessionSummaries = data.userSettings.dmTools.sessions;

            // Edit the Session Summary
            let newArray = userSessionSummaries;
            newArray.splice(this.sessionIndex, 1);

            // Update User Session Summaries on server.
            this.apiService
              .updateSessionSummaries(this.userId, newArray)
              .subscribe((data) => {});

            this.dialog.closeAll();
          });
      }
    });
  }
}
