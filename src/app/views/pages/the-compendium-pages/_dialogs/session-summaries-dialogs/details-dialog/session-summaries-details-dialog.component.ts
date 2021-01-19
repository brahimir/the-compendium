import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "session-summaries-details-dialog.component.ts",
  templateUrl: "./session-summaries-details-dialog.component.html",
  styleUrls: ["./session-summaries-details-dialog.component.scss"],
})
export class SessionSummariesDialogComponent implements OnInit {
  dialogData: any;

  constructor(
    public dialogRef: MatDialogRef<SessionSummariesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    // Sets the incoming data to this Component's dialogData reference.
    this.dialogData = data;
  }

  ngOnInit(): void {}
}
