export interface Armor {
  // Required
  name: string;
  // Optional
  armor_category?: string;
  armor_class?: {
    base: number;
    dex_bonus: boolean;
    max_bonus: number;
  };
  str_minimum?: number;
  stealth_disadvantage?: boolean;
  weight?: number;
  cost?: {
    quantity: number;
    unit: string;
  };
  id?: number;
  requires_attunement?: boolean;
  rarity?: string;
  desc?: string[];
  ratings?: number[];
}
