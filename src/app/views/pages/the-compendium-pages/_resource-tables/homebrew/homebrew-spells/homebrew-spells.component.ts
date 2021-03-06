import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
// Models
import { Spell } from "../../../../../../views/pages/the-compendium-pages/_resource-tables/_models/spell.model";
// Services
import { HomebrewSpellsService } from "../../../../../../core/resources/_services/homebrew-services/homebrew-spells.service";
// MatTable
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
// Details Dialog
import { SpellDetailsDialogComponent } from "../../resource-details-dialog/spell-details-dialog/spell-details-dialog.component";

@Component({
  selector: "kt-homebrew-spells",
  templateUrl: "../../official/spells/spells.component.html",
  styleUrls: ["./homebrew-spells.component.scss"]
})
export class HomebrewSpellsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columnsToDisplay: any[] = ["name", "level", "classes", "casting_time", "range"];

  // Datasource for MatTable
  dataSource: any;

  // Weapons
  TABLE_DATA: Spell[] = [];

  constructor(private homebrewWeaponsService: HomebrewSpellsService, public dialog: MatDialog) {}

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
      this.dataSource = new MatTableDataSource<Spell>(this.TABLE_DATA);

      // Set Paginators and Sorts.
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  /**
   * Opens Details Dialog for a Spell.
   * @param element The Spell that was clicked.
   */
  openDetails(element: Spell): void {
    // Pass the Armor object to the dialog here.
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
