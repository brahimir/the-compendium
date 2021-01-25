/**
 * Card Model - modelled after the database model.
 */
export class Card {
  index: string;
  name: string;
  icon: string = "";
  position: { x: number; y: number };

  // constructor(
  //   index: string,
  //   name: string,
  //   icon: string,
  //   position?: {
  //     x: number;
  //     y: number;
  //   }
  // ) {
  //   this.index = index;
  //   this.name = name;
  //   this.icon = icon;
  //   if (position) this.position = position;
  // }
}
