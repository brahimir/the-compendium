import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// Constants
import { TC_CONSTANTS } from "src/environments/app-secrets";
// Components
import { WeaponsComponent } from "../_resource-tables/official/weapons/weapons.component";
import { ArmorsComponent } from "../_resource-tables/official/armor/armor.component";
import { NpcsComponent } from "../_resource-tables/official/npcs/npcs.component";
import { ItemsComponent } from "../_resource-tables/official/items/items.component";
import { SpellsComponent } from "../_resource-tables/official/spells/spells.component";
// MatDialog
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";

@Component({
  selector: "kt-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  // Dashboard Components Array
  DASHBOARD_COMPONENTS = TC_CONSTANTS.DASHBOARD_COMPONENTS;

  constructor(public router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}

  getUserDashboard(): Observable<any> {
    
    return;
  }

  /**
   * Opens Dialogs for each component on the Dashboard.
   *
   * @param {string} windowName The Dialog window name to open.
   */
  openDialog(windowName: string): void {
    let dialogRef: any;

    switch (windowName) {
      case "weapons":
        dialogRef = this.dialog.open(WeaponsComponent);
        break;

      case "armors":
        dialogRef = this.dialog.open(ArmorsComponent);
        break;

      case "items":
        dialogRef = this.dialog.open(ItemsComponent);
        break;

      case "npcs":
        dialogRef = this.dialog.open(NpcsComponent);
        break;

      case "spells":
        dialogRef = this.dialog.open(SpellsComponent);
        break;
    }
  }
}
