/**
 * Card Model - modelled after the database model.
 */
export class Card {
  index: string;
  name: string;
  icon: string = "";
  position: { x: number; y: number };
}
