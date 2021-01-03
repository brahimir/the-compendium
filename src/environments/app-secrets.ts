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
    DICE: ["d4", "d6", "d8", "d10", "d12", "d20"],
    CURRENCIES: ["cp", "sp", "ep", "gp", "pp"],
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
  MONSTERS: {
    // TODO - refactor
    MONSTER_PROFICIENCIES: [
      {
        index: "alchemists-supplies",
        name: "Alchemist's supplies",
        url: "/api/proficiencies/alchemists-supplies",
      },
      {
        index: "all-armor",
        name: "All armor",
        url: "/api/proficiencies/all-armor",
      },
      {
        index: "bagpipes",
        name: "Bagpipes",
        url: "/api/proficiencies/bagpipes",
      },
      {
        index: "battleaxes",
        name: "Battleaxes",
        url: "/api/proficiencies/battleaxes",
      },
      {
        index: "blowguns",
        name: "Blowguns",
        url: "/api/proficiencies/blowguns",
      },
      {
        index: "breastplate",
        name: "Breastplate",
        url: "/api/proficiencies/breastplate",
      },
      {
        index: "brewers-supplies",
        name: "Brewer's supplies",
        url: "/api/proficiencies/brewers-supplies",
      },
      {
        index: "calligraphers-supplies",
        name: "Calligrapher's supplies",
        url: "/api/proficiencies/calligraphers-supplies",
      },
      {
        index: "carpenters-tools",
        name: "Carpenter's tools",
        url: "/api/proficiencies/carpenters-tools",
      },
      {
        index: "cartographers-tools",
        name: "Cartographer's tools",
        url: "/api/proficiencies/cartographers-tools",
      },
      {
        index: "chain-mail",
        name: "Chain Mail",
        url: "/api/proficiencies/chain-mail",
      },
      {
        index: "chain-shirt",
        name: "Chain Shirt",
        url: "/api/proficiencies/chain-shirt",
      },
      {
        index: "clubs",
        name: "Clubs",
        url: "/api/proficiencies/clubs",
      },
      {
        index: "cobblers-tools",
        name: "Cobbler's tools",
        url: "/api/proficiencies/cobblers-tools",
      },
      {
        index: "cooks-utensils",
        name: "Cook's utensils",
        url: "/api/proficiencies/cooks-utensils",
      },
      {
        index: "crossbows-hand",
        name: "Crossbows, hand",
        url: "/api/proficiencies/crossbows-hand",
      },
      {
        index: "crossbows-heavy",
        name: "Crossbows, heavy",
        url: "/api/proficiencies/crossbows-heavy",
      },
      {
        index: "crossbows-light",
        name: "Crossbows, light",
        url: "/api/proficiencies/crossbows-light",
      },
      {
        index: "daggers",
        name: "Daggers",
        url: "/api/proficiencies/daggers",
      },
      {
        index: "darts",
        name: "Darts",
        url: "/api/proficiencies/darts",
      },
      {
        index: "dice-set",
        name: "Dice Set",
        url: "/api/proficiencies/dice-set",
      },
      {
        index: "disguise-kit",
        name: "Disguise kit",
        url: "/api/proficiencies/disguise-kit",
      },
      {
        index: "drum",
        name: "Drum",
        url: "/api/proficiencies/drum",
      },
      {
        index: "dulcimer",
        name: "Dulcimer",
        url: "/api/proficiencies/dulcimer",
      },
      {
        index: "flails",
        name: "Flails",
        url: "/api/proficiencies/flails",
      },
      {
        index: "flute",
        name: "Flute",
        url: "/api/proficiencies/flute",
      },
      {
        index: "forgery-kit",
        name: "Forgery kit",
        url: "/api/proficiencies/forgery-kit",
      },
      {
        index: "glaives",
        name: "Glaives",
        url: "/api/proficiencies/glaives",
      },
      {
        index: "glassblowers-tools",
        name: "Glassblower's tools",
        url: "/api/proficiencies/glassblowers-tools",
      },
      {
        index: "greataxes",
        name: "Greataxes",
        url: "/api/proficiencies/greataxes",
      },
      {
        index: "greatclubs",
        name: "Greatclubs",
        url: "/api/proficiencies/greatclubs",
      },
      {
        index: "greatswords",
        name: "Greatswords",
        url: "/api/proficiencies/greatswords",
      },
      {
        index: "halberds",
        name: "Halberds",
        url: "/api/proficiencies/halberds",
      },
      {
        index: "half-plate",
        name: "Half Plate",
        url: "/api/proficiencies/half-plate",
      },
      {
        index: "handaxes",
        name: "Handaxes",
        url: "/api/proficiencies/handaxes",
      },
      {
        index: "heavy-armor",
        name: "Heavy armor",
        url: "/api/proficiencies/heavy-armor",
      },
      {
        index: "herbalism-kit",
        name: "Herbalism Kit",
        url: "/api/proficiencies/herbalism-kit",
      },
      {
        index: "hide",
        name: "Hide",
        url: "/api/proficiencies/hide",
      },
      {
        index: "horn",
        name: "Horn",
        url: "/api/proficiencies/horn",
      },
      {
        index: "javelins",
        name: "Javelins",
        url: "/api/proficiencies/javelins",
      },
      {
        index: "jewelers-tools",
        name: "Jeweler's tools",
        url: "/api/proficiencies/jewelers-tools",
      },
      {
        index: "lances",
        name: "Lances",
        url: "/api/proficiencies/lances",
      },
      {
        index: "land-vehicles",
        name: "Land Vehicles",
        url: "/api/proficiencies/land-vehicles",
      },
      {
        index: "leather",
        name: "Leather",
        url: "/api/proficiencies/leather",
      },
      {
        index: "leatherworkers-tools",
        name: "Leatherworker's tools",
        url: "/api/proficiencies/leatherworkers-tools",
      },
      {
        index: "light-armor",
        name: "Light armor",
        url: "/api/proficiencies/light-armor",
      },
      {
        index: "light-hammers",
        name: "Light hammers",
        url: "/api/proficiencies/light-hammers",
      },
      {
        index: "longbows",
        name: "Longbows",
        url: "/api/proficiencies/longbows",
      },
      {
        index: "longswords",
        name: "Longswords",
        url: "/api/proficiencies/longswords",
      },
      {
        index: "lute",
        name: "Lute",
        url: "/api/proficiencies/lute",
      },
      {
        index: "lyre",
        name: "Lyre",
        url: "/api/proficiencies/lyre",
      },
      {
        index: "maces",
        name: "Maces",
        url: "/api/proficiencies/maces",
      },
      {
        index: "martial-weapons",
        name: "Martial weapons",
        url: "/api/proficiencies/martial-weapons",
      },
      {
        index: "masons-tools",
        name: "Mason's tools",
        url: "/api/proficiencies/masons-tools",
      },
      {
        index: "mauls",
        name: "Mauls",
        url: "/api/proficiencies/mauls",
      },
      {
        index: "medium-armor",
        name: "Medium armor",
        url: "/api/proficiencies/medium-armor",
      },
      {
        index: "morningstars",
        name: "Morningstars",
        url: "/api/proficiencies/morningstars",
      },
      {
        index: "navigators-tools",
        name: "Navigator's Tools",
        url: "/api/proficiencies/navigators-tools",
      },
      {
        index: "nets",
        name: "Nets",
        url: "/api/proficiencies/nets",
      },
      {
        index: "padded",
        name: "Padded",
        url: "/api/proficiencies/padded",
      },
      {
        index: "painters-supplies",
        name: "Painter's supplies",
        url: "/api/proficiencies/painters-supplies",
      },
      {
        index: "pan-flute",
        name: "Pan flute",
        url: "/api/proficiencies/pan-flute",
      },
      {
        index: "pikes",
        name: "Pikes",
        url: "/api/proficiencies/pikes",
      },
      {
        index: "plate",
        name: "Plate",
        url: "/api/proficiencies/plate",
      },
      {
        index: "playing-card-set",
        name: "Playing card set",
        url: "/api/proficiencies/playing-card-set",
      },
      {
        index: "poisoners-kit",
        name: "Poisoner's Kit",
        url: "/api/proficiencies/poisoners-kit",
      },
      {
        index: "potters-tools",
        name: "Potter's tools",
        url: "/api/proficiencies/potters-tools",
      },
      {
        index: "quarterstaffs",
        name: "Quarterstaffs",
        url: "/api/proficiencies/quarterstaffs",
      },
      {
        index: "rapiers",
        name: "Rapiers",
        url: "/api/proficiencies/rapiers",
      },
      {
        index: "ring-mail",
        name: "Ring Mail",
        url: "/api/proficiencies/ring-mail",
      },
      {
        index: "saving-throw-cha",
        name: "Saving Throw: CHA",
        url: "/api/proficiencies/saving-throw-cha",
      },
      {
        index: "saving-throw-con",
        name: "Saving Throw: CON",
        url: "/api/proficiencies/saving-throw-con",
      },
      {
        index: "saving-throw-dex",
        name: "Saving Throw: DEX",
        url: "/api/proficiencies/saving-throw-dex",
      },
      {
        index: "saving-throw-int",
        name: "Saving Throw: INT",
        url: "/api/proficiencies/saving-throw-int",
      },
      {
        index: "saving-throw-str",
        name: "Saving Throw: STR",
        url: "/api/proficiencies/saving-throw-str",
      },
      {
        index: "saving-throw-wis",
        name: "Saving Throw: WIS",
        url: "/api/proficiencies/saving-throw-wis",
      },
      {
        index: "scale-mail",
        name: "Scale Mail",
        url: "/api/proficiencies/scale-mail",
      },
      {
        index: "scimitars",
        name: "Scimitars",
        url: "/api/proficiencies/scimitars",
      },
      {
        index: "shawm",
        name: "Shawm",
        url: "/api/proficiencies/shawm",
      },
      {
        index: "shields",
        name: "Shields",
        url: "/api/proficiencies/shields",
      },
      {
        index: "shortbows",
        name: "Shortbows",
        url: "/api/proficiencies/shortbows",
      },
      {
        index: "shortswords",
        name: "Shortswords",
        url: "/api/proficiencies/shortswords",
      },
      {
        index: "sickles",
        name: "Sickles",
        url: "/api/proficiencies/sickles",
      },
      {
        index: "simple-weapons",
        name: "Simple weapons",
        url: "/api/proficiencies/simple-weapons",
      },
      {
        index: "skill-acrobatics",
        name: "Skill: Acrobatics",
        url: "/api/proficiencies/skill-acrobatics",
      },
      {
        index: "skill-animal-handling",
        name: "Skill: Animal Handling",
        url: "/api/proficiencies/skill-animal-handling",
      },
      {
        index: "skill-arcana",
        name: "Skill: Arcana",
        url: "/api/proficiencies/skill-arcana",
      },
      {
        index: "skill-athletics",
        name: "Skill: Athletics",
        url: "/api/proficiencies/skill-athletics",
      },
      {
        index: "skill-deception",
        name: "Skill: Deception",
        url: "/api/proficiencies/skill-deception",
      },
      {
        index: "skill-history",
        name: "Skill: History",
        url: "/api/proficiencies/skill-history",
      },
      {
        index: "skill-insight",
        name: "Skill: Insight",
        url: "/api/proficiencies/skill-insight",
      },
      {
        index: "skill-intimidation",
        name: "Skill: Intimidation",
        url: "/api/proficiencies/skill-intimidation",
      },
      {
        index: "skill-investigation",
        name: "Skill: Investigation",
        url: "/api/proficiencies/skill-investigation",
      },
      {
        index: "skill-medicine",
        name: "Skill: Medicine",
        url: "/api/proficiencies/skill-medicine",
      },
      {
        index: "skill-nature",
        name: "Skill: Nature",
        url: "/api/proficiencies/skill-nature",
      },
      {
        index: "skill-perception",
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
      },
      {
        index: "skill-performance",
        name: "Skill: Performance",
        url: "/api/proficiencies/skill-performance",
      },
      {
        index: "skill-persuasion",
        name: "Skill: Persuasion",
        url: "/api/proficiencies/skill-persuasion",
      },
      {
        index: "skill-religion",
        name: "Skill: Religion",
        url: "/api/proficiencies/skill-religion",
      },
      {
        index: "skill-sleight-of-hand",
        name: "Skill: Sleight of Hand",
        url: "/api/proficiencies/skill-sleight-of-hand",
      },
      {
        index: "skill-stealth",
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
      },
      {
        index: "skill-survival",
        name: "Skill: Survival",
        url: "/api/proficiencies/skill-survival",
      },
      {
        index: "slings",
        name: "Slings",
        url: "/api/proficiencies/slings",
      },
      {
        index: "smiths-tools",
        name: "Smith's tools",
        url: "/api/proficiencies/smiths-tools",
      },
      {
        index: "spears",
        name: "Spears",
        url: "/api/proficiencies/spears",
      },
      {
        index: "splint",
        name: "Splint",
        url: "/api/proficiencies/splint",
      },
      {
        index: "studded-leather",
        name: "Studded Leather",
        url: "/api/proficiencies/studded-leather",
      },
      {
        index: "thieves-tools",
        name: "Thieves' Tools",
        url: "/api/proficiencies/thieves-tools",
      },
      {
        index: "tinkers-tools",
        name: "Tinker's tools",
        url: "/api/proficiencies/tinkers-tools",
      },
      {
        index: "tridents",
        name: "Tridents",
        url: "/api/proficiencies/tridents",
      },
      {
        index: "viol",
        name: "Viol",
        url: "/api/proficiencies/viol",
      },
      {
        index: "war-picks",
        name: "War picks",
        url: "/api/proficiencies/war-picks",
      },
      {
        index: "warhammers",
        name: "Warhammers",
        url: "/api/proficiencies/warhammers",
      },
      {
        index: "water-vehicles",
        name: "Water Vehicles",
        url: "/api/proficiencies/water-vehicles",
      },
      {
        index: "weavers-tools",
        name: "Weaver's tools",
        url: "/api/proficiencies/weavers-tools",
      },
      {
        index: "whips",
        name: "Whips",
        url: "/api/proficiencies/whips",
      },
      {
        index: "woodcarvers-tools",
        name: "Woodcarver's tools",
        url: "/api/proficiencies/woodcarvers-tools",
      },
    ],
  },
};
