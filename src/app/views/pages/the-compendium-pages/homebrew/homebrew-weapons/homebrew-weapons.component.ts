import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// Models
import { Weapon } from 'src/app/core/resources/_models/weapon.model';
// Services
import { HomebrewWeaponsService } from '../../../../../core/resources/_services/homebrew-services/homebrew-weapons.service';
// MatTable
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
// Details Dialog

@Component({
  selector: 'kt-homebrew-weapons',
  templateUrl: './homebrew-weapons.component.html',
  styleUrls: ['./homebrew-weapons.component.scss', '../../tc-global.scss']
})
export class HomebrewWeaponsComponent implements OnInit, AfterViewInit {
  columnsToDisplay: any[] = [
    'name',
    'damage',
    'damage_type',
    'rarity',
    'value',
  ];

  data: any;

  // Datasource for MatTable
  dataSource: any;

  // Weapon Objects
  HOMEBREW_WEAPONS_DATA: Weapon[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private homebrewWeaponsService: HomebrewWeaponsService,
    public dialog: MatDialog) {
      // todo:: need to create Weapon Objects to pass to the datasource for the MatTable.
    this.dataSource = new MatTableDataSource<Weapon>(this.HOMEBREW_WEAPONS_DATA);
  }

  ngOnInit(): void {
    this.getHomebrewWeapons();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Get all Homebrew Weapons from API.
   */
  getHomebrewWeapons(): void {
    this.homebrewWeaponsService.getAll()
      .subscribe(
        data => {
          this.data = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  /**
   * Refresh - gets all Homebrew Weapons from API.
   */
  refreshList(): void {
    this.getHomebrewWeapons();
  }

  /**
   * Opens Details Dialog for a Weapon.
   * @param weapon The weapon that was clicked.
   */
  openDetails(weapon: Weapon): void {
    // Pass the Armor object to the dialog here.
    const dialogData = weapon;

    // Set the dialog window options here.
    const dialogOptions = {
      data: dialogData
    }

    // Opens the dialog window.
    const dialogRef = this.dialog.open(WeaponDetailsDialogComponent, dialogOptions);

    // Handles dialog closing - can do something when the dialog is closed.
    dialogRef.afterClosed().subscribe(result => { });
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
