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
  RARITIES: [
    "Common",
    "Uncommon",
    "Rare",
    "Very Rare",
    "Legendary",
    "Artifact",
  ],
  CURRENCIES: ["cp", "sp", "ep", "gp", "pp"],
  ARMOR_CATEGORIES: ["Light", "Medium", "Heavy", "Shield"],
  DICE: ["d4", "d6", "d8", "d10", "d12", "d20"],
  RANGES: ["Melee", "Ranged"],
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
};
