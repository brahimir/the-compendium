import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// Models
import { Weapon } from "../../../../core/officialResources/_models/weapon.model";
// Data
import { SpellsTable } from "../../../../core/officialResources/_server/spells.table";
// Services
import { SpellService } from "../../../../core/officialResources/_services/spells.service";
// MatTable
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Spell } from 'src/app/core/officialResources/_models/spell.model';

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

  // API data
  data: any = SpellsTable.spells;
  dataSource: any;

  // Weapon Objects
  SPELL_DATA: Spell[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(spellservice: SpellService) {
    // Get Weapon objects using raw data.
    this.SPELL_DATA = spellservice.getSpells(this.data);
    this.dataSource = new MatTableDataSource<Spell>(this.SPELL_DATA);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

