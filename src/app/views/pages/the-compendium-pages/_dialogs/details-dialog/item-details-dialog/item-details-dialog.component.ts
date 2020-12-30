import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
// Utils
import { TypesUtilsService } from "../../../../../../core/_base/crud/utils/types-utils.service";

@Component({
  selector: "kt-item-details-dialog",
  templateUrl: "./item-details-dialog.component.html",
  styleUrls: ["./item-details-dialog.component.scss"],
})
export class ItemDetailsDialogComponent implements OnInit {
  dialogData: any;

  constructor(
    public dialogRef: MatDialogRef<ItemDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private utilityService: TypesUtilsService
  ) {
    // Sets the incoming data to this Component's dialogData reference.
    this.dialogData = data;
  }

  ngOnInit(): void {}

  /**
   * Lowercases first letter in the data passed.
   *
   * @param {string} data The data to format.
   * @returns The formatted string.
   */
  lowercaseFirstLetter(data: string) {
    return this.utilityService.lowercaseAllLetters(data);
  }
}
