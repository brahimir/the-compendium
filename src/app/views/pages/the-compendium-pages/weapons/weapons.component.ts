import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// Models
import { Weapon } from "../../../../core/officialResources/_models/weapon.model";
// Services
import { WeaponService } from "../../../../core/officialResources/_services/weapons.service";
// MatTable
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
// MatDialog
import { WeaponDetailsDialogComponent } from '../dialogs/details-dialog/weapon-details-dialog/weapon-details-dialog.component';

/**
 * @title Weapons table with Pagination
 */
@Component({
  selector: 'kt-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss', '../tc-global.scss']
})
export class WeaponComponent implements OnInit, AfterViewInit {
  columnsToDisplay: any[] = [
    'name',
    'damage',
    'damage_type',
    'rarity',
    'value',
  ];

  data: any;
  dataSource: any;

  // Item Objects
  WEAPONS_DATA: Weapon[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    weaponsService: WeaponService,
    public dialog: MatDialog) {
    // Get data from API and generate Npc objects
    this.WEAPONS_DATA = weaponsService.getWeapons();
    this.dataSource = new MatTableDataSource<Weapon>(this.WEAPONS_DATA);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

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

  applyFilter(filterValue: string) {
    // Remove whitespace
    filterValue = filterValue.trim();

    // MatTableDataSource defaults to lowercase matches
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}

