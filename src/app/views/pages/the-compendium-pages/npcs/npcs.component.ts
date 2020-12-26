import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
// Models
import { Npc } from "src/app/core/resources/_models/npc.model";
// Services
import { NpcsService } from "src/app/core/resources/_services//official-services/npcs.service";
// Utilities
import { TypesUtilsService } from "../../../../core/_base/crud/utils/types-utils.service";
// Angular Material
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
// Dialog Component
import { NpcDetailsDialogComponent } from "../dialogs/details-dialog/npc-details-dialog/npc-details-dialog.component";

/**
 * @title Npcs table with Pagination
 */
@Component({
  selector: "kt-npcs",
  templateUrl: "./npcs.component.html",
  styleUrls: ["./npcs.component.scss", "../tc-global.scss"],
})
export class NpcsComponent implements OnInit, AfterViewInit {
  columnsToDisplay: any[] = [
    "name",
    "alignment",
    "armor_class",
    "hit_points",
    "challenge_rating",
  ];

  // DataSource for MatTable
  dataSource: any;

  // Npcs
  NPCS_DATA: Npc[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private npcsService: NpcsService,
    public dialog: MatDialog,
    private utilityService: TypesUtilsService
  ) {}

  ngOnInit(): void {
    this.updateNpcs();
  }

  ngAfterViewInit(): void {}

  /**
   * Get all Homebrew Armors from API.
   * Set up DataSource for MatTableData.
   * Set up Paginators and Sorts.
   *
   * TODO - refactor to set the datasource AFTER getting data from the service.
   */
  updateNpcs(): void {
    this.npcsService.getAllArmors().subscribe((monstersData: any) => {
      monstersData.forEach((element) => {
        this.npcsService.getNpcObject(element.url).subscribe((npcData: any) => {
          this.NPCS_DATA.push(npcData);

          // Set the DataSource for MatTableData.
          this.dataSource = new MatTableDataSource<Npc>(this.NPCS_DATA);

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
  openDetails(armor: Npc): void {
    // Pass the Armor object to the dialog here.
    const dialogData = armor;

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
    return this.utilityService.titleCase(data);
  }
}
