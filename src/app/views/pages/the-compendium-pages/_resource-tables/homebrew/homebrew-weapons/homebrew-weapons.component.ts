import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
// Models
import { Weapon } from "../../../../../../core/resources/_models/weapon.model";
// Services
import { HomebrewWeaponsService } from "../../../../../../core/resources/_services/homebrew-services/homebrew-weapons.service";
// MatTable
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
// Details Dialog
import { WeaponDetailsDialogComponent } from "../../resource-details-dialog/weapon-details-dialog/weapon-details-dialog.component";

@Component({
  selector: "kt-homebrew-weapons",
  templateUrl: "../../official/weapons/weapons.component.html",
  styleUrls: ["./homebrew-weapons.component.scss"],
})
export class HomebrewWeaponsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columnsToDisplay: any[] = ["name", "weapon_category", "damage", "range", "cost"];

  // Datasource for MatTable
  dataSource: any;

  // Weapons
  TABLE_DATA: Weapon[] = [];

  constructor(private homebrewWeaponsService: HomebrewWeaponsService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateHomebrewWeapons();
  }

  ngAfterViewInit(): void {}

  /**
   * Get all Homebrew Weapons from API.
   * Set up DataSource for MatTableData.
   * Set up Paginators and Sorts.
   */
  updateHomebrewWeapons(): void {
    this.homebrewWeaponsService.getAll().subscribe((data: any) => {
      this.TABLE_DATA = data;

      // Set the DataSource for MatTableData.
      this.dataSource = new MatTableDataSource<Weapon>(this.TABLE_DATA);

      // Set Paginators and Sorts.
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  /**
   * Opens Details Dialog for a Weapon.
   * @param weapon The weapon that was clicked.
   */
  openDetails(element: Weapon): void {
    // Pass the Armor object to the dialog here.
    const dialogData = element;

    // Set the dialog window options here.
    const dialogOptions = {
      data: dialogData,
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
