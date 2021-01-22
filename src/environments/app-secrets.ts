import { HomebrewArmorsComponent } from "src/app/views/pages/the-compendium-pages/_resource-tables/homebrew/homebrew-armor/homebrew-armor.component";
import { HomebrewItemsComponent } from "src/app/views/pages/the-compendium-pages/_resource-tables/homebrew/homebrew-items/homebrew-items.component";
import { HomebrewNpcsComponent } from "src/app/views/pages/the-compendium-pages/_resource-tables/homebrew/homebrew-npcs/homebrew-npcs.component";
import { HomebrewSpellsComponent } from "src/app/views/pages/the-compendium-pages/_resource-tables/homebrew/homebrew-spells/homebrew-spells.component";
import { HomebrewWeaponsComponent } from "src/app/views/pages/the-compendium-pages/_resource-tables/homebrew/homebrew-weapons/homebrew-weapons.component";
import { ArmorsComponent } from "src/app/views/pages/the-compendium-pages/_resource-tables/official/armor/armor.component";
import { ItemsComponent } from "src/app/views/pages/the-compendium-pages/_resource-tables/official/items/items.component";
import { NpcsComponent } from "src/app/views/pages/the-compendium-pages/_resource-tables/official/npcs/npcs.component";
import { SpellsComponent } from "src/app/views/pages/the-compendium-pages/_resource-tables/official/spells/spells.component";
import { WeaponsComponent } from "src/app/views/pages/the-compendium-pages/_resource-tables/official/weapons/weapons.component";

// ! TC API Routes
export const API_ROUTES = {
  // * Auth
  AUTH: {
    USERS:
      "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/users/",
    REGISTER_USER:
      "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/users/register-user",
    PERMISSIONS: "api/permissions",
    ROLES: "api/roles",
  },

  // * Resources
  // Official
  OFFICIAL: {
    BASE: "https://www.dnd5eapi.co",
    WEAPONS: "https://www.dnd5eapi.co/api/equipment-categories/weapon",
    ARMORS: "https://www.dnd5eapi.co/api/equipment-categories/armor",
    EQUIPMENT: "https://www.dnd5eapi.co/api/equipment",
    MAGIC_ITEMS: "https://www.dnd5eapi.co/api/magic-items",
    MONSTERS: "https://www.dnd5eapi.co/api/monsters",
    SPELLS: "https://www.dnd5eapi.co/api/spells",
  },
  // Homebrew
  HOMEBREW: {
    WEAPONS:
      "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/homebrewWeapons",
    ARMORS:
      "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/homebrewArmors",
    ITEMS:
      "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/homebrewItems",
    NPCS:
      "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/homebrewNpcs",
    SPELLS:
      "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/homebrewSpells",
  },

  // * DM Tools
  DM_TOOLS: {
    UPDATE_STORYBOARD:
      "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/users/storyboard/",
    UPDATE_SESSIONS:
      "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/users/sessions/",
  },
};

// ! TC Constants
export const TC_CONSTANTS = {
  DASHBOARD_COMPONENTS: [
    // Official Resources
    {
      name: "weapons",
      component: WeaponsComponent,
    },
    {
      name: "armors",
      component: ArmorsComponent,
    },
    {
      name: "items",
      component: ItemsComponent,
    },
    {
      name: "npcs",
      component: NpcsComponent,
    },
    {
      name: "spells",
      component: SpellsComponent,
    },

    // Homebrew Resources
    {
      name: "homebrew-weapons",
      component: HomebrewWeaponsComponent,
    },
    {
      name: "homebrew-armors",
      component: HomebrewArmorsComponent,
    },
    {
      name: "homebrew-items",
      component: HomebrewItemsComponent,
    },
    {
      name: "homebrew-npcs",
      component: HomebrewNpcsComponent,
    },
    {
      name: "homebrew-spells",
      component: HomebrewSpellsComponent,
    },
  ],
};

// ! 5E Constants
export const FIFTH_EDITION_RESOURCES = {
  // * General
  GENERAL: {
    ALIGNMENTS: [
      "Chaotic Good",
      "Neutral Good",
      "Lawful Good",
      "Chaotic Neutral",
      "Neutral",
      "Lawful Neutral",
      "Chaotic Evil",
      "Neutral Evil",
      "Lawful Evil",
      "Unaligned",
    ],

    CURRENCIES: ["cp", "sp", "ep", "gp", "pp"],
    DAMAGE_TYPES: [
      "Acid",
      "Bludgeoning",
      "Cold",
      "Fire",
      "Force",
      "Lightning",
      "Necrotic",
      "Piercing",
      "Poison",
      "Psychic",
      "Radiant",
      "Slashing",
      "Thunder",
    ],
    DICE: ["d4", "d6", "d8", "d10", "d12", "d20"],
    LANGUAGES: {
      STANDARD: [
        "Common",
        "Dwarvish",
        "Elvish",
        "Giant",
        "Gnomish",
        "Goblin",
        "Halfling",
        "Orc",
      ],
      EXOTIC: [
        "Abyssal",
        "Celestial",
        "Draconic",
        "Deep Speech",
        "Infernal",
        "Primordial",
        "Sylvan",
        "Undercommon",
      ],
    },
    MOVEMENTS: ["Walk", "Fly", "Swim"],
    RARITIES: [
      "Common",
      "Uncommon",
      "Rare",
      "Very Rare",
      "Legendary",
      "Artifact",
    ],
    RANGES: ["Melee", "Ranged"],
    SIZES: ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"],
    SENSES: [
      "Blindsight",
      "Darkvision",
      "Tremorsense",
      "Truesight",
      "Passive Perception",
    ],
  },

  // * Weapons
  WEAPONS: {
    WEAPON_PROPERTIES: [
      "Ammunition",
      "Finesse",
      "Heavy",
      "Light",
      "Loading",
      "Range",
      "Reach",
      "Special",
      "Thrown",
      "Two Handed",
      "Versatile",
    ],
  },

  // * Armors
  ARMORS: {
    ARMOR_CATEGORIES: ["Light", "Medium", "Heavy", "Shield"],
  },

  // * Spells
  SPELLS: {
    SPELL_COMPONENTS: ["V", "S", "M"],
  },

  // * Monsters
  MONSTERS: {},
};
