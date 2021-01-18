import { Component, OnInit, Inject } from "@angular/core";
// Constants
import { CONSTANTS_STORYBOARD } from "../../../dm-tools/storyboard/constants";
// MatDialog
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "kt-remove-plot-dialog",
  templateUrl: "./remove-plot-dialog.component.html",
  styleUrls: ["./remove-plot-dialog.component.scss"],
})
export class RemovePlotDialogComponent implements OnInit {
  // Constants
  CONFIRMATION_MESSAGE = CONSTANTS_STORYBOARD.REMOVE_PLOT.CONFIRMATION_MESSAGE;
  WARNING_MESSAGE = CONSTANTS_STORYBOARD.REMOVE_PLOT.WARNING_MESSAGE;

  // Public properties
  plotTitle: string;
  plotDescription: string;

  constructor(
    public dialogRef: MatDialogRef<RemovePlotDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    // Set the title for the Dialog.
    this.plotTitle = data.plotTitle;
    this.plotDescription = data.plotDescription;
  }

  ngOnInit(): void {}

  onDelete(): void {
    let payload: any = {
      isConfirmedDelete: true,
    };

    // Close the dialog, and send the payload back to the StoryboardComponent.
    this.dialogRef.close(payload);
  }
}
