export interface Armor {
  id: number;
  // start:: Official Schema
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
  desc: string[];
  ratings: number[];
}
