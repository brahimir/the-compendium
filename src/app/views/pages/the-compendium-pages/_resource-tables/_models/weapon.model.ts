export interface Weapon {
  id?: number;
  // start:: Official Schema
  name: string;
  weapon_category?: string;
  weapon_range?: string;
  cost?: {
    quantity: number;
    unit: string;
  };
  damage?: {
    damage_dice: string;
    damage_type: string;
  };
  range?: {
    normal: number;
    long: number;
  };
  weight?: number;
  properties?: string[];
  // end:: Official Schema
  requires_attunement?: boolean;
  rarity?: string;
  desc?: string[];
  ratings?: number[];
}
