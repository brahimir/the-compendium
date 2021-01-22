import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// Components
import { WeaponsComponent } from "../_resource-tables/official/weapons/weapons.component";
import { ArmorsComponent } from "../_resource-tables/official/armor/armor.component";
import { NpcsComponent } from "../_resource-tables/official/npcs/npcs.component";
import { ItemsComponent } from "../_resource-tables/official/items/items.component";
import { SpellsComponent } from "../_resource-tables/official/spells/spells.component";
// MatDialog
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "kt-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  // todo -
  @Input() boxes: string[] = [];

  // MatDialog options
  dialogOptions = {};

  constructor(public router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}

  /**
   * Opens Dialogs for each component on the Dashboard.
   *
   * @param {string} windowName The Dialog window name to open.
   */
  openDialog(windowName: string): void {
    let dialogRef: any;

    switch (windowName) {
      case "weapons":
        dialogRef = this.dialog.open(WeaponsComponent, this.dialogOptions);
        break;

      case "armors":
        dialogRef = this.dialog.open(ArmorsComponent, this.dialogOptions);
        break;

      case "items":
        dialogRef = this.dialog.open(ItemsComponent, this.dialogOptions);
        break;

      case "npcs":
        dialogRef = this.dialog.open(NpcsComponent, this.dialogOptions);
        break;

      case "spells":
        dialogRef = this.dialog.open(SpellsComponent, this.dialogOptions);
        break;
    }
  }
}
