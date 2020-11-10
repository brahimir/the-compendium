import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'kt-item-details-dialog',
  templateUrl: './item-details-dialog.component.html',
  styleUrls: ['./item-details-dialog.component.scss']
})
export class ItemDetailsDialogComponent implements OnInit {
  dialogData: any;

  constructor(
    public dialogRef: MatDialogRef<ItemDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      // Sets the incoming data to this Component's dialogData reference.
      this.dialogData = data;
  }

  ngOnInit(): void { }

}
