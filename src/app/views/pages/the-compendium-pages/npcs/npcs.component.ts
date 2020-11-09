import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// Models
import { Npc } from 'src/app/core/officialResources/_models/npc.model';
// Services
import { NpcsService } from 'src/app/core/officialResources/_services/npcs.service';
// MatTable
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

/**
 * @title Npcs table with Pagination
 */
@Component({
  selector: 'kt-npcs',
  templateUrl: './npcs.component.html',
  styleUrls: ['./npcs.component.scss']
})
export class NpcsComponent implements OnInit, AfterViewInit {
  columnsToDisplay: any[] = [
    'name',
    'alignment',
    'armor_class',
    'hit_points',
    'challenge_rating',
  ];

  // DataSource for MatTable
  dataSource: any;

  // Npc Objects
  NPCS_DATA: Npc[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    npcsService: NpcsService) {
    // Get data from API and generate Npc objects
    this.NPCS_DATA = npcsService.getNpcs();
    console.log(this.NPCS_DATA);
    this.dataSource = new MatTableDataSource<Npc>(this.NPCS_DATA);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

