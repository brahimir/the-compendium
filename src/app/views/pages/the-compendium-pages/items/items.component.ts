import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// Models
import { Item } from "../../../../core/officialResources/_models/item.model";
// Data
import { ItemsTable } from "../../../../core/officialResources/_server/items.table";
// Services
import { ItemsService } from "../../../../core/officialResources/_services/items.service";
// MatTable
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Spell } from 'src/app/core/officialResources/_models/spell.model';

/**
 * @title Spells table with Pagination
 */
@Component({
  selector: 'kt-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit, AfterViewInit {
  columnsToDisplay: any[] = [
    'name',
    'type',
    'rarity',
    'value',
  ];

  // API data
  data: any = ItemsTable.items;
  dataSource: any;

  // Weapon Objects
  ITEM_DATA: Item[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(spellservice: ItemsService) {
    // Get Weapon objects using raw data.
    this.ITEM_DATA = spellservice.getItems(this.data);
    this.dataSource = new MatTableDataSource<Item>(this.ITEM_DATA);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

