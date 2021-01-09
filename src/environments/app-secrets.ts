// API Routes
export const ROUTES = {
  // Auth
  AUTH: {
    USERS: "api/users",
    PERMISSIONS: "api/permissions",
    ROLES: "api/roles",
  },
  // Resources
  OFFICIAL: {
    BASE: "https://www.dnd5eapi.co",
    WEAPONS: "https://www.dnd5eapi.co/api/equipment-categories/weapon",
    ARMORS: "https://www.dnd5eapi.co/api/equipment-categories/armor",
    EQUIPMENT: "https://www.dnd5eapi.co/api/equipment",
    MAGIC_ITEMS: "https://www.dnd5eapi.co/api/magic-items",
    MONSTERS: "https://www.dnd5eapi.co/api/monsters",
    SPELLS: "https://www.dnd5eapi.co/api/spells",
  },
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
};

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
    SENSES: ["Blindsight", "Darkvision", "Tremorsense", "Passive Perception"],
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
      "TwoHanded",
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
