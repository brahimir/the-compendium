export interface Spell {
  id: number;
  // start:: Official Schema
  name: string;
  desc: string[];
  higher_level: string[];
  range: string;
  components: string[];
  material: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type: string;
  damage: {
    damage_type: Object;
    damage_at_slot_level: Object;
  };
  school: Object;
  classes: Object[];
  subclasses: Object[];
  // end:: Official Schema
  ratings: number[];
}
