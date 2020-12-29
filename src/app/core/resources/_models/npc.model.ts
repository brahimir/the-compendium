export class Npc {
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

  constructor(
    id: string,
    // start:: Official Schema
    name: string,
    size: string,
    type: string,
    subtype: string,
    alignment: string,
    armor_class: number,
    hit_points: number,
    hit_dice: string,
    speed: Object,
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: Object,
    languages: string,
    challenge_rating: number,
    xp: number,
    special_abilities: [],
    actions: [],
    legendary_actions: [],
    // end:: Official Schema
    ratings: number[]
  ) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.type = type;
    this.subtype = subtype;
    this.alignment = alignment;
    this.armor_class = armor_class;
    this.hit_points = hit_points;
    this.hit_dice = hit_dice;
    this.speed = speed;
    this.strength = strength;
    this.dexterity = dexterity;
    this.constitution = constitution;
    this.intelligence = intelligence;
    this.wisdom = wisdom;
    this.charisma = charisma;
    this.proficiencies = proficiencies;
    this.damage_vulnerabilities = damage_vulnerabilities;
    this.damage_resistances = damage_resistances;
    this.damage_immunities = damage_immunities;
    this.condition_immunities = condition_immunities;
    this.senses = senses;
    this.languages = languages;
    this.challenge_rating = challenge_rating;
    this.xp = xp;
    this.special_abilities = special_abilities;
    this.actions = actions;
    this.legendary_actions = legendary_actions;
    this.ratings = ratings;
  }
}