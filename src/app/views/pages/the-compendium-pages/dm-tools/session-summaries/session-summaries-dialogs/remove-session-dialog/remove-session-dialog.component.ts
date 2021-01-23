import { Component, Inject, OnInit } from "@angular/core";
// Constants
import { CONSTANTS_GLOBAL } from "../../../../constants";
import { CONSTANTS_SESSION_SUMMARIES } from "../../constants";
// Services
import { LayoutUtilsService, MessageType } from "src/app/core/_base/crud";
// MatDialog
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

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
    private layoutUtilsService: LayoutUtilsService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {}

  onDelete(): void {
    this.isDeleted = true;
    this.dialogRef.close(this.isDeleted);

    // Show confirmation snackbar message.
    const message = "Session Summary successfully deleted.";
    this.layoutUtilsService.showActionNotification(
      message,
      MessageType.Create,
      5000,
      true,
      true
    );
  }
}
