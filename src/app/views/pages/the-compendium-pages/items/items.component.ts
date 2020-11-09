import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// Models
import { Item } from "../../../../core/officialResources/_models/item.model";
// Services
import { ApiService } from 'src/app/core/officialResources/_services/api.service';
import { ItemsService } from "../../../../core/officialResources/_services/items.service";
// MatTable
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

/**
 * @title Items table with Pagination
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

  data: any;
  dataSource: any;

  // Item Objects
  ITEMS_DATA: Item[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    apiService: ApiService,
    itemsService: ItemsService) {
    // Get data from API
    this.data = apiService.getItemsData;
    
    // Get Item objects
    this.ITEMS_DATA = itemsService.getItems();
    this.dataSource = new MatTableDataSource<Item>(this.ITEMS_DATA);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

