import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
// Models
import { Npc } from "../../../../../core/resources/_models/npc.model";
// Services
import { HomebrewNpcsService } from "../../../../../core/resources/_services/homebrew-services/homebrew-npcs.service";
// MatTable
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
// Details Dialog
import { NpcDetailsDialogComponent } from "../../dialogs/details-dialog/npc-details-dialog/npc-details-dialog.component";

@Component({
  selector: "kt-homebrew-npcs",
  templateUrl: "./homebrew-npcs.component.html",
  styleUrls: ["./homebrew-npcs.component.scss", "../../tc-global.scss"],
})
export class HomebrewNpcsComponent implements OnInit, AfterViewInit {
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
  HOMEBREW_NPCS_DATA: Npc[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private homebrewNpcsService: HomebrewNpcsService,
    public dialog: MatDialog
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
      this.HOMEBREW_NPCS_DATA = data;

      // Set the DataSource for MatTableData.
      this.dataSource = new MatTableDataSource<Npc>(this.HOMEBREW_NPCS_DATA);

      // Set Paginators and Sorts.
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  /**
   * Opens Details Dialog for a Weapon.
   * @param weapon The weapon that was clicked.
   */
  openDetails(weapon: Npc): void {
    // Pass the Armor object to the dialog here.
    const dialogData = weapon;

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
}
