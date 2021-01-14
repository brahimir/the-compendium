import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// Components
import { WeaponComponent } from "../_resource-tables/official/weapons/weapons.component";
import { ArmorComponent } from "../_resource-tables/official/armor/armor.component";
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

  ngOnInit(): void {
    // todo:: working on saving the draggable box states in local storage.
    let myStorage = window.localStorage;
    this.boxes.push(myStorage.getItem("window"));
  }

  openWindow(route: string) {
    // Converts the route into a string that can be used
    // with the window.open() function.
    const url = this.router.serializeUrl(this.router.createUrlTree([route]));

    window.open(url, "_blank");
  }

  // todo:: working on saving the draggable box states in local storage.
  dragEnded(event: any) {
    let boxCoords: string;

    boxCoords = event.pointerPosition;
    let myStorage = window.localStorage;
    myStorage.setItem("box", boxCoords);
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
        dialogRef = this.dialog.open(WeaponComponent, this.dialogOptions);
        break;

      case "armors":
        dialogRef = this.dialog.open(ArmorComponent, this.dialogOptions);
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
