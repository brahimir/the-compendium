import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
// Models
import { Armor } from "../../../../../../core/resources/_models/armor.model";
// Services
import { ArmorsService } from "../../../../../../core/resources/_services/official-services/armors.service";
// Angular Material
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
// Dialog Component
import { ArmorDetailsDialogComponent } from "../../resource-details-dialog/armor-details-dialog/armor-details-dialog.component";

/**
 * @title Armors table with Pagination
 */
@Component({
  selector: "kt-armor",
  templateUrl: "./armor.component.html",
  styleUrls: ["./armor.component.scss"],
})
export class ArmorsComponent implements OnInit, AfterViewInit {
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

  constructor(private armorsService: ArmorsService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateArmors();
  }

  ngAfterViewInit(): void {}

  /**
   * Get all Homebrew Armors from API.
   * Set up DataSource for MatTableData.
   * Set up Paginators and Sorts.
   *
   * TODO - refactor to set the datasource AFTER getting data from the service.
   */
  updateArmors(): void {
    this.armorsService.getAllArmors().subscribe((equipmentData: any) => {
      equipmentData.forEach((element) => {
        this.armorsService
          .getArmorObject(element.url)
          .subscribe((armorData: any) => {
            this.TABLE_DATA.push(armorData);

            // Set the DataSource for MatTableData.
            this.dataSource = new MatTableDataSource<Armor>(this.TABLE_DATA);

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
  openDetails(element: Armor): void {
    // Pass the Armor object to the dialog here.
    const dialogData = element;

    // Set the dialog window options here.
    const dialogOptions = {
      data: dialogData,
    };

    // Opens the dialog window.
    const dialogRef = this.dialog.open(
      ArmorDetailsDialogComponent,
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
