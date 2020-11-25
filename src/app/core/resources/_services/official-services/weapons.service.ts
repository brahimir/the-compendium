import { Injectable } from '@angular/core';
// Models
import { Weapon } from '../../_models/weapon.model';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  constructor(private apiService: ApiService) { }

  /**
   * Generates Weapon Objects from raw API data.
   *
   * @param {any[]} dataArray The raw data array from API.
   * @returns {Weapon[]} Array of Weapon Objects.
   * @memberof WeaponService
   */
  getWeapons(): Weapon[] {
    // The array of Weapon Objects.
    let WeaponObjects: Weapon[] = [];

    let data: any = this.apiService.getWeaponsData();

    data.forEach(element => {
      WeaponObjects.push(new Weapon(
        element.id,
        element.name,
        element.type,
        element.is_martial,
        element.damage,
        element.damage_type,
        element.requires_attunement,
        element.rarity,
        element.value,
        element.properties,
        element.description
      ));
    });

    return WeaponObjects;
  }
}
