// Angular
import { ComponentType } from "@angular/cdk/portal";
// Resources
import { WeaponsComponent } from "../_resource-tables/official/weapons/weapons.component";
import { ArmorsComponent } from "../_resource-tables/official/armor/armor.component";
import { ItemsComponent } from "../_resource-tables/official/items/items.component";
import { NpcsComponent } from "../_resource-tables/official/npcs/npcs.component";
import { SpellsComponent } from "../_resource-tables/official/spells/spells.component";
// Official
// Homebrew
import { HomebrewWeaponsComponent } from "../_resource-tables/homebrew/homebrew-weapons/homebrew-weapons.component";
import { HomebrewArmorsComponent } from "../_resource-tables/homebrew/homebrew-armor/homebrew-armor.component";
import { HomebrewItemsComponent } from "../_resource-tables/homebrew/homebrew-items/homebrew-items.component";
import { HomebrewNpcsComponent } from "../_resource-tables/homebrew/homebrew-npcs/homebrew-npcs.component";
import { HomebrewSpellsComponent } from "../_resource-tables/homebrew/homebrew-spells/homebrew-spells.component";
// DM Tools
import { CombatTrackerComponent } from "../dm-tools/combat-tracker/combat-tracker.component";
import { StoryboardComponent } from "../dm-tools/storyboard/storyboard.component";
import { SessionSummariesComponent } from "../dm-tools/session-summaries/session-summaries.component";
import { CreateComponent } from "../dm-tools/create/create.component";

/**
 * TC Screen Card Model
 *
 * @interface TcScreenCard
 */
export interface TcScreenCard {
  index: string;
  name: string;
  icon: string;
  isDmTool: boolean;
  component: ComponentType<any>;
}

// ! Card Constants
export const VIRTUAL_SCREEN_CARDS = {
  // * Resources
  // Official
  weapons: {
    index: "weapons",
    name: "Weapons",
    icon: "fas fa-hammer",
    isDmTool: false,
    component: WeaponsComponent,
  },
  armors: {
    index: "armors",
    name: "Armors",
    icon: "fas fa-shield-alt",
    isDmTool: false,
    component: ArmorsComponent,
  },
  items: {
    index: "items",
    name: "Items",
    icon: "fas fa-glass-martini",
    isDmTool: false,
    component: ItemsComponent,
  },
  monsters: {
    index: "monsters",
    name: "Monsters",
    icon: "fab fa-optin-monster",
    isDmTool: false,
    component: NpcsComponent,
  },
  spells: {
    index: "spells",
    name: "Spells",
    icon: "fas fa-hat-wizard",
    isDmTool: false,
    component: SpellsComponent,
  },
  // Homebrew
  "homebrew-weapons": {
    index: "homebrew-weapons",
    name: "Homebrew Weapons",
    icon: "far fa-star",
    isDmTool: false,
    component: HomebrewWeaponsComponent,
  },
  "homebrew-armors": {
    index: "homebrew-armors",
    name: "Homebrew Armors",
    icon: "far fa-star",
    isDmTool: false,
    component: HomebrewArmorsComponent,
  },
  "homebrew-monsters": {
    index: "homebrew-monsters",
    name: "Homebrew Monsters",
    icon: "far fa-star",
    isDmTool: false,
    component: HomebrewNpcsComponent,
  },
  "homebrew-items": {
    index: "homebrew-items",
    name: "Homebrew Items",
    icon: "far fa-star",
    isDmTool: false,
    component: HomebrewItemsComponent,
  },
  "homebrew-spells": {
    index: "homebrew-spells",
    name: "Homebrew Spells",
    icon: "far fa-star",
    isDmTool: false,
    component: HomebrewSpellsComponent,
  },

  // * Storyboard
  storyboard: {
    index: "storyboard",
    name: "Storyboard",
    icon: "fas fa-chalkboard",
    isDmTool: true,
    component: StoryboardComponent,
  },

  // * Session Summaries
  "session-summaries": {
    index: "session-summaries",
    name: "Session Summaries",
    icon: "fas fa-book",
    isDmTool: true,
    component: SessionSummariesComponent,
  },

  // * Comat Tracker
  "combat-tracker": {
    index: "combat-tracker",
    name: "Combat Tracker",
    icon: "fas fa-list-ol",
    isDmTool: true,
    component: CombatTrackerComponent,
  },

  // * Create
  create: {
    index: "create",
    name: "Create",
    icon: "fas fa-magic",
    isDmTool: true,
    component: CreateComponent,
  },
};
