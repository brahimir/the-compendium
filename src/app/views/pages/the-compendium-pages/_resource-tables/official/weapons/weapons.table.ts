import { Weapon } from "../../_models/weapon.model";

export const weapons: Weapon[] = [
  {
    index: "club",
    name: "Club",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Simple",
    weapon_range: "Melee",
    category_range: "Simple Melee",
    cost: { quantity: 1, unit: "sp" },
    damage: {
      damage_dice: "1d4",
      damage_type: {
        index: "bludgeoning",
        name: "Bludgeoning",
        url: "/api/damage-types/bludgeoning"
      }
    },
    range: { normal: 5, long: null },
    weight: 2,
    properties: [
      {
        index: "light",
        name: "Light",
        url: "/api/weapon-properties/light"
      },
      { index: "monk", name: "Monk", url: "/api/weapon-properties/monk" }
    ],
    url: "/api/equipment/club"
  },
  {
    index: "dagger",
    name: "Dagger",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Simple",
    weapon_range: "Melee",
    category_range: "Simple Melee",
    cost: { quantity: 2, unit: "gp" },
    damage: {
      damage_dice: "1d4",
      damage_type: {
        index: "piercing",
        name: "Piercing",
        url: "/api/damage-types/piercing"
      }
    },
    range: { normal: 5, long: null },
    weight: 1,
    properties: [
      {
        index: "finesse",
        name: "Finesse",
        url: "/api/weapon-properties/finesse"
      },
      {
        index: "light",
        name: "Light",
        url: "/api/weapon-properties/light"
      },
      {
        index: "thrown",
        name: "Thrown",
        url: "/api/weapon-properties/thrown"
      },
      { index: "monk", name: "Monk", url: "/api/weapon-properties/monk" }
    ],
    throw_range: { normal: 20, long: 60 },
    url: "/api/equipment/dagger"
  },
  {
    index: "greatclub",
    name: "Greatclub",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Simple",
    weapon_range: "Melee",
    category_range: "Simple Melee",
    cost: { quantity: 2, unit: "sp" },
    damage: {
      damage_dice: "1d8",
      damage_type: {
        index: "bludgeoning",
        name: "Bludgeoning",
        url: "/api/damage-types/bludgeoning"
      }
    },
    range: { normal: 5, long: null },
    weight: 10,
    properties: [
      {
        index: "two-handed",
        name: "Two-Handed",
        url: "/api/weapon-properties/two-handed"
      }
    ],
    url: "/api/equipment/greatclub"
  },
  {
    index: "handaxe",
    name: "Handaxe",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Simple",
    weapon_range: "Melee",
    category_range: "Simple Melee",
    cost: { quantity: 5, unit: "gp" },
    damage: {
      damage_dice: "1d6",
      damage_type: {
        index: "slashing",
        name: "Slashing",
        url: "/api/damage-types/slashing"
      }
    },
    range: { normal: 5, long: null },
    weight: 2,
    properties: [
      {
        index: "light",
        name: "Light",
        url: "/api/weapon-properties/light"
      },
      {
        index: "thrown",
        name: "Thrown",
        url: "/api/weapon-properties/thrown"
      },
      { index: "monk", name: "Monk", url: "/api/weapon-properties/monk" }
    ],
    throw_range: { normal: 20, long: 60 },
    url: "/api/equipment/handaxe"
  },
  {
    index: "javelin",
    name: "Javelin",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Simple",
    weapon_range: "Melee",
    category_range: "Simple Melee",
    cost: { quantity: 5, unit: "sp" },
    damage: {
      damage_dice: "1d6",
      damage_type: {
        index: "piercing",
        name: "Piercing",
        url: "/api/damage-types/piercing"
      }
    },
    range: { normal: 5, long: null },
    weight: 2,
    properties: [
      {
        index: "thrown",
        name: "Thrown",
        url: "/api/weapon-properties/thrown"
      },
      { index: "monk", name: "Monk", url: "/api/weapon-properties/monk" }
    ],
    throw_range: { normal: 30, long: 120 },
    url: "/api/equipment/javelin"
  },
  {
    index: "light-hammer",
    name: "Light hammer",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Simple",
    weapon_range: "Melee",
    category_range: "Simple Melee",
    cost: { quantity: 2, unit: "gp" },
    damage: {
      damage_dice: "1d4",
      damage_type: {
        index: "bludgeoning",
        name: "Bludgeoning",
        url: "/api/damage-types/bludgeoning"
      }
    },
    range: { normal: 5, long: null },
    weight: 2,
    properties: [
      {
        index: "light",
        name: "Light",
        url: "/api/weapon-properties/light"
      },
      {
        index: "thrown",
        name: "Thrown",
        url: "/api/weapon-properties/thrown"
      },
      { index: "monk", name: "Monk", url: "/api/weapon-properties/monk" }
    ],
    throw_range: { normal: 20, long: 60 },
    url: "/api/equipment/light-hammer"
  },
  {
    index: "mace",
    name: "Mace",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Simple",
    weapon_range: "Melee",
    category_range: "Simple Melee",
    cost: { quantity: 5, unit: "gp" },
    damage: {
      damage_dice: "1d6",
      damage_type: {
        index: "bludgeoning",
        name: "Bludgeoning",
        url: "/api/damage-types/bludgeoning"
      }
    },
    range: { normal: 5, long: null },
    weight: 4,
    properties: [{ index: "monk", name: "Monk", url: "/api/weapon-properties/monk" }],
    url: "/api/equipment/mace"
  },
  {
    index: "quarterstaff",
    name: "Quarterstaff",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Simple",
    weapon_range: "Melee",
    category_range: "Simple Melee",
    cost: { quantity: 2, unit: "sp" },
    damage: {
      damage_dice: "1d6",
      damage_type: {
        index: "bludgeoning",
        name: "Bludgeoning",
        url: "/api/damage-types/bludgeoning"
      }
    },
    range: { normal: 5, long: null },
    weight: 4,
    properties: [
      {
        index: "versatile",
        name: "Versatile",
        url: "/api/weapon-properties/versatile"
      },
      { index: "monk", name: "Monk", url: "/api/weapon-properties/monk" }
    ],
    two_handed_damage: {
      damage_dice: "1d8",
      damage_type: {
        index: "bludgeoning",
        name: "Bludgeoning",
        url: "/api/damage-types/bludgeoning"
      }
    },
    url: "/api/equipment/quarterstaff"
  },
  {
    index: "spear",
    name: "Spear",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Simple",
    weapon_range: "Melee",
    category_range: "Simple Melee",
    cost: { quantity: 1, unit: "gp" },
    damage: {
      damage_dice: "1d6",
      damage_type: {
        index: "piercing",
        name: "Piercing",
        url: "/api/damage-types/piercing"
      }
    },
    range: { normal: 5, long: null },
    weight: 3,
    properties: [
      {
        index: "thrown",
        name: "Thrown",
        url: "/api/weapon-properties/thrown"
      },
      {
        index: "versatile",
        name: "Versatile",
        url: "/api/weapon-properties/versatile"
      },
      { index: "monk", name: "Monk", url: "/api/weapon-properties/monk" }
    ],
    throw_range: { normal: 20, long: 60 },
    two_handed_damage: {
      damage_dice: "1d8",
      damage_type: {
        index: "piercing",
        name: "Piercing",
        url: "/api/damage-types/piercing"
      }
    },
    url: "/api/equipment/spear"
  },
  {
    index: "sickle",
    name: "Sickle",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Simple",
    weapon_range: "Melee",
    category_range: "Simple Melee",
    cost: { quantity: 1, unit: "gp" },
    damage: {
      damage_dice: "1d4",
      damage_type: {
        index: "slashing",
        name: "Slashing",
        url: "/api/damage-types/slashing"
      }
    },
    range: { normal: 5, long: null },
    weight: 2,
    properties: [
      {
        index: "light",
        name: "Light",
        url: "/api/weapon-properties/light"
      },
      { index: "monk", name: "Monk", url: "/api/weapon-properties/monk" }
    ],
    url: "/api/equipment/sickle"
  },
  {
    index: "crossbow-light",
    name: "Crossbow, light",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Simple",
    weapon_range: "Ranged",
    category_range: "Simple Ranged",
    cost: { quantity: 25, unit: "gp" },
    damage: {
      damage_dice: "1d8",
      damage_type: {
        index: "piercing",
        name: "Piercing",
        url: "/api/damage-types/piercing"
      }
    },
    range: { normal: 80, long: 320 },
    weight: 5,
    properties: [
      {
        index: "ammunition",
        name: "Ammunition",
        url: "/api/weapon-properties/ammunition"
      },
      {
        index: "loading",
        name: "Loading",
        url: "/api/weapon-properties/loading"
      },
      {
        index: "two-handed",
        name: "Two-Handed",
        url: "/api/weapon-properties/two-handed"
      }
    ],
    url: "/api/equipment/crossbow-light"
  },
  {
    index: "dart",
    name: "Dart",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Simple",
    weapon_range: "Ranged",
    category_range: "Simple Ranged",
    cost: { quantity: 5, unit: "cp" },
    damage: {
      damage_dice: "1d4",
      damage_type: {
        index: "piercing",
        name: "Piercing",
        url: "/api/damage-types/piercing"
      }
    },
    range: { normal: 20, long: 60 },
    weight: 0.25,
    properties: [
      {
        index: "finesse",
        name: "Finesse",
        url: "/api/weapon-properties/finesse"
      },
      {
        index: "thrown",
        name: "Thrown",
        url: "/api/weapon-properties/thrown"
      }
    ],
    throw_range: { normal: 20, long: 60 },
    url: "/api/equipment/dart"
  },
  {
    index: "shortbow",
    name: "Shortbow",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Simple",
    weapon_range: "Ranged",
    category_range: "Simple Ranged",
    cost: { quantity: 25, unit: "gp" },
    damage: {
      damage_dice: "1d6",
      damage_type: {
        index: "piercing",
        name: "Piercing",
        url: "/api/damage-types/piercing"
      }
    },
    range: { normal: 80, long: 320 },
    weight: 2,
    properties: [
      {
        index: "ammunition",
        name: "Ammunition",
        url: "/api/weapon-properties/ammunition"
      },
      {
        index: "two-handed",
        name: "Two-Handed",
        url: "/api/weapon-properties/two-handed"
      }
    ],
    url: "/api/equipment/shortbow"
  },
  {
    index: "sling",
    name: "Sling",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Simple",
    weapon_range: "Ranged",
    category_range: "Simple Ranged",
    cost: { quantity: 1, unit: "sp" },
    damage: {
      damage_dice: "1d4",
      damage_type: {
        index: "bludgeoning",
        name: "Bludgeoning",
        url: "/api/damage-types/bludgeoning"
      }
    },
    range: { normal: 30, long: 120 },
    weight: 0,
    properties: [
      {
        index: "ammunition",
        name: "Ammunition",
        url: "/api/weapon-properties/ammunition"
      }
    ],
    url: "/api/equipment/sling"
  },
  {
    index: "battleaxe",
    name: "Battleaxe",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Melee",
    category_range: "Martial Melee",
    cost: { quantity: 10, unit: "gp" },
    damage: {
      damage_dice: "1d8",
      damage_type: {
        index: "slashing",
        name: "Slashing",
        url: "/api/damage-types/slashing"
      }
    },
    range: { normal: 5, long: null },
    weight: 4,
    properties: [
      {
        index: "versatile",
        name: "Versatile",
        url: "/api/weapon-properties/versatile"
      }
    ],
    two_handed_damage: {
      damage_dice: "1d10",
      damage_type: {
        index: "slashing",
        name: "Slashing",
        url: "/api/damage-types/slashing"
      }
    },
    url: "/api/equipment/battleaxe"
  },
  {
    index: "flail",
    name: "Flail",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Melee",
    category_range: "Martial Melee",
    cost: { quantity: 10, unit: "gp" },
    damage: {
      damage_dice: "1d8",
      damage_type: {
        index: "bludgeoning",
        name: "Bludgeoning",
        url: "/api/damage-types/bludgeoning"
      }
    },
    range: { normal: 5, long: null },
    weight: 2,
    properties: [],
    url: "/api/equipment/flail"
  },
  {
    index: "glaive",
    name: "Glaive",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Melee",
    category_range: "Martial Melee",
    cost: { quantity: 20, unit: "gp" },
    damage: {
      damage_dice: "1d10",
      damage_type: {
        index: "slashing",
        name: "Slashing",
        url: "/api/damage-types/slashing"
      }
    },
    range: { normal: 5, long: null },
    weight: 6,
    properties: [
      {
        index: "heavy",
        name: "Heavy",
        url: "/api/weapon-properties/heavy"
      },
      {
        index: "reach",
        name: "Reach",
        url: "/api/weapon-properties/reach"
      },
      {
        index: "two-handed",
        name: "Two-Handed",
        url: "/api/weapon-properties/two-handed"
      }
    ],
    url: "/api/equipment/glaive"
  },
  {
    index: "greataxe",
    name: "Greataxe",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Melee",
    category_range: "Martial Melee",
    cost: { quantity: 30, unit: "gp" },
    damage: {
      damage_dice: "1d12",
      damage_type: {
        index: "slashing",
        name: "Slashing",
        url: "/api/damage-types/slashing"
      }
    },
    range: { normal: 5, long: null },
    weight: 7,
    properties: [
      {
        index: "heavy",
        name: "Heavy",
        url: "/api/weapon-properties/heavy"
      },
      {
        index: "two-handed",
        name: "Two-Handed",
        url: "/api/weapon-properties/two-handed"
      }
    ],
    url: "/api/equipment/greataxe"
  },
  {
    index: "greatsword",
    name: "Greatsword",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Melee",
    category_range: "Martial Melee",
    cost: { quantity: 50, unit: "gp" },
    damage: {
      damage_dice: "2d6",
      damage_type: {
        index: "slashing",
        name: "Slashing",
        url: "/api/damage-types/slashing"
      }
    },
    range: { normal: 5, long: null },
    weight: 6,
    properties: [
      {
        index: "heavy",
        name: "Heavy",
        url: "/api/weapon-properties/heavy"
      },
      {
        index: "two-handed",
        name: "Two-Handed",
        url: "/api/weapon-properties/two-handed"
      }
    ],
    url: "/api/equipment/greatsword"
  },
  {
    index: "halberd",
    name: "Halberd",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Melee",
    category_range: "Martial Melee",
    cost: { quantity: 20, unit: "gp" },
    damage: {
      damage_dice: "1d10",
      damage_type: {
        index: "slashing",
        name: "Slashing",
        url: "/api/damage-types/slashing"
      }
    },
    range: { normal: 5, long: null },
    weight: 6,
    properties: [
      {
        index: "heavy",
        name: "Heavy",
        url: "/api/weapon-properties/heavy"
      },
      {
        index: "reach",
        name: "Reach",
        url: "/api/weapon-properties/reach"
      },
      {
        index: "two-handed",
        name: "Two-Handed",
        url: "/api/weapon-properties/two-handed"
      }
    ],
    url: "/api/equipment/halberd"
  },
  {
    index: "lance",
    name: "Lance",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Melee",
    category_range: "Martial Melee",
    cost: { quantity: 10, unit: "gp" },
    damage: {
      damage_dice: "1d12",
      damage_type: {
        index: "piercing",
        name: "Piercing",
        url: "/api/damage-types/piercing"
      }
    },
    range: { normal: 5, long: null },
    weight: 6,
    properties: [
      {
        index: "reach",
        name: "Reach",
        url: "/api/weapon-properties/reach"
      },
      {
        index: "special",
        name: "Special",
        url: "/api/weapon-properties/special"
      }
    ],
    special: [
      "You have disadvantage when you use a lance to attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren't mounted."
    ],
    url: "/api/equipment/lance"
  },
  {
    index: "longsword",
    name: "Longsword",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Melee",
    category_range: "Martial Melee",
    cost: { quantity: 15, unit: "gp" },
    damage: {
      damage_dice: "1d8",
      damage_type: {
        index: "slashing",
        name: "Slashing",
        url: "/api/damage-types/slashing"
      }
    },
    range: { normal: 5, long: null },
    weight: 3,
    properties: [
      {
        index: "versatile",
        name: "Versatile",
        url: "/api/weapon-properties/versatile"
      }
    ],
    two_handed_damage: {
      damage_dice: "1d10",
      damage_type: {
        index: "slashing",
        name: "Slashing",
        url: "/api/damage-types/slashing"
      }
    },
    url: "/api/equipment/longsword"
  },
  {
    index: "maul",
    name: "Maul",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Melee",
    category_range: "Martial Melee",
    cost: { quantity: 10, unit: "gp" },
    damage: {
      damage_dice: "2d6",
      damage_type: {
        index: "bludgeoning",
        name: "Bludgeoning",
        url: "/api/damage-types/bludgeoning"
      }
    },
    range: { normal: 5, long: null },
    weight: 10,
    properties: [
      {
        index: "heavy",
        name: "Heavy",
        url: "/api/weapon-properties/heavy"
      },
      {
        index: "two-handed",
        name: "Two-Handed",
        url: "/api/weapon-properties/two-handed"
      }
    ],
    url: "/api/equipment/maul"
  },
  {
    index: "morningstar",
    name: "Morningstar",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Melee",
    category_range: "Martial Melee",
    cost: { quantity: 15, unit: "gp" },
    damage: {
      damage_dice: "1d8",
      damage_type: {
        index: "piercing",
        name: "Piercing",
        url: "/api/damage-types/piercing"
      }
    },
    range: { normal: 5, long: null },
    weight: 4,
    properties: [],
    url: "/api/equipment/morningstar"
  },
  {
    index: "pike",
    name: "Pike",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Melee",
    category_range: "Martial Melee",
    cost: { quantity: 5, unit: "gp" },
    damage: {
      damage_dice: "1d10",
      damage_type: {
        index: "piercing",
        name: "Piercing",
        url: "/api/damage-types/piercing"
      }
    },
    range: { normal: 5, long: null },
    weight: 18,
    properties: [
      {
        index: "heavy",
        name: "Heavy",
        url: "/api/weapon-properties/heavy"
      },
      {
        index: "reach",
        name: "Reach",
        url: "/api/weapon-properties/reach"
      },
      {
        index: "two-handed",
        name: "Two-Handed",
        url: "/api/weapon-properties/two-handed"
      }
    ],
    url: "/api/equipment/pike"
  },
  {
    index: "rapier",
    name: "Rapier",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Melee",
    category_range: "Martial Melee",
    cost: { quantity: 25, unit: "gp" },
    damage: {
      damage_dice: "1d8",
      damage_type: {
        index: "piercing",
        name: "Piercing",
        url: "/api/damage-types/piercing"
      }
    },
    range: { normal: 5, long: null },
    weight: 2,
    properties: [
      {
        index: "finesse",
        name: "Finesse",
        url: "/api/weapon-properties/finesse"
      }
    ],
    url: "/api/equipment/rapier"
  },
  {
    index: "scimitar",
    name: "Scimitar",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Melee",
    category_range: "Martial Melee",
    cost: { quantity: 25, unit: "gp" },
    damage: {
      damage_dice: "1d6",
      damage_type: {
        index: "slashing",
        name: "Slashing",
        url: "/api/damage-types/slashing"
      }
    },
    range: { normal: 5, long: null },
    weight: 3,
    properties: [
      {
        index: "finesse",
        name: "Finesse",
        url: "/api/weapon-properties/finesse"
      },
      {
        index: "light",
        name: "Light",
        url: "/api/weapon-properties/light"
      }
    ],
    url: "/api/equipment/scimitar"
  },
  {
    index: "shortsword",
    name: "Shortsword",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Melee",
    category_range: "Martial Melee",
    cost: { quantity: 10, unit: "gp" },
    damage: {
      damage_dice: "1d6",
      damage_type: {
        index: "piercing",
        name: "Piercing",
        url: "/api/damage-types/piercing"
      }
    },
    range: { normal: 5, long: null },
    weight: 2,
    properties: [
      {
        index: "finesse",
        name: "Finesse",
        url: "/api/weapon-properties/finesse"
      },
      {
        index: "light",
        name: "Light",
        url: "/api/weapon-properties/light"
      },
      { index: "monk", name: "Monk", url: "/api/weapon-properties/monk" }
    ],
    url: "/api/equipment/shortsword"
  },
  {
    index: "trident",
    name: "Trident",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Melee",
    category_range: "Martial Melee",
    cost: { quantity: 5, unit: "gp" },
    damage: {
      damage_dice: "1d6",
      damage_type: {
        index: "slashing",
        name: "Slashing",
        url: "/api/damage-types/slashing"
      }
    },
    range: { normal: 5, long: null },
    weight: 4,
    properties: [
      {
        index: "thrown",
        name: "Thrown",
        url: "/api/weapon-properties/thrown"
      },
      {
        index: "versatile",
        name: "Versatile",
        url: "/api/weapon-properties/versatile"
      }
    ],
    throw_range: { normal: 20, long: 60 },
    two_handed_damage: {
      damage_dice: "1d8",
      damage_type: {
        index: "piercing",
        name: "Piercing",
        url: "/api/damage-types/piercing"
      }
    },
    url: "/api/equipment/trident"
  },
  {
    index: "war-pick",
    name: "War pick",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Melee",
    category_range: "Martial Melee",
    cost: { quantity: 5, unit: "gp" },
    damage: {
      damage_dice: "1d8",
      damage_type: {
        index: "piercing",
        name: "Piercing",
        url: "/api/damage-types/piercing"
      }
    },
    range: { normal: 5, long: null },
    weight: 2,
    properties: [],
    url: "/api/equipment/war-pick"
  },
  {
    index: "warhammer",
    name: "Warhammer",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Melee",
    category_range: "Martial Melee",
    cost: { quantity: 15, unit: "gp" },
    damage: {
      damage_dice: "1d8",
      damage_type: {
        index: "bludgeoning",
        name: "Bludgeoning",
        url: "/api/damage-types/bludgeoning"
      }
    },
    range: { normal: 5, long: null },
    weight: 2,
    properties: [
      {
        index: "versatile",
        name: "Versatile",
        url: "/api/weapon-properties/versatile"
      }
    ],
    two_handed_damage: {
      damage_dice: "1d10",
      damage_type: {
        index: "bludgeoning",
        name: "Bludgeoning",
        url: "/api/damage-types/bludgeoning"
      }
    },
    url: "/api/equipment/warhammer"
  },
  {
    index: "whip",
    name: "Whip",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Melee",
    category_range: "Martial Melee",
    cost: { quantity: 2, unit: "gp" },
    damage: {
      damage_dice: "1d4",
      damage_type: {
        index: "slashing",
        name: "Slashing",
        url: "/api/damage-types/slashing"
      }
    },
    range: { normal: 5, long: null },
    weight: 3,
    properties: [
      {
        index: "finesse",
        name: "Finesse",
        url: "/api/weapon-properties/finesse"
      },
      {
        index: "reach",
        name: "Reach",
        url: "/api/weapon-properties/reach"
      }
    ],
    url: "/api/equipment/whip"
  },
  {
    index: "blowgun",
    name: "Blowgun",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Ranged",
    category_range: "Martial Ranged",
    cost: { quantity: 10, unit: "gp" },
    damage: {
      damage_dice: "1d1",
      damage_type: {
        index: "piercing",
        name: "Piercing",
        url: "/api/damage-types/piercing"
      }
    },
    range: { normal: 25, long: 100 },
    weight: 1,
    properties: [
      {
        index: "ammunition",
        name: "Ammunition",
        url: "/api/weapon-properties/ammunition"
      },
      {
        index: "loading",
        name: "Loading",
        url: "/api/weapon-properties/loading"
      }
    ],
    url: "/api/equipment/blowgun"
  },
  {
    index: "crossbow-hand",
    name: "Crossbow, hand",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Ranged",
    category_range: "Martial Ranged",
    cost: { quantity: 75, unit: "gp" },
    damage: {
      damage_dice: "1d6",
      damage_type: {
        index: "piercing",
        name: "Piercing",
        url: "/api/damage-types/piercing"
      }
    },
    range: { normal: 30, long: 120 },
    weight: 3,
    properties: [
      {
        index: "ammunition",
        name: "Ammunition",
        url: "/api/weapon-properties/ammunition"
      },
      {
        index: "light",
        name: "Light",
        url: "/api/weapon-properties/light"
      },
      {
        index: "loading",
        name: "Loading",
        url: "/api/weapon-properties/loading"
      }
    ],
    url: "/api/equipment/crossbow-hand"
  },
  {
    index: "crossbow-heavy",
    name: "Crossbow, heavy",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Ranged",
    category_range: "Martial Ranged",
    cost: { quantity: 50, unit: "gp" },
    damage: {
      damage_dice: "1d10",
      damage_type: {
        index: "piercing",
        name: "Piercing",
        url: "/api/damage-types/piercing"
      }
    },
    range: { normal: 100, long: 400 },
    weight: 18,
    properties: [
      {
        index: "ammunition",
        name: "Ammunition",
        url: "/api/weapon-properties/ammunition"
      },
      {
        index: "light",
        name: "Light",
        url: "/api/weapon-properties/light"
      },
      {
        index: "loading",
        name: "Loading",
        url: "/api/weapon-properties/loading"
      },
      {
        index: "two-handed",
        name: "Two-Handed",
        url: "/api/weapon-properties/two-handed"
      }
    ],
    url: "/api/equipment/crossbow-heavy"
  },
  {
    index: "longbow",
    name: "Longbow",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Ranged",
    category_range: "Martial Ranged",
    cost: { quantity: 50, unit: "gp" },
    damage: {
      damage_dice: "1d8",
      damage_type: {
        index: "piercing",
        name: "Piercing",
        url: "/api/damage-types/piercing"
      }
    },
    range: { normal: 150, long: 600 },
    weight: 2,
    properties: [
      {
        index: "ammunition",
        name: "Ammunition",
        url: "/api/weapon-properties/ammunition"
      },
      {
        index: "heavy",
        name: "Heavy",
        url: "/api/weapon-properties/heavy"
      },
      {
        index: "two-handed",
        name: "Two-Handed",
        url: "/api/weapon-properties/two-handed"
      }
    ],
    url: "/api/equipment/longbow"
  },
  {
    index: "net",
    name: "Net",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    weapon_category: "Martial",
    weapon_range: "Ranged",
    category_range: "Martial Ranged",
    cost: { quantity: 1, unit: "gp" },
    range: { normal: 5, long: 15 },
    weight: 3,
    properties: [
      {
        index: "thrown",
        name: "Thrown",
        url: "/api/weapon-properties/thrown"
      },
      {
        index: "special",
        name: "Special",
        url: "/api/weapon-properties/special"
      }
    ],
    special: [
      "A Large or smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net. When you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardless of the number of attacks you can normally make."
    ],
    throw_range: { normal: 5, long: 15 },
    url: "/api/equipment/net"
  },
  {
    index: "berserker-axe",
    name: "Berserker Axe",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (any axe), rare (requires attunement)",
      "You gain a +1 bonus to Attack and Damage Rolls made with this Magic Weapon. In addition, while you are attuned to this weapon, your Hit Points maximum increases by 1 for each level you have attained.",
      "Curse. This axe is Cursed, and becoming attuned to it extends the curse to you. As long as you remain Cursed, you are unwilling to part with the axe, keeping it within reach at all times. You also have disadvantage on Attack rolls with Weapons other than this one, unless no foe is within 60 feet of you that you can see or hear.",
      "Whenever a Hostile creature damages you while the axe is in your possession, you must succeed on a DC 15 Wisdom saving throw or go berserk. While berserk, you must use your action each round to Attack the creature nearest to you with the axe. If you can make extra attacks as part of the Attack action, you use those extra attacks, moving to Attack the next nearest creature after you fell your current target. If you have multiple possible Targets, you Attack one at random. You are berserk until you start Your Turn with no creatures within 60 feet of you that you can see or hear."
    ],
    url: "/api/magic-items/berserker-axe"
  },
  {
    index: "dagger-of-venom",
    name: "Dagger of Venom",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (dagger), rare",
      "You gain a +1 bonus to attack and damage rolls made with this magic weapon.",
      "You can use an action to cause thick, black poison to coat the blade. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 2d10 poison damage and become poisoned for 1 minute. The dagger can't be used this way again until the next dawn."
    ],
    url: "/api/magic-items/dagger-of-venom"
  },
  {
    index: "dancing-sword",
    name: "Dancing Sword",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (any sword), very rare (requires attunement)",
      "You can use a bonus action to toss this magic sword into the air and speak the command word. When you do so, the sword begins to hover, flies up to 30 feet, and attacks one creature of your choice within 5 feet of it. The sword uses your attack roll and ability score modifier to damage rolls.",
      "While the sword hovers, you can use a bonus action to cause it to fly up to 30 feet to another spot within 30 feet of you. As part of the same bonus action, you can cause the sword to attack one creature within 5 feet of it.",
      "After the hovering sword attacks for the fourth time, it flies up to 30 feet and tries to return to your hand. If you have no hand free, it falls to the ground at your feet. If the sword has no unobstructed path to you, it moves as close to you as it can and then falls to the ground. It also ceases to hover if you grasp it or move more than 30 feet away from it."
    ],
    url: "/api/magic-items/dancing-sword"
  },
  {
    index: "defender",
    name: "Defender",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (any sword), legendary (requires attunement)",
      "You gain a +3 bonus to attack and damage rolls made with this magic weapon.",
      "The first time you attack with the sword on each of your turns, you can transfer some or all of the sword's bonus to your Armor Class, instead of using the bonus on any attacks that turn. For example, you could reduce the bonus to your attack and damage rolls to +1 and gain a +2 bonus to AC. The adjusted bonuses remain in effect until the start of your next turn, although you must hold the sword to gain a bonus to AC from it."
    ],
    url: "/api/magic-items/defender"
  },
  {
    index: "dragon-slayer",
    name: "Dragon Slayer",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (any sword), rare",
      "You gain a +1 bonus to attack and damage rolls made with this magic weapon.",
      'When you hit a dragon with this weapon, the dragon takes an extra 3d6 damage of the weapon\'s type. For the purpose of this weapon, "dragon" refers to any creature with the dragon type, including dragon turtles and wyverns.'
    ],
    url: "/api/magic-items/dragon-slayer"
  },
  {
    index: "dwarven-thrower",
    name: "Dwarven Thrower",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (warhammer), very rare (requires attunement by a dwarf)",
      "You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 damage or, if the target is a giant, 2d8 damage. Immediately after the attack, the weapon flies back to your hand."
    ],
    url: "/api/magic-items/dwarven-thrower"
  },
  {
    index: "flame-tongue",
    name: "Flame Tongue",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (any sword), rare (requires attunement)",
      "You can use a bonus action to speak this magic sword's command word, causing flames to erupt from the blade. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the sword is ablaze, it deals an extra 2d6 fire damage to any target it hits. The flames last until you use a bonus action to speak the command word again or until you drop or sheathe the sword."
    ],
    url: "/api/magic-items/flame-tongue"
  },
  {
    index: "frost-brand",
    name: "Frost Brand",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (any sword), very rare (requires attunement)",
      "When you hit with an attack using this magic sword, the target takes an extra 1d6 cold damage. In addition, while you hold the sword, you have resistance to fire damage.",
      "In freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.",
      "When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of you. This property can be used no more than once per hour."
    ],
    url: "/api/magic-items/frost-brand"
  },
  {
    index: "giant-slayer",
    name: "Giant Slayer",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (any axe or sword), rare",
      "You gain a +1 bonus to attack and damage rolls made with this magic weapon.",
      'When you hit a giant with it, the giant takes an extra 2d6 damage of the weapon\'s type and must succeed on a DC 15 Strength saving throw or fall prone. For the purpose of this weapon, "giant" refers to any creature with the giant type, including ettins and trolls.'
    ],
    url: "/api/magic-items/giant-slayer"
  },
  {
    index: "hammer-of-thunderbolts",
    name: "Hammer of Thunderbolts",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (maul), legendary",
      "You gain a +1 bonus to attack and damage rolls made with this magic weapon.",
      "Giant's Bane (Requires Attunement). You must be wearing a belt of giant strength (any variety) and gauntlets of ogre power to attune to this weapon. The attunement ends if you take off either of those items. While you are attuned to this weapon and holding it, your Strength score increases by 4 and can exceed 20, but not 30. When you roll a 20 on an attack roll made with this weapon against a giant, the giant must succeed on a DC 17 Constitution saving throw or die.",
      "The hammer also has 5 charges. While attuned to it, you can expend 1 charge and make a ranged weapon attack with the hammer, hurling it as if it had the thrown property with a normal range of 20 feet and a long range of 60 feet. If the attack hits, the hammer unleashes a thunderclap audible out to 300 feet. The target and every creature within 30 feet of it must succeed on a DC 17 Constitution saving throw or be stunned until the end of your next turn. The hammer regains 1d4 + 1 expended charges daily at dawn."
    ],
    url: "/api/magic-items/hammer-of-thunderbolts"
  },
  {
    index: "javelin-of-lightning",
    name: "Javelin of Lightning",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (javelin), uncommon",
      "This javelin is a magic weapon. When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.",
      "The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon."
    ],
    url: "/api/magic-items/javelin-of-lightning"
  },
  {
    index: "luck-blade",
    name: "Luck Blade",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (any sword), legendary (requires attunement)",
      "You gain a +1 bonus to attack and damage rolls made with this magic weapon. While the sword is on your person, you also gain a +1 bonus to saving throws.",
      "Luck. If the sword is on your person, you can call on its luck (no action required) to reroll one attack roll, ability check, or saving throw you dislike. You must use the second roll. This property can't be used again until the next dawn.",
      "Wish. The sword has 1d4 - 1 charges. While holding it, you can use an action to expend 1 charge and cast the wish spell from it. This property can't be used again until the next dawn. The sword loses this property if it has no charges."
    ],
    url: "/api/magic-items/luck-blade"
  },
  {
    index: "mace-of-disruption",
    name: "Mace of Disruption",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (mace), rare (requires attunement)",
      "When you hit a fiend or an undead with this magic weapon, that creature takes an extra 2d6 radiant damage. If the target has 25 hit points or fewer after taking this damage, it must succeed on a DC 15 Wisdom saving throw or be destroyed. On a successful save, the creature becomes frightened of you until the end of your next turn.",
      "While you hold this weapon, it sheds bright light in a 20-foot radius and dim light for an additional 20 feet."
    ],
    url: "/api/magic-items/mace-of-disruption"
  },
  {
    index: "mace-of-smiting",
    name: "Mace of Smiting",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (mace), rare",
      "You gain a +1 bonus to attack and damage rolls made with this magic weapon. The bonus increases to +3 when you use the mace to attack a construct.",
      "When you roll a 20 on an attack roll made with this weapon, the target takes an extra 2d6 bludgeoning damage, or 4d6 bludgeoning damage if it's a construct. If a construct has 25 hit points or fewer after taking this damage, it is destroyed."
    ],
    url: "/api/magic-items/mace-of-smiting"
  },
  {
    index: "mace-of-terror",
    name: "Mace of Terror",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (mace), rare (requires attunement)",
      "This magic weapon has 3 charges. While holding it, you can use an action and expend 1 charge to release a wave of terror. Each creature of your choice in a 30-foot radius extending from you must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. While it is frightened in this way, a creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If it has nowhere it can move, the creature can use the Dodge action. At the end of each of its turns, a creature can repeat the saving throw, ending the effect on itself on a success.",
      "The mace regains 1d3 expended charges daily at dawn."
    ],
    url: "/api/magic-items/mace-of-terror"
  },
  {
    index: "nine-lives-stealer",
    name: "Nine Lives Stealer",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (any sword), very rare (requires attunement)",
      "You gain a +2 bonus to attack and damage rolls made with this magic weapon.",
      "The sword has 1d8 + 1 charges. If you score a critical hit against a creature that has fewer than 100 hit points, it must succeed on a DC 15 Constitution saving throw or be slain instantly as the sword tears its life force from its body (a construct or an undead is immune). The sword loses 1 charge if the creature is slain. When the sword has no charges remaining, it loses this property."
    ],
    url: "/api/magic-items/nine-lives-stealer"
  },
  {
    index: "oathbow",
    name: "Oathbow",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (longbow), very rare (requires attunement)",
      'When you nock an arrow on this bow, it whispers in Elvish, "Swift defeat to my enemies." When you use this weapon to make a ranged attack, you can, as a command phrase, say, "Swift death to you who have wronged me." The target of your attack becomes your sworn enemy until it dies or until dawn seven days later. You can have only one such sworn enemy at a time. When your sworn enemy dies, you can choose a new one after the next dawn.',
      "When you make a ranged attack roll with this weapon against your sworn enemy, you have advantage on the roll. In addition, your target gains no benefit from cover, other than total cover, and you suffer no disadvantage due to long range. If the attack hits, your sworn enemy takes an extra 3d6 piercing damage.",
      "While your sworn enemy lives, you have disadvantage on attack rolls with all other weapons."
    ],
    url: "/api/magic-items/oathbow"
  },
  {
    index: "sun-blade",
    name: "Sun Blade",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (longsword), rare (requires attunement)",
      "This item appears to be a longsword hilt. While grasping the hilt, you can use a bonus action to cause a blade of pure radiance to spring into existence, or make the blade disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with the sun blade.",
      "You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.",
      "The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each."
    ],
    url: "/api/magic-items/sun-blade"
  },
  {
    index: "scimitar-of-speed",
    name: "Scimitar of Speed",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (scimitar), very rare (requires attunement)",
      "You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a bonus action on each of your turns."
    ],
    url: "/api/magic-items/scimitar-of-speed"
  },
  {
    index: "sword-of-sharpness",
    name: "Sword of Sharpness",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (any sword that deals slashing damage), very rare (requires attunement)",
      "When you attack an object with this magic sword and hit, maximize your weapon damage dice against the target.",
      "When you attack a creature with this weapon and roll a 20 on the attack roll, that target takes an extra 4d6 slashing damage. Then roll another d20. If you roll a 20, you lop off one of the target's limbs, with the effect of such loss determined by the GM. If the creature has no limb to sever, you lop off a portion of its body instead.",
      "In addition, you can speak the sword's command word to cause the blade to shed bright light in a 10 foot radius and dim light for an additional 10 feet. Speaking the command word again or sheathing the sword puts out the light."
    ],
    url: "/api/magic-items/sword-of-sharpness"
  },
  {
    index: "sword-of-life-stealing",
    name: "Sword of Life Stealing",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (any sword), rare (requires attunement)",
      "When you attack a creature with this magic weapon and roll a 20 on the attack roll, that target takes an extra 3d6 necrotic damage, provided that the target isn't a construct or an undead. You gain temporary hit points equal to the extra damage dealt."
    ],
    url: "/api/magic-items/sword-of-life-stealing"
  },
  {
    index: "sword-of-wounding",
    name: "Sword of Wounding",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (any sword), rare (requires attunement)",
      "Hit points lost to this weapon's damage can be regained only through a short or long rest, rather than by regeneration, magic, or any other means.",
      "Once per turn, when you hit a creature with an attack using this magic weapon, you can wound the target. At the start of each of the wounded creature's turns, it takes 1d4 necrotic damage for each time you've wounded it, and it can then make a DC 15 Constitution saving throw, ending the effect of all such wounds on itself on a success. Alternatively, the wounded creature, or a creature within 5 feet of it, can use an action to make a DC 15 Wisdom (Medicine) check, ending the effect of such wounds on it on a success."
    ],
    url: "/api/magic-items/sword-of-wounding"
  }
];
