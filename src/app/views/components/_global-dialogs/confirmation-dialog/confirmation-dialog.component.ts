import { Component, Inject, OnInit } from "@angular/core";
// Constants
import { CONSTANTS_GLOBAL } from "../../../pages/the-compendium-pages/constants";
// MatDialog
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ConfirmationDialog } from "./_models/confirmation-dialog.model";
import { ConfirmationDialogResponse } from "./_models/confirmation-dialog-response.model";

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
  warnNoUndo: boolean;

  // Confirmation checkbox value
  isAgree: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialog
  ) {
    // Set headerTitle and buttons texts.
    this.headerTitle = data.headerTitle;
    this.confirmationMessage = data.confirmationMessage;
    this.textAgreeButton = data.textAgreeButton;
    this.textCancelButton = data.textCancelButton;
    this.warnNoUndo = data.warnNoUndo;
  }

  ngOnInit(): void {}

  onSubmit(): void {
    let payload: ConfirmationDialogResponse = {
      isConfirmed: true,
    };

    // Close the dialog, and send the payload back to the calling Component.
    this.dialogRef.close(payload);
  }
}
