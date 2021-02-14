export interface Npc {
  // Required
  name: string;
  size: string;
  alignment: string;
  armor_class: number;
  // Optional
  id?: string;
  type?: string;
  subtype?: string;
  hit_points?: number;
  hit_dice?: string;
  speed?: Object;
  strength?: number;
  dexterity?: number;
  constitution?: number;
  intelligence?: number;
  wisdom?: number;
  charisma?: number;
  proficiencies?: Object[];
  damage_vulnerabilities?: Object[];
  damage_resistances?: Object[];
  damage_immunities?: Object[];
  condition_immunities?: Object[];
  senses?: Object;
  languages?: string;
  challenge_rating?: number;
  xp?: number;
  special_abilities?: Object[];
  actions?: Object[];
  legendary_actions?: Object[];
  ratings?: number[];
}
