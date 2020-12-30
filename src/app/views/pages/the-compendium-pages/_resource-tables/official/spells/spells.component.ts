import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
// Models
import { Spell } from "src/app/core/resources/_models/spell.model";
// Services
import { SpellService } from "../../../../../../core/resources/_services//official-services/spells.service";
// Angular Material
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
// Dialog Component
import { SpellDetailsDialogComponent } from "../../../_dialogs/details-dialog/spell-details-dialog/spell-details-dialog.component";

@Component({
  selector: "kt-spells",
  templateUrl: "./spells.component.html",
  styleUrls: ["./spells.component.scss"],
})
export class SpellsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columnsToDisplay: any[] = [
    "name",
    "level",
    "classes",
    "casting_time",
    "range",
  ];

  // Datasource for MatTable
  dataSource: any;

  // Spells
  TABLE_DATA: Spell[] = [];

  constructor(private spellsService: SpellService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateSpells();
  }

  ngAfterViewInit(): void {}

  /**
   * Get all Homebrew Spells from API.
   * Set up DataSource for MatTableData.
   * Set up Paginators and Sorts.
   *
   * TODO - refactor to set the datasource AFTER getting data from the service.
   */
  updateSpells(): void {
    this.spellsService.getAllSpells().subscribe((equipmentData: any) => {
      equipmentData.forEach((element) => {
        this.spellsService
          .getSpellObject(element.url)
          .subscribe((spellData: any) => {
            this.TABLE_DATA.push(spellData);
            
            // Set the DataSource for MatTableData.
            this.dataSource = new MatTableDataSource<Spell>(this.TABLE_DATA);

            // Set Paginators and Sorts.
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          });
      });
    });
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
      data: dialogData,
    };

    // Opens the dialog window.
    const dialogRef = this.dialog.open(
      SpellDetailsDialogComponent,
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
