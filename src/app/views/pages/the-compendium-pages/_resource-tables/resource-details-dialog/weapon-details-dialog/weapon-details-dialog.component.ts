import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
// Services
import { FormattingService } from "src/app/core/resources/_services/formatting.service";

@Component({
  selector: "kt-weapon-details-dialog",
  templateUrl: "./weapon-details-dialog.component.html",
  styleUrls: ["./weapon-details-dialog.component.scss"],
})
export class WeaponDetailsDialogComponent implements OnInit {
  dialogData: any;

  constructor(
    public dialogRef: MatDialogRef<WeaponDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formattingService: FormattingService
  ) {
    // Sets the incoming data to this Component's dialogData reference.
    this.dialogData = data;
  }

  ngOnInit(): void {}

  lowercaseFirstLetter(data: string): string {
    return this.formattingService.lowercaseFirstLetter(data);
  }
}
