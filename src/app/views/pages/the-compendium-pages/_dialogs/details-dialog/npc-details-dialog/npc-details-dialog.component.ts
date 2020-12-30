import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
// Utilities
import { TypesUtilsService } from "../../../../../../core/_base/crud/utils/types-utils.service";

@Component({
  selector: "kt-npc-details-dialog",
  templateUrl: "./npc-details-dialog.component.html",
  styleUrls: ["./npc-details-dialog.component.scss"],
})
export class NpcDetailsDialogComponent implements OnInit {
  dialogData: any;

  constructor(
    public dialogRef: MatDialogRef<NpcDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private utilityService: TypesUtilsService
  ) {
    // Sets the incoming data to this Component's dialogData reference.
    this.dialogData = data;
  }

  ngOnInit(): void {}

  /**
   * Utility - Capitalizes first letter in a string.
   *
   * @param {string} data The string to format.
   * @returns {string} The formatted string.
   */
  capitalizeFirstLetter(data: string): string {
    return this.utilityService.capitalizeFirstLetter(data);
  }
}
