export class Spell {
  id: number;
  // start:: Official Schema
  name: string;
  desc: string;
  higher_level: string;
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

  /**
   * Creates an instance of a Spell.
   */
  constructor(
    id: number,
    // start:: Official Schema
    name: string,
    desc: string,
    higher_level: string,
    range: string,
    components: string[],
    material: string,
    ritual: boolean,
    duration: string,
    concentration: boolean,
    casting_time: string,
    level: number,
    attack_type: string,
    damage: {
      damage_type: Object;
      damage_at_slot_level: Object;
    },
    school: Object,
    classes: Object[],
    subclasses: Object[],
    // end:: Official Schema
    ratings: number[]
  ) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.higher_level = higher_level;
    this.range = range;
    this.components = components;
    this.material = material;
    this.ritual = ritual;
    this.duration = duration;
    this.concentration = concentration;
    this.casting_time = casting_time;
    this.level = level;
    this.attack_type = attack_type;
    this.damage = damage;
    this.school = school;
    this.classes = classes;
    this.subclasses = subclasses;
    this.ratings = ratings;
  }
}
