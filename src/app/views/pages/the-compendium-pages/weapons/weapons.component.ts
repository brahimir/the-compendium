import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
// Models
import { Weapon } from "../../../../core/resources/_models/weapon.model";
// Services
import { WeaponService } from "../../../../core/resources/_services/official-services/weapons.service";
// MatTable
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog } from "@angular/material/dialog";
// Details Dialog
import { WeaponDetailsDialogComponent } from "../dialogs/details-dialog/weapon-details-dialog/weapon-details-dialog.component";

/**
 * @title Weapons table with Pagination
 */
@Component({
  selector: "kt-weapons",
  templateUrl: "./weapons.component.html",
  styleUrls: ["./weapons.component.scss", "../tc-global.scss"],
})
export class WeaponComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columnsToDisplay: any[] = [
    "name",
    "weapon_category",
    "damage",
    "range",
    "cost",
  ];

  // Datasource for MatTable
  dataSource: any;

  // Weapons
  WEAPONS_DATA: Weapon[] = [];

  constructor(
    private weaponsService: WeaponService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.updateWeapons();
  }

  ngAfterViewInit(): void {}

  /**
   * Get all Homebrew Armors from API.
   * Set up DataSource for MatTableData.
   * Set up Paginators and Sorts.
   *
   * TODO - refactor to set the datasource AFTER getting data from the service.
   */
  updateWeapons(): void {
    this.weaponsService.getAllWeapons().subscribe((equipmentData: any) => {
      equipmentData.forEach((element) => {
        this.weaponsService
          .getWeaponObject(element.url)
          .subscribe((weaponData: any) => {
            this.WEAPONS_DATA.push(weaponData);
            // Set the DataSource for MatTableData.
            this.dataSource = new MatTableDataSource<Weapon>(this.WEAPONS_DATA);

            // Set Paginators and Sorts.
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          });
      });
    });
  }

  /**
   * Opens Details Dialog for a Armor.
   * @param Armor The Armor that was clicked.
   */
  openDetails(armor: Weapon): void {
    // Pass the Armor object to the dialog here.
    const dialogData = armor;

    // Set the dialog window options here.
    const dialogOptions = {
      data: dialogData,
    };

    // Opens the dialog window.
    const dialogRef = this.dialog.open(
      WeaponDetailsDialogComponent,
      dialogOptions
    );

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
