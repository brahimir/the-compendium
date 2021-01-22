import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
// Models
import { Npc } from "../../../../../../core/resources/_models/npc.model";
// Services
import { HomebrewNpcsService } from "../../../../../../core/resources/_services/homebrew-services/homebrew-npcs.service";
import { FormattingService } from "src/app/core/resources/_services/formatting.service";
// MatTable
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
// Details Dialog
import { NpcDetailsDialogComponent } from "../../resource-details-dialog/npc-details-dialog/npc-details-dialog.component";

@Component({
  selector: "kt-homebrew-npcs",
  templateUrl: "../../official/npcs/npcs.component.html",
  styleUrls: ["./homebrew-npcs.component.scss", "../../../sass/tc-global.scss"],
})
export class HomebrewNpcsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columnsToDisplay: any[] = [
    "name",
    "alignment",
    "armor_class",
    "hit_points",
    "challenge_rating",
  ];

  // Datasource for MatTable
  dataSource: any;

  // Weapons
  TABLE_DATA: Npc[] = [];

  constructor(
    private homebrewNpcsService: HomebrewNpcsService,
    public dialog: MatDialog,
    private formattingService: FormattingService
  ) {}

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
    this.homebrewNpcsService.getAll().subscribe((data: any) => {
      this.TABLE_DATA = data;

      // Set the DataSource for MatTableData.
      this.dataSource = new MatTableDataSource<Npc>(this.TABLE_DATA);

      // Set Paginators and Sorts.
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  /**
   * Opens Details Dialog for an Npc.
   * @param element The Npc that was clicked.
   */
  openDetails(element: Npc): void {
    // Pass the Armor object to the dialog here.
    const dialogData = element;

    // Set the dialog window options here.
    const dialogOptions = {
      data: dialogData,
    };

    // Opens the dialog window.
    const dialogRef = this.dialog.open(
      NpcDetailsDialogComponent,
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

  /**
   * Utility - Uppercases each word in the data string.
   *
   * @param {string} data The string to format.
   * @returns {string} The formatted string.
   */
  titleCase(data: string): string {
    return this.formattingService.titleCase(data);
  }
}
