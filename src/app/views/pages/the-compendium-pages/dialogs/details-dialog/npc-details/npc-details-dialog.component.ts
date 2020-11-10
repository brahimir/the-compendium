import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'kt-npc-details-dialog',
  templateUrl: './npc-details-dialog.component.html',
  styleUrls: ['./npc-details-dialog.component.scss']
})
export class NpcDetailsDialogComponent implements OnInit {

  dialogData: any;

  constructor(
    public dialogRef: MatDialogRef<NpcDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      // Sets the incoming data to this Component's dialogData reference.
      this.dialogData = data;
  }
  
  ngOnInit(): void { }

}
