import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
// Services
import { FormattingService } from "src/app/core/resources/_services/formatting.service";

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
    private formattingService: FormattingService
  ) {
    // Sets the incoming data to this Component's dialogData reference.
    this.dialogData = data;
  }

  ngOnInit(): void {}

  calcAbilityModifier(abilityScore: number): string {
    let result: any = Math.floor((abilityScore - 10) / 2);

    if (result >= 0) return (result = "+" + result);
    else return result;
  }

  /**
   * Utility - Capitalizes first letter in a string.
   *
   * @param {string} data The string to format.
   * @returns {string} The formatted string.
   */
  capitalizeFirstLetter(data: string): string {
    return this.formattingService.capitalizeFirstLetter(data);
  }
}
