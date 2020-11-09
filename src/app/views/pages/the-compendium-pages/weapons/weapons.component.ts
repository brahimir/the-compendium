import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// Models
import { Weapon } from "../../../../core/officialResources/_models/weapon.model";
// Services
import { WeaponService } from "../../../../core/officialResources/_services/weapons.service";
// MatTable
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

/**
 * @title Weapons table with Pagination
 */
@Component({
  selector: 'kt-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponComponent implements OnInit, AfterViewInit {
  columnsToDisplay: any[] = [
    'name',
    'is_martial',
    'damage',
    'damage_type',
    'rarity',
    'value',
    'properties'
  ];
  
  data: any;
  dataSource: any;

  // Item Objects
  WEAPONS_DATA: Weapon[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    weaponsService: WeaponService) {
    // Get data from API and generate Npc objects
    this.WEAPONS_DATA = weaponsService.getWeapons();
    this.dataSource = new MatTableDataSource<Weapon>(this.WEAPONS_DATA);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

