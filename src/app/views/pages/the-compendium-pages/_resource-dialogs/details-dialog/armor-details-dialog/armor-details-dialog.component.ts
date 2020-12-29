import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'kt-armor-details-dialog',
  templateUrl: './armor-details-dialog.component.html',
  styleUrls: ['./armor-details-dialog.component.scss']
})
export class ArmorDetailsDialogComponent implements OnInit {

  dialogData: any;

  constructor(
    public dialogRef: MatDialogRef<ArmorDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      // Sets the incoming data to this Component's dialogData reference.
      this.dialogData = data;
      console.log(this.dialogData);
  }

  ngOnInit(): void { }

}
