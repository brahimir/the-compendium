import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
// Models
import { Armor } from "../../../../../../core/resources/_models/armor.model";
// Services
import { HomebrewArmorsService } from "../../../../../../core/resources/_services/homebrew-services/homebrew-armors.service";
// MatTable
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
// Details Dialog
import { ArmorDetailsDialogComponent } from "../../resource-details-dialog/armor-details-dialog/armor-details-dialog.component";

@Component({
  selector: "kt-homebrew-armor",
  templateUrl: "../../official/armor/armor.component.html",
  styleUrls: ["./homebrew-armor.component.scss"],
})
export class HomebrewArmorsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columnsToDisplay: any[] = [
    "name",
    "armor_category",
    "armor_class.base",
    "stealth_disadvantage",
    "str_minimum",
    "cost",
  ];

  // Datasource for MatTable
  dataSource: any;

  // Armors
  TABLE_DATA: Armor[] = [];

  constructor(private homebrewArmorsService: HomebrewArmorsService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateHomebrewArmors();
  }

  ngAfterViewInit(): void {}

  /**
   * Get all Homebrew Armors from API.
   * Set up DataSource for MatTableData.
   * Set up Paginators and Sorts.
   */
  updateHomebrewArmors(): void {
    this.homebrewArmorsService.getAll().subscribe((data: any) => {
      this.TABLE_DATA = data;

      // Set the DataSource for MatTableData.
      this.dataSource = new MatTableDataSource<Armor>(this.TABLE_DATA);

      // Set Paginators and Sorts.
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  /**
   * Opens Details Dialog for a Armor.
   * @param element The Armor that was clicked.
   */
  openDetails(element: Armor): void {
    // Pass the Armor object to the dialog here.
    const dialogData = element;

    // Set the dialog window options here.
    const dialogOptions = {
      data: dialogData,
    };

    // Opens the dialog window.
    const dialogRef = this.dialog.open(ArmorDetailsDialogComponent, dialogOptions);

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
