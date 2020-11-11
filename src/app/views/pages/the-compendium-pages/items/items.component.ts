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
import { ItemDetailsDialogComponent } from '../dialogs/details-dialog/item-details-dialog/item-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
    itemsService: ItemsService,
    public dialog: MatDialog) {
    // Get Item objects
    this.ITEMS_DATA = itemsService.getItems();
    this.dataSource = new MatTableDataSource<Item>(this.ITEMS_DATA);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDetails(item: Item): void {
    // Pass the Npc object to the dialog here.
    const dialogData = item;

    // Set the dialog window options here.
    const dialogOptions = {
      data: dialogData
    }

    // Opens the dialog window.
    const dialogRef = this.dialog.open(ItemDetailsDialogComponent, dialogOptions);

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

