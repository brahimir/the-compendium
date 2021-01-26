import { Component, Inject, OnInit } from "@angular/core";
// Constants
import { CONSTANTS_GLOBAL } from "../../constants";
// MatDialog
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "kt-confirmation-dialog",
  templateUrl: "./confirmation-dialog.component.html",
  styleUrls: ["./confirmation-dialog.component.scss"],
})
export class ConfirmationDialogComponent implements OnInit {
  // Constants
  WARNING_NO_UNDO = CONSTANTS_GLOBAL.WARNINGS.NO_UNDO;

  // Public Properties
  headerTitle: string;
  confirmationMessage: string;
  textAgreeButton: string;
  textCancelButton: string;
  isActionUndo: boolean;

  // Confirmation checkbox value
  isAgree: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    // Set headerTitle and buttons texts.
    this.headerTitle = data.headerTitle;
    this.confirmationMessage = data.confirmationMessage;
    this.textAgreeButton = data.textAgreeButton;
    this.textCancelButton = data.textCancelButton;
    this.isActionUndo = data.isActionUndo;
  }

  ngOnInit(): void {}

  onSubmit(): void {
    let payload: any = {
      isConfirmed: true,
    };

    // Close the dialog, and send the payload back to the calling Component.
    this.dialogRef.close(payload);
  }
}
