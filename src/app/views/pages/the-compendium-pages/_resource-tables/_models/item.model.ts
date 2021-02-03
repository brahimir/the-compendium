export interface Item {
  id: number;
  // start:: Official Schema
  name: string;
  equipment_category: Object;
  gear_category: Object;
  cost: {
    quantity: number;
    unit: string;
  };
  weight: number;
  desc: string[];
  contents?: Object;
  // end:: Official Schema
}
