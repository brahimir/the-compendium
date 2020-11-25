import { Injectable } from '@angular/core';
// Models
import { Npc } from '../../_models/npc.model';
// Services
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class NpcsService {

  constructor(private apiService: ApiService) { }

  /**
   * Generates Npc Objects from raw API data.
   *
   * @param {any[]} dataArray The raw data array from API.
   * @returns {Npc[]} Array of Npc Objects.
   * @memberof NpcsService
   */
  getNpcs(): Npc[] {
    // The array of Npc Objects.
    let npcObjects: Npc[] = [];

    let data: any = this.apiService.getNpcsData();

    data.forEach(element => {
      npcObjects.push(new Npc(
        element.id,
        element.name,
        element.size,
        element.alignment,
        element.armor_class,
        element.hit_points,
        element.alt_hit_points,
        element.speed,
        element.ability_scores,
        element.saving_throws,
        element.skills,
        element.damage_immunities,
        element.condition_immunities,
        element.senses,
        element.languages,
        element.challenge_rating,
        element.experience,
        element.abilities,
        element.actions,
        element.legendary_actions,
      ));
    });

    return npcObjects;
  }
}
