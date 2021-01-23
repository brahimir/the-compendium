/**
 * Dashboard Component - modelled after the database model
 */
export class DashboardCard {
  index: string;
  name: string;
  icon: string = "";
  xCoord: number = 0;
  yCoord: number = 0;

  constructor(index: string, name: string, icon: string, xCoord?: number, yCoord?: number) {
    this.index = index;
    this.name = name;
    this.icon = icon;
    if (xCoord) this.xCoord = xCoord;
    if (yCoord) this.yCoord = yCoord;
  }
}
