import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
// Models
import { Spell } from "../../_models/spell.model";
// Services
import { spells } from "./spells.table";
// Angular Material
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
// Dialog Component
import { SpellDetailsDialogComponent } from "../../resource-details-dialog/spell-details-dialog/spell-details-dialog.component";

// import { saveAs } from "file-saver";

@Component({
  selector: "kt-spells",
  templateUrl: "./spells.component.html",
  styleUrls: ["./spells.component.scss"]
})
export class SpellsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columnsToDisplay: any[] = ["name", "level", "classes", "casting_time", "range"];

  // Datasource for MatTable
  dataSource: any;

  // Spells
  TABLE_DATA: Spell[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateSpells();
  }

  ngAfterViewInit(): void {
    // Set the DataSource for MatTableData.
    this.dataSource = new MatTableDataSource<Spell>(this.TABLE_DATA);

    // Set Paginators and Sorts.
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  updateSpells(): void {
    this.TABLE_DATA = spells;
  }

  /**
   * Opens Details Dialog for a Spell.
   * @param Armor The Spell that was clicked.
   */
  openDetails(element: Spell): void {
    // Pass the Spell object to the dialog here.
    const dialogData = element;

    // Set the dialog window options here.
    const dialogOptions = {
      data: dialogData
    };

    // Opens the dialog window.
    const dialogRef = this.dialog.open(SpellDetailsDialogComponent, dialogOptions);

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
