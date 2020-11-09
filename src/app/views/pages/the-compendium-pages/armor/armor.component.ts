import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// Models
import { Armor } from "../../../../core/officialResources/_models/armor.model";
// Services
import { ArmorsService } from "../../../../core/officialResources/_services/armors.service";
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

  data: any;
  dataSource: any;

  // Item Objects
  ARMORS_DATA: Armor[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    armorsService: ArmorsService) {
    // Get data from API and generate Npc objects
    this.ARMORS_DATA = armorsService.getArmors();
    this.dataSource = new MatTableDataSource<Armor>(this.ARMORS_DATA);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
