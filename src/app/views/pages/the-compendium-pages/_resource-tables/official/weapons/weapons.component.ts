import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
// Models
import { Weapon } from "../../_models/weapon.model";
// Services
import { weapons } from "./weapons.table";
// MatTable
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog } from "@angular/material/dialog";
// Details Dialog
import { WeaponDetailsDialogComponent } from "../../resource-details-dialog/weapon-details-dialog/weapon-details-dialog.component";

/**
 * @title Weapons table with Pagination
 */
@Component({
  selector: "kt-weapons",
  templateUrl: "./weapons.component.html",
  styleUrls: ["./weapons.component.scss"]
})
export class WeaponsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columnsToDisplay: any[] = ["name", "weapon_category", "damage", "range", "cost"];

  // Datasource for MatTable
  dataSource: any;

  // Weapons
  TABLE_DATA: Weapon[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateWeapons();
  }

  ngAfterViewInit(): void {
    // Set the DataSource for MatTableData.
    this.dataSource = new MatTableDataSource<Weapon>(this.TABLE_DATA);

    // Set Paginators and Sorts.
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Update weapons
   */
  updateWeapons(): void {
    this.TABLE_DATA = weapons;
  }

  /**
   * Opens Details Dialog for a Weapon.
   * @param Armor The Weapon that was clicked.
   */
  openDetails(element: Weapon): void {
    // Pass the Armor object to the dialog here.
    const dialogData = element;

    // Set the dialog window options here.
    const dialogOptions = {
      data: dialogData
    };

    // Opens the dialog window.
    const dialogRef = this.dialog.open(WeaponDetailsDialogComponent, dialogOptions);

    // Handles dialog closing - can do something when the dialog is closed.
    dialogRef.afterClosed().subscribe((result) => {});
  }

  /**
   * Filters the MatTable based on a passed value.
   * @param filterValue The values to filter for in the table.
   */
  applyFilter(filterValue: string) {
    // Remove whitespace
    filterValue = filterValue.trim();

    // MatTableDataSource defaults to lowercase matches
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
