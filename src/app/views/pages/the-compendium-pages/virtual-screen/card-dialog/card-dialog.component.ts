import { ComponentType } from "@angular/cdk/portal";
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "kt-card-dialog",
  templateUrl: "./card-dialog.component.html",
  styleUrls: ["./card-dialog.component.scss"],
})
export class CardDialogComponent implements OnInit {
  component: ComponentType<any>;

  constructor(
    public dialogRef: MatDialogRef<CardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.component = data.component;
  }

  ngOnInit(): void {}
}
