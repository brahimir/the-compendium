import { Injectable } from '@angular/core';
// Models
import { Armor } from '../_models/armor.model';

@Injectable({
  providedIn: 'root'
})
export class ArmorService {

  constructor() { }

  /**
   * Generates Armor Objects from raw API data.
   *
   * @param {any[]} dataArray The raw data array from API.
   * @returns {Armor[]} Array of Armor Objects.
   * @memberof ArmorService
   */
  getArmors(dataArray: any[]): Armor[] {
    // The array of Armor Objects.
    let armorObjects: Armor[] = [];

    dataArray.forEach(element => {
      armorObjects.push(new Armor(
        element.id,
        element.name,
        element.type,
        element.armor_class,
        element.stealth_disadvantage,
        element.strength_requirement,
        element.rarity,
        element.value,
        element.description
      ));
    });

    return armorObjects;
  }
}
