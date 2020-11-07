import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// Models
import { Armor } from "../../../../core/officialResources/_models/armor.model";
// Data
import { ArmorsTable } from "../../../../core/officialResources/_server/armors.table";
// Services
import { ArmorService } from "../../../../core/officialResources/_services/armors.service";
// MatTable
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

/**
 * @title Armors table with Pagination
 */
@Component({
  selector: 'kt-armor',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.scss']
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

  // API data
  data: any = ArmorsTable.armors;
  dataSource: any;

  // Armor Objects
  ARMOR_DATA: Armor[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(armorService: ArmorService) {
    // Get Armor objects using raw data.
    this.ARMOR_DATA = armorService.getArmors(this.data);
    this.dataSource = new MatTableDataSource<Armor>(this.ARMOR_DATA);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
