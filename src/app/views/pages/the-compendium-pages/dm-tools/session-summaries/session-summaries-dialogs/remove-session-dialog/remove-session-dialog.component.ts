import { Component, Inject, OnInit } from "@angular/core";
// Constants
import { CONSTANTS_SESSION_SUMMARIES } from "../../constants";
// Models
import { currentUser, User } from "src/app/core/auth";
import { Session } from "src/app/core/resources/_models/dm_tools/session_summaries/session.model";
// MatDialog
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
// FormBuilder
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SessionSummariesService } from "src/app/core/resources/_services/dm-tools-services/session_summaries.service";
// State
import { AppState } from "src/app/core/reducers";
import { select, Store } from "@ngrx/store";
// RxJS
import { Observable } from "rxjs";
import { CONSTANTS_GLOBAL } from "../../../../constants";

@Component({
  selector: "kt-remove-session-dialog",
  templateUrl: "./remove-session-dialog.component.html",
  styleUrls: ["./remove-session-dialog.component.scss"],
})
export class RemoveSessionDialogComponent implements OnInit {
  // Constants
  CONFIRMATION_MESSAGE =
    CONSTANTS_SESSION_SUMMARIES.REMOVE_SESSION_SUMMARY.CONFIRMATION_MESSAGE;
  WARNING_NO_UNDO = CONSTANTS_GLOBAL.WARNINGS.NO_UNDO;

  // isDeleted flag.
  isDeleted: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<RemoveSessionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {}

  onDelete(): void {
    this.isDeleted = true;
    this.dialogRef.close(this.isDeleted);
  }
}
