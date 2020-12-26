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
  }
  weight: number;
  properties: string[];
  // end:: Official Schema
  requires_attunement: boolean;
  rarity: string;
  desc: string[];
  ratings: number[];

  /**
   *
   * @param id The Weapon id
   * @param name The Weapon name
   * @param type The Weapon type
   * @param is_martial True if the Weapon is a martial Weapon, False otherwise
   * @param damage The Weapon damage
   * @param damage_type The Weapon damamge type
   * @param requires_attunement True if the Weapon requires attunement, False otherwise
   * @param rarity The Weapon rarity (Common, Uncommon, Rare, Very Rare)
   * @param value The Weapon value
   * @param properties The Weapon properties
   * @param description The Weapon description
   * @param ratings The Weapon ratings
   */
  constructor(
    id: number,
    // start:: Official Schema
    name: string,
    weapon_category: string,
    weapon_range: string,
    cost: {
      quantity: number,
      unit: string,
    },
    damage: {
        damage_dice: string,
        damage_type: string,
    },
    range: {
        normal: number,
        long: number,
    },
    weight: number,
    properties: string[],
    // end:: Official Schema
    requires_attunement: boolean,
    rarity: string,
    desc: string[],
    ratings: number[],
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
  }
}
