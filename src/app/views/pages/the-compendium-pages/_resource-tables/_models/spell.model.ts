export interface Spell {
  // Required
  name: string;
  level: number;
  desc: string[];
  // Optional
  id?: number;
  higher_level?: string[];
  range?: string;
  components?: string[];
  material?: string;
  ritual?: boolean;
  duration?: string;
  concentration?: boolean;
  casting_time?: string;
  attack_type?: string;
  damage?: {
    damage_type?: Object;
    damage_at_slot_level?: Object;
    damage_at_character_level?: Object;
  };
  school?: Object;
  classes?: Object[];
  subclasses?: Object[];
  ratings?: number[];
}
