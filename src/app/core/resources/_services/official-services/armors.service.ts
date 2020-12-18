import { Injectable } from '@angular/core';
// Models
import { Armor } from '../../_models/armor.model';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class ArmorsService {

  constructor(private apiService: ApiService) { }

  /**
   * Generates Armor Objects from raw API data.
   *
   * @param {any[]} dataArray The raw data array from API.
   * @returns {Armor[]} Array of Armor Objects.
   * @memberof ArmorsService
   */
  getArmors(): Armor[] {
    // The array of Armor Objects.
    let armorObjects: Armor[] = [];

    let data: any = this.apiService.getArmorsData();

    data.forEach(element => {
      armorObjects.push(new Armor(
        element.id,
        element.name,
        element.type,
        element.armor_class,
        element.stealth_disadvantage,
        element.strength_requirement,
        element.requires_attunement,
        element.rarity,
        element.value,
        element.description,
        element.ratings
      ));
    });

    return armorObjects;
  }
}
