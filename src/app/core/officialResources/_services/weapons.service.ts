import { Injectable } from '@angular/core';
// Models
import { Weapon } from '../_models/weapon.model';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  constructor() { }

  /**
   * Generates Weapon Objects from raw API data.
   *
   * @param {any[]} dataArray The raw data array from API.
   * @returns {Weapon[]} Array of Weapon Objects.
   * @memberof WeaponService
   */
  getWeapons(dataArray: any[]): Weapon[] {
    // The array of Weapon Objects.
    let WeaponObjects: Weapon[] = [];

    dataArray.forEach(element => {
      WeaponObjects.push(new Weapon(
        element.id,
        element.name,
        element.is_martial,
        element.damage,
        element.damage_type,
        element.rarity,
        element.value,
        element.properties,
        element.description
      ));
    });

    return WeaponObjects;
  }
}
