import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// Models
import { Weapon } from "../../../../core/officialResources/_models/weapon.model";
// Data
import { WeaponsTable } from "../../../../core/officialResources/_server/weapons.table";
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

  // Raw data
  data: any = WeaponsTable.weapons;
  dataSource: any;

  // Weapon Objects
  WEAPON_DATA: Weapon[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(WeaponService: WeaponService) {
    // Get Weapon objects using raw data.
    this.WEAPON_DATA = WeaponService.getWeapons(this.data);
    this.dataSource = new MatTableDataSource<Weapon>(this.WEAPON_DATA);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

