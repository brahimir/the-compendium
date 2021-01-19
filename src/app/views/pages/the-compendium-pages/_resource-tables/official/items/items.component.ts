import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
// Models
import { Item } from "../../../../../../core/resources/_models/item.model";
// Services
import { ItemsService } from "../../../../../../core/resources/_services/official-services/items.service";
// Angular Material
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
// Dialog Component
import { ItemDetailsDialogComponent } from "../../resource-details-dialog/item-details-dialog/item-details-dialog.component";

/**
 * @title Items table with Pagination
 */
@Component({
  selector: "kt-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"],
})
export class ItemsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columnsToDisplay: any[] = [
    "name", 
    "weight",
    "cost"
  ];

  // Datasource for MatTable
  dataSource: any;

  // Items
  TABLE_DATA: Item[] = [];

  constructor(private itemsService: ItemsService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateItems();
  }

  ngAfterViewInit(): void {}

  /**
   * Get all Homebrew Items from API.
   * Set up DataSource for MatTableData.
   * Set up Paginators and Sorts.
   *
   * TODO - refactor to set the datasource AFTER getting data from the service.
   */
  updateItems(): void {
    this.itemsService.getAllEquipment().subscribe((equipmentData: any) => {
      this.itemsService.getAllMagicItems().subscribe((magicItemsData: any) => {
        equipmentData.push(...magicItemsData);
        
        let itemData = equipmentData;

        itemData.forEach((element) => {
          this.itemsService
            .getItemObject(element.url)
            .subscribe((itemData: any) => {
              this.TABLE_DATA.push(itemData);

              // Set the DataSource for MatTableData.
              this.dataSource = new MatTableDataSource<Item>(this.TABLE_DATA);

              // Set Paginators and Sorts.
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            });
        });
      });
    });
  }

  /**
   * Opens Details Dialog for an Item.
   * @param element The Item that was clicked.
   */
  openDetails(element: Item): void {
    // Pass the Armor object to the dialog here.
    const dialogData = element;

    // Set the dialog window options here.
    const dialogOptions = {
      data: dialogData,
    };

    // Opens the dialog window.
    const dialogRef = this.dialog.open(
      ItemDetailsDialogComponent,
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
