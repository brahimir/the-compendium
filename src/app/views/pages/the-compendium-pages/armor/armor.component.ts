import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// Models
import { Armor } from "../../../../core/officialResources/_models/armor.model";
// Services
import { ArmorsService } from "../../../../core/officialResources/_services/armors.service";
// Angular Material
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
// Dialog Component
import { ArmorDetailsDialogComponent } from "../dialogs/details-dialog/armor-details-dialog/armor-details-dialog.component";

/**
 * @title Armors table with Pagination
 */
@Component({
  selector: 'kt-armor',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.scss', '../tc-global.scss']
})
export class ArmorComponent implements OnInit, AfterViewInit {
  columnsToDisplay: any[] = [
    'name',
    'type',
    'armor_class',
    'stealth_disadvantage',
    'strength_requirement',
    'rarity',
    'value'
  ];

  // Data
  data: any;
  dataSource: any;

  // Armor Objects
  ARMORS_DATA: Armor[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public armorsService: ArmorsService,
    public dialog: MatDialog) {
    // Get data from API and generate Armor objects
    this.ARMORS_DATA = armorsService.getArmors();
    this.dataSource = new MatTableDataSource<Armor>(this.ARMORS_DATA);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDetails(armor: Armor): void {
        // Pass the Armor object to the dialog here.
        const dialogData = armor;

        // Set the dialog window options here.
        const dialogOptions = {
          data: dialogData
        }

        // Opens the dialog window.
        const dialogRef = this.dialog.open(ArmorDetailsDialogComponent, dialogOptions);

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
