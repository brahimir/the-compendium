import { CombatUnit } from "./combat-unit.model";

export interface CombatInstance {
  instanceName: string;
  units: CombatUnit[];
}
