import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'kt-spell-details-dialog',
  templateUrl: './spell-details-dialog.component.html',
  styleUrls: ['./spell-details-dialog.component.scss']
})
export class SpellDetailsDialogComponent implements OnInit {
  dialogData: any;

  constructor(
    public dialogRef: MatDialogRef<SpellDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      // Sets the incoming data to this Component's dialogData reference.
      this.dialogData = data;
  }

  ngOnInit(): void {
  }

}
