// Components
// Official
import { WeaponsComponent } from "src/app/views/pages/the-compendium-pages/_resource-tables/official/weapons/weapons.component";
import { ArmorsComponent } from "src/app/views/pages/the-compendium-pages/_resource-tables/official/armor/armor.component";
import { ItemsComponent } from "src/app/views/pages/the-compendium-pages/_resource-tables/official/items/items.component";
import { NpcsComponent } from "src/app/views/pages/the-compendium-pages/_resource-tables/official/npcs/npcs.component";
import { SpellsComponent } from "src/app/views/pages/the-compendium-pages/_resource-tables/official/spells/spells.component";
// Homebrew
import { HomebrewWeaponsComponent } from "src/app/views/pages/the-compendium-pages/_resource-tables/homebrew/homebrew-weapons/homebrew-weapons.component";
import { HomebrewArmorsComponent } from "src/app/views/pages/the-compendium-pages/_resource-tables/homebrew/homebrew-armor/homebrew-armor.component";
import { HomebrewItemsComponent } from "src/app/views/pages/the-compendium-pages/_resource-tables/homebrew/homebrew-items/homebrew-items.component";
import { HomebrewNpcsComponent } from "src/app/views/pages/the-compendium-pages/_resource-tables/homebrew/homebrew-npcs/homebrew-npcs.component";
import { HomebrewSpellsComponent } from "src/app/views/pages/the-compendium-pages/_resource-tables/homebrew/homebrew-spells/homebrew-spells.component";

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
    // Dashboard
    DASHBOARD: {
      GET_DASHBOARD:
        "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/users/dashboard/get/",
      UPDATE_DASHBOARD:
        "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/users/dashboard/update/",
    },

    // Storyboard
    STORYBOARD: {
      GET_STORYBOARD:
        "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/users/storyboard/get/",
      UPDATE_STORYBOARD:
        "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/users/storyboard/update/",
    },

    // Session Summaries
    SESSIONS: {
      GET_SESSIONS:
        "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/users/sessions/get/",
      UPDATE_SESSIONS:
        "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/users/sessions/update/",
    },
  },
};

// ! TC Constants
export const TC_CONSTANTS = {
  DASHBOARD_COMPONENTS: {
    // Official
    weapons: {
      index: "weapons",
      name: "Weapons",
      icon: "fas fa-hammer",
      component: WeaponsComponent,
    },
    armors: {
      index: "armors",
      name: "Armors",
      icon: "fas fa-shield-alt",
      component: ArmorsComponent,
    },
    items: {
      index: "items",
      name: "Items",
      icon: "fas fa-glass-martini",
      component: ItemsComponent,
    },
    monsters: {
      index: "monsters",
      name: "Monsters",
      icon: "fab fa-optin-monster",
      component: NpcsComponent,
    },
    spells: {
      index: "spells",
      name: "Spells",
      icon: "fas fa-hat-wizard",
      component: SpellsComponent,
    },

    // Homebrew
    "homebrew-weapons": {
      index: "homebrew-weapons",
      name: "Homebrew Weapons",
      icon: "far fa-star",
      component: HomebrewWeaponsComponent,
    },
    "homebrew-armors": {
      index: "homebrew-armors",
      name: "Homebrew Armors",
      icon: "far fa-star",
      component: HomebrewArmorsComponent,
    },
    "homebrew-monsters": {
      index: "homebrew-monsters",
      name: "Homebrew Monsters",
      icon: "far fa-star",
      component: HomebrewNpcsComponent,
    },
    "homebrew-items": {
      index: "homebrew-items",
      name: "Homebrew Items",
      icon: "far fa-star",
      component: HomebrewItemsComponent,
    },
    "homebrew-spells": {
      index: "homebrew-spells",
      name: "Homebrew Spells",
      icon: "far fa-star",
      component: HomebrewSpellsComponent,
    },
  },
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
