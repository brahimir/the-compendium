/**
 * Card Model - modelled after the database model.
 */
export interface UserCard {
  index: string;
  name: string;
  icon: string;
  position: { x: number; y: number };
}
