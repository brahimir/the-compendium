import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import stringCase from 'dist/assets/plugins/formvalidation/src/js/validators/stringCase';

@Component({
  selector: 'kt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  routeWeapons: string = '/weapons';
  routeArmor: string = '/armor';
  routeItems: string = '/items';
  routeNPCs: string = '/npcs';
  routeSpells: string = '/spells';

  constructor(public router: Router) { }

  @Input() boxes: string[] = [];

  ngOnInit(): void {
    // todo:: working on saving the draggable box states in local storage.
    let myStorage = window.localStorage;
    this.boxes.push(myStorage.getItem("window"));
  }

  openWindow(route: string) {
    // Converts the route into a string that can be used 
    // with the window.open() function.
    const url = this.router.serializeUrl(
      this.router.createUrlTree([route])
    );

    window.open(url, '_blank');
  }

  // todo:: working on saving the draggable box states in local storage.
  dragEnded(event: any) {
    let boxCoords: string;

    boxCoords = event.pointerPosition
    let myStorage = window.localStorage;
    myStorage.setItem("box", boxCoords);
  }
}
