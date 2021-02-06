export class Weapon {
  id: number;
  // start:: Official Schema
  name: string;
  weapon_category: string;
  weapon_range: string;
  cost: {
    quantity: number;
    unit: string;
  };
  damage: {
    damage_dice: string;
    damage_type: string;
  };
  range: {
    normal: number;
    long: number;
  };
  weight: number;
  properties: string[];
  // end:: Official Schema
  requires_attunement: boolean;
  rarity: string;
  desc: string[];
  ratings: number[];
  throw_range?: {
    normal: number;
    long: number;
  };

  /**
   * Creates an instance of a Weapon.
   */
  constructor(
    id: number,
    // start:: Official Schema
    name: string,
    weapon_category: string,
    weapon_range: string,
    cost: {
      quantity: number;
      unit: string;
    },
    damage: {
      damage_dice: string;
      damage_type: string;
    },
    range: {
      normal: number;
      long: number;
    },
    weight: number,
    properties: string[],
    // end:: Official Schema
    requires_attunement: boolean,
    rarity: string,
    desc: string[],
    ratings: number[],
    throw_range?: {
      normal: number;
      long: number;
    }
  ) {
    this.id = id;
    this.name = name;
    this.weapon_category = weapon_category;
    this.weapon_range = weapon_range;
    this.cost = cost;
    this.damage = damage;
    this.range = range;
    this.weight = weight;
    this.properties = properties;
    this.requires_attunement = requires_attunement;
    this.rarity = rarity;
    this.desc = desc;
    this.ratings = ratings;
    if (throw_range) this.throw_range = throw_range;
  }
}
