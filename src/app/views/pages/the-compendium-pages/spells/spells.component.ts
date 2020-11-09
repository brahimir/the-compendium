import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// Models
import { Spell } from 'src/app/core/officialResources/_models/spell.model';
// Services
import { SpellService } from "../../../../core/officialResources/_services/spells.service";
// MatTable
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

/**
 * @title Spells table with Pagination
 */
@Component({
  selector: 'kt-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit, AfterViewInit {
  columnsToDisplay: any[] = [
    'name',
    'level',
    'classes',
    'casting_time',
    'range',
  ];

  dataSource: any;

  // Item Objects
  SPELLS_DATA: Spell[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    spellsservice: SpellService) {
    // Get data from API and generate Npc objects
    this.SPELLS_DATA = spellsservice.getSpells();
    this.dataSource = new MatTableDataSource<Spell>(this.SPELLS_DATA);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

