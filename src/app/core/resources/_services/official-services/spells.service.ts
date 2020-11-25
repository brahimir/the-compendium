import { Injectable } from '@angular/core';
// Models
import { Spell } from '../../_models/spell.model';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  constructor(private apiService: ApiService) { }

  /**
   * Generates Spell Objects from raw API data.
   *
   * @param {any[]} dataArray The raw data array from API.
   * @returns {Spell[]} Array of Spell Objects.
   * @memberof SpellService
   */
  getSpells(): Spell[] {
    // The array of Spell Objects.
    let SpellObjects: Spell[] = [];

    let data: any = this.apiService.getSpellsData();

    data.forEach(element => {
      SpellObjects.push(new Spell(
        element.id,
        element.name,
        element.level,
        element.is_cantrip,
        element.classes,
        element.school,
        element.casting_time,
        element.range,
        element.duration,
        element.components,
        element.description,
        element.at_higher_levels
      ));
    });

    return SpellObjects;
  }
}
