import { CombatUnit } from "./combat-unit.model";

export interface CombatInstance {
  name: string;
  units: CombatUnit[];
}
