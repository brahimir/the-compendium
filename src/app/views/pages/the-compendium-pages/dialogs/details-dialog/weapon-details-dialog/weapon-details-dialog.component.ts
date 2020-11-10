import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'kt-weapon-details-dialog',
  templateUrl: './weapon-details-dialog.component.html',
  styleUrls: ['./weapon-details-dialog.component.scss']
})
export class WeaponDetailsDialogComponent implements OnInit {
  
  dialogData: any;

  constructor(
    public dialogRef: MatDialogRef<WeaponDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      // Sets the incoming data to this Component's dialogData reference.
      this.dialogData = data;
      console.log(this.dialogData);
  }

  ngOnInit(): void {
  }

}
