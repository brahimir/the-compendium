// ! TC API Routes
export const API_ROUTES = {
  // * Auth
  AUTH: {
    USERS: {
      LOGIN: "", // todo
      GET_ALL_USERS: "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/users/",
      REGISTER_USER:
        "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/users/register-user",
    },
    // todo - nest these with GETs like the USERS above.
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
    WEAPONS: "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/homebrewWeapons",
    ARMORS: "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/homebrewArmors",
    ITEMS: "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/homebrewItems",
    NPCS: "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/homebrewNpcs",
    SPELLS: "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/homebrewSpells",
  },

  // Dashboard
  DASHBOARD: {
    GET_DASHBOARD:
      "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/users/dashboard/get/",
    UPDATE_DASHBOARD:
      "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/users/dashboard/update/",
  },

  // Virtual Screen
  VIRTUAL_SCREEN: {
    GET_VIRTUAL_SCREEN:
      "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/users/virtual-screen/get/",
    UPDATE_VIRTUAL_SCREEN:
      "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/users/virtual-screen/update/",
  },

  // * DM Tools
  DM_TOOLS: {
    // Combat Tracker
    COMBAT_TRACKER: {
      GET_COMBAT_TRACKER:
        "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/users/combat-tracker/get/",
      UPDATE_COMBAT_TRACKER:
        "https://us-central1-the-compendium-server.cloudfunctions.net/app/api/users/combat-tracker/update/",
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
      STANDARD: ["Common", "Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"],
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
    RARITIES: ["Common", "Uncommon", "Rare", "Very Rare", "Legendary", "Artifact"],
    RANGES: ["Melee", "Ranged"],
    SIZES: ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"],
    SENSES: ["Blindsight", "Darkvision", "Tremorsense", "Truesight", "Passive Perception"],
  },
  CONDITIONS: [
    {
      condition: "Blinded",
      description: [
        "A blinded creature can’t see and automatically fails any ability check that requires sight.",
        "Attack Rolls against the creature have advantage, and the creature’s Attack Rolls have disadvantage.",
      ],
    },
    {
      condition: "Charmed",
      description: [
        "A charmed creature can’t Attack the charmer or target the charmer with harmful Abilities or magical Effects.",
        "The charmer has advantage on any ability check to interact socially with the creature.",
      ],
    },
    {
      condition: "Deafened",
      description: [
        "A deafened creature can’t hear and automatically fails any ability check that requires hearing.",
      ],
    },
    {
      condition: "Frightened",
      description: [
        "A frightened creature has disadvantage on Ability Checks and Attack Rolls while the source of its fear is within Line of Sight.",
        "The creature can’t willingly move closer to the source of its fear.",
      ],
    },
    {
      condition: "Grappled",
      description: [
        "A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.",
        "The condition ends if the Grappler is incapacitated (see the condition).",
        "The condition also ends if an Effect removes the grappled creature from the reach of the Grappler or Grappling Effect, such as when a creature is hurled away by the Thunderwave spell.",
      ],
    },
    {
      condition: "Incapacitated",
      description: ["An incapacitated creature can’t take Actions or Reactions."],
    },
    {
      condition: "Invisible",
      description: [
        "An invisible creature is impossible to see without the aid of magic or a Special sense. For the Purpose of Hiding, the creature is heavily obscured. The creature’s location can be detected by any noise it makes or any tracks it leaves.",
        "Attack Rolls against the creature have disadvantage, and the creature’s Attack Rolls have advantage.",
      ],
    },
    {
      condition: "Paralyzed",
      description: [
        "A paralyzed creature is incapacitated (see the condition) and can’t move or speak.",
        "The creature automatically fails Strength and Dexterity Saving Throws.",
        "Attack Rolls against the creature have advantage.",
        "Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.",
      ],
    },
    {
      condition: "Petrified",
      description: [
        "A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.",
        "The creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings.",
        "Attack Rolls against the creature have advantage.",
        "The creature automatically fails Strength and Dexterity Saving Throws.",
        "The creature has Resistance to all damage.",
        "The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.",
      ],
    },
    {
      condition: "Poisoned",
      description: ["A poisoned creature has disadvantage on Attack Rolls and Ability Checks."],
    },
    {
      condition: "Prone",
      description: [
        "A prone creature’s only Movement option is to crawl, unless it stands up and thereby ends the condition.",
        "The creature has disadvantage on Attack Rolls.",
        "An Attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the Attack roll has disadvantage.",
      ],
    },
    {
      condition: "Restrained",
      description: [
        "A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.",
        "Attack Rolls against the creature have advantage, and the creature’s Attack Rolls have disadvantage.",
        "The creature has disadvantage on Dexterity Saving Throws.",
      ],
    },
    {
      condition: "Stunned",
      description: [
        "A stunned creature is incapacitated (see the condition), can’t move, and can speak only falteringly.",
        "The creature automatically fails Strength and Dexterity Saving Throws.",
        "Attack Rolls against the creature have advantage.",
      ],
    },
    {
      condition: "Unconscious",
      description: [
        "An unconscious creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings",
        "The creature drops whatever it’s holding and falls prone.",
        "The creature automatically fails Strength and Dexterity Saving Throws.",
        "Attack Rolls against the creature have advantage.",
        "Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.",
      ],
    },
    {
      condition: "Exhaustion",
      description: [
        "Some Special Abilities and Environmental Hazards, such as starvation and the long-­term Effects of freezing or scorching temperatures, can lead to a Special condition called exhaustion. Exhaustion is measured in six levels. An Effect can give a creature one or more levels of exhaustion, as specified in the effect’s description.",
        "Level 1: Disadvantage on Ability Checks",
        "Level 2: Speed halved",
        "Level 3: Disadvantage on Attack Rolls and Saving Throws",
        "Level 4: Hit point maximum halved",
        "Level 5: Speed reduced to 0",
        "Level 6: Death",
        "If an already exhausted creature suffers another Effect that causes exhaustion, its current level of exhaustion increases by the amount specified in the effect’s description.",
        "A creature suffers the Effect of its current level of exhaustion as well as all lower levels. For example, a creature suffering level 2 exhaustion has its speed halved and has disadvantage on Ability Checks.",
        "An Effect that removes exhaustion reduces its level as specified in the effect’s description, with all exhaustion Effects Ending if a creature’s exhaustion level is reduced below 1.",
        "Finishing a Long Rest reduces a creature’s exhaustion level by 1, provided that the creature has also ingested some food and drink.",
      ],
    },
  ],

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
