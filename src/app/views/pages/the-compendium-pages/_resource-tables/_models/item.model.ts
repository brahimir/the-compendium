export interface Item {
  // Required
  name: string;
  // Optional
  id?: number;
  equipment_category?: Object;
  gear_category?: Object;
  cost?: {
    quantity: number;
    unit: string;
  };
  weight?: number;
  desc?: string[];
  contents?: Object;
}
