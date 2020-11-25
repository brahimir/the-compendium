import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// Models
import { Item } from "../../../../core/resources/_models/item.model";
// Services
import { ItemsService } from "../../../../core/resources/_services/official-services/items.service";
// Angular Material
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
// Dialog Component
import { ItemDetailsDialogComponent } from '../dialogs/details-dialog/item-details-dialog/item-details-dialog.component';

/**
 * @title Items table with Pagination
 */
@Component({
  selector: 'kt-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss', '../tc-global.scss']
})
export class ItemsComponent implements OnInit, AfterViewInit {
  columnsToDisplay: any[] = [
    'name',
    'type',
    'rarity',
    'value',
  ];

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
    // Pass the Item object to the dialog here.
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

