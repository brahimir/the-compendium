export class Item {
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

  constructor(
    id: number,
    // start:: Official Schema
    name: string,
    equipment_category: Object,
    gear_category: Object,
    cost: {
      quantity: number;
      unit: string;
    },
    weight: number,
    desc: string[],
    contents?: Object
    // end:: Official Schema
  ) {
    this.id = id;
    this.name = name;
    this.equipment_category = equipment_category;
    this.gear_category = gear_category;
    this.cost = cost;
    this.weight = weight;
    this.desc = desc;
    this.contents = contents;
  }
}
