import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// Models
import { Spell } from 'src/app/core/resources/_models/spell.model';
// Services
import { SpellService } from "../../../../core/resources/_services//official-services/spells.service";
// Angular Material
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
// Dialog Component
import { SpellDetailsDialogComponent } from '../dialogs/details-dialog/spell-details-dialog/spell-details-dialog.component';

/**
 * @title Spells table with Pagination
 */
@Component({
  selector: 'kt-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss', '../tc-global.scss']
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
    spellsservice: SpellService,
    public dialog: MatDialog) {
    // Get data from API and generate Npc objects
    this.SPELLS_DATA = spellsservice.getSpells();
    this.dataSource = new MatTableDataSource<Spell>(this.SPELLS_DATA);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDetails(spell: Spell): void {
    // Pass the Npc object to the dialog here.
    const dialogData = spell;

    // Set the dialog window options here.
    const dialogOptions = {
      data: dialogData
    }

    // Opens the dialog window.
    const dialogRef = this.dialog.open(SpellDetailsDialogComponent, dialogOptions);

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

