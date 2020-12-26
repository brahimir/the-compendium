export class Armor {
  // start:: Official Schema
  id: number;
  name: string;
  armor_category: string;
  armor_class: {
    base: number;
    dex_bonus: boolean;
    max_bonus: number;
  };
  str_minimum: number;
  stealth_disadvantage: boolean;
  weight: number;
  cost: {
    quantity: number;
    unit: string;
  };
  // end:: Official Schema
  requires_attunement: boolean;
  rarity: string;
  desc: string;
  ratings: number[];

  constructor(
    id: number,
    name: string,
    armor_category: string,
    armor_class: {
      base: number;
      dex_bonus: boolean;
      max_bonus: number;
    },
    str_minimum: number,
    stealth_disadvantage: boolean,
    weight: number,
    cost: {
      quantity: number;
      unit: string;
    },
    requires_attunement: boolean,
    rarity: string,
    desc: string,
    ratings: number[]
  ) {
    this.id = id;
    this.name = name;
    this.armor_category = armor_category;
    this.armor_class = armor_class;
    this.str_minimum = str_minimum;
    this.stealth_disadvantage = stealth_disadvantage;
    this.weight = weight;
    this.cost = cost;
    this.requires_attunement = requires_attunement;
    this.rarity = rarity;
    this.desc = desc;
    this.ratings = ratings;
  }
}
