import { Plot } from "./plot.model";

export interface Storyboard {
  plotsMain: Array<Plot>;
  plotsInProgress: Array<Plot>;
  plotsDone: Array<Plot>;
}
