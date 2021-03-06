import { Component, OnInit } from "@angular/core";
// MatDialog
import { MatDialog } from "@angular/material/dialog";
// Dialog Components
import { CreateWeaponDialogComponent } from "../create/create-dialog/create-weapon-dialog/create-weapon-dialog.component";
import { CreateArmorDialogComponent } from "../create/create-dialog/create-armor-dialog/create-armor-dialog.component";
import { CreateItemDialogComponent } from "../create/create-dialog/create-item-dialog/create-item-dialog.component";
import { CreateNpcDialogComponent } from "../create/create-dialog/create-npc-dialog/create-npc-dialog.component";
import { CreateSpellDialogComponent } from "../create/create-dialog/create-spell-dialog/create-spell-dialog.component";
import { CreateSessionDialogComponent } from "../create/create-dialog/create-session-dialog/create-session-dialog.component";

@Component({
  selector: "kt-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {
  // MatDialog options
  dialogOptions = {};

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  /**
   * Opens a dialog to create an entity.
   * todo - Handle display if the weapon was submitted successfully or not.
   *
   * @param {string} dialog String representation of the entity type the DM wants to create.
   */
  openCreateDialog(dialog: string): void {
    let dialogRef: any;

    switch (dialog) {
      // Homebrew
      case "weapon":
        dialogRef = this.dialog.open(
          CreateWeaponDialogComponent,
          this.dialogOptions
        );

        // todo - Handle display if the weapon was submitted successfully or not.
        dialogRef.afterClosed().subscribe((result) => {});
        break;

      case "armor":
        dialogRef = this.dialog.open(
          CreateArmorDialogComponent,
          this.dialogOptions
        );
        break;

      case "item":
        dialogRef = this.dialog.open(
          CreateItemDialogComponent,
          this.dialogOptions
        );
        break;

      case "npc":
        dialogRef = this.dialog.open(
          CreateNpcDialogComponent,
          this.dialogOptions
        );
        break;

      case "spell":
        dialogRef = this.dialog.open(
          CreateSpellDialogComponent,
          this.dialogOptions
        );
        break;

      // Adventure
      case "session":
        dialogRef = this.dialog.open(
          CreateSessionDialogComponent,
          this.dialogOptions
        );
        break;
    }
  }
}
