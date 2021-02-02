import { Plot } from "src/app/core/resources/_models/dm_tools/storyboard/plot.model";

export interface Storyboard {
  plotsMain: Array<Plot>;
  plotsInProgress: Array<Plot>;
  plotsDone: Array<Plot>;
}
