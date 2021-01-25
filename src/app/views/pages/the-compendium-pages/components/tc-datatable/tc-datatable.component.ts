import { DataSource } from "@angular/cdk/table";
import { Component, Input, OnInit } from "@angular/core";
// Material
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "kt-tc-datatable",
  templateUrl: "./tc-datatable.component.html",
  styleUrls: ["./tc-datatable.component.scss"],
})
export class TcDatatableComponent implements OnInit {
  // Display data
  @Input() tableTitle: string;

  // Table data
  @Input() dataSource: MatTableDataSource<any>;
  @Input() columnsToDisplay: string[];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  /**
   * Opens Details Dialog for an element in the table.
   * @param element The element that was clicked.
   *
   * todo - switch case using typeof on the passed element to determine which details page to load?
   */
  openDetails(tableItem: any): void {
    // Pass the element object to the dialog here.
    const dialogData = tableItem;

    // Set the dialog window options here.
    const dialogOptions = {
      data: dialogData,
    };

    console.warn("tableItem");
    console.log(tableItem);

    // todo - switch case here?

    // // Opens the dialog window.
    // const dialogRef = this.dialog.open(ArmorDetailsDialogComponent, dialogOptions);

    // // Handles dialog closing - can do something when the dialog is closed.
    // dialogRef.afterClosed().subscribe((result) => {});
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
