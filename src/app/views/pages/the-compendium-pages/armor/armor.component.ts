// Data
import { ArmorsTable } from "../../../../core/officialResources/armors.table";

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-armor',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.scss']
})
export class ArmorComponent implements OnInit {

  dataSource: any = ArmorsTable.armors;

  columnsToDisplay: any[] = [
    'name', 
    'type',
    'armor_class',
    'stealth_disadvantage',
    'strength_requirement',
    'rarity',
    'value'
  ];

  constructor() { 
    console.log(this.dataSource);
  }

  ngOnInit(): void {
  }

}
