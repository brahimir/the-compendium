export interface Npc {
  id: string;
  // start:: Official Schema
  name: string;
  size: string;
  type: string;
  subtype: string;
  alignment: string;
  armor_class: number;
  hit_points: number;
  hit_dice: string;
  speed: Object;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  proficiencies: [];
  damage_vulnerabilities: [];
  damage_resistances: [];
  damage_immunities: [];
  condition_immunities: [];
  senses: Object;
  languages: string;
  challenge_rating: number;
  xp: number;
  special_abilities: [];
  actions: [];
  legendary_actions: [];
  // end:: Official Schema
  ratings: number[];
}
