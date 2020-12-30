import { CdkDragEnd } from "@angular/cdk/drag-drop";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// Components
import { WeaponComponent } from "../_resource-tables/official/weapons/weapons.component";
import { ArmorComponent } from "../_resource-tables/official/armor/armor.component";
import { NpcsComponent } from "../_resource-tables/official/npcs/npcs.component";
import { ItemsComponent } from "../_resource-tables/official/items/items.component";
import { SpellsComponent } from "../_resource-tables/official/spells/spells.component";
// MatTable
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "kt-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  // todo -
  @Input() boxes: string[] = [];

  // Page routes.
  routeWeapons: string = "/weapons";
  routeArmor: string = "/armor";
  routeItems: string = "/items";
  routeNPCs: string = "/npcs";
  routeSpells: string = "/spells";

  // Global MatDialog options
  dialogOptions = {
    minWidth: 1450,
    maxWidth: 1450,
    minHeight: 800,
    maxHeight: 800,
  };

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

  openWeapons(): void {
    // Opens the dialog window.
    const dialogRef = this.dialog.open(WeaponComponent, this.dialogOptions);

    // Handles dialog closing - can do something when the dialog is closed.
    dialogRef.afterClosed().subscribe((result) => {});
  }

  openArmors(): void {
    // Opens the dialog window.
    const dialogRef = this.dialog.open(ArmorComponent, this.dialogOptions);

    // Handles dialog closing - can do something when the dialog is closed.
    dialogRef.afterClosed().subscribe((result) => {});
  }

  openNpcs(): void {
    // Opens the dialog window.
    const dialogRef = this.dialog.open(NpcsComponent, this.dialogOptions);

    // Handles dialog closing - can do something when the dialog is closed.
    dialogRef.afterClosed().subscribe((result) => {});
  }

  openItems(): void {
    // Opens the dialog window.
    const dialogRef = this.dialog.open(ItemsComponent, this.dialogOptions);

    // Handles dialog closing - can do something when the dialog is closed.
    dialogRef.afterClosed().subscribe((result) => {});
  }

  openSpells(): void {
    // Opens the dialog window.
    const dialogRef = this.dialog.open(SpellsComponent, this.dialogOptions);

    // Handles dialog closing - can do something when the dialog is closed.
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
