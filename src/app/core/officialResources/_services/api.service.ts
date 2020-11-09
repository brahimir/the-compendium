import { Injectable } from '@angular/core';
// Data
import { WeaponsTable } from "../_server/weapons.table";
import { ArmorsTable } from "../_server/armors.table";
import { SpellsTable } from "../_server/spells.table";
import { ItemsTable } from "../_server/items.table";
import { NpcsTable } from '../_server/npcs.table';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  weapons_data: any = WeaponsTable.weapons;
  armors_data: any = ArmorsTable.armors;
  spells_data: any = SpellsTable.spells;
  items_data: any = ItemsTable.items;
  npcs_data: any = NpcsTable.npcs;

  constructor() {  }

  getWeaponsData() {
    return this.weapons_data
  }

  getArmorsData() {
    return this.armors_data
  }

  getSpellsData() {
    return this.spells_data
  }
  
  getItemsData() {
    return this.items_data
  }

  getNpcsData() {
    return this.npcs_data
  }
}
