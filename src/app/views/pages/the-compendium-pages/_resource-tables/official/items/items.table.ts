import { Item } from "../../_models/item.model";

export const items: Item[] = [
  {
    name: "Abacus",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 2, unit: "gp" },
    weight: 2
  },
  {
    name: "Acid (vial)",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 25, unit: "gp" },
    weight: 1,
    desc: [
      "As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon.",
      "On a hit, the target takes 2d6 acid damage."
    ]
  },
  {
    name: "Alchemist's fire (flask)",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 50, unit: "gp" },
    weight: 1,
    desc: [
      "This sticky, adhesive fluid ignites when exposed to air.",
      "As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon.",
      "On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames."
    ]
  },
  {
    name: "Amulet",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "holy-symbols",
      name: "Holy Symbols",
      url: "/api/equipment-categories/holy-symbols"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 1,
    desc: [
      "A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic.",
      "Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield."
    ]
  },
  {
    name: "Alchemist's supplies",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 50, unit: "gp" },
    weight: 8,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
    ]
  },
  {
    name: "Arrow",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "ammunition",
      name: "Ammunition",
      url: "/api/equipment-categories/ammunition"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 1
  },
  {
    name: "Animal Feed (1 day)",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 5, unit: "cp" },
    weight: 10
  },
  {
    name: "Antitoxin (vial)",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 50, unit: "gp" },
    weight: 0,
    desc: [
      "A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs."
    ]
  },
  {
    name: "Backpack",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 2, unit: "gp" },
    weight: 5
  },
  {
    name: "Bagpipes",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 30, unit: "gp" },
    weight: 6,
    desc: [
      "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
    ]
  },
  {
    name: "Ball bearings (bag of 1,000)",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 2,
    desc: [
      "As an action, you can spill these tiny metal balls from their pouch to cover a level, square area that is 10 feet on a side.",
      "A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone.",
      "A creature moving through the area at half speed doesn't need to make the save."
    ]
  },
  {
    name: "Barding: Breastplate",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 1600, unit: "gp" },
    weight: 40,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
    ]
  },
  {
    name: "Barding: Chain mail",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 300, unit: "gp" },
    weight: 110,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
    ]
  },
  {
    name: "Barding: Chain shirt",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 200, unit: "gp" },
    weight: 40,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
    ]
  },
  {
    name: "Barding: Half plate",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 3000, unit: "gp" },
    weight: 80,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
    ]
  },
  {
    name: "Barding: Hide",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 40, unit: "gp" },
    weight: 24,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
    ]
  },
  {
    name: "Barding: Leather",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 40, unit: "gp" },
    weight: 20,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
    ]
  },
  {
    name: "Barding: Padded",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 20, unit: "gp" },
    weight: 16,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
    ]
  },
  {
    name: "Barding: Plate",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 6000, unit: "gp" },
    weight: 130,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
    ]
  },
  {
    name: "Barding: Ring mail",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 12, unit: "gp" },
    weight: 80,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
    ]
  },
  {
    name: "Barding: Splint",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 800, unit: "gp" },
    weight: 120,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
    ]
  },
  {
    name: "Barding: Scale mail",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 200, unit: "gp" },
    weight: 90,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
    ]
  },
  {
    name: "Barding: Studded Leather",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 180, unit: "gp" },
    weight: 26,
    desc: [
      "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
    ]
  },
  {
    name: "Barrel",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 2, unit: "gp" },
    weight: 70
  },
  {
    name: "Basket",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 4, unit: "sp" },
    weight: 2
  },
  {
    name: "Battleaxe",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 4
  },
  {
    name: "Bedroll",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 7
  },
  {
    name: "Bell",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 0
  },
  {
    name: "Bit and bridle",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 2, unit: "gp" },
    weight: 1
  },
  {
    name: "Blanket",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "sp" },
    weight: 3
  },
  {
    name: "Block and tackle",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 5,
    desc: [
      "A set of pulleys with a cable threaded through them and a hook to attach to objects, a block and tackle allows you to hoist up to four times the weight you can normally lift."
    ]
  },
  {
    name: "Blowgun",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 1
  },
  {
    name: "Blowgun needle",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "ammunition",
      name: "Ammunition",
      url: "/api/equipment-categories/ammunition"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 1
  },
  {
    name: "Book",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 25, unit: "gp" },
    weight: 5,
    desc: [
      "A book might contain poetry, historical accounts, information pertaining to a particular field of lore, diagrams and notes on gnomish contraptions, or just about anything else that can be represented using text or pictures. A book of spells is a spellbook (described later in this section)."
    ]
  },
  {
    name: "Bottle, glass",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 2, unit: "gp" },
    weight: 2
  },
  {
    name: "Breastplate",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    cost: { quantity: 400, unit: "gp" },
    weight: 20
  },
  {
    name: "Brewer's supplies",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 20, unit: "gp" },
    weight: 9,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
    ]
  },
  {
    name: "Bucket",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "cp" },
    weight: 2
  },
  {
    name: "Burglar's Pack",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "equipment-packs",
      name: "Equipment Packs",
      url: "/api/equipment-categories/equipment-packs"
    },
    cost: { quantity: 16, unit: "gp" },
    contents: [
      {
        item: {
          index: "backpack",
          name: "Backpack",
          url: "/api/equipment/backpack"
        },
        quantity: 1
      },
      {
        item: {
          index: "ball-bearings-bag-of-1000",
          name: "Ball bearings (bag of 1,000)",
          url: "/api/equipment/ball-bearings-bag-of-1000"
        },
        quantity: 1
      },
      {
        item: {
          index: "candle",
          name: "Candle",
          url: "/api/equipment/candle"
        },
        quantity: 5
      },
      {
        item: {
          index: "crowbar",
          name: "Crowbar",
          url: "/api/equipment/crowbar"
        },
        quantity: 1
      },
      {
        item: {
          index: "hammer",
          name: "Hammer",
          url: "/api/equipment/hammer"
        },
        quantity: 1
      },
      {
        item: {
          index: "piton",
          name: "Piton",
          url: "/api/equipment/piton"
        },
        quantity: 10
      },
      {
        item: {
          index: "lantern-hooded",
          name: "Lantern, hooded",
          url: "/api/equipment/lantern-hooded"
        },
        quantity: 1
      },
      {
        item: {
          index: "oil-flask",
          name: "Oil (flask)",
          url: "/api/equipment/oil-flask"
        },
        quantity: 2
      },
      {
        item: {
          index: "rations-1-day",
          name: "Rations (1 day)",
          url: "/api/equipment/rations-1-day"
        },
        quantity: 5
      },
      {
        item: {
          index: "tinderbox",
          name: "Tinderbox",
          url: "/api/equipment/tinderbox"
        },
        quantity: 1
      },
      {
        item: {
          index: "waterskin",
          name: "Waterskin",
          url: "/api/equipment/waterskin"
        },
        quantity: 1
      },
      {
        item: {
          index: "rope-hempen-50-feet",
          name: "Rope, hempen (50 feet)",
          url: "/api/equipment/rope-hempen-50-feet"
        },
        quantity: 1
      }
    ]
  },
  {
    name: "Calligrapher's supplies",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 5,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
    ]
  },
  {
    name: "Caltrops",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "cp" },
    weight: 2,
    desc: [
      "As an action, you can spread a bag of caltrops to cover a square area that is 5 feet on a side.",
      "Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving this turn and take 1 piercing damage.",
      "Taking this damage reduces the creature's walking speed by 10 feet until the creature regains at least 1 hit point.",
      "A creature moving through the area at half speed doesn't need to make the save."
    ]
  },
  {
    name: "Camel",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 50, unit: "gp" }
  },
  {
    name: "Candle",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "cp" },
    weight: 0,
    desc: [
      "For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for an additional 5 feet."
    ]
  },
  {
    name: "Carpenter's tools",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 8, unit: "gp" },
    weight: 6,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
    ]
  },
  {
    name: "Carriage",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 100, unit: "gp" },
    weight: 600
  },
  {
    name: "Cart",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 15, unit: "gp" },
    weight: 200
  },
  {
    name: "Cartographer's tools",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 15, unit: "gp" },
    weight: 6,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
    ]
  },
  {
    name: "Case, crossbow bolt",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 1,
    desc: ["This wooden case can hold up to twenty crossbow bolts."]
  },
  {
    name: "Chain (10 feet)",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 10,
    desc: ["A chain has 10 hit points. It can be burst with a successful DC 20 Strength check."]
  },
  {
    name: "Chain Mail",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    cost: { quantity: 75, unit: "gp" },
    weight: 55
  },
  {
    name: "Chain Shirt",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    cost: { quantity: 50, unit: "gp" },
    weight: 20
  },
  {
    name: "Chalk (1 piece)",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "cp" },
    weight: 0
  },
  {
    name: "Chariot",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 250, unit: "gp" },
    weight: 100
  },
  {
    name: "Chest",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 25
  },
  {
    name: "Clothes, common",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "sp" },
    weight: 3
  },
  {
    name: "Climber's Kit",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "kits",
      name: "Kits",
      url: "/api/equipment-categories/kits"
    },
    cost: { quantity: 25, unit: "gp" },
    weight: 12,
    desc: [
      "A climber's kit includes special pitons, boot tips, gloves, and a harness. You can use the climber's kit as an action to anchor yourself; when you do, you can't fall more than 25 feet from the point where you anchored yourself, and you can't climb more than 25 feet away from that point without undoing the anchor."
    ]
  },
  {
    name: "Clothes, costume",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 4
  },
  {
    name: "Clothes, traveler's",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 2, unit: "gp" },
    weight: 4
  },
  {
    name: "Clothes, fine",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 15, unit: "gp" },
    weight: 6
  },
  {
    name: "Club",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 1, unit: "sp" },
    weight: 2
  },
  {
    name: "Cobbler's tools",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 5,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
    ]
  },
  {
    name: "Component pouch",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 25, unit: "gp" },
    weight: 2,
    desc: [
      " A component pouch is a small, watertight leather belt pouch that has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost (as indicated in a spell's description)."
    ]
  },
  {
    name: "Case, map or scroll",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 1,
    desc: [
      "This cylindrical leather case can hold up to ten rolled-up sheets of paper or five rolled-up sheets of parchment."
    ]
  },
  {
    name: "Crossbow bolt",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "ammunition",
      name: "Ammunition",
      url: "/api/equipment-categories/ammunition"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 1.5
  },
  {
    name: "Cook's utensils",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 8,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
    ]
  },
  {
    name: "Crossbow, hand",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 75, unit: "gp" },
    weight: 3
  },
  {
    name: "Crossbow, heavy",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 50, unit: "gp" },
    weight: 18
  },
  {
    name: "Crossbow, light",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 25, unit: "gp" },
    weight: 5
  },
  {
    name: "Crowbar",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 2, unit: "gp" },
    weight: 5,
    desc: [
      "Using a crowbar grants advantage to Strength checks where the crowbar's leverage can be applied."
    ]
  },
  {
    name: "Crystal",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "arcane-foci",
      name: "Arcane Foci",
      url: "/api/equipment-categories/arcane-foci"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 1,
    desc: [
      "An arcane focus is a special item--an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item--designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus."
    ]
  },
  {
    name: "Dagger",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 2, unit: "gp" },
    weight: 1
  },
  {
    name: "Dart",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 5, unit: "cp" },
    weight: 0.25
  },
  {
    name: "Dice set",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 1, unit: "sp" },
    weight: 0,
    desc: [
      "This item encompasses a wide range of game pieces, including dice and decks of cards (for games such as Three-Dragon Ante). A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency."
    ]
  },
  {
    name: "Diplomat's Pack",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "equipment-packs",
      name: "Equipment Packs",
      url: "/api/equipment-categories/equipment-packs"
    },
    cost: { quantity: 39, unit: "gp" },
    contents: [
      {
        item: {
          index: "chest",
          name: "Chest",
          url: "/api/equipment/chest"
        },
        quantity: 1
      },
      {
        item: {
          index: "case-map-or-scroll",
          name: "Case, map or scroll",
          url: "/api/equipment/case-map-or-scroll"
        },
        quantity: 2
      },
      {
        item: {
          index: "clothes-fine",
          name: "Clothes, fine",
          url: "/api/equipment/clothes-fine"
        },
        quantity: 5
      },
      {
        item: {
          index: "ink-1-ounce-bottle",
          name: "Ink (1 ounce bottle)",
          url: "/api/equipment/ink-1-ounce-bottle"
        },
        quantity: 1
      },
      {
        item: {
          index: "ink-pen",
          name: "Ink pen",
          url: "/api/equipment/ink-pen"
        },
        quantity: 1
      },
      {
        item: {
          index: "lamp",
          name: "Lamp",
          url: "/api/equipment/lamp"
        },
        quantity: 1
      },
      {
        item: {
          index: "oil-flask",
          name: "Oil (flask)",
          url: "/api/equipment/oil-flask"
        },
        quantity: 2
      },
      {
        item: {
          index: "paper-one-sheet",
          name: "Paper (one sheet)",
          url: "/api/equipment/paper-one-sheet"
        },
        quantity: 5
      },
      {
        item: {
          index: "perfume-vial",
          name: "Perfume (vial)",
          url: "/api/equipment/perfume-vial"
        },
        quantity: 1
      },
      {
        item: {
          index: "sealing-wax",
          name: "Sealing wax",
          url: "/api/equipment/sealing-wax"
        },
        quantity: 1
      },
      {
        item: {
          index: "soap",
          name: "Soap",
          url: "/api/equipment/soap"
        },
        quantity: 1
      }
    ]
  },
  {
    name: "Disguise Kit",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "kits",
      name: "Kits",
      url: "/api/equipment-categories/kits"
    },
    cost: { quantity: 25, unit: "gp" },
    weight: 3,
    desc: [
      "This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise."
    ]
  },
  {
    name: "Donkey",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 8, unit: "gp" }
  },
  {
    name: "Drum",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 6, unit: "gp" },
    weight: 3,
    desc: [
      "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
    ]
  },
  {
    name: "Dulcimer",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 25, unit: "gp" },
    weight: 10,
    desc: [
      "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
    ]
  },
  {
    name: "Dungeoneer's Pack",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "equipment-packs",
      name: "Equipment Packs",
      url: "/api/equipment-categories/equipment-packs"
    },
    cost: { quantity: 12, unit: "gp" },
    contents: [
      {
        item: {
          index: "backpack",
          name: "Backpack",
          url: "/api/equipment/backpack"
        },
        quantity: 1
      },
      {
        item: {
          index: "crowbar",
          name: "Crowbar",
          url: "/api/equipment/crowbar"
        },
        quantity: 1
      },
      {
        item: {
          index: "hammer",
          name: "Hammer",
          url: "/api/equipment/hammer"
        },
        quantity: 1
      },
      {
        item: {
          index: "piton",
          name: "Piton",
          url: "/api/equipment/piton"
        },
        quantity: 10
      },
      {
        item: {
          index: "torch",
          name: "Torch",
          url: "/api/equipment/torch"
        },
        quantity: 10
      },
      {
        item: {
          index: "rations-1-day",
          name: "Rations (1 day)",
          url: "/api/equipment/rations-1-day"
        },
        quantity: 10
      },
      {
        item: {
          index: "waterskin",
          name: "Waterskin",
          url: "/api/equipment/waterskin"
        },
        quantity: 1
      },
      {
        item: {
          index: "rope-hempen-50-feet",
          name: "Rope, hempen (50 feet)",
          url: "/api/equipment/rope-hempen-50-feet"
        },
        quantity: 1
      }
    ]
  },
  {
    name: "Elephant",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 200, unit: "gp" }
  },
  {
    name: "Entertainer's Pack",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "equipment-packs",
      name: "Equipment Packs",
      url: "/api/equipment-categories/equipment-packs"
    },
    cost: { quantity: 40, unit: "gp" },
    contents: [
      {
        item: {
          index: "backpack",
          name: "Backpack",
          url: "/api/equipment/backpack"
        },
        quantity: 1
      },
      {
        item: {
          index: "bedroll",
          name: "Bedroll",
          url: "/api/equipment/bedroll"
        },
        quantity: 1
      },
      {
        item: {
          index: "clothes-costume",
          name: "Clothes, costume",
          url: "/api/equipment/clothes-costume"
        },
        quantity: 2
      },
      {
        item: {
          index: "candle",
          name: "Candle",
          url: "/api/equipment/candle"
        },
        quantity: 5
      },
      {
        item: {
          index: "rations-1-day",
          name: "Rations (1 day)",
          url: "/api/equipment/rations-1-day"
        },
        quantity: 5
      },
      {
        item: {
          index: "waterskin",
          name: "Waterskin",
          url: "/api/equipment/waterskin"
        },
        quantity: 1
      },
      {
        item: {
          index: "disguise-kit",
          name: "Disguise Kit",
          url: "/api/equipment/disguise-kit"
        },
        quantity: 1
      }
    ]
  },
  {
    name: "Emblem",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "holy-symbols",
      name: "Holy Symbols",
      url: "/api/equipment-categories/holy-symbols"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 0,
    desc: [
      "A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic.",
      "Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield."
    ]
  },
  {
    name: "Explorer's Pack",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "equipment-packs",
      name: "Equipment Packs",
      url: "/api/equipment-categories/equipment-packs"
    },
    cost: { quantity: 10, unit: "gp" },
    contents: [
      {
        item: {
          index: "backpack",
          name: "Backpack",
          url: "/api/equipment/backpack"
        },
        quantity: 1
      },
      {
        item: {
          index: "bedroll",
          name: "Bedroll",
          url: "/api/equipment/bedroll"
        },
        quantity: 1
      },
      {
        item: {
          index: "mess-kit",
          name: "Mess Kit",
          url: "/api/equipment/mess-kit"
        },
        quantity: 1
      },
      {
        item: {
          index: "tinderbox",
          name: "Tinderbox",
          url: "/api/equipment/tinderbox"
        },
        quantity: 1
      },
      {
        item: {
          index: "torch",
          name: "Torch",
          url: "/api/equipment/torch"
        },
        quantity: 10
      },
      {
        item: {
          index: "rations-1-day",
          name: "Rations (1 day)",
          url: "/api/equipment/rations-1-day"
        },
        quantity: 10
      },
      {
        item: {
          index: "waterskin",
          name: "Waterskin",
          url: "/api/equipment/waterskin"
        },
        quantity: 1
      },
      {
        item: {
          index: "disguise-kit",
          name: "Disguise Kit",
          url: "/api/equipment/disguise-kit"
        },
        quantity: 1
      }
    ]
  },
  {
    name: "Fishing tackle",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 4,
    desc: [
      "This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting."
    ]
  },
  {
    name: "Flail",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 2
  },
  {
    name: "Flask or tankard",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 2, unit: "cp" },
    weight: 1
  },
  {
    name: "Flute",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 2, unit: "gp" },
    weight: 1,
    desc: [
      "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
    ]
  },
  {
    name: "Forgery Kit",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "kits",
      name: "Kits",
      url: "/api/equipment-categories/kits"
    },
    cost: { quantity: 15, unit: "gp" },
    weight: 5,
    desc: [
      "This small box contains a variety of papers and parchments, pens and inks, seals and sealing wax, gold and silver leaf, and other supplies necessary to create convincing forgeries of physical documents. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a physical forgery of a document."
    ]
  },
  {
    name: "Galley",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 30000, unit: "gp" }
  },
  {
    name: "Glaive",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 20, unit: "gp" },
    weight: 6
  },
  {
    name: "Glassblower's tools",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 30, unit: "gp" },
    weight: 5,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
    ]
  },
  {
    name: "Grappling hook",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 2, unit: "gp" },
    weight: 4
  },
  {
    name: "Greataxe",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 30, unit: "gp" },
    weight: 7
  },
  {
    name: "Greatsword",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 50, unit: "gp" },
    weight: 6
  },
  {
    name: "Greatclub",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 2, unit: "sp" },
    weight: 10
  },
  {
    name: "Half Plate",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    cost: { quantity: 750, unit: "gp" },
    weight: 40
  },
  {
    name: "Hammer, sledge",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 2, unit: "gp" },
    weight: 10
  },
  {
    name: "Halberd",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 20, unit: "gp" },
    weight: 6
  },
  {
    name: "Hammer",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 3
  },
  {
    name: "Handaxe",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 2
  },
  {
    name: "Healer's Kit",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "kits",
      name: "Kits",
      url: "/api/equipment-categories/kits"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 3,
    desc: [
      "This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check."
    ]
  },
  {
    name: "Herbalism Kit",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "kits",
      name: "Kits",
      url: "/api/equipment-categories/kits"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 3,
    desc: [
      "This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to identify or apply herbs. Also, proficiency with this kit is required to create antitoxin and potions of healing."
    ]
  },
  {
    name: "Hide",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 12
  },
  {
    name: "Holy water (flask)",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 25, unit: "gp" },
    weight: 1,
    desc: [
      "As an action, you can splash the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. In either case, make a ranged attack against a target creature, treating the holy water as an improvised weapon.",
      "If the target is a fiend or undead, it takes 2d6 radiant damage.",
      "A cleric or paladin may create holy water by performing a special ritual.",
      "The ritual takes 1 hour to perform, uses 25 gp worth of powdered silver, and requires the caster to expend a 1st-level spell slot."
    ]
  },
  {
    name: "Horn",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 3, unit: "gp" },
    weight: 2,
    desc: [
      "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
    ]
  },
  {
    name: "Horse, draft",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 50, unit: "gp" }
  },
  {
    name: "Horse, riding",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 75, unit: "gp" }
  },
  {
    name: "Hourglass",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 25, unit: "gp" },
    weight: 1
  },
  {
    name: "Hunting trap",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 25,
    desc: [
      "When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground.",
      "A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its movement is limited by the length of the chain (typically 3 feet long).",
      "A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature."
    ]
  },
  {
    name: "Ink (1 ounce bottle)",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 0
  },
  {
    name: "Ink pen",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 2, unit: "cp" },
    weight: 0
  },
  {
    name: "Javelin",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 5, unit: "sp" },
    weight: 2
  },
  {
    name: "Jeweler's tools",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 25, unit: "gp" },
    weight: 2,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
    ]
  },
  {
    name: "Jug or pitcher",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 2, unit: "cp" },
    weight: 4
  },
  {
    name: "Keelboat",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 3000, unit: "gp" },
    desc: [
      "Keelboats and rowboats are used on lakes and rivers. If going downstream, add the speed of the current (typically 3 miles per hour) to the speed of the vehicle. These vehicles can't be rowed against any significant current, but they can be pulled upstream by draft animals on the shores. A rowboat weighs 100 pounds, in case adventurers carry it over land."
    ]
  },
  {
    name: "Ladder (10-foot)",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "sp" },
    weight: 25
  },
  {
    name: "Lamp",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "sp" },
    weight: 1,
    desc: [
      "A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil."
    ]
  },
  {
    name: "Lance",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 6
  },
  {
    name: "Leather",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 10
  },
  {
    name: "Leatherworker's tools",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 5,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
    ]
  },
  {
    name: "Lantern, hooded",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 2,
    desc: [
      "A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil. As an action, you can lower the hood, reducing the light to dim light in a 5-foot radius."
    ]
  },
  {
    name: "Lantern, bullseye",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 2,
    desc: [
      "A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil."
    ]
  },
  {
    name: "Lock",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 1,
    desc: [
      "A key is provided with the lock. Without the key, a creature proficient with thieves' tools can pick this lock with a successful DC 15 Dexterity check. Your GM may decide that better locks are available for higher prices."
    ]
  },
  {
    name: "Longbow",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 50, unit: "gp" },
    weight: 2
  },
  {
    name: "Longship",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 10000, unit: "gp" }
  },
  {
    name: "Longsword",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 15, unit: "gp" },
    weight: 3
  },
  {
    name: "Lute",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 35, unit: "gp" },
    weight: 2,
    desc: [
      "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
    ]
  },
  {
    name: "Lyre",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 30, unit: "gp" },
    weight: 2,
    desc: [
      "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
    ]
  },
  {
    name: "Mace",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 4
  },
  {
    name: "Magnifying glass",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 100, unit: "gp" },
    weight: 0,
    desc: [
      "This lens allows a closer look at small objects. It is also useful as a substitute for flint and steel when starting fires. Lighting a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite.",
      "A magnifying glass grants advantage on any ability check made to appraise or inspect an item that is small or highly detailed."
    ]
  },
  {
    name: "Light hammer",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 2, unit: "gp" },
    weight: 2
  },
  {
    name: "Manacles",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 2, unit: "gp" },
    weight: 6,
    desc: [
      "These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 Strength check.",
      "Each set of manacles comes with one key. Without the key, a creature proficient with thieves' tools can pick the manacles' lock with a successful DC 15 Dexterity check. Manacles have 15 hit points."
    ]
  },
  {
    name: "Mason's tools",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 8,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
    ]
  },
  {
    name: "Mastiff",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 25, unit: "gp" }
  },
  {
    name: "Maul",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 10
  },
  {
    name: "Mess Kit",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "kits",
      name: "Kits",
      url: "/api/equipment-categories/kits"
    },
    cost: { quantity: 2, unit: "sp" },
    weight: 1,
    desc: [
      "This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl."
    ]
  },
  {
    name: "Mirror, steel",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 0.5
  },
  {
    name: "Morningstar",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 15, unit: "gp" },
    weight: 4
  },
  {
    name: "Mule",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 8, unit: "gp" }
  },
  {
    name: "Navigator's tools",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 25, unit: "gp" },
    weight: 2,
    desc: [
      "This set of instruments is used for navigation at sea. Proficiency with navigator's tools lets you chart a ship's course and follow navigation charts. In addition, these tools allow you to add your proficiency bonus to any ability check you make to avoid getting lost at sea."
    ]
  },
  {
    name: "Net",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 3
  },
  {
    name: "Oil (flask)",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "sp" },
    weight: 1,
    desc: [
      "Oil usually comes in a clay flask that holds 1 pint.",
      "As an action, you can splash the oil in this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. Make a ranged attack against a target creature or object, treating the oil as an improvised weapon.",
      "On a hit, the target is covered in oil. If the target takes any fire damage before the oil dries (after 1 minute), the target takes an additional 5 fire damage from the burning oil.",
      "You can also pour a flask of oil on the ground to cover a 5-foot-square area, provided that the surface is level.",
      "If lit, the oil burns for 2 rounds and deals 5 fire damage to any creature that enters the area or ends its turn in the area. A creature can take this damage only once per turn."
    ]
  },
  {
    name: "Padded",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 8
  },
  {
    name: "Orb",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "arcane-foci",
      name: "Arcane Foci",
      url: "/api/equipment-categories/arcane-foci"
    },
    cost: { quantity: 20, unit: "gp" },
    weight: 3,
    desc: [
      "An arcane focus is a special item--an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item--designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus."
    ]
  },
  {
    name: "Painter's supplies",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 5,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
    ]
  },
  {
    name: "Pan flute",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 12, unit: "gp" },
    weight: 2,
    desc: [
      "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
    ]
  },
  {
    name: "Paper (one sheet)",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 2, unit: "sp" },
    weight: 0
  },
  {
    name: "Parchment (one sheet)",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "sp" },
    weight: 0
  },
  {
    name: "Perfume (vial)",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 0
  },
  {
    name: "Pick, miner's",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 2, unit: "gp" },
    weight: 10
  },
  {
    name: "Pike",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 18
  },
  {
    name: "Piton",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "cp" },
    weight: 0.25
  },
  {
    name: "Plate",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    cost: { quantity: 1500, unit: "gp" },
    weight: 65
  },
  {
    name: "Playing card set",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 5, unit: "sp" },
    weight: 0,
    desc: [
      "This item encompasses a wide range of game pieces, including dice and decks of cards (for games such as Three-Dragon Ante). A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency."
    ]
  },
  {
    name: "Poisoner's Kit",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "kits",
      name: "Kits",
      url: "/api/equipment-categories/kits"
    },
    cost: { quantity: 50, unit: "gp" },
    weight: 2,
    desc: [
      "A poisoner's kit includes the vials, chemicals, and other equipment necessary for the creation of poisons. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to craft or use poisons."
    ]
  },
  {
    name: "Poison, basic (vial)",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 100, unit: "gp" },
    weight: 0,
    desc: [
      "You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 10 Constitution saving throw or take 1d4 poison damage. Once applied, the poison retains potency for 1 minute before drying."
    ]
  },
  {
    name: "Pony",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 30, unit: "gp" }
  },
  {
    name: "Pole (10-foot)",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "cp" },
    weight: 7
  },
  {
    name: "Pot, iron",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 2, unit: "gp" },
    weight: 10
  },
  {
    name: "Potion of Healing",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 50, unit: "gp" },
    weight: 0.5,
    desc: [
      "A character who drinks the magical red fluid in this vial regains 2d4 + 2 hit points. Drinking or administering a potion takes an action."
    ]
  },
  {
    name: "Potion of Greater Healing",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 200, unit: "gp" },
    weight: 0.5,
    desc: [
      "A character who drinks the magical red fluid in this vial regains 4d4 + 4 hit points. Drinking or administering a potion takes an action."
    ]
  },
  {
    name: "Potion of Superior Healing",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 2000, unit: "gp" },
    weight: 0.5,
    desc: [
      "A character who drinks the magical red fluid in this vial regains 8d4 + 8 hit points. Drinking or administering a potion takes an action."
    ]
  },
  {
    name: "Potion of Supreme Healing",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 200000, unit: "gp" },
    weight: 0.5,
    desc: [
      "A character who drinks the magical red fluid in this vial regains 10d4 + 20 hit points. Drinking or administering a potion takes an action."
    ]
  },
  {
    name: "Potter's tools",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 3,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
    ]
  },
  {
    name: "Pouch",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "sp" },
    weight: 1,
    desc: [
      "A cloth or leather pouch can hold up to 20 sling bullets or 50 blowgun needles, among other things. A compartmentalized pouch for holding spell components is called a component pouch (described earlier in this section)."
    ]
  },
  {
    name: "Quiver",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 1,
    desc: ["A quiver can hold up to 20 arrows."]
  },
  {
    name: "Priest's Pack",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "equipment-packs",
      name: "Equipment Packs",
      url: "/api/equipment-categories/equipment-packs"
    },
    cost: { quantity: 19, unit: "gp" },
    contents: [
      {
        item: {
          index: "backpack",
          name: "Backpack",
          url: "/api/equipment/backpack"
        },
        quantity: 1
      },
      {
        item: {
          index: "blanket",
          name: "Blanket",
          url: "/api/equipment/blanket"
        },
        quantity: 1
      },
      {
        item: {
          index: "candle",
          name: "Candle",
          url: "/api/equipment/candle"
        },
        quantity: 10
      },
      {
        item: {
          index: "tinderbox",
          name: "Tinderbox",
          url: "/api/equipment/tinderbox"
        },
        quantity: 1
      },
      {
        item: {
          index: "rations-1-day",
          name: "Rations (1 day)",
          url: "/api/equipment/rations-1-day"
        },
        quantity: 2
      },
      {
        item: {
          index: "waterskin",
          name: "Waterskin",
          url: "/api/equipment/waterskin"
        },
        quantity: 1
      }
    ]
  },
  {
    name: "Quarterstaff",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 2, unit: "sp" },
    weight: 4
  },
  {
    name: "Ram, portable",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 4, unit: "gp" },
    weight: 35,
    desc: [
      "You can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check."
    ]
  },
  {
    name: "Rapier",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 25, unit: "gp" },
    weight: 2
  },
  {
    name: "Rations (1 day)",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "sp" },
    weight: 2,
    desc: [
      "Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts."
    ]
  },
  {
    name: "Reliquary",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "holy-symbols",
      name: "Holy Symbols",
      url: "/api/equipment-categories/holy-symbols"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 2,
    desc: [
      "A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic.",
      "Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield."
    ]
  },
  {
    name: "Riding",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 25
  },
  {
    name: "Robes",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 4
  },
  {
    name: "Ring Mail",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    cost: { quantity: 30, unit: "gp" },
    weight: 40
  },
  {
    name: "Rope, hempen (50 feet)",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 10,
    desc: [
      "Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check."
    ]
  },
  {
    name: "Rod",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "arcane-foci",
      name: "Arcane Foci",
      url: "/api/equipment-categories/arcane-foci"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 2,
    desc: [
      "An arcane focus is a special item--an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item--designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus."
    ]
  },
  {
    name: "Rope, silk (50 feet)",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 5,
    desc: [
      "Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check."
    ]
  },
  {
    name: "Rowboat",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 50, unit: "gp" },
    desc: [
      "Keelboats and rowboats are used on lakes and rivers. If going downstream, add the speed of the current (typically 3 miles per hour) to the speed of the vehicle. These vehicles can't be rowed against any significant current, but they can be pulled upstream by draft animals on the shores. A rowboat weighs 100 pounds, in case adventurers carry it over land."
    ]
  },
  {
    name: "Saddle, Military",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 20, unit: "gp" },
    weight: 30,
    desc: [
      "A military saddle braces the rider, helping you keep your seat on an active mount in battle. It gives you advantage on any check you make to remain mounted. An exotic saddle is required for riding any aquatic or flying mount."
    ]
  },
  {
    name: "Sack",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "cp" },
    weight: 0.5
  },
  {
    name: "Saddle, Exotic",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 60, unit: "gp" },
    weight: 50,
    desc: [
      "A military saddle braces the rider, helping you keep your seat on an active mount in battle. It gives you advantage on any check you make to remain mounted. An exotic saddle is required for riding any aquatic or flying mount."
    ]
  },
  {
    name: "Saddle, Pack",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 15,
    desc: [
      "A military saddle braces the rider, helping you keep your seat on an active mount in battle. It gives you advantage on any check you make to remain mounted. An exotic saddle is required for riding any aquatic or flying mount."
    ]
  },
  {
    name: "Sailing ship",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 10000, unit: "gp" }
  },
  {
    name: "Scale Mail",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    cost: { quantity: 50, unit: "gp" },
    weight: 45
  },
  {
    name: "Scale, merchant's",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 3,
    desc: [
      "A scale includes a small balance, pans, and a suitable assortment of weights up to 2 pounds. With it, you can measure the exact weight of small objects, such as raw precious metals or trade goods, to help determine their worth."
    ]
  },
  {
    name: "Scimitar",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 25, unit: "gp" },
    weight: 3
  },
  {
    name: "Scholar's Pack",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "equipment-packs",
      name: "Equipment Packs",
      url: "/api/equipment-categories/equipment-packs"
    },
    cost: { quantity: 40, unit: "gp" },
    contents: [
      {
        item: {
          index: "backpack",
          name: "Backpack",
          url: "/api/equipment/backpack"
        },
        quantity: 1
      },
      {
        item: {
          index: "book",
          name: "Book",
          url: "/api/equipment/book"
        },
        quantity: 1
      },
      {
        item: {
          index: "ink-1-ounce-bottle",
          name: "Ink (1 ounce bottle)",
          url: "/api/equipment/ink-1-ounce-bottle"
        },
        quantity: 1
      },
      {
        item: {
          index: "ink-pen",
          name: "Ink pen",
          url: "/api/equipment/ink-pen"
        },
        quantity: 1
      },
      {
        item: {
          index: "parchment-one-sheet",
          name: "Parchment (one sheet)",
          url: "/api/equipment/parchment-one-sheet"
        },
        quantity: 10
      }
    ]
  },
  {
    name: "Sealing wax",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "sp" },
    weight: 0
  },
  {
    name: "Shawm",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 2, unit: "gp" },
    weight: 1,
    desc: [
      "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
    ]
  },
  {
    name: "Shield",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 6
  },
  {
    name: "Shortsword",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 2
  },
  {
    name: "Shortbow",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 25, unit: "gp" },
    weight: 2
  },
  {
    name: "Shovel",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 2, unit: "gp" },
    weight: 5
  },
  {
    name: "Saddlebags",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 4, unit: "gp" },
    weight: 8
  },
  {
    name: "Sickle",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 2
  },
  {
    name: "Signal whistle",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "cp" },
    weight: 0
  },
  {
    name: "Signet ring",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 0
  },
  {
    name: "Sled",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 20, unit: "gp" },
    weight: 300
  },
  {
    name: "Sling",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 1, unit: "sp" },
    weight: 0
  },
  {
    name: "Sling bullet",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "ammunition",
      name: "Ammunition",
      url: "/api/equipment-categories/ammunition"
    },
    cost: { quantity: 4, unit: "cp" },
    weight: 1.5
  },
  {
    name: "Smith's tools",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 20, unit: "gp" },
    weight: 8,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
    ]
  },
  {
    name: "Soap",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 2, unit: "cp" },
    weight: 0
  },
  {
    name: "Spear",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 3
  },
  {
    name: "Spellbook",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 50, unit: "gp" },
    weight: 3,
    desc: [
      "Essential for wizards, a spellbook is a leather-bound tome with 100 blank vellum pages suitable for recording spells."
    ]
  },
  {
    name: "Spike, iron",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "sp" },
    weight: 5
  },
  {
    name: "Splint",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    cost: { quantity: 200, unit: "gp" },
    weight: 60
  },
  {
    name: "Sprig of mistletoe",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "druidic-foci",
      name: "Druidic Foci",
      url: "/api/equipment-categories/druidic-foci"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 0,
    desc: [
      "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus."
    ]
  },
  {
    name: "Spyglass",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1000, unit: "gp" },
    weight: 1,
    desc: ["Objects viewed through a spyglass are magnified to twice their size."]
  },
  {
    name: "Stabling (1 day)",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 5, unit: "sp" },
    weight: 0
  },
  {
    name: "Staff",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "arcane-foci",
      name: "Arcane Foci",
      url: "/api/equipment-categories/arcane-foci"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 4,
    desc: [
      "An arcane focus is a special item--an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item--designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus."
    ]
  },
  {
    name: "Studded Leather",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    cost: { quantity: 45, unit: "gp" },
    weight: 13
  },
  {
    name: "Tent, two-person",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 2, unit: "gp" },
    weight: 20,
    desc: ["A simple and portable canvas shelter, a tent sleeps two."]
  },
  {
    name: "Thieves' tools",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 25, unit: "gp" },
    weight: 1,
    desc: [
      "This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks."
    ]
  },
  {
    name: "Tinderbox",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 5, unit: "sp" },
    weight: 1,
    desc: [
      "This small container holds flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a torch--or anything else with abundant, exposed fuel--takes an action.",
      "Lighting any other fire takes 1 minute."
    ]
  },
  {
    name: "Tinker's tools",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 50, unit: "gp" },
    weight: 10,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
    ]
  },
  {
    name: "Torch",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "cp" },
    weight: 1,
    desc: [
      "A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning torch and hit, it deals 1 fire damage."
    ]
  },
  {
    name: "Totem",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "druidic-foci",
      name: "Druidic Foci",
      url: "/api/equipment-categories/druidic-foci"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 0,
    desc: [
      "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus."
    ]
  },
  {
    name: "Vial",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 0
  },
  {
    name: "Trident",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 4
  },
  {
    name: "Viol",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 30, unit: "gp" },
    weight: 1,
    desc: [
      "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
    ]
  },
  {
    name: "Wagon",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 35, unit: "gp" },
    weight: 400
  },
  {
    name: "Wand",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "arcane-foci",
      name: "Arcane Foci",
      url: "/api/equipment-categories/arcane-foci"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 1,
    desc: [
      "An arcane focus is a special item--an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item--designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus."
    ]
  },
  {
    name: "War pick",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 2
  },
  {
    name: "Warhammer",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 15, unit: "gp" },
    weight: 2
  },
  {
    name: "Warhorse",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 400, unit: "gp" }
  },
  {
    name: "Warship",
    equipment_category: {
      index: "mounts-and-vehicles",
      name: "Mounts and Vehicles",
      url: "/api/equipment-categories/mounts-and-vehicles"
    },
    cost: { quantity: 25000, unit: "gp" }
  },
  {
    name: "Waterskin",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 2, unit: "sp" },
    weight: 5
  },
  {
    name: "Whetstone",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "standard-gear",
      name: "Standard Gear",
      url: "/api/equipment-categories/standard-gear"
    },
    cost: { quantity: 1, unit: "cp" },
    weight: 1
  },
  {
    name: "Weaver's tools",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 5,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
    ]
  },
  {
    name: "Whip",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    cost: { quantity: 2, unit: "gp" },
    weight: 3
  },
  {
    name: "Woodcarver's tools",
    equipment_category: {
      index: "tools",
      name: "Tools",
      url: "/api/equipment-categories/tools"
    },
    cost: { quantity: 1, unit: "gp" },
    weight: 5,
    desc: [
      "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
    ]
  },
  {
    name: "Wooden staff",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "druidic-foci",
      name: "Druidic Foci",
      url: "/api/equipment-categories/druidic-foci"
    },
    cost: { quantity: 5, unit: "gp" },
    weight: 4,
    desc: [
      "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus."
    ]
  },
  {
    name: "Yew wand",
    equipment_category: {
      index: "adventuring-gear",
      name: "Adventuring Gear",
      url: "/api/equipment-categories/adventuring-gear"
    },
    gear_category: {
      index: "druidic-foci",
      name: "Druidic Foci",
      url: "/api/equipment-categories/druidic-foci"
    },
    cost: { quantity: 10, unit: "gp" },
    weight: 1,
    desc: [
      "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus."
    ]
  },
  {
    name: "Adamantine Armor",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    desc: [
      "Armor (medium or heavy, but not hide), uncommon",
      "This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you’re wearing it, any critical hit against you becomes a normal hit."
    ]
  },
  {
    name: "Ammunition, +1, +2, or +3",
    equipment_category: {
      index: "ammunition",
      name: "Ammunition",
      url: "/api/equipment-categories/ammunition"
    },
    desc: [
      "Weapon (any ammunition), uncommon (+1), rare (+2), or very rare (+3)",
      "You have a bonus to attack and damage rolls made with this piece of magic ammunition. The bonus is determined by the rarity of the ammunition. Once it hits a target, the ammunition is no longer magical."
    ]
  },
  {
    name: "Amulet of Health",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare (requires attunement)",
      "Your Constitution score is 19 while you wear this amulet. It has no effect on you if your Constitution is already 19 or higher"
    ]
  },
  {
    name: "Amulet of Proof against Detection and Location",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "While wearing this amulet, you are hidden from divination magic. You can’t be targeted by such magic or perceived through magical scrying sensors."
    ]
  },
  {
    name: "Amulet of the Planes",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, very rare (requires attunement)",
      "While wearing this amulet, you can use an action to name a location that you are familiar with on another plane of existence. Then make a DC 15 Intelligence check. On a successful check, you cast the plane shift spell. On a failure, you and each creature and object within 15 feet of you travel to a random destination. Roll a d100. On a 1–60, you travel to a random location on the plane you named. On a 61–100, you travel to a randomly determined plane of existence."
    ]
  },
  {
    name: "Animated Shield",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    desc: [
      "Armor (shield), very rare (requires attunement)",
      "While holding this shield, you can speak its command word as a bonus action to cause it to animate. The shield leaps into the air and hovers in your space to protect you as if you were wielding it, leaving your hands free. The shield remains animated for 1 minute, until you use a bonus action to end this effect, or until you are incapacitated or die, at which point the shield falls to the ground or into your hand if you have one free."
    ]
  },
  {
    name: "Apparatus of the Crab",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, legendary",
      "This item first appears to be a Large sealed iron barrel weighing 500 pounds. The barrel has a hidden catch, which can be found with a successful DC 20 Intelligence (Investigation) check. Releasing the catch unlocks a hatch at one end of the barrel, allowing two Medium or smaller creatures to crawl inside. Ten levers are set in a row at the far end, each in a neutral position, able to move either up or down. When certain levers are used, the apparatus transforms to resemble a giant lobster.",
      "The apparatus of the Crab is a Large object with the following statistics:",
      "Armor Class: 20",
      "Hit Points: 200",
      "Speed: 30 ft., swim 30 ft. (or 0 ft. for both if the legs and tail aren’t extended)",
      "Damage Immunities: poison, psychic",
      "To be used as a vehicle, the apparatus requires one pilot. While the apparatus’s hatch is closed, the compartment is airtight and watertight. The compartment holds enough air for 10 hours of breathing, divided by the number of breathing creatures inside.",
      "The apparatus floats on water. It can also go underwater to a depth of 900 feet. Below that, the vehicle takes 2d6 bludgeoning damage per minute from pressure.",
      "A creature in the compartment can use an action to move as many as two of the apparatus’s levers up or down. After each use, a lever goes back to its neutral position. Each lever, from left to right, functions as shown in the Apparatus of the Crab Levers table.",
      "Apparatus of the Crab Levers",
      "| Lever | Up | Down |",
      "|---|---|---|",
      "| 1 | Legs and tail extend, allowing the apparatus to walk and swim. | Legs and tail retract, reducing the apparatus’s speed to 0 and making it unable to benefit from bonuses to speed. |",
      "| 2 | Forward window shutter opens. | Forward window shutter closes. |",
      "| 3 | Side window shutters open (two per side). | Side window shutters close (two per side). |",
      "| 4 | Two claws extend from the front sides of the apparatus. | The claws retract. |",
      "| 5 | Each extended claw makes the following melee weapon attack: +8 to hit, reach 5 ft., one target. Hit: 7 (2d6) bludgeoning damage. | Each extended claw makes the following melee weapon attack: +8 to hit, reach 5 ft., one target. Hit: The target is grappled (escape DC 15). |",
      "| 6 | The apparatus walks or swims forward. | The apparatus walks or swims backward. |",
      "| 7 | The apparatus turns 90 degrees left. | The apparatus turns 90 degrees right. |",
      "| 8 | Eyelike fixtures emit bright light in a 30-foot radius and dim light for an additional 30 feet. | The light turns off. |",
      "| 9 | The apparatus sinks as much as 20 feet in liquid. | The apparatus rises up to 20 feet in liquid. |",
      "| 10 | The rear hatch unseals and opens. |  The rear hatch closes and seals. |"
    ]
  },
  {
    name: "Armor, +1, +2, or +3",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    desc: [
      "Armor (light, medium, or heavy), rare (+1), very rare (+2), or legendary (+3)",
      "You have a bonus to AC while wearing this armor. The bonus is determined by its rarity."
    ]
  },
  {
    name: "Armor of Invulnerability",
    equipment_category: {
      index: "armor",
      name: "armor",
      url: "/api/equipment-categories/armor"
    },
    desc: [
      "Armor (plate), legendary (requires attunement)",
      "You have resistance to nonmagical damage while you wear this armor. Additionally, you can use an action to make yourself immune to nonmagical damage for 10 minutes or until you are no longer wearing the armor. Once this special action is used, it can’t be used again until the next dawn."
    ]
  },
  {
    name: "Armor of Resistance",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    desc: [
      "Armor (light, medium, or heavy), rare (requires attunement)",
      "You have resistance to one type of damage while you wear this armor. The GM chooses the type or determines it randomly from the options below.",
      "| d10 | Damage Type |",
      "|---|---|",
      "| 1 | Acid |",
      "| 2 | Cold |",
      "| 3 | Fire |",
      "| 4 | Force |",
      "| 5 | Lightning |",
      "| 6 | Necrotic |",
      "| 7 | Poison |",
      "| 8 | Psychic |",
      "| 9 | Radiant |",
      "| 10 | Thunder |"
    ]
  },
  {
    name: "Armor of Vulnerability",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    desc: [
      "Armor (plate), rare (requires attunement)",
      "While wearing this armor, you have resistance to  one of the following damage types: bludgeoning, piercing, or slashing. The GM chooses the type or determines it randomly.",
      "Curse. This armor is cursed, a fact that is revealed only when an identify spell is cast on the armor or you attune to it. Attuning to the armor curses you until you are targeted by the remove curse spell or similar magic; removing the armor fails to end the curse. While cursed, you have vulnerability to two of the three damage types associated with the armor (not the one to which it grants resistance)."
    ]
  },
  {
    name: "Arrow-Catching Shield",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    desc: [
      "Armor (shield), rare (requires attunement)",
      "You gain a +2 bonus to AC against ranged attacks while you wield this shield. This bonus is in addition to the shield’s normal bonus to AC. In addition, whenever an attacker makes a ranged attack against a target within 5 feet of you, you can use your reaction to become the target of the attack instead."
    ]
  },
  {
    name: "Arrow of Slaying",
    equipment_category: {
      index: "ammunition",
      name: "Ammunition",
      url: "/api/equipment-categories/ammunition"
    },
    desc: [
      "Weapon (arrow), very rare",
      "An arrow of slaying is a magic weapon meant to slay a particular kind of creature. Some are more focused than others; for example, there are both arrows of dragon slaying and arrows of blue dragon slaying. If a creature belonging to the type, race, or group associated with an arrow of slaying takes damage from the arrow, the creature must make a DC 17 Constitution saving throw, taking an extra 6d10 piercing damage on a failed save, or half as much extra damage on a successful one.",
      "Once an arrow of slaying deals its extra damage to a creature, it becomes a nonmagical arrow.",
      "Other types of magic ammunition of this kind exist, such as bolts of slaying meant for a crossbow, though arrows are most common."
    ]
  },
  {
    name: "Bag of Beans",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare",
      "Inside this heavy cloth bag are 3d4 dry beans. The bag weighs 1/2 pound plus 1/4 pound for each bean it contains.",
      "If you dump the bag’s contents out on the ground,  they explode in a 10-foot radius, extending from the beans. Each creature in the area, including you, must  make a DC 15 Dexterity saving throw, taking 5d4 fire  damage on a failed save, or half as much damage on  a successful one. The fire ignites flammable objects  in the area that aren’t being worn or carried.",
      "If you remove a bean from the bag, plant it in dirt  or sand, and then water it, the bean produces an  effect 1 minute later from the ground where it was  planted. The GM can choose an effect from the  following table, determine it randomly, or create an  effect.",
      "| d100 | Effect |",
      "|---|---|",
      "| 01 | 5d4 toadstools sprout. If a creature eats a toadstool, roll any die. On an odd roll, the eater must succeed on a DC 15 Constitution saving throw or take 5d6 poison damage and become poisoned for 1 hour. On an even roll, the eater gains 5d6 temporary hit points for 1 hour. |",
      "| 02-10 | A geyser erupts and spouts water, beer, berry juice, tea, vinegar, wine, or oil (GM’s choice) 30 feet into the air for 1d12 rounds. |",
      "| 11-20 | A treant sprouts. There’s a 50 percent chance that the treant is chaotic evil and attacks. |",
      "| 21-30 | An animate, immobile stone statue in your likeness rises. It makes verbal threats against you. If you leave it and others come near, it describes you as the most heinous of villains and directs the newcomers to find and attack you. If you are on the same plane of existence as the statue, it knows where you are. The statue becomes inanimate after 24 hours. |",
      "| 31-40 | A campfire with blue flames springs forth and burns for 24 hours (or until it is extinguished). |",
      "| 41-50 | 1d6 + 6 shriekers sprout |",
      "| 51-60 | 1d4 + 8 bright pink toads crawl forth. Whenever a toad is touched, it transforms into a Large or smaller monster of the GM’s choice. The monster remains for 1 minute, then disappears in a puff of bright pink smoke. |",
      "| 61-70 | A hungry bulette burrows up and attacks. |",
      "| 71-80 | A fruit tree grows. It has 1d10 + 20 fruit, 1d8 of which act as randomly determined magic potions, while one acts as an ingested poison of the GM’s choice. The tree vanishes after 1 hour. Picked fruit remains, retaining any magic for 30 days. |",
      "| 81-90 | A nest of 1d4 + 3 eggs springs up. Any creature that eats an egg must make a DC 20 Constitution saving throw. On a successful save, a creature permanently increases its lowest ability score by 1, randomly choosing among equally low scores. On a failed save, the creature takes 10d6 force damage from an internal magical explosion. |",
      "| 91-99 | A pyramid with a 60-foot-square base bursts upward. Inside is a sarcophagus containing a mummy lord. The pyramid is treated as the mummy lord’s lair, and its sarcophagus contains treasure of the GM’s choice. |",
      "| 100 | A giant beanstalk sprouts, growing to a height of the GM’s choice. The top leads where the GM chooses, such as to a great view, a cloud giant’s castle, or a different plane of existence. |"
    ]
  },
  {
    name: "Bag of Devouring",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, very rare",
      "This bag superficially resembles a bag of holding but is a feeding orifice for a gigantic extradimensional creature. Turning the bag inside out closes the orifice.",
      "The extradimensional creature attached to the bag can sense whatever is placed inside the bag. Animal or vegetable matter placed wholly in the bag is devoured and lost forever. When part of a living creature is placed in the bag, as happens when someone reaches inside it, there is a 50 percent chance that the creature is pulled inside the bag. A creature inside the bag can use its action to try to escape with a successful DC 15 Strength check. Another creature can use its action to reach into the bag to pull a creature out, doing so with a successful DC 20 Strength check (provided it isn’t pulled inside the bag first). Any creature that starts its turn inside the bag is devoured, its body destroyed.",
      "Inanimate objects can be stored in the bag, which can hold a cubic foot of such material. However, once each day, the bag swallows any objects inside it and spits them out into another plane of existence. The GM determines the time and plane.",
      "If the bag is pierced or torn, it is destroyed, and anything contained within it is transported to a random location on the Astral Plane."
    ]
  },
  {
    name: "Bag of Holding",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "This bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents. Retrieving an item from the bag requires an action.",
      "If the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth, unharmed, but the bag must be put right before it can be used again. Breathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which time they begin to suffocate.",
      "Placing a bag of holding inside an extradimensional space created by a Handy Haversack, Portable Hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened."
    ]
  },
  {
    name: "Bag of Tricks",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "This ordinary bag, made from gray, rust, or tan cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object. The bag weighs 1/2 pound.",
      "You can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a d8 and consulting the table that corresponds to the bag's color. The creature vanishes at the next dawn or when it is reduced to 0 Hit Points.",
      "The creature is friendly to you and your companions, and it acts on Your Turn. You can use a Bonus Action to Command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to Attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its Nature.",
      "Once three fuzzy Objects have been pulled from the bag, the bag can't be used again until the next dawn.",
      "Gray Bag:",
      "| d8 | Creature |",
      "|---|---|",
      "| 01 | Weasel |",
      "| 02 | Giant Rat |",
      "| 03 | Badger |",
      "| 04 | Boar |",
      "| 05 | Panther |",
      "| 06 | Giant Badger |",
      "| 07 | Dire Wolf |",
      "| 08 | Giant Elk |",
      "Rust Bag:",
      "| d8 | Creature |",
      "|---|---|",
      "| 01 | Rat |",
      "| 02 | Owl |",
      "| 03 | Mastiff |",
      "| 04 | Goat |",
      "| 05 | Giant Goat |",
      "| 06 | Giant Boar |",
      "| 07 | Lion |",
      "| 08 | Brown Bear |",
      "Tan Bag:",
      "| d8 | Creature |",
      "|---|---|",
      "| 01 | Jackal |",
      "| 02 | Ape |",
      "| 03 | Baboon |",
      "| 04 | Axe Beak |",
      "| 05 | Black Bear |",
      "| 06 | Giant Weasel |",
      "| 07 | Giant Hyena |",
      "| 08 | Tiger |"
    ]
  },
  {
    name: "Bead of Force",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare",
      "This small black Sphere measures 3/4 of an inch in diameter and weighs an ounce. Typically, 1d4 + 4 beads of force are found together.",
      "You can use an action to throw the bead up to 60 feet. The bead explodes on impact and is destroyed. Each creature within a 10-foot radius of where the bead landed must succeed on a DC 15 Dexterity saving throw or take 5d4 force damage. A Sphere of transparent force then encloses the area for 1 minute. Any creature that failed the save and is completely within the area is trapped inside this Sphere. Creatures that succeeded on the save, or are partially within the area, are pushed away from the center of the Sphere until they are no longer inside it. Only breathable air can pass through the sphere's wall. No Attack or other Effect can.",
      "An enclosed creature can use its action to push against the sphere's wall, moving the Sphere up to half the creature's walking speed. The Sphere can be picked up, and its magic causes it to weigh only 1 pound, regardless of the weight of creatures inside."
    ]
  },
  {
    name: "Belt of Dwarvenkind",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous Item, rare (requires attunement)",
      "While wearing this belt, you gain the following benefits:",
      "Your Constitution score increases by 2, to a maximum of 20.",
      "You have advantage on Charisma (Persuasion) checks made to interact with Dwarves.",
      "In addition, while attuned to the belt, you have a 50 percent chance each day at dawn of growing a full beard if you're capable of growing one, or a visibly thicker beard if you already have one.",
      "If you aren't a dwarf, you gain the following additional benefits while wearing the belt:",
      "You have advantage on Saving Throws against poison, and you have Resistance against poison damage.",
      "You can speak, read, and write Dwarvish."
    ]
  },
  {
    name: "Belt of Giant Strength",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rarity varies (requires attunement)",
      "While wearing this belt, your Strength score changes to a score granted by the belt. If your Strength is already equal to or greater than the belt's score, the item has no Effect on you.",
      "Six varieties of this belt exist, corresponding with and having rarity according to The Six kinds of true Giants. The belt of Stone Giant Strength and the belt of Frost Giant Strength look different, but they have the same Effect.",
      "| Type | Strength | Rarity |",
      "|---|---|---|",
      "| Hill Giant | 21 | Rare |",
      "| Stone Giant / Frost Giant | 23 | Very Rare |",
      "| Fire Giant | 25 | Very Rare |",
      "| Cloud Giant | 27 | Legendary |",
      "| Storm Giant | 29 | Legendary |"
    ]
  },
  {
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
    ]
  },
  {
    name: "Boots of Elvenkind",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity (Stealth) checks that rely on moving silently."
    ]
  },
  {
    name: "Boots of Levitation",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare (requires attunement)",
      "While you wear these boots, you can use an action to cast the levitate spell on yourself at will."
    ]
  },
  {
    name: "Boots of Speed",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare (requires attunement)",
      "While you wear these boots, you can use a bonus action and click the boots’ heels together. If you do, the boots double your walking speed, and any creature that makes an opportunity attack against you has disadvantage on the attack roll. If you click your heels together again, you end the effect.",
      "When the boots’ property has been used for a total of 10 minutes, the magic ceases to function until you finish a long rest."
    ]
  },
  {
    name: "Boots of Striding and Springing",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "While you wear these boots, your walking speed becomes 30 feet, unless your walking speed is higher, and your speed isn’t reduced if you are encumbered or wearing heavy armor. In addition, you can jump three times the normal distance, though you can’t jump farther than your remaining movement would allow."
    ]
  },
  {
    name: "Bowl of Commanding Water Elementals",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare",
      "While this bowl is filled with water, you can use an action to speak the bowl’s command word and summon a water elemental, as if you had cast the conjure elemental spell. The bowl can’t be used this way again until the next dawn.",
      "The bowl is about 1 foot in diameter and half as deep. It weighs 3 pounds and holds about 3 gallons."
    ]
  },
  {
    name: "Bracers of Archery",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons."
    ]
  },
  {
    name: "Boots of the Winterlands",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "These furred boots are snug and feel quite warm. While you wear them, you gain the following benefits:",
      "* You have resistance to cold damage.",
      "* You ignore difficult terrain created by ice or snow.",
      "* You can tolerate temperatures as low as −50 degrees Fahrenheit without any additional protection. If you wear heavy clothes, you can tolerate temperatures as low as −100 degrees Fahrenheit."
    ]
  },
  {
    name: "Bracers of Defense",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondous item, rare (requires attunement)",
      "While wearing these bracers, you gain a +2 bonus to AC if you are wearing no armor and using no shield."
    ]
  },
  {
    name: "Brazier of Commanding Fire Elementals",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare",
      "While a fire burns in this brass brazier, you can use an action to speak the brazier’s command word and summon a fire elemental, as if you had cast the conjure elemental spell. The brazier can’t be used this way again until the next dawn.",
      "The brazier weighs 5 pounds."
    ]
  },
  {
    name: "Brooch of Shielding",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "While wearing this brooch, you have resistance to force damage, and you have immunity to damage from the magic missile spell."
    ]
  },
  {
    name: "Broom of Flying",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "This wooden broom, which weighs 3 pounds, functions like a mundane broom until you stand astride it and speak its command word. It then hovers beneath you and can be ridden in the air. It has a flying speed of 50 feet. It can carry up to 400 pounds, but its flying speed becomes 30 feet while carrying over 200 pounds. The broom stops hovering when you land.",
      "You can send the broom to travel alone to a destination within 1 mile of you if you speak the command word, name the location, and are familiar with that place. The broom comes back to you when you speak another command word, provided that the broom is still within 1 mile of you."
    ]
  },
  {
    name: "Candle of Invocation",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, very rare (requires attunement)",
      "This slender taper is dedicated to a deity and shares that deity’s alignment. The candle’s alignment can be detected with the detect evil and good spell. The GM chooses the god and associated alignment or determines the alignment randomly.",
      "| d20 | Alignment |",
      "|---|---|",
      "| 1–2 | Chaotic evil |",
      "| 3–4 | Chaotic neutral |",
      "| 5–7 | Chaotic good |",
      "| 8–9 | Neutral evil |",
      "| 10–11 | Neutral |",
      "| 12–13 | Neutral good |",
      "| 14–15 | Lawful evil |",
      "| 16–17 | Lawful neutral |",
      "| 18–20 | Lawful good |",
      "The candle’s magic is activated when the candle is lit, which requires an action. After burning for 4 hours, the candle is destroyed. You can snuff it out early for use at a later time. Deduct the time it burned in increments of 1 minute from the candle’s total burn time.",
      "While lit, the candle sheds dim light in a 30-foot radius. Any creature within that light whose alignment matches that of the candle makes attack rolls, saving throws, and ability checks with advantage. In addition, a cleric or druid in the light whose alignment matches the candle’s can cast 1stlevel spells he or she has prepared without expending spell slots, though the spell’s effect is as if cast with a 1st-level slot.",
      "Alternatively, when you light the candle for the first time, you can cast the gate spell with it. Doing so destroys the candle."
    ]
  },
  {
    name: "Cape of the Mountebank",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare",
      "This cape smells faintly of brimstone. While wearing it, you can use it to cast the dimension door spell as an action. This property of the cape can’t be used again until the next dawn.",
      "When you disappear, you leave behind a cloud of smoke, and you appear in a similar cloud of smoke at your destination. The smoke lightly obscures the space you left and the space you appear in, and it dissipates at the end of your next turn. A light or stronger wind disperses the smoke."
    ]
  },
  {
    name: "Chime of Opening",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare",
      "This hollow metal tube measures about 1 foot long and weighs 1 pound. You can strike it as an action, pointing it at an object within 120 feet of you that can be opened, such as a door, lid, or lock. The chime issues a clear tone, and one lock or latch on the object opens unless the sound can’t reach the object. If no locks or latches remain, the object itself opens.",
      "The chime can be used ten times. After the tenth time, it cracks and becomes useless."
    ]
  },
  {
    name: "Censer of Controlling Air Elementals",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare",
      "While incense is burning in this censer, you can use an action to speak the censer’s command word and summon an air elemental, as if you had cast the conjure elemental spell. The censer can’t be used this way again until the next dawn.",
      "This 6-inch-wide, 1-foot-high vessel resembles a chalice with a decorated lid. It weighs 1 pound."
    ]
  },
  {
    name: "Carpet of Flying",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, very rare",
      "You can speak the carpet’s command word as an  action to make the carpet hover and fly. It moves  according to your spoken directions, provided that you are within 30 feet of it.",
      "Four sizes of carpet of flying exist. The GM chooses the size of a given carpet or determines it randomly.",
      "| d100 | Size | Capacity | Flying Speed |",
      "|---|---|---|---|",
      "| 01–20 | 3 ft. × 5 ft. | 200 lb. | 80 feet |",
      "| 21–55 | 4 ft. × 6 ft. | 400 lb. | 60 feet |",
      "| 56–80 | 5 ft. × 7 ft. | 600 lb. | 40 feet |",
      "| 81–100 | 6 ft. × 9 ft. | 800 lb. | 30 feet |",
      "A carpet can carry up to twice the weight shown on the table, but it flies at half speed if it carries more than its normal capacity."
    ]
  },
  {
    name: "Circlet of Blasting",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "While wearing this circlet, you can use an action to cast the scorching ray spell with it. When you make the spell’s attacks, you do so with an attack bonus of +5. The circlet can’t be used this way again until the next dawn."
    ]
  },
  {
    name: "Cloak of Displacement",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare (requires attunement)",
      "While you wear this cloak, it projects an illusion that makes you appear to be standing in a place near your actual location, causing any creature to have disadvantage on attack rolls against you. If you take damage, the property ceases to function until the start of your next turn. This property is suppressed while you are incapacitated, restrained, or otherwise unable to move."
    ]
  },
  {
    name: "Cloak of Elvenkind",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak’s color shifts to camouflage you. Pulling the hood up or down requires an action."
    ]
  },
  {
    name: "Cloak of Protection",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "You gain a +1 bonus to AC and saving throws while you wear this cloak."
    ]
  },
  {
    name: "Cloak of the Bat",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare (requires attunement)",
      "While wearing this cloak, you have advantage on Dexterity (Stealth) checks. In an area of dim light or darkness, you can grip the edges of the cloak with both hands and use it to fly at a speed of 40 feet. If you ever fail to grip the cloak’s edges while flying in this way, or if you are no longer in dim light or darkness, you lose this flying speed.",
      "While wearing the cloak in an area of dim light or darkness, you can use your action to cast polymorph on yourself, transforming into a bat. While you are in the form of the bat, you retain your Intelligence, Wisdom, and Charisma scores. The cloak can’t be used this way again until the next dawn."
    ]
  },
  {
    name: "Cloak of the Manta Ray",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "While wearing this cloak with its hood up, you can breathe underwater, and you have a swimming speed of 60 feet. Pulling the hood up or down requires an action."
    ]
  },
  {
    name: "Crystal Ball",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, very rare or legendary (requires attunement)",
      "The typical crystal ball, a very rare item, is about 6 inches in diameter. While touching it, you can cast the scrying spell (save DC 17) with it.",
      "The following crystal ball variants are legendary items and have additional properties.",
      "Crystal Ball of Mind Reading. You can use an action to cast the detect thoughts spell (save DC 17) while you are scrying with the crystal ball, targeting creatures you can see within 30 feet of the spell’s sensor. You don’t need to concentrate on this detect thoughts to maintain it during its duration, but it ends if scrying ends.",
      "Crystal Ball of Telepathy. While scrying with the crystal ball, you can communicate telepathically with creatures you can see within 30 feet of the spell’s sensor. You can also use an action to cast the suggestion spell (save DC 17) through the sensor on one of those creatures. You don’t need to concentrate on this suggestion to maintain it during its duration, but it ends if scrying ends. Once used, the suggestion power of the crystal ball can’t be used again until the next dawn.",
      "Crystal Ball of True Seeing. While scrying with the crystal ball, you have truesight with a radius of 120 feet centered on the spell’s sensor."
    ]
  },
  {
    name: "Cube of Force",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare (requires attunement)",
      "This cube is about an inch across. Each face has a distinct marking on it that can be pressed. The cube starts with 36 charges, and it regains 1d20 expended charges daily at dawn.",
      "You can use an action to press one of the cube’s faces, expending a number of charges based on the chosen face, as shown in the Cube of Force Faces table. Each face has a different effect. If the cube has insufficient charges remaining, nothing happens. Otherwise, a barrier of invisible force springs into existence, forming a cube 15 feet on a side. The barrier is centered on you, moves with you, and lasts for 1 minute, until you use an action to press the cube’s sixth face, or the cube runs out of charges. You can change the barrier’s effect by pressing a different face of the cube and expending the requisite number of charges, resetting the duration.",
      "If your movement causes the barrier to come into contact with a solid object that can’t pass through the cube, you can’t move any closer to that object as long as the barrier remains.",
      "Cube of Force Faces",
      "| Face | Charges | Effect |",
      "|---|---|---|",
      "| 1 | 1 | Gases, wind, and fog can’t pass through the barrier.",
      "| 2 | 2 | Nonliving matter can’t pass through the barrier. Walls, floors, and ceilings can pass through at your discretion.",
      "| 3 | 3 | Living matter can’t pass through the barrier.",
      "| 4 | 4 | Spell effects can’t pass through the barrier.",
      "| 5 | 5 | Nothing can pass through the barrier. Walls, floors, and ceilings can pass through at your discretion.",
      "| 6 | 0 | The barrier deactivates.",
      "The cube loses charges when the barrier is targeted by certain spells or comes into contact with certain spell or magic item effects, as shown in the table below.",
      "| Spell or Item | Charges Lost |",
      "|---|---|",
      "| Disintegrate | 1d12 |",
      "| Horn of blasting | 1d10 |",
      "| Passwall | 1d6 |",
      "| Prismatic spray | 1d20 |",
      "| Wall of fire | 1d4 |"
    ]
  },
  {
    name: "Cubic Gate",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, legendary",
      "This cube is 3 inches across and radiates palpable magical energy. The six sides of the cube are each keyed to a different plane of existence, one of which is the Material Plane. The other sides are linked to planes determined by the GM.",
      "You can use an action to press one side of the cube to cast the gate spell with it, opening a portal to the plane keyed to that side. Alternatively, if you use an action to press one side twice, you can cast the plane shift spell (save DC 17) with the cube and transport the targets to the plane keyed to that side.",
      "The cube has 3 charges. Each use of the cube expends 1 charge. The cube regains 1d3 expended charges daily at dawn."
    ]
  },
  {
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
    ]
  },
  {
    name: "Cloak of Arachnida",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, very rare (requires attunement)",
      "This fine garment is made of black silk interwoven with faint silvery threads. While wearing it, you gain the following benefits:",
      "* You have resistance to poison damage.",
      "* You have a climbing speed equal to your walking speed.",
      "* You can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free.",
      "* You can’t be caught in webs of any sort and can move through webs as if they were difficult terrain.",
      "* You can use an action to cast the web spell (save DC 13). The web created by the spell fills twice its normal area. Once used, this property of the cloak can’t be used again until the next dawn."
    ]
  },
  {
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
    ]
  },
  {
    name: "Decanter of Endless Water",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "This stoppered flask sloshes when shaken, as if it contains water. The decanter weighs 2 pounds.",
      "You can use an action to remove the stopper and speak one of three command words, whereupon an amount of fresh water or salt water (your choice) pours out of the flask. The water stops pouring out at the start of your next turn. Choose from the following options:",
      '"Stream" produces 1 gallon of water.',
      '"Fountain" produces 5 gallons of water.',
      '"Geyser" produces 30 gallons of water that gushes forth in a geyser 30 feet long and 1 foot wide. As a bonus action while holding the decanter, you can aim the geyser at a creature you can see within 30 feet of you. The target must succeed on a DC 13 Strength saving throw or take 1d4 bludgeoning damage and fall prone. Instead of a creature, you can target an object that isn\'t being worn or carried and that weighs no more than 200 pounds. The object is either knocked over or pushed up to 15 feet away from you.'
    ]
  },
  {
    name: "Deck of Illusions",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "This box contains a set of parchment cards. A full deck has 34 cards. A deck found as treasure is usually missing 1d20 - 1 cards.",
      "The magic of the deck functions only if cards are drawn at random (you can use an altered deck of playing cards to simulate the deck). You can use an action to draw a card at random from the deck and throw it to the ground at a point within 30 feet of you.",
      "An illusion of one or more creatures forms over the thrown card and remains until dispelled. An illusory creature appears real, of the appropriate size, and behaves as if it were a real creature except that it can do no harm. While you are within 120 feet of the illusory creature and can see it, you can use an action to move it magically anywhere within 30 feet of its card. Any physical interaction with the illusory creature reveals it to be an illusion, because objects pass through it. Someone who uses an action to visually inspect the creature identifies it as illusory with a successful DC 15 Intelligence (Investigation) check. The creature then appears translucent.",
      "The illusion lasts until its card is moved or the illusion is dispelled. When the illusion ends, the image on its card disappears, and that card can't be used again.",
      "| Playing Card | Illusion |",
      "|---|---|",
      "| Ace of hearts | Red dragon |",
      "| King of hearts | Knight and four guards |",
      "| Queen of hearts | Succubus or incubus |",
      "| Jack of hearts | Druid |",
      "| Ten of hearts | Cloud giant |",
      "| Nine of hearts | Ettin |",
      "| Eight of hearts | Bugbear |",
      "| Two of hearts | Goblin |",
      "| Ace of diamonds | Beholder |",
      "| King of diamonds | Archmage and mage apprentice |",
      "| Queen of diamonds | Night hag |",
      "| Jack of diamonds | Assassin |",
      "| Ten of diamonds | Fire giant |",
      "| Nine of diamonds | Ogre mage |",
      "| Eight of diamonds | Gnoll |",
      "| Two of diamonds | Kobold |",
      "| Ace of spades | Lich |",
      "| King of spades | Priest and two acolytes |",
      "| Queen of spades | Medusa |",
      "| Jack of spades | Veteran |",
      "| Ten of spades | Frost giant |",
      "| Nine of spades | Troll |",
      "| Eight of spades | Hobgoblin |",
      "| Two of spades | Goblin |",
      "| Ace of clubs | Iron golem |",
      "| King of clubs | Bandit captain and three bandits |",
      "| Queen of clubs | Erinyes |",
      "| Jack of clubs | Berserker |",
      "| Ten of clubs | Hill giant |",
      "| Nine of clubs | Ogre |",
      "| Eight of clubs | Orc |",
      "| Two of clubs | Kobold |",
      "| Jokers (2) | You (the deck's owner) |"
    ]
  },
  {
    name: "Deck of Many Things",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, legendary",
      "Usually found in a box or pouch, this deck contains a number of cards made of ivory or vellum. Most (75 percent) of these decks have only thirteen cards, but the rest have twenty-two.",
      "Before you draw a card, you must declare how many cards you intend to draw and then draw them randomly (you can use an altered deck of playing cards to simulate the deck). Any cards drawn in excess of this number have no effect. Otherwise, as soon as you draw a card from the deck, its magic takes effect. You must draw each card no more than 1 hour after the previous draw. If you fail to draw the chosen number, the remaining number of cards fly from the deck on their own and take effect all at once.",
      "Once a card is drawn, it fades from existence. Unless the card is the Fool or the Jester, the card reappears in the deck, making it possible to draw the same card twice.",
      "| Playing Card | Card |",
      "|---|---|",
      "| Ace of diamonds | Vizier |",
      "| King of diamonds | Sun |",
      "| Queen of diamonds | Moon |",
      "| Jack of diamonds | Star |",
      "| Two of diamonds | Comet |",
      "| Ace of hearts | The Fates |",
      "| King of hearts | Throne |",
      "| Queen of hearts | Key |",
      "| Jack of hearts | Knight |",
      "| Two of hearts | Gem |",
      "| Ace of clubs | Talons |",
      "| King of clubs | The Void |",
      "| Queen of clubs | Flames |",
      "| Jack of clubs | Skull |",
      "| Two of clubs | Idiot |",
      "| Ace of spades | Donjon |",
      "| King of spades | Ruin |",
      "| Queen of spades | Euryale |",
      "| Jack of spades | Rogue |",
      "| Two of spades | Balance |",
      "| Joker (with TM) | Fool |",
      "| Joker (without TM) | Jester |",
      "\\Found only in a deck with twenty-two cards",
      "Balance. Your mind suffers a wrenching alteration, causing your alignment to change. Lawful becomes chaotic, good becomes evil, and vice versa. If you are true neutral or unaligned, this card has no effect on you.",
      "Comet. If you single-handedly defeat the next hostile monster or group of monsters you encounter, you gain experience points enough to gain one level. Otherwise, this card has no effect.",
      "Donjon. You disappear and become entombed in a state of suspended animation in an extradimensional sphere. Everything you were wearing and carrying stays behind in the space you occupied when you disappeared. You remain imprisoned until you are found and removed from the sphere. You can't be located by any divination magic, but a wish spell can reveal the location of your prison. You draw no more cards.",
      "Euryale. The card's medusa-like visage curses you. You take a -2 penalty on saving throws while cursed in this way. Only a god or the magic of The Fates card can end this curse.",
      "The Fates. Reality's fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card's magic as soon as you draw the card or at any other time before you die.",
      "Flames. A powerful devil becomes your enemy. The devil seeks your ruin and plagues your life, savoring your suffering before attempting to slay you. This enmity lasts until either you or the devil dies.",
      "Fool. You lose 10,000 XP, discard this card, and draw from the deck again, counting both draws as one of your declared draws. If losing that much XP would cause you to lose a level, you instead lose an amount that leaves you with just enough XP to keep your level.",
      "Gem. Twenty-five pieces of jewelry worth 2,000 gp each or fifty gems worth 1,000 gp each appear at your feet.",
      "Idiot. Permanently reduce your Intelligence by 1d4 + 1 (to a minimum score of 1). You can draw one additional card beyond your declared draws.",
      "Jester. You gain 10,000 XP, or you can draw two additional cards beyond your declared draws.",
      "Key. A rare or rarer magic weapon with which you are proficient appears in your hands. The GM chooses the weapon.",
      "Knight. You gain the service of a 4th-level fighter who appears in a space you choose within 30 feet of you. The fighter is of the same race as you and serves you loyally until death, believing the fates have drawn him or her to you. You control this character.",
      "Moon. You are granted the ability to cast the wish spell 1d3 times.",
      "Rogue. A nonplayer character of the GM's choice becomes hostile toward you. The identity of your new enemy isn't known until the NPC or someone else reveals it. Nothing less than a wish spell or divine intervention can end the NPC's hostility toward you.",
      "Ruin. All forms of wealth that you carry or own, other than magic items, are lost to you. Portable property vanishes. Businesses, buildings, and land you own are lost in a way that alters reality the least. Any documentation that proves you should own something lost to this card also disappears.",
      "Skull. You summon an avatar of death-a ghostly humanoid skeleton clad in a tattered black robe and carrying a spectral scythe. It appears in a space of the GM's choice within 10 feet of you and attacks you, warning all others that you must win the battle alone. The avatar fights until you die or it drops to 0 hit points, whereupon it disappears. If anyone tries to help you, the helper summons its own avatar of death. A creature slain by an avatar of death can't be restored to life."
    ]
  },
  {
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
    ]
  },
  {
    name: "Demon Armor",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    desc: [
      "Armor (plate), very rare (requires attunement)",
      "While wearing this armor, you gain a +1 bonus to AC, and you can understand and speak Abyssal. In addition, the armor's clawed gauntlets turn unarmed strikes with your hands into magic weapons that deal slashing damage, with a +1 bonus to attack rolls and damage rolls and a damage die of 1d8.",
      "Curse. Once you don this cursed armor, you can't doff it unless you are targeted by the remove curse spell or similar magic. While wearing the armor, you have disadvantage on attack rolls against demons and on saving throws against their spells and special abilities."
    ]
  },
  {
    name: "Dimensional Shackles",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare",
      "You can use an action to place these shackles on an incapacitated creature. The shackles adjust to fit a creature of Small to Large size. In addition to serving as mundane manacles, the shackles prevent a creature bound by them from using any method of extradimensional movement, including teleportation or travel to a different plane of existence. They don't prevent the creature from passing through an interdimensional portal.",
      "You and any creature you designate when you use the shackles can use an action to remove them. Once every 30 days, the bound creature can make a DC 30 Strength (Athletics) check. On a success, the creature breaks free and destroys the shackles."
    ]
  },
  {
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
    ]
  },
  {
    name: "Dragon Scale Mail",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    desc: [
      "Armor (scale mail), very rare (requires attunement)",
      "Dragon scale mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off scales and gift them to humanoids. Other times, hunters carefully skin and preserve the hide of a dead dragon. In either case, dragon scale mail is highly valued.",
      "While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to one damage type that is determined by the kind of dragon that provided the scales (see the table).",
      "Additionally, you can focus your senses as an action to magically discern the distance and direction to the closest dragon within 30 miles of you that is of the same type as the armor. This special action can't be used again until the next dawn.",
      "| Dragon | Resistance |",
      "|---|---|",
      "| Black | Acid |",
      "| Blue | Lightning |",
      "| Brass | Fire |",
      "| Bronze | Lightning |",
      "| Copper | Acid |",
      "| Gold | Fire |",
      "| Green | Poison |",
      "| Red | Fire |",
      "| Silver | Cold |",
      "| White | Cold |"
    ]
  },
  {
    name: "Dust of Disappearance",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "Found in a small packet, this powder resembles very fine sand. There is enough of it for one use. When you use an action to throw the dust into the air, you and each creature and object within 10 feet of you become invisible for 2d4 minutes. The duration is the same for all subjects, and the dust is consumed when its magic takes effect. If a creature affected by the dust attacks or casts a spell, the invisibility ends for that creature."
    ]
  },
  {
    name: "Dust of Dryness",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "This small packet contains 1d6 + 4 pinches of dust. You can use an action to sprinkle a pinch of it over water. The dust turns a cube of water 15 feet on a side into one marble-sized pellet, which floats or rests near where the dust was sprinkled. The pellet's weight is negligible.",
      "Someone can use an action to smash the pellet against a hard surface, causing the pellet to shatter and release the water the dust absorbed. Doing so ends that pellet's magic.",
      "An elemental composed mostly of water that is exposed to a pinch of the dust must make a DC 13 Constitution saving throw, taking 10d6 necrotic damage on a failed save, or half as much damage on a successful one."
    ]
  },
  {
    name: "Dust of Sneezing and Choking",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "Found in a small container, this powder resembles very fine sand. It appears to be dust of disappearance, and an identify spell reveals it to be such. There is enough of it for one use.",
      "When you use an action to throw a handful of the dust into the air, you and each creature that needs to breathe within 30 feet of you must succeed on a DC 15 Constitution saving throw or become unable to breathe, while sneezing uncontrollably. A creature affected in this way is incapacitated and suffocating. As long as it is conscious, a creature can repeat the saving throw at the end of each of its turns, ending the effect on it on a success. The lesser restoration spell can also end the effect on a creature."
    ]
  },
  {
    name: "Dwarven Plate",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    desc: [
      "Armor (plate), very rare",
      "While wearing this armor, you gain a +2 bonus to AC. In addition, if an effect moves you against your will along the ground, you can use your reaction to reduce the distance you are moved by up to 10 feet."
    ]
  },
  {
    name: "Dwarven Thrower",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (warhammer), very rare (requires attunement by a dwarf)",
      "You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 damage or, if the target is a giant, 2d8 damage. Immediately after the attack, the weapon flies back to your hand."
    ]
  },
  {
    name: "Efreeti Bottle",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, very rare",
      "This painted brass bottle weighs 1 pound. When you use an action to remove the stopper, a cloud of thick smoke flows out of the bottle. At the end of your turn, the smoke disappears with a flash of harmless fire, and an efreeti appears in an unoccupied space within 30 feet of you.",
      "The first time the bottle is opened, the GM rolls to determine what happens.",
      "| d100 | Effect |",
      "|---|---|",
      "| 01-10 | The efreeti attacks you. After fighting for 5 rounds, the efreeti disappears, and the bottle loses its magic. |",
      "| 11-90 | The efreeti serves you for 1 hour, doing as you command. Then the efreeti returns to the bottle, and a new stopper contains it. The stopper can't be removed for 24 hours. The next two times the bottle is opened, the same effect occurs. If the bottle is opened a fourth time, the efreeti escapes and disappears, and the bottle loses its magic. |",
      "| 91-100 | The efreeti can cast the wish spell three times for you. It disappears when it grants the final wish or after 1 hour, and the bottle loses its magic. |"
    ]
  },
  {
    name: "Efficient Quiver",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "Each of the quiver's three compartments connects to an extradimensional space that allows the quiver to hold numerous items while never weighing more than 2 pounds. The shortest compartment can hold up to sixty arrows, bolts, or similar objects. The midsize compartment holds up to eighteen javelins or similar objects. The longest compartment holds up to six long objects, such as bows, quarterstaffs, or spears.",
      "You can draw any item the quiver contains as if doing so from a regular quiver or scabbard."
    ]
  },
  {
    name: "Elemental Gem",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "This gem contains a mote of elemental energy. When you use an action to break the gem, an elemental is summoned as if you had cast the conjure elemental spell, and the gem's magic is lost. The type of gem determines the elemental summoned by the spell.",
      "| Gem | Summoned Elemental |",
      "|---|---|",
      "| Blue sapphire | Air elemental |",
      "| Yellow diamond | Earth elemental |",
      "| Red corundum | Fire elemental |",
      "| Emerald | Water elemental |"
    ]
  },
  {
    name: "Eversmoking Bottle",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "Smoke leaks from the lead-stoppered mouth of this brass bottle, which weighs 1 pound. When you use an action to remove the stopper, a cloud of thick smoke pours out in a 60-foot radius from the bottle. The cloud's area is heavily obscured. Each minute the bottle remains open and within the cloud, the radius increases by 10 feet until it reaches its maximum radius of 120 feet.",
      "The cloud persists as long as the bottle is open. Closing the bottle requires you to speak its command word as an action. Once the bottle is closed, the cloud disperses after 10 minutes. A moderate wind (11 to 20 miles per hour) can also disperse the smoke after 1 minute, and a strong wind (21 or more miles per hour) can do so after 1 round."
    ]
  },
  {
    name: "Elven Chain",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    desc: [
      "Armor (chain shirt), rare",
      "You gain a +1 bonus to AC while you wear this armor. You are considered proficient with this armor even if you lack proficiency with medium armor."
    ]
  },
  {
    name: "Eyes of Charming",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "These crystal lenses fit over the eyes. They have 3 charges. While wearing them, you can expend 1 charge as an action to cast the charm person spell (save DC 13) on a humanoid within 30 feet of you, provided that you and the target can see each other. The lenses regain all expended charges daily at dawn."
    ]
  },
  {
    name: "Eyes of Minute Seeing",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "These crystal lenses fit over the eyes. While wearing them, you can see much better than normal out to a range of 1 foot. You have advantage on Intelligence (Investigation) checks that rely on sight while searching an area or studying an object within that range."
    ]
  },
  {
    name: "Eyes of the Eagle",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "These crystal lenses fit over the eyes. While wearing them, you have advantage on Wisdom (Perception) checks that rely on sight. In conditions of clear visibility, you can make out details of even extremely distant creatures and objects as small as 2 feet across."
    ]
  },
  {
    name: "Flame Tongue",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (any sword), rare (requires attunement)",
      "You can use a bonus action to speak this magic sword's command word, causing flames to erupt from the blade. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the sword is ablaze, it deals an extra 2d6 fire damage to any target it hits. The flames last until you use a bonus action to speak the command word again or until you drop or sheathe the sword."
    ]
  },
  {
    name: "Feather Token",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare",
      "This tiny object looks like a feather. Different types of feather tokens exist, each with a different single use effect. The GM chooses the kind of token or determines it randomly.",
      "| d100 | Feather Token |",
      "|---|---|",
      "| 01-20 | Anchor |",
      "| 21-35 | Bird |",
      "| 36-50 | Fan |",
      "| 51-65 | Swan boat |",
      "| 66-90 | Tree |",
      "| 91-100 | Whip |",
      "Anchor. You can use an action to touch the token to a boat or ship. For the next 24 hours, the vessel can't be moved by any means. Touching the token to the vessel again ends the effect. When the effect ends, the token disappears.",
      "Bird. You can use an action to toss the token 5 feet into the air. The token disappears and an enormous, multicolored bird takes its place. The bird has the statistics of a roc, but it obeys your simple commands and can't attack. It can carry up to 500 pounds while flying at its maximum speed (16 miles an hour for a maximum of 144 miles per day, with a one-hour rest for every 3 hours of flying), or 1,000 pounds at half that speed. The bird disappears after flying its maximum distance for a day or if it drops to 0 hit points. You can dismiss the bird as an action.",
      "Fan. If you are on a boat or ship, you can use an action to toss the token up to 10 feet in the air. The token disappears, and a giant flapping fan takes its place. The fan floats and creates a wind strong enough to fill the sails of one ship, increasing its speed by 5 miles per hour for 8 hours. You can dismiss the fan as an action.",
      "Swan Boat. You can use an action to touch the token to a body of water at least 60 feet in diameter. The token disappears, and a 50-foot-long, 20-foot wide boat shaped like a swan takes its place. The boat is self-propelled and moves across water at a speed of 6 miles per hour. You can use an action while on the boat to command it to move or to turn up to 90 degrees. The boat can carry up to thirty-two Medium or smaller creatures. A Large creature counts as four Medium creatures, while a Huge creature counts as nine. The boat remains for 24 hours and then disappears. You can dismiss the boat as an action.",
      "Tree. You must be outdoors to use this token. You can use an action to touch it to an unoccupied space on the ground. The token disappears, and in its place a nonmagical oak tree springs into existence. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius.",
      "Whip. You can use an action to throw the token to a point within 10 feet of you. The token disappears, and a floating whip takes its place. You can then use a bonus action to make a melee spell attack against a creature within 10 feet of the whip, with an attack bonus of +9. On a hit, the target takes 1d6 + 5 force damage.",
      "As a bonus action on your turn, you can direct the whip to fly up to 20 feet and repeat the attack against a creature within 10 feet of it. The whip disappears after 1 hour, when you use an action to dismiss it, or when you are incapacitated or die."
    ]
  },
  {
    name: "Folding Boat",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare",
      "This object appears as a wooden box that measures 12 inches long, 6 inches wide, and 6 inches deep. It weighs 4 pounds and floats. It can be opened to store items inside. This item also has three command words, each requiring you to use an action to speak it.",
      "One command word causes the box to unfold into a boat 10 feet long, 4 feet wide, and 2 feet deep. The boat has one pair of oars, an anchor, a mast, and a lateen sail. The boat can hold up to four Medium creatures comfortably.",
      "The second command word causes the box to unfold into a ship 24 feet long, 8 feet wide, and 6 feet deep. The ship has a deck, rowing seats, five sets of oars, a steering oar, an anchor, a deck cabin, and a mast with a square sail. The ship can hold fifteen Medium creatures comfortably.",
      "When the box becomes a vessel, its weight becomes that of a normal vessel its size, and anything that was stored in the box remains in the boat.",
      "The third command word causes the folding boat to fold back into a box, provided that no creatures are aboard. Any objects in the vessel that can't fit inside the box remain outside the box as it folds. Any objects in the vessel that can fit inside the box do so."
    ]
  },
  {
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
    ]
  },
  {
    name: "Gauntlets of Ogre Power",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is already 19 or higher."
    ]
  },
  {
    name: "Gem of Brightness",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "This prism has 50 charges. While you are holding it, you can use an action to speak one of three command words to cause one of the following effects:",
      "The first command word causes the gem to shed bright light in a 30-foot radius and dim light for an additional 30 feet. This effect doesn't expend a charge. It lasts until you use a bonus action to repeat the command word or until you use another function of the gem.",
      "The second command word expends 1 charge and causes the gem to fire a brilliant beam of light at one creature you can see within 60 feet of you. The creature must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
      "The third command word expends 5 charges and causes the gem to flare with blinding light in a 30 foot cone originating from it. Each creature in the cone must make a saving throw as if struck by the beam created with the second command word.",
      "When all of the gem's charges are expended, the gem becomes a nonmagical jewel worth 50 gp."
    ]
  },
  {
    name: "Gem of Seeing",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare (requires attunement)",
      "This gem has 3 charges. As an action, you can speak the gem's command word and expend 1 charge. For the next 10 minutes, you have truesight out to 120 feet when you peer through the gem.",
      "The gem regains 1d3 expended charges daily at dawn."
    ]
  },
  {
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
    ]
  },
  {
    name: "Glamoured Studded Leather",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    desc: [
      "Armor (studded leather), rare",
      "While wearing this armor, you gain a +1 bonus to AC. You can also use a bonus action to speak the armor's command word and cause the armor to assume the appearance of a normal set of clothing or some other kind of armor. You decide what it looks like, including color, style, and accessories, but the armor retains its normal bulk and weight. The illusory appearance lasts until you use this property again or remove the armor."
    ]
  },
  {
    name: "Gloves of Missile Snaring",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "These gloves seem to almost meld into your hands when you don them. When a ranged weapon attack hits you while you're wearing them, you can use your reaction to reduce the damage by 1d10 + your Dexterity modifier, provided that you have a free hand. If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in that hand."
    ]
  },
  {
    name: "Gloves of Swimming and Climbing",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "While wearing these gloves, climbing and swimming don't cost you extra movement, and you gain a +5 bonus to Strength (Athletics) checks made to climb or swim."
    ]
  },
  {
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
    ]
  },
  {
    name: "Goggles of Night",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "While wearing these dark lenses, you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the goggles increases its range by 60 feet."
    ]
  },
  {
    name: "Hat of Disguise",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "While wearing this hat, you can use an action to cast the disguise self spell from it at will. The spell ends if the hat is removed."
    ]
  },
  {
    name: "Handy Haversack",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare",
      "This backpack has a central pouch and two side pouches, each of which is an extradimensional space. Each side pouch can hold up to 20 pounds of material, not exceeding a volume of 2 cubic feet. The large central pouch can hold up to 8 cubic feet or 80 pounds of material. The backpack always weighs 5 pounds, regardless of its contents.",
      "Placing an object in the haversack follows the normal rules for interacting with objects. Retrieving an item from the haversack requires you to use an action. When you reach into the haversack for a specific item, the item is always magically on top.",
      "The haversack has a few limitations. If it is overloaded, or if a sharp object pierces it or tears it, the haversack ruptures and is destroyed. If the haversack is destroyed, its contents are lost forever, although an artifact always turns up again somewhere. If the haversack is turned inside out, its contents spill forth, unharmed, and the haversack must be put right before it can be used again. If a breathing creature is placed within the haversack, the creature can survive for up to 10 minutes, after which time it begins to suffocate.",
      "Placing the haversack inside an extradimensional space created by a bag of holding, portable hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened."
    ]
  },
  {
    name: "Figurine of Wondrous Power",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rarity by figurine",
      "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.",
      "The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.",
      "The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.",
      "Bronze Griffon (Rare). This bronze statuette is of a griffon rampant. It can become a griffon for up to 6 hours. Once it has been used, it can't be used again until 5 days have passed.",
      "Ebony Fly (Rare). This ebony statuette is carved in the likeness of a horsefly. It can become a giant fly for up to 12 hours and can be ridden as a mount. Once it has been used, it can't be used again until 2 days have passed.",
      "Giant Fly",
      "Large beast, unaligned",
      "Armor Class 11",
      "Hit Points 19 (3d10 + 3)",
      "Speed 30 ft., fly 60 ft.",
      "| STR | DEX | CON | INT | WIS | CHA |",
      "|---|---|---|---|---|---|",
      "| 14 (+2) | 13 (+1) | 13 (+1) | 2 (-4) | 10 (+0) | 3 (-4) |",
      "Senses darkvision 60 ft., passive Perception 10",
      "Languages -",
      "Golden Lions (Rare). These gold statuettes of lions are always created in pairs. You can use one figurine or both simultaneously. Each can become a lion for up to 1 hour. Once a lion has been used, it can't be used again until 7 days have passed.",
      "Ivory Goats (Rare). These ivory statuettes of goats are always created in sets of three. Each goat looks unique and functions differently from the others. Their properties are as follows:",
      "The goat of traveling can become a Large goat with the same statistics as a riding horse. It has 24 charges, and each hour or portion thereof it spends in beast form costs 1 charge. While it has charges, you can use it as often as you wish. When it runs out of charges, it reverts to a figurine and can't be used again until 7 days have passed, when it regains all its charges.",
      "The goat of travail becomes a giant goat for up to 3 hours. Once it has been used, it can't be used again until 30 days have passed.",
      "The goat of terror becomes a giant goat for up to 3 hours. The goat can't attack, but you can remove its horns and use them as weapons. One horn becomes a +1 lance, and the other becomes a +2 longsword. Removing a horn requires an action, and the weapons disappear and the horns return when the goat reverts to figurine form. In addition, the goat radiates a 30-foot-radius aura of terror while you are riding it. Any creature hostile to you that starts its turn in the aura must succeed on a DC 15 Wisdom saving throw or be frightened of the goat for 1 minute, or until the goat reverts to figurine form. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it successfully saves against the effect, a creature is immune to the goat's aura for the next 24 hours. Once the figurine has been used, it can't be used again until 15 days have passed.",
      "Marble Elephant (Rare). This marble statuette is about 4 inches high and long. It can become an elephant for up to 24 hours. Once it has been used, it can't be used again until 7 days have passed.",
      "Obsidian Steed (Very Rare). This polished obsidian horse can become a nightmare for up to 24 hours. The nightmare fights only to defend itself. Once it has been used, it can't be used again until 5 days have passed.",
      "If you have a good alignment, the figurine has a 10 percent chance each time you use it to ignore your orders, including a command to revert to figurine form. If you mount the nightmare while it is ignoring your orders, you and the nightmare are instantly transported to a random location on the plane of Hades, where the nightmare reverts to figurine form.",
      "Onyx Dog (Rare). This onyx statuette of a dog can become a mastiff for up to 6 hours. The mastiff has an Intelligence of 8 and can speak Common. It also has darkvision out to a range of 60 feet and can see invisible creatures and objects within that range. Once it has been used, it can't be used again until 7 days have passed.",
      "Serpentine Owl (Rare). This serpentine statuette of an owl can become a giant owl for up to 8 hours. Once it has been used, it can't be used again until 2 days have passed. The owl can telepathically communicate with you at any range if you and it are on the same plane of existence.",
      "Silver Raven (Uncommon). This silver statuette of a raven can become a raven for up to 12 hours. Once it has been used, it can't be used again until 2 days have passed. While in raven form, the figurine allows you to cast the animal messenger spell on it at will."
    ]
  },
  {
    name: "Headband of Intellect",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "Your Intelligence score is 19 while you wear this headband. It has no effect on you if your Intelligence is already 19 or higher."
    ]
  },
  {
    name: "Helm of Comprehending Languages",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "While wearing this helm, you can use an action to cast the comprehend languages spell from it at will."
    ]
  },
  {
    name: "Helm of Brilliance",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, very rare (requires attunement)",
      "This dazzling helm is set with 1d10 diamonds, 2d10 rubies, 3d10 fire opals, and 4d10 opals. Any gem pried from the helm crumbles to dust. When all the gems are removed or destroyed, the helm loses its magic.",
      "You gain the following benefits while wearing it:",
      "You can use an action to cast one of the following spells (save DC 18), using one of the helm's gems of the specified type as a component: daylight (opal), fireball (fire opal), prismatic spray (diamond), or wall of fire (ruby). The gem is destroyed when the spell is cast and disappears from the helm.",
      "As long as it has at least one diamond, the helm emits dim light in a 30-foot radius when at least one undead is within that area. Any undead that starts its turn in that area takes 1d6 radiant damage.",
      "As long as the helm has at least one ruby, you have resistance to fire damage.",
      "As long as the helm has at least one fire opal, you can use an action and speak a command word to cause one weapon you are holding to burst into flames. The flames emit bright light in a 10-foot radius and dim light for an additional 10 feet. The flames are harmless to you and the weapon. When you hit with an attack using the blazing weapon, the target takes an extra 1d6 fire damage. The flames last until you use a bonus action to speak the command word again or until you drop or stow the weapon.",
      "Roll a d20 if you are wearing the helm and take fire damage as a result of failing a saving throw against a spell. On a roll of 1, the helm emits beams of light from its remaining gems. Each creature within 60 feet of the helm other than you must succeed on a DC 17 Dexterity saving throw or be struck by a beam, taking radiant damage equal to the number of gems in the helm. The helm and its gems are then destroyed."
    ]
  },
  {
    name: "Helm of Telepathy",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "While wearing this helm, you can use an action to cast the detect thoughts spell (save DC 13) from it. As long as you maintain concentration on the spell, you can use a bonus action to send a telepathic message to a creature you are focused on. It can reply-using a bonus action to do so-while your focus on it continues.",
      "While focusing on a creature with detect thoughts, you can use an action to cast the suggestion spell (save DC 13) from the helm on that creature. Once used, the suggestion property can't be used again until the next dawn."
    ]
  },
  {
    name: "Helm of Teleportation",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare (requires attunement)",
      "This helm has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the teleport spell from it. The helm regains 1d3",
      "expended charges daily at dawn."
    ]
  },
  {
    name: "Holy Avenger",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (any sword), legendary (requires attunement by a paladin)",
      "You gain a +3 bonus to attack and damage rolls made with this magic weapon. When you hit a fiend or an undead with it, that creature takes an extra 2d10 radiant damage.",
      "While you hold the drawn sword, it creates an aura in a 10-foot radius around you. You and all creatures friendly to you in the aura have advantage on saving throws against spells and other magical effects. If you have 17 or more levels in the paladin class, the radius of the aura increases to 30 feet."
    ]
  },
  {
    name: "Horn of Blasting",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare",
      "You can use an action to speak the horn's command word and then blow the horn, which emits a thunderous blast in a 30-foot cone that is audible 600 feet away. Each creature in the cone must make a DC 15 Constitution saving throw. On a failed save, a creature takes 5d6 thunder damage and is deafened for 1 minute. On a successful save, a creature takes half as much damage and isn't deafened. Creatures and objects made of glass or crystal have disadvantage on the saving throw and take 10d6 thunder damage instead of 5d6.",
      "Each use of the horn's magic has a 20 percent chance of causing the horn to explode. The explosion deals 10d6 fire damage to the blower and destroys the horn."
    ]
  },
  {
    name: "Horn of Valhalla",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare (silver or brass), very rare (bronze) or legendary (iron)",
      "You can use an action to blow this horn. In response, warrior spirits from the Valhalla appear within 60 feet of you. They use the statistics of a berserker. They return to Valhalla after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.",
      "Four types of horn of Valhalla are known to exist, each made of a different metal. The horn's type determines how many berserkers answer its summons, as well as the requirement for its use. The GM chooses the horn's type or determines it randomly.",
      "| d100 | Horn Type | Berserkers Summoned | Requirement |",
      "|---|---|---|---|",
      "| 01-40 | Silver | 2d4 + 2 | None |",
      "| 41-75 | Brass | 3d4 + 3 | Proficiency with all simple weapons |",
      "| 76-90 | Bronze | 4d4 + 4 | Proficiency with all medium armor |",
      "| 91-00 | Iron | 5d4 + 5 | Proficiency with all martial weapons |",
      "If you blow the horn without meeting its requirement, the summoned berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands."
    ]
  },
  {
    name: "Horseshoes of Speed",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare",
      "These iron horseshoes come in a set of four. While all four shoes are affixed to the hooves of a horse or similar creature, they increase the creature's walking speed by 30 feet."
    ]
  },
  {
    name: "Immovable Rod",
    equipment_category: {
      index: "rod",
      name: "Rod",
      url: "/api/equipment-categories/rod"
    },
    desc: [
      "Rod, uncommon",
      "This flat iron rod has a button on one end. You can use an action to press the button, which causes the rod to become magically fixed in place. Until you or another creature uses an action to push the button again, the rod doesn't move, even if it is defying gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod to deactivate and fall. A creature can use an action to make a DC 30 Strength check, moving the fixed rod up to 10 feet on a success."
    ]
  },
  {
    name: "Instant Fortress",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare",
      "You can use an action to place this 1-inch metal cube on the ground and speak its command word. The cube rapidly grows into a fortress that remains until you use an action to speak the command word that dismisses it, which works only if the fortress is empty.",
      "The fortress is a square tower, 20 feet on a side and 30 feet high, with arrow slits on all sides and a battlement atop it. Its interior is divided into two floors, with a ladder running along one wall to connect them. The ladder ends at a trapdoor leading to the roof. When activated, the tower has a small door on the side facing you. The door opens only at your command, which you can speak as a bonus action. It is immune to the knock spell and similar magic, such as that of a chime of opening.",
      "Each creature in the area where the fortress appears must make a DC 15 Dexterity saving throw, taking 10d10 bludgeoning damage on a failed save, or half as much damage on a successful one. In either case, the creature is pushed to an unoccupied space outside but next to the fortress. Objects in the area that aren't being worn or carried take this damage and are pushed automatically.",
      "The tower is made of adamantine, and its magic prevents it from being tipped over. The roof, the door, and the walls each have 100 hit points,",
      "immunity to damage from nonmagical weapons excluding siege weapons, and resistance to all other damage. Only a wish spell can repair the fortress (this use of the spell counts as replicating a spell of 8th level or lower). Each casting of wish causes the roof, the door, or one wall to regain 50 hit points."
    ]
  },
  {
    name: "Ioun Stone",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, varies (requires attunement)",
      "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.",
      "When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.",
      "A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.",
      "Absorption (Very Rare). While this pale lavender ellipsoid orbits your head, you can use your reaction to cancel a spell of 4th level or lower cast by a creature you can see and targeting only you.",
      "Once the stone has canceled 20 levels of spells, it burns out and turns dull gray, losing its magic. If you are targeted by a spell whose level is higher than the number of spell levels the stone has left, the stone can't cancel it.",
      "Agility (Very Rare). Your Dexterity score increases by 2, to a maximum of 20, while this deep red sphere orbits your head.",
      "Awareness (Rare). You can't be surprised while this dark blue rhomboid orbits your head.",
      "Fortitude (Very Rare). Your Constitution score increases by 2, to a maximum of 20, while this pink rhomboid orbits your head.",
      "Greater Absorption (Legendary). While this marbled lavender and green ellipsoid orbits your head, you can use your reaction to cancel a spell of 8th level or lower cast by a creature you can see and targeting only you.",
      "Once the stone has canceled 50 levels of spells, it burns out and turns dull gray, losing its magic. If you are targeted by a spell whose level is higher than the number of spell levels the stone has left, the stone can't cancel it.",
      "Insight (Very Rare). Your Wisdom score increases by 2, to a maximum of 20, while this incandescent blue sphere orbits your head.",
      "Intellect (Very Rare). Your Intelligence score increases by 2, to a maximum of 20, while this marbled scarlet and blue sphere orbits your head.",
      "Leadership (Very Rare). Your Charisma score increases by 2, to a maximum of 20, while this marbled pink and green sphere orbits your head.",
      "Mastery (Legendary). Your proficiency bonus increases by 1 while this pale green prism orbits your head.",
      "Protection (Rare). You gain a +1 bonus to AC while this dusty rose prism orbits your head.",
      "Regeneration (Legendary). You regain 15 hit points at the end of each hour this pearly white spindle orbits your head, provided that you have at least 1 hit point.",
      "Reserve (Rare). This vibrant purple prism stores spells cast into it, holding them until you use them. The stone can store up to 3 levels worth of spells at a time. When found, it contains 1d4 - 1 levels of stored spells chosen by the GM.",
      "Any creature can cast a spell of 1st through 3rd level into the stone by touching it as the spell is cast. The spell has no effect, other than to be stored in the stone. If the stone can't hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.",
      "While this stone orbits your head, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the stone is no longer stored in it, freeing up space.",
      "Strength (Very Rare). Your Strength score increases by 2, to a maximum of 20, while this pale blue rhomboid orbits your head.",
      "Sustenance (Rare). You don't need to eat or drink while this clear spindle orbits your head."
    ]
  },
  {
    name: "Iron Bands of Binding",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare",
      "This rusty iron sphere measures 3 inches in diameter and weighs 1 pound. You can use an action to speak the command word and throw the sphere at a Huge or smaller creature you can see within 60 feet of you. As the sphere moves through the air, it opens into a tangle of metal bands.",
      "Make a ranged attack roll with an attack bonus equal to your Dexterity modifier plus your proficiency bonus. On a hit, the target is restrained until you take a bonus action to speak the command word again to release it. Doing so, or missing with the attack, causes the bands to contract and become a sphere once more.",
      "A creature, including the one restrained, can use an action to make a DC 20 Strength check to break the iron bands. On a success, the item is destroyed, and the restrained creature is freed. If the check fails, any further attempts made by that creature automatically fail until 24 hours have elapsed.",
      "Once the bands are used, they can't be used again until the next dawn."
    ]
  },
  {
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
    ]
  },
  {
    name: "Iron Flask",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, legendary",
      "This iron bottle has a brass stopper. You can use an action to speak the flask's command word, targeting a creature that you can see within 60 feet of you. If the target is native to a plane of existence other than the one you're on, the target must succeed on a DC 17 Wisdom saving throw or be trapped in the flask. If the target has been trapped by the flask before, it has advantage on the saving throw. Once trapped, a creature remains in the flask until released. The flask can hold only one creature at a time. A creature trapped in the flask doesn't need to breathe, eat, or drink and doesn't age.",
      "You can use an action to remove the flask's stopper and release the creature the flask contains. The creature is friendly to you and your companions for 1 hour and obeys your commands for that duration. If you give no commands or give it a command that is likely to result in its death, it defends itself but otherwise takes no actions. At the end of the duration, the creature acts in accordance with its normal disposition and alignment.",
      "An identify spell reveals that a creature is inside the flask, but the only way to determine the type of creature is to open the flask. A newly discovered bottle might already contain a creature chosen by the GM or determined randomly.",
      "| d100 | Contents |",
      "|---|---|",
      "| 1-50 | Empty |",
      "| 51-54 | Demon (type 1) |",
      "| 55-58 | Demon (type 2) |",
      "| 59-62 | Demon (type 3) |",
      "| 63-64 | Demon (type 4) |",
      "| 65 | Demon (type 5) |",
      "| 66 | Demon (type 6) |",
      "| 67 | Deva |",
      "| 68-69 | Devil (greater) |",
      "| 70-73 | Devil (lesser) |",
      "| 74-75 | Djinni |",
      "| 76-77 | Efreeti |",
      "| 78-83 | Elemental (any) |",
      "| 84-86 | Invisible stalker |",
      "| 87-90 | Night hag |",
      "| 91 | Planetar |",
      "| 92-95 | Salamander |",
      "| 96 | Solar |",
      "| 97-99 | Succubus/incubus |",
      "| 100 | Xorn |"
    ]
  },
  {
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
    ]
  },
  {
    name: "Lantern of Revealing",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "While lit, this hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. Invisible creatures and objects are visible as long as they are in the lantern's bright light. You can use an action to lower the hood, reducing the light to dim light in a 5 foot radius."
    ]
  },
  {
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
    ]
  },
  {
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
    ]
  },
  {
    name: "Mantle of Spell Resistance",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare (requires attunement)",
      "You have advantage on saving throws against spells while you wear this cloak."
    ]
  },
  {
    name: "Manual of Bodily Health",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, very rare",
      "This book contains health and diet tips, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Constitution score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century."
    ]
  },
  {
    name: "Horseshoes of a Zephyr",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, very rare",
      "These iron horseshoes come in a set of four. While all four shoes are affixed to the hooves of a horse or similar creature, they allow the creature to move normally while floating 4 inches above the ground. This effect means the creature can cross or stand above nonsolid or unstable surfaces, such as water or lava. The creature leaves no tracks and ignores difficult terrain. In addition, the creature can move at normal speed for up to 12 hours a day without suffering exhaustion from a forced march."
    ]
  },
  {
    name: "Manual of Gainful Exercise",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, very rare",
      "This book describes fitness exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Strength score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century."
    ]
  },
  {
    name: "Manual of Golems",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, very rare",
      "This tome contains information and incantations necessary to make a particular type of golem. The GM chooses the type or determines it randomly. To decipher and use the manual, you must be a spellcaster with at least two 5th-level spell slots. A creature that can't use a manual of golems and attempts to read it takes 6d6 psychic damage.",
      "| d20 | Golem | Time | Cost |",
      "|---|---|---|---|",
      "| 1-5 | Clay | 30 days | 65,000 gp |",
      "| 6-17 | Flesh | 60 days | 50,000 gp |",
      "| 18 | Iron | 120 days | 100,000 gp |",
      "| 19-20 | Stone | 90 days | 80,000 gp |",
      "To create a golem, you must spend the time shown on the table, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay the specified cost to purchase supplies.",
      "Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. It is under your control, and it understands and obeys your spoken commands."
    ]
  },
  {
    name: "Manual of Quickness of Action",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, very rare",
      "This book contains coordination and balance exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Dexterity score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century."
    ]
  },
  {
    name: "Marvelous Pigments",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, very rare",
      "Typically found in 1d4 pots inside a fine wooden box with a brush (weighing 1 pound in total), these pigments allow you to create three-dimensional objects by painting them in two dimensions. The paint flows from the brush to form the desired object as you concentrate on its image.",
      "Each pot of paint is sufficient to cover 1,000 square feet of a surface, which lets you create inanimate objects or terrain features-such as a door, a pit, flowers, trees, cells, rooms, or weapons- that are up to 10,000 cubic feet. It takes 10 minutes to cover 100 square feet.",
      "When you complete the painting, the object or terrain feature depicted becomes a real, nonmagical object. Thus, painting a door on a wall creates an actual door that can be opened to whatever is beyond. Painting a pit on a floor creates a real pit, and its depth counts against the total area of objects you create.",
      "Nothing created by the pigments can have a value greater than 25 gp. If you paint an object of greater value (such as a diamond or a pile of gold), the object looks authentic, but close inspection reveals it is made from paste, bone, or some other worthless material.",
      "If you paint a form of energy such as fire or lightning, the energy appears but dissipates as soon as you complete the painting, doing no harm to anything."
    ]
  },
  {
    name: "Medallion of Thoughts",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "The medallion has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the detect thoughts spell (save DC 13) from it. The medallion regains 1d3 expended charges daily at dawn."
    ]
  },
  {
    name: "Mirror of Life Trapping",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, very rare",
      "When this 4-foot-tall mirror is viewed indirectly, its surface shows faint images of creatures. The mirror weighs 50 pounds, and it has AC 11, 10 hit points, and vulnerability to bludgeoning damage. It shatters and is destroyed when reduced to 0 hit points.",
      "If the mirror is hanging on a vertical surface and you are within 5 feet of it, you can use an action to speak its command word and activate it. It remains activated until you use an action to speak the command word again.",
      "Any creature other than you that sees its reflection in the activated mirror while within 30 feet of it must succeed on a DC 15 Charisma saving throw or be trapped, along with anything it is wearing or carrying, in one of the mirror's twelve extradimensional cells. This saving throw is made with advantage if the creature knows the mirror's nature, and constructs succeed on the saving throw automatically.",
      "An extradimensional cell is an infinite expanse filled with thick fog that reduces visibility to 10 feet. Creatures trapped in the mirror's cells don't age, and they don't need to eat, drink, or sleep. A creature trapped within a cell can escape using magic that permits planar travel. Otherwise, the creature is confined to the cell until freed.",
      "If the mirror traps a creature but its twelve extradimensional cells are already occupied, the mirror frees one trapped creature at random to accommodate the new prisoner. A freed creature appears in an unoccupied space within sight of the mirror but facing away from it. If the mirror is shattered, all creatures it contains are freed and appear in unoccupied spaces near it.",
      "While within 5 feet of the mirror, you can use an action to speak the name of one creature trapped in it or call out a particular cell by number. The creature named or contained in the named cell appears as an image on the mirror's surface. You and the creature can then communicate normally.",
      "In a similar way, you can use an action to speak a second command word and free one creature trapped in the mirror. The freed creature appears, along with its possessions, in the unoccupied space nearest to the mirror and facing away from it."
    ]
  },
  {
    name: "Mithral Armor",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    desc: [
      "Armor (medium or heavy, uncommon",
      "Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't."
    ]
  },
  {
    name: "Necklace of Adaptation",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "While wearing this necklace, you can breathe normally in any environment, and you have advantage on saving throws made against harmful gases and vapors (such as cloudkill and stinking cloud effects, inhaled poisons, and the breath weapons of some dragons)."
    ]
  },
  {
    name: "Necklace of Prayer Beads",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare (requires attunement by a cleric, druid, or paladin)",
      "This necklace has 1d4 + 2 magic beads made from aquamarine, black pearl, or topaz. It also has many nonmagical beads made from stones such as amber, bloodstone, citrine, coral, jade, pearl, or quartz. If a magic bead is removed from the necklace, that bead loses its magic.",
      "Six types of magic beads exist. The GM decides the type of each bead on the necklace or determines it randomly. A necklace can have more than one bead of the same type. To use one, you must be wearing the necklace. Each bead contains a spell that you can cast from it as a bonus action (using your spell save DC if a save is necessary). Once a magic bead's spell is cast, that bead can't be used again until the next dawn.",
      "| d20 | Bead of... | Spell |",
      "|---|---|---|",
      "| 1-6 | Blessing | Bless |",
      "| 7-12 | Curing | Cure wounds (2nd level) or lesser restoration |",
      "| 13-16 | Favor | Greater restoration |",
      "| 17-18 | Smiting | Branding smite |",
      "| 19 | Summons | Planar ally |",
      "| 20 | Wind walking | Wind walk |"
    ]
  },
  {
    name: "Necklace of Fireballs",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare",
      "This necklace has 1d6 + 3 beads hanging from it. You can use an action to detach a bead and throw it up to 60 feet away. When it reaches the end of its trajectory, the bead detonates as a 3rd-level fireball spell (save DC 15).",
      "You can hurl multiple beads, or even the whole necklace, as one action. When you do so, increase the level of the fireball by 1 for each bead beyond the first."
    ]
  },
  {
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
    ]
  },
  {
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
    ]
  },
  {
    name: "Oil of Etherealness",
    equipment_category: {
      index: "potion",
      name: "Potion",
      url: "/api/equipment-categories/potion"
    },
    desc: [
      "Potion, rare",
      "Beads of this cloudy gray oil form on the outside of its container and quickly evaporate. The oil can cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of the etherealness spell for 1 hour."
    ]
  },
  {
    name: "Oil of Sharpness",
    equipment_category: {
      index: "potion",
      name: "Potion",
      url: "/api/equipment-categories/potion"
    },
    desc: [
      "Potion, very rare",
      "This clear, gelatinous oil sparkles with tiny, ultrathin silver shards. The oil can coat one slashing or piercing weapon or up to 5 pieces of slashing or piercing ammunition. Applying the oil takes 1 minute. For 1 hour, the coated item is magical and has a +3 bonus to attack and damage rolls."
    ]
  },
  {
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
    ]
  },
  {
    name: "Oil of Slipperiness",
    equipment_category: {
      index: "potion",
      name: "Potion",
      url: "/api/equipment-categories/potion"
    },
    desc: [
      "Potion, uncommon",
      "This sticky black unguent is thick and heavy in the container, but it flows quickly when poured. The oil can cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of a freedom of movement spell for 8 hours.",
      "Alternatively, the oil can be poured on the ground as an action, where it covers a 10-foot square, duplicating the effect of the grease spell in that area for 8 hours."
    ]
  },
  {
    name: "Orb of Dragonkind",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, artifact (requires attunement)",
      "Ages past, elves and humans waged a terrible war against evil dragons. When the world seemed doomed, powerful wizards came together and worked their greatest magic, forging five Orbs of Dragonkind (or Dragon Orbs) to help them defeat the dragons. One orb was taken to each of the five wizard towers, and there they were used to speed the war toward a victorious end. The wizards used the orbs to lure dragons to them, then destroyed the dragons with powerful magic.",
      "As the wizard towers fell in later ages, the orbs were destroyed or faded into legend, and only three are thought to survive. Their magic has been warped and twisted over the centuries, so although their primary purpose of calling dragons still functions, they also allow some measure of control over dragons.",
      "Each orb contains the essence of an evil dragon, a presence that resents any attempt to coax magic from it. Those lacking in force of personality might find themselves enslaved to an orb.",
      "An orb is an etched crystal globe about 10 inches in diameter. When used, it grows to about 20 inches in diameter, and mist swirls inside it.",
      "While attuned to an orb, you can use an action to peer into the orb's depths and speak its command word. You must then make a DC 15 Charisma check. On a successful check, you control the orb for as long as you remain attuned to it. On a failed check, you become charmed by the orb for as long as you remain attuned to it.",
      "While you are charmed by the orb, you can't voluntarily end your attunement to it, and the orb casts suggestion on you at will (save DC 18), urging you to work toward the evil ends it desires. The dragon essence within the orb might want many things: the annihilation of a particular people, freedom from the orb, to spread suffering in the world, to advance the worship of Tiamat, or something else the GM decides.",
      "Random Properties. An Orb of Dragonkind has the following random properties:",
      "2 minor beneficial properties",
      "1 minor detrimental property",
      "1 major detrimental property",
      "Spells. The orb has 7 charges and regains 1d4 + 3 expended charges daily at dawn. If you control the orb, you can use an action and expend 1 or more charges to cast one of the following spells (save DC 18) from it: cure wounds (5th-level version, 3 charges), daylight (1 charge), death ward (2 charges), or scrying (3 charges).",
      "You can also use an action to cast the detect magic spell from the orb without using any charges.",
      "Call Dragons. While you control the orb, you can use an action to cause the artifact to issue a telepathic call that extends in all directions for 40 miles. Evil dragons in range feel compelled to come to the orb as soon as possible by the most direct route. Dragon deities such as Tiamat are unaffected by this call. Dragons drawn to the orb might be hostile toward you for compelling them against their will. Once you have used this property, it can't be used again for 1 hour.",
      "Destroying an Orb. An Orb of Dragonkind appears fragile but is impervious to most damage, including the attacks and breath weapons of dragons. A disintegrate spell or one good hit from a +3 magic weapon is sufficient to destroy an orb, however."
    ]
  },
  {
    name: "Pearl of Power",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement by a spellcaster)",
      "While this pearl is on your person, you can use an action to speak its command word and regain one expended spell slot. If the expended slot was of 4th level or higher, the new slot is 3rd level. Once you use the pearl, it can't be used again until the next dawn."
    ]
  },
  {
    name: "Periapt of Health",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "You are immune to contracting any disease while you wear this pendant. If you are already infected with a disease, the effects of the disease are suppressed you while you wear the pendant."
    ]
  },
  {
    name: "Periapt of Wound Closure",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "While you wear this pendant, you stabilize whenever you are dying at the start of your turn. In addition, whenever you roll a Hit Die to regain hit points, double the number of hit points it restores."
    ]
  },
  {
    name: "Periapt of Proof against Poison",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare",
      "This delicate silver chain has a brilliant-cut black gem pendant. While you wear it, poisons have no effect on you. You are immune to the poisoned condition and have immunity to poison damage."
    ]
  },
  {
    name: "Philter of Love",
    equipment_category: {
      index: "potion",
      name: "Potion",
      url: "/api/equipment-categories/potion"
    },
    desc: [
      "Potion, uncommon",
      "The next time you see a creature within 10 minutes after drinking this philter, you become charmed by that creature for 1 hour. If the creature is of a species and gender you are normally attracted to, you regard it as your true love while you are charmed. This potion's rose-hued, effervescent liquid contains one easy-to-miss bubble shaped like a heart."
    ]
  },
  {
    name: "Pipes of Haunting",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "You must be proficient with wind instruments to use these pipes. They have 3 charges. You can use an action to play them and expend 1 charge to create an eerie, spellbinding tune. Each creature within 30 feet of you that hears you play must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. If you wish, all creatures in the area that aren't hostile toward you automatically succeed on the saving throw. A creature that fails the saving throw can repeat it at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on its saving throw is immune to the effect of these pipes for 24 hours. The pipes regain 1d3 expended charges daily at dawn."
    ]
  },
  {
    name: "Pipes of the Sewers",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "You must be proficient with wind instruments to use these pipes. While you are attuned to the pipes, ordinary rats and giant rats are indifferent toward you and will not attack you unless you threaten or harm them.",
      "The pipes have 3 charges. If you play the pipes as an action, you can use a bonus action to expend 1 to 3 charges, calling forth one swarm of rats with each expended charge, provided that enough rats are within half a mile of you to be called in this fashion (as determined by the GM). If there aren't enough rats to form a swarm, the charge is wasted. Called swarms move toward the music by the shortest available route but aren't under your control otherwise. The pipes regain 1d3 expended charges daily at dawn.",
      "Whenever a swarm of rats that isn't under another creature's control comes within 30 feet of you while you are playing the pipes, you can make a Charisma check contested by the swarm's Wisdom check. If you lose the contest, the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours. If you win the contest, the swarm is swayed by the pipes' music and becomes friendly to you and your companions for as long as you continue to play the pipes each round as an action. A friendly swarm obeys your commands. If you issue no commands to a friendly swarm, it defends itself but otherwise takes no actions. If a friendly swarm starts its turn and can't hear the pipes' music, your control over that swarm ends, and the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours."
    ]
  },
  {
    name: "Plate Armor of Etherealness",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    desc: [
      "Armor (plate), legendary (requires attunement)",
      "While you're wearing this armor, you can speak its command word as an action to gain the effect of the etherealness spell, which last for 10 minutes or until you remove the armor or use an action to speak the command word again. This property of the armor can't be used again until the next dawn."
    ]
  },
  {
    name: "Potion of Animal Friendship",
    equipment_category: {
      index: "potion",
      name: "Potion",
      url: "/api/equipment-categories/potion"
    },
    desc: [
      "Potion, uncommon",
      "When you drink this potion, you can cast the animal friendship spell (save DC 13) for 1 hour at will. Agitating this muddy liquid brings little bits into view: a fish scale, a hummingbird tongue, a cat claw, or a squirrel hair."
    ]
  },
  {
    name: "Potion of Clairvoyance",
    equipment_category: {
      index: "potion",
      name: "Potion",
      url: "/api/equipment-categories/potion"
    },
    desc: [
      "Potion, rare",
      "When you drink this potion, you gain the effect of the clairvoyance spell. An eyeball bobs in this yellowish liquid but vanishes when the potion is opened."
    ]
  },
  {
    name: "Portable Hole",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare",
      "This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter.",
      "You can use an action to unfold a portable hole and place it on or against a solid surface, whereupon the portable hole creates an extradimensional hole 10 feet deep. The cylindrical space within the hole exists on a different plane, so it can't be used to create open passages. Any creature inside an open portable hole can exit the hole by climbing out of it.",
      "You can use an action to close a portable hole by taking hold of the edges of the cloth and folding it up. Folding the cloth closes the hole, and any creatures or objects within remain in the extradimensional space. No matter what's in it, the hole weighs next to nothing.",
      "If the hole is folded up, a creature within the hole's extradimensional space can use an action to make a DC 10 Strength check. On a successful check, the creature forces its way out and appears within 5 feet of the portable hole or the creature carrying it. A breathing creature within a closed portable hole can survive for up to 10 minutes, after which time it begins to suffocate.",
      "Placing a portable hole inside an extradimensional space created by a bag of holding, handy haversack, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened."
    ]
  },
  {
    name: "Potion of Climbing",
    equipment_category: {
      index: "potion",
      name: "Potion",
      url: "/api/equipment-categories/potion"
    },
    desc: [
      "Potion, common",
      "When you drink this potion, you gain a climbing speed equal to your walking speed for 1 hour. During this time, you have advantage on Strength (Athletics) checks you make to climb. The potion is separated into brown, silver, and gray layers resembling bands of stone. Shaking the bottle fails to mix the colors."
    ]
  },
  {
    name: "Potion of Flying",
    equipment_category: {
      index: "potion",
      name: "Potion",
      url: "/api/equipment-categories/potion"
    },
    desc: [
      "Potion, very rare",
      "When you drink this potion, you gain a flying speed equal to your walking speed for 1 hour and can hover. If you're in the air when the potion wears off, you fall unless you have some other means of staying aloft. This potion's clear liquid floats at the top of its container and has cloudy white impurities drifting in it."
    ]
  },
  {
    name: "Potion of Diminution",
    equipment_category: {
      index: "potion",
      name: "Potion",
      url: "/api/equipment-categories/potion"
    },
    desc: [
      "Potion, rare",
      'When you drink this potion, you gain the "reduce" effect of the enlarge/reduce spell for 1d4 hours (no concentration required). The red in the potion\'s liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it. Shaking the bottle fails to interrupt this process.'
    ]
  },
  {
    name: "Potion of Gaseous Form",
    equipment_category: {
      index: "potion",
      name: "Potion",
      url: "/api/equipment-categories/potion"
    },
    desc: [
      "Potion, rare",
      "When you drink this potion, you gain the effect of the gaseous form spell for 1 hour (no concentration required) or until you end the effect as a bonus action. This potion's container seems to hold fog that moves and pours like water."
    ]
  },
  {
    name: "Potion of Giant Strength",
    equipment_category: {
      index: "potion",
      name: "Potion",
      url: "/api/equipment-categories/potion"
    },
    desc: [
      "Potion, varies",
      "When you drink this potion, your Strength score changes for 1 hour. The type of giant determines the score (see the table below). The potion has no effect on you if your Strength is equal to or greater than that score.",
      "This potion's transparent liquid has floating in it a sliver of fingernail from a giant of the appropriate type. The potion of frost giant strength and the potion of stone giant strength have the same effect.",
      "| Type of Giant | Strength | Rarity |",
      "|---|---|---|",
      "| Hill giant | 21 | Uncommon |",
      "| Frost/stone giant | 23 | Rare |",
      "| Fire giant | 25 | Rare |",
      "| Cloud giant | 27 | Very rare |",
      "| Storm giant | 29 | Legendary |"
    ]
  },
  {
    name: "Potion of Growth",
    equipment_category: {
      index: "potion",
      name: "Potion",
      url: "/api/equipment-categories/potion"
    },
    desc: [
      "Potion, uncommon",
      'When you drink this potion, you gain the "enlarge" effect of the enlarge/reduce spell for 1d4 hours (no concentration required). The red in the potion\'s liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts. Shaking the bottle fails to interrupt this process.'
    ]
  },
  {
    name: "Potion of Heroism",
    equipment_category: {
      index: "potion",
      name: "Potion",
      url: "/api/equipment-categories/potion"
    },
    desc: [
      "Potion, rare",
      "For 1 hour after drinking it, you gain 10 temporary hit points that last for 1 hour. For the same duration, you are under the effect of the bless spell (no concentration required). This blue potion bubbles and steams as if boiling."
    ]
  },
  {
    name: "Potion of Invisibility",
    equipment_category: {
      index: "potion",
      name: "Potion",
      url: "/api/equipment-categories/potion"
    },
    desc: [
      "Potion, very rare",
      "This potion's container looks empty but feels as though it holds liquid. When you drink it, you become invisible for 1 hour. Anything you wear or carry is invisible with you. The effect ends early if you attack or cast a spell."
    ]
  },
  {
    name: "Potion of Mind Reading",
    equipment_category: {
      index: "potion",
      name: "Potion",
      url: "/api/equipment-categories/potion"
    },
    desc: [
      "Potion, rare",
      "When you drink this potion, you gain the effect of the detect thoughts spell (save DC 13). The potion's dense, purple liquid has an ovoid cloud of pink floating in it."
    ]
  },
  {
    name: "Potion of Resistance",
    equipment_category: {
      index: "potion",
      name: "Potion",
      url: "/api/equipment-categories/potion"
    },
    desc: [
      "Potion, uncommon",
      "When you drink this potion, you gain resistance to one type of damage for 1 hour. The GM chooses the type or determines it randomly from the options below.",
      "| d10 | Damage Type |",
      "|---|---|",
      "| 1 | Acid |",
      "| 2 | Cold |",
      "| 3 | Fire |",
      "| 4 | Force |",
      "| 5 | Lightning |",
      "| 6 | Necrotic |",
      "| 7 | Poison |",
      "| 8 | Psychic |",
      "| 9 | Radiant |",
      "| 10 | Thunder |"
    ]
  },
  {
    name: "Potion of Poison",
    equipment_category: {
      index: "potion",
      name: "Potion",
      url: "/api/equipment-categories/potion"
    },
    desc: [
      "Potion, uncommon",
      "This concoction looks, smells, and tastes like a potion of healing or other beneficial potion. However, it is actually poison masked by illusion magic. An identify spell reveals its true nature.",
      "If you drink it, you take 3d6 poison damage, and you must succeed on a DC 13 Constitution saving throw or be poisoned. At the start of each of your turns while you are poisoned in this way, you take 3d6 poison damage. At the end of each of your turns, you can repeat the saving throw. On a successful save, the poison damage you take on your subsequent turns decreases by 1d6. The poison ends when the damage decreases to 0."
    ]
  },
  {
    name: "Potion of Speed",
    equipment_category: {
      index: "potion",
      name: "Potion",
      url: "/api/equipment-categories/potion"
    },
    desc: [
      "Potion, very rare",
      "When you drink this potion, you gain the effect of the haste spell for 1 minute (no concentration required). The potion's yellow fluid is streaked with black and swirls on its own."
    ]
  },
  {
    name: "Potion of Water Breathing",
    equipment_category: {
      index: "potion",
      name: "Potion",
      url: "/api/equipment-categories/potion"
    },
    desc: [
      "Potion, uncommon",
      "You can breathe underwater for 1 hour after drinking this potion. Its cloudy green fluid smells of the sea and has a jellyfish-like bubble floating in it."
    ]
  },
  {
    name: "Restorative Ointment",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "This glass jar, 3 inches in diameter, contains 1d4 + 1 doses of a thick mixture that smells faintly of aloe. The jar and its contents weigh 1/2 pound.",
      "As an action, one dose of the ointment can be swallowed or applied to the skin. The creature that receives it regains 2d8 + 2 hit points, ceases to be poisoned, and is cured of any disease."
    ]
  },
  {
    name: "Ring of Animal Influence",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, rare",
      "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing the ring, you can use an action to expend 1 of its charges to cast one of the following spells:",
      "Animal friendship (save DC 13)",
      "Fear (save DC 13), targeting only beasts that have an Intelligence of 3 or lower",
      "Speak with animals"
    ]
  },
  {
    name: "Ring of Djinni Summoning",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, legendary (requires attunement)",
      "While wearing this ring, you can speak its command word as an action to summon a particular djinni from the Elemental Plane of Air. The djinni appears in an unoccupied space you choose within 120 feet of you. It remains as long as you concentrate (as if concentrating on a spell), to a maximum of 1 hour, or until it drops to 0 hit points. It then returns to its home plane.",
      "While summoned, the djinni is friendly to you and your companions. It obeys any commands you give it, no matter what language you use. If you fail to command it, the djinni defends itself against attackers but takes no other actions.",
      "After the djinni departs, it can't be summoned again for 24 hours, and the ring becomes nonmagical if the djinni dies."
    ]
  },
  {
    name: "Ring of Elemental Command",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, legendary (requires attunement)",
      "This ring is linked to one of the four Elemental Planes. The GM chooses or randomly determines the linked plane.",
      "While wearing this ring, you have advantage on attack rolls against elementals from the linked plane, and they have disadvantage on attack rolls against you. In addition, you have access to properties based on the linked plane.",
      "The ring has 5 charges. It regains 1d4 + 1 expended charges daily at dawn. Spells cast from the ring have a save DC of 17.",
      "Ring of Air Elemental Command. You can expend 2 of the ring's charges to cast dominate monster on an air elemental. In addition, when you fall, you descend 60 feet per round and take no damage from falling. You can also speak and understand Auran.",
      "If you help slay an air elemental while attuned to the ring, you gain access to the following additional properties:",
      "You have resistance to lightning damage.",
      "You have a flying speed equal to your walking speed and can hover.",
      "You can cast the following spells from the ring, expending the necessary number of charges: chain lightning (3 charges), gust of wind (2 charges), or wind wall (1 charge).",
      "Ring of Earth Elemental Command. You can expend 2 of the ring's charges to cast dominate monster on an earth elemental. In addition, you can move in difficult terrain that is composed of rubble, rocks, or dirt as if it were normal terrain. You can also speak and understand Terran.",
      "If you help slay an earth elemental while attuned to the ring, you gain access to the following additional properties:",
      "You have resistance to acid damage.",
      "You can move through solid earth or rock as if those areas were difficult terrain. If you end your turn there, you are shunted out to the nearest unoccupied space you last occupied.",
      "You can cast the following spells from the ring, expending the necessary number of charges: stone shape (2 charges), stoneskin (3 charges), or wall of stone (3 charges).",
      "Ring of Fire Elemental Command. You can expend 2 of the ring's charges to cast dominate monster on a fire elemental. In addition, you have resistance to fire damage. You can also speak and understand Ignan.",
      "If you help slay a fire elemental while attuned to the ring, you gain access to the following additional properties:",
      "You are immune to fire damage.",
      "You can cast the following spells from the ring, expending the necessary number of charges: burning hands (1 charge), fireball (2 charges), and wall of fire (3 charges).",
      "Ring of Water Elemental Command. You can expend 2 of the ring's charges to cast dominate monster on a water elemental. In addition, you can stand on and walk across liquid surfaces as if they were solid ground. You can also speak and understand Aquan.",
      "If you help slay a water elemental while attuned to the ring, you gain access to the following additional properties:",
      "You can breathe underwater and have a swimming speed equal to your walking speed.",
      "You can cast the following spells from the ring, expending the necessary number of charges: create or destroy water (1 charge), control water (3 charges), ice storm (2 charges), or wall of ice (3 charges)."
    ]
  },
  {
    name: "Ring of Evasion",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, rare (requires attunement)",
      "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. When you fail a Dexterity saving throw while wearing it, you can use your reaction to expend 1 of its charges to succeed on that saving throw instead."
    ]
  },
  {
    name: "Ring of Feather Falling",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, rare (requires attunement)",
      "When you fall while wearing this ring, you descend 60 feet per round and take no damage from falling."
    ]
  },
  {
    name: "Ring of Free Action",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, rare (requires attunement)",
      "While you wear this ring, difficult terrain doesn't cost you extra movement. In addition, magic can neither reduce your speed nor cause you to be paralyzed or restrained."
    ]
  },
  {
    name: "Ring of Invisibility",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, legendary (requires attunement)",
      "While wearing this ring, you can turn invisible as an action. Anything you are wearing or carrying is invisible with you. You remain invisible until the ring is removed, until you attack or cast a spell, or until you use a bonus action to become visible again."
    ]
  },
  {
    name: "Ring of Jumping",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, uncommon (requires attunement)",
      "While wearing this ring, you can cast the jump spell from it as a bonus action at will, but can target only yourself when you do so."
    ]
  },
  {
    name: "Ring of Protection",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, rare (requires attunement)",
      "You gain a +1 bonus to AC and saving throws while wearing this ring."
    ]
  },
  {
    name: "Ring of Mind Shielding",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, uncommon (requires attunement)",
      "While wearing this ring, you are immune to magic that allows other creatures to read your thoughts, determine whether you are lying, know your alignment, or know your creature type. Creatures can telepathically communicate with you only if you allow it.",
      "You can use an action to cause the ring to become invisible until you use another action to make it visible, until you remove the ring, or until you die.",
      "If you die while wearing the ring, your soul enters it, unless it already houses a soul. You can remain in the ring or depart for the afterlife. As long as your soul is in the ring, you can telepathically communicate with any creature wearing it. A wearer can't prevent this telepathic communication."
    ]
  },
  {
    name: "Ring of Regeneration",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, very rare (requires attunement)",
      "While wearing this ring, you regain 1d6 hit points every 10 minutes, provided that you have at least 1 hit point. If you lose a body part, the ring causes the missing part to regrow and return to full functionality after 1d6 + 1 days if you have at least 1 hit point the whole time."
    ]
  },
  {
    name: "Ring of Resistance",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, rare (requires attunement)",
      "You have resistance to one damage type while wearing this ring. The gem in the ring indicates the type, which the GM chooses or determines randomly.",
      "| d10 | Damage Type | Gem |",
      "|---|---|---|",
      "| 1 | Acid | Pearl |",
      "| 2 | Cold | Tourmaline |",
      "| 3 | Fire | Garnet |",
      "| 4 | Force | Sapphire |",
      "| 5 | Lightning | Citrine |",
      "| 6 | Necrotic | Jet |",
      "| 7 | Poison | Amethyst |",
      "| 8 | Psychic | Jade |",
      "| 9 | Radiant | Topaz |",
      "| 10 | Thunder | Spinel |"
    ]
  },
  {
    name: "Ring of Shooting Stars",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, very rare (requires attunement outdoors at night)",
      "While wearing this ring in dim light or darkness, you can cast dancing lights and light from the ring at will. Casting either spell from the ring requires an action.",
      "The ring has 6 charges for the following other properties. The ring regains 1d6 expended charges daily at dawn.",
      "Faerie Fire. You can expend 1 charge as an action to cast faerie fire from the ring.",
      "Ball Lightning. You can expend 2 charges as an action to create one to four 3-foot-diameter spheres of lightning. The more spheres you create, the less powerful each sphere is individually.",
      "Each sphere appears in an unoccupied space you can see within 120 feet of you. The spheres last as long as you concentrate (as if concentrating on a spell), up to 1 minute. Each sphere sheds dim light in a 30-foot radius.",
      "As a bonus action, you can move each sphere up to 30 feet, but no farther than 120 feet away from you. When a creature other than you comes within 5 feet of a sphere, the sphere discharges lightning at that creature and disappears. That creature must make a DC 15 Dexterity saving throw. On a failed save, the creature takes lightning damage based on the number of spheres you created.",
      "| Spheres | Lightning Damage |",
      "|---|---|",
      "| 4 | 2d4 |",
      "| 3 | 2d6 |",
      "| 2 | 5d4 |",
      "| 1 | 4d12 |",
      "Shooting Stars. You can expend 1 to 3 charges as an action. For every charge you expend, you launch a glowing mote of light from the ring at a point you can see within 60 feet of you. Each creature within a 15-foot cube originating from that point is showered in sparks and must make a DC 15 Dexterity saving throw, taking 5d4 fire damage on a failed save, or half as much damage on a successful one."
    ]
  },
  {
    name: "Ring of Spell Storing",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, rare (requires attunement)",
      "This ring stores spells cast into it, holding them until the attuned wearer uses them. The ring can store up to 5 levels worth of spells at a time. When found, it contains 1d6 - 1 levels of stored spells chosen by the GM.",
      "Any creature can cast a spell of 1st through 5th level into the ring by touching the ring as the spell is cast. The spell has no effect, other than to be stored in the ring. If the ring can't hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.",
      "While wearing this ring, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the ring is no longer stored in it, freeing up space."
    ]
  },
  {
    name: "Ring of Spell Turning",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, legendary (requires attunement)",
      "While wearing this ring, you have advantage on saving throws against any spell that targets only you (not in an area of effect). In addition, if you roll a 20 for the save and the spell is 7th level or lower, the spell has no effect on you and instead targets the caster, using the slot level, spell save DC, attack bonus, and spellcasting ability of the caster."
    ]
  },
  {
    name: "Ring of Swimming",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: ["Ring, uncommon", "You have a swimming speed of 40 feet while wearing this ring."]
  },
  {
    name: "Ring of Telekinesis",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, very rare (requires attunement)",
      "While wearing this ring, you can cast the telekinesis spell at will, but you can target only objects that aren't being worn or carried."
    ]
  },
  {
    name: "Ring of the Ram",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, rare (requires attunement)",
      "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing the ring, you can use an action to expend 1 to 3 of its charges to attack one creature you can see within 60 feet of you. The ring produces a spectral ram's head and makes its attack roll with a +7 bonus. On a hit, for each charge you spend, the target takes 2d10 force damage and is pushed 5 feet away from you.",
      "Alternatively, you can expend 1 to 3 of the ring's charges as an action to try to break an object you can see within 60 feet of you that isn't being worn or carried. The ring makes a Strength check with a +5 bonus for each charge you spend."
    ]
  },
  {
    name: "Ring of Three Wishes",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, legendary",
      "While wearing this ring, you can use an action to expend 1 of its 3 charges to cast the wish spell from it. The ring becomes nonmagical when you use the last charge."
    ]
  },
  {
    name: "Ring of Warmth",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, uncommon (requires attunement)",
      "While wearing this ring, you have resistance to cold damage. In addition, you and everything you wear and carry are unharmed by temperatures as low as -50 degrees Fahrenheit."
    ]
  },
  {
    name: "Ring of Water Walking",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, uncommon",
      "While wearing this ring, you can stand on and move across any liquid surface as if it were solid ground."
    ]
  },
  {
    name: "Ring of X-ray Vision",
    equipment_category: {
      index: "ring",
      name: "Ring",
      url: "/api/equipment-categories/ring"
    },
    desc: [
      "Ring, rare (requires attunement)",
      "While wearing this ring, you can use an action to speak its command word. When you do so, you can see into and through solid matter for 1 minute. This vision has a radius of 30 feet. To you, solid objects within that radius appear transparent and don't prevent light from passing through them. The vision can penetrate 1 foot of stone, 1 inch of common metal, or up to 3 feet of wood or dirt. Thicker substances block the vision, as does a thin sheet of lead.",
      "Whenever you use the ring again before taking a long rest, you must succeed on a DC 15 Constitution saving throw or gain one level of exhaustion."
    ]
  },
  {
    name: "Robe of Eyes",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare (requires attunement)",
      "This robe is adorned with eyelike patterns. While you wear the robe, you gain the following benefits:",
      "The robe lets you see in all directions, and you have advantage on Wisdom (Perception) checks that rely on sight.",
      "You have darkvision out to a range of 120 feet.",
      "You can see invisible creatures and objects, as well as see into the Ethereal Plane, out to a range of 120 feet.",
      "The eyes on the robe can't be closed or averted. Although you can close or avert your own eyes, you are never considered to be doing so while wearing this robe.",
      "A light spell cast on the robe or a daylight spell cast within 5 feet of the robe causes you to be blinded for 1 minute. At the end of each of your turns, you can make a Constitution saving throw (DC 11 for light or DC 15 for daylight), ending the blindness on a success."
    ]
  },
  {
    name: "Robe of Scintillating Colors",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, very rare (requires attunement)",
      "This robe has 3 charges, and it regains 1d3 expended charges daily at dawn. While you wear it, you can use an action and expend 1 charge to cause the garment to display a shifting pattern of dazzling hues until the end of your next turn. During this time, the robe sheds bright light in a 30-foot radius and dim light for an additional 30 feet. Creatures that can see you have disadvantage on attack rolls against you. In addition, any creature in the bright light that can see you when the robe's power is activated must succeed on a DC 15 Wisdom saving throw or become stunned until the effect ends."
    ]
  },
  {
    name: "Robe of Stars",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, very rare (requires attunement)",
      "This black or dark blue robe is embroidered with small white or silver stars. You gain a +1 bonus to saving throws while you wear it.",
      "Six stars, located on the robe's upper front portion, are particularly large. While wearing this robe, you can use an action to pull off one of the stars and use it to cast magic missile as a 5th-level spell. Daily at dusk, 1d6 removed stars reappear on the robe.",
      "While you wear the robe, you can use an action to enter the Astral Plane along with everything you are wearing and carrying. You remain there until you use an action to return to the plane you were on. You reappear in the last space you occupied, or if that space is occupied, the nearest unoccupied space."
    ]
  },
  {
    name: "Robe of the Archmagi",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, legendary (requires attunement by a sorcerer, warlock, or wizard)",
      "This elegant garment is made from exquisite cloth of white, gray, or black and adorned with silvery runes. The robe's color corresponds to the alignment for which the item was created. A white robe was made for good, gray for neutral, and black for evil. You can't attune to a robe of the archmagi that doesn't correspond to your alignment.",
      "You gain these benefits while wearing the robe:",
      "If you aren't wearing armor, your base Armor Class is 15 + your Dexterity modifier.",
      "You have advantage on saving throws against spells and other magical effects.",
      "Your spell save DC and spell attack bonus each increase by 2."
    ]
  },
  {
    name: "Rod of Absorption",
    equipment_category: {
      index: "rod",
      name: "Rod",
      url: "/api/equipment-categories/rod"
    },
    desc: [
      "Rod, very rare (requires attunement)",
      "While holding this rod, you can use your reaction to absorb a spell that is targeting only you and not with an area of effect. The absorbed spell's effect is canceled, and the spell's energy-not the spell itself-is stored in the rod. The energy has the same level as the spell when it was cast. The rod can absorb and store up to 50 levels of energy over the course of its existence. Once the rod absorbs 50 levels of energy, it can't absorb more. If you are targeted by a spell that the rod can't store, the rod has no effect on that spell.",
      "When you become attuned to the rod, you know how many levels of energy the rod has absorbed over the course of its existence, and how many levels of spell energy it currently has stored.",
      "If you are a spellcaster holding the rod, you can convert energy stored in it into spell slots to cast spells you have prepared or know. You can create spell slots only of a level equal to or lower than your own spell slots, up to a maximum of 5th level. You use the stored levels in place of your slots, but otherwise cast the spell as normal. For example, you can use 3 levels stored in the rod as a 3rd-level spell slot.",
      "A newly found rod has 1d10 levels of spell energy stored in it already. A rod that can no longer absorb spell energy and has no energy remaining becomes nonmagical."
    ]
  },
  {
    name: "Robe of Useful Items",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "This robe has cloth patches of various shapes and colors covering it. While wearing the robe, you can use an action to detach one of the patches, causing it to become the object or creature it represents. Once the last patch is removed, the robe becomes an ordinary garment.",
      "The robe has two of each of the following patches:",
      "Dagger",
      "Bullseye lantern (filled and lit)",
      "Steel mirror",
      "10-foot pole",
      "Hempen rope (50 feet, coiled)",
      "Sack",
      "In addition, the robe has 4d4 other patches. The GM chooses the patches or determines them randomly.",
      "| d100 | Patch |",
      "|---|---|",
      "| 01-08 | Bag of 100 gp |",
      "| 09-15 | Silver coffer (1 foot long, 6 inches wide and deep) worth 500 gp |",
      "| 16-22 | Iron door (up to 10 feet wide and 10 feet high, barred on one side of your choice), which you can place in an opening you can reach; it conforms to fit the opening, attaching and hinging itself |",
      "| 23-30 | 10 gems worth 100 gp each |",
      "| 31-44 | Wooden ladder (24 feet long) 45-51 A riding horse with saddle bags |",
      "| 52-59 | Pit (a cube 10 feet on a side), which you can place on the ground within 10 feet of you |",
      "| 60-68 | 4 potions of healing |",
      "| 69-75 | Rowboat (12 feet long) |",
      "| 76-83 | Spell scroll containing one spell of 1st to 3rd level |",
      "| 84-90 | 2 mastiffs |",
      "| 91-96 | Window (2 feet by 4 feet, up to 2 feet deep), which you can place on a vertical surface you can reach |",
      "| 97-100 | Portable ram |"
    ]
  },
  {
    name: "Rod of Alertness",
    equipment_category: {
      index: "rod",
      name: "Rod",
      url: "/api/equipment-categories/rod"
    },
    desc: [
      "Rod, very rare (requires attunement)",
      "This rod has a flanged head and the following properties.",
      "Alertness. While holding the rod, you have advantage on Wisdom (Perception) checks and on rolls for initiative.",
      "Spells. While holding the rod, you can use an action to cast one of the following spells from it: detect evil and good, detect magic, detect poison and disease, or see invisibility.",
      "Protective Aura. As an action, you can plant the haft end of the rod in the ground, whereupon the rod's head sheds bright light in a 60-foot radius and dim light for an additional 60 feet. While in that bright light, you and any creature that is friendly to you gain a +1 bonus to AC and saving throws and can sense the location of any invisible hostile creature that is also in the bright light.",
      "The rod's head stops glowing and the effect ends after 10 minutes, or when a creature uses an action to pull the rod from the ground. This property can't be used again until the next dawn."
    ]
  },
  {
    name: "Rod of Rulership",
    equipment_category: {
      index: "rod",
      name: "Rod",
      url: "/api/equipment-categories/rod"
    },
    desc: [
      "Rod, rare (requires attunement)",
      "You can use an action to present the rod and command obedience from each creature of your choice that you can see within 120 feet of you. Each target must succeed on a DC 15 Wisdom saving throw or be charmed by you for 8 hours. While charmed in this way, the creature regards you as its trusted leader. If harmed by you or your companions, or commanded to do something contrary to its nature, a target ceases to be charmed in this way. The rod can't be used again until the next dawn."
    ]
  },
  {
    name: "Rod of Lordly Might",
    equipment_category: {
      index: "rod",
      name: "Rod",
      url: "/api/equipment-categories/rod"
    },
    desc: [
      "Rod, legendary (requires attunement)",
      "This rod has a flanged head, and it functions as a magic mace that grants a +3 bonus to attack and damage rolls made with it. The rod has properties associated with six different buttons that are set in a row along the haft. It has three other properties as well, detailed below.",
      "Six Buttons. You can press one of the rod's six buttons as a bonus action. A button's effect lasts until you push a different button or until you push the same button again, which causes the rod to revert to its normal form.",
      "If you press button 1, the rod becomes a flame tongue, as a fiery blade sprouts from the end opposite the rod's flanged head.",
      "If you press button 2, the rod's flanged head folds down and two crescent-shaped blades spring out, transforming the rod into a magic battleaxe that grants a +3 bonus to attack and damage rolls made with it.",
      "If you press button 3, the rod's flanged head folds down, a spear point springs from the rod's tip, and the rod's handle lengthens into a 6-foot haft, transforming the rod into a magic spear that grants a +3 bonus to attack and damage rolls made with it.",
      "If you press button 4, the rod transforms into a climbing pole up to 50 feet long, as you specify. In surfaces as hard as granite, a spike at the bottom and three hooks at the top anchor the pole. Horizontal bars 3 inches long fold out from the sides, 1 foot apart, forming a ladder. The pole can bear up to 4,000 pounds. More weight or lack of solid anchoring causes the rod to revert to its normal form.",
      "If you press button 5, the rod transforms into a handheld battering ram and grants its user a +10 bonus to Strength checks made to break through doors, barricades, and other barriers.",
      "If you press button 6, the rod assumes or remains in its normal form and indicates magnetic north. (Nothing happens if this function of the rod is used in a location that has no magnetic north.) The rod also gives you knowledge of your approximate depth beneath the ground or your height above it.",
      "Drain Life. When you hit a creature with a melee attack using the rod, you can force the target to make a DC 17 Constitution saving throw. On a failure, the target takes an extra 4d6 necrotic damage, and you regain a number of hit points equal to half that necrotic damage. This property can't be used again until the next dawn.",
      "Paralyze. When you hit a creature with a melee attack using the rod, you can force the target to make a DC 17 Strength saving throw. On a failure, the target is paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on a success. This property can't be used again until the next dawn.",
      "Terrify. While holding the rod, you can use an action to force each creature you can see within 30 feet of you to make a DC 17 Wisdom saving throw. On a failure, a target is frightened of you for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. This property can't be used again until the next dawn."
    ]
  },
  {
    name: "Rope of Entanglement",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare",
      "This rope is 30 feet long and weighs 3 pounds. If you hold one end of the rope and use an action to speak its command word, the other end darts forward to entangle a creature you can see within 20 feet of you. The target must succeed on a DC 15 Dexterity saving throw or become restrained.",
      "You can release the creature by using a bonus action to speak a second command word. A target restrained by the rope can use an action to make a DC 15 Strength or Dexterity check (target's choice). On a success, the creature is no longer restrained by the rope.",
      "The rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed."
    ]
  },
  {
    name: "Rope of Climbing",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "This 60-foot length of silk rope weighs 3 pounds and can hold up to 3,000 pounds. If you hold one end of the rope and use an action to speak the command word, the rope animates. As a bonus action, you can command the other end to move toward a destination you choose. That end moves 10 feet on your turn when you first command it and 10 feet on each of your turns until reaching its destination, up to its maximum length away, or until you tell it to stop. You can also tell the rope to fasten itself securely to an object or to unfasten itself, to knot or unknot itself, or to coil itself for carrying.",
      "If you tell the rope to knot, large knots appear at 1 foot intervals along the rope. While knotted, the rope shortens to a 50-foot length and grants advantage on checks made to climb it.",
      "The rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed."
    ]
  },
  {
    name: "Rod of Security",
    equipment_category: {
      index: "rod",
      name: "Rod",
      url: "/api/equipment-categories/rod"
    },
    desc: [
      "Rod, very rare",
      "While holding this rod, you can use an action to activate it. The rod then instantly transports you and up to 199 other willing creatures you can see to a paradise that exists in an extraplanar space. You choose the form that the paradise takes. It could be a tranquil garden, lovely glade, cheery tavern, immense palace, tropical island, fantastic carnival, or whatever else you can imagine. Regardless of its nature, the paradise contains enough water and food to sustain its visitors. Everything else that can be interacted with inside the extraplanar space can exist only there. For example, a flower picked from a garden in the paradise disappears if it is taken outside the extraplanar space.",
      "For each hour spent in the paradise, a visitor regains hit points as if it had spent 1 Hit Die. Also, creatures don't age while in the paradise, although time passes normally. Visitors can remain in the paradise for up to 200 days divided by the number of creatures present (round down).",
      "When the time runs out or you use an action to end it, all visitors reappear in the location they occupied when you activated the rod, or an unoccupied space nearest that location. The rod can't be used again until ten days have passed."
    ]
  },
  {
    name: "Scarab of Protection",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, legendary (requires attunement)",
      "If you hold this beetle-shaped medallion in your hand for 1 round, an inscription appears on its surface revealing its magical nature. It provides two benefits while it is on your person:",
      "You have advantage on saving throws against spells.",
      "The scarab has 12 charges. If you fail a saving throw against a necromancy spell or a harmful effect originating from an undead creature, you can use your reaction to expend 1 charge and turn the failed save into a successful one. The scarab crumbles into powder and is destroyed when its last charge is expended."
    ]
  },
  {
    name: "Scimitar of Speed",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (scimitar), very rare (requires attunement)",
      "You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a bonus action on each of your turns."
    ]
  },
  {
    name: "Shield of Missile Attraction",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    desc: [
      "Armor (shield), rare (requires attunement)",
      "While holding this shield, you have resistance to damage from ranged weapon attacks.",
      "Curse. This shield is cursed. Attuning to it curses you until you are targeted by the remove curse spell or similar magic. Removing the shield fails to end the curse on you. Whenever a ranged weapon attack is made against a target within 10 feet of you, the curse causes you to become the target instead."
    ]
  },
  {
    name: "Slippers of Spider Climbing",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "While you wear these light shoes, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You have a climbing speed equal to your walking speed. However, the slippers don't allow you to move this way on a slippery surface, such as one covered by ice or oil."
    ]
  },
  {
    name: "Sovereign Glue",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, legendary",
      "This viscous, milky-white substance can form a permanent adhesive bond between any two objects. It must be stored in a jar or flask that has been coated inside with oil of slipperiness. When found, a container contains 1d6 + 1 ounces.",
      "One ounce of the glue can cover a 1-foot square surface. The glue takes 1 minute to set. Once it has done so, the bond it creates can be broken only by the application of universal solvent or oil of etherealness, or with a wish spell."
    ]
  },
  {
    name: "Spell Scroll",
    equipment_category: {
      index: "scroll",
      name: "Scroll",
      url: "/api/equipment-categories/scroll"
    },
    desc: [
      "Scroll, varies",
      "A spell scroll bears the words of a single spell, written in a mystical cipher. If the spell is on your class's spell list, you can use an action to read the scroll and cast its spell without having to provide any of the spell's components. Otherwise, the scroll is unintelligible.",
      "If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the scroll with no other effect. Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.",
      "The level of the spell on the scroll determines the spell's saving throw DC and attack bonus, as well as the scroll's rarity, as shown in the Spell Scroll table.",
      "Spell Scroll (table)",
      "| Spell Level | Rarity | Save DC | Attack Bonus |",
      "|---|---|---|---|",
      "| Cantrip | Common | 13 | +5 |",
      "| 1st | Common | 13 | +5 |",
      "| 2nd | Uncommon | 13 | +5 |",
      "| 3rd | Uncommon | 15 | +7 |",
      "| 4th | Rare | 15 | +7 |",
      "| 5th | Rare | 17 | +9 |",
      "| 6th | Very rare | 17 | +9 |",
      "| 7th | Very rare | 18 | +10 |",
      "| 8th | Very rare | 18 | +10 |",
      "| 9th | Legendary | 19 | +11 |",
      "A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed."
    ]
  },
  {
    name: "Staff of Frost",
    equipment_category: {
      index: "staff",
      name: "Staff",
      url: "/api/equipment-categories/staff"
    },
    desc: [
      "Staff, very rare (requires attunement by a druid, sorcerer, warlock, or wizard)",
      "You have resistance to cold damage while you hold this staff.",
      "The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: cone of cold (5 charges), fog cloud (1 charge), ice storm (4 charges), or wall of ice (4 charges).",
      "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff turns to water and is destroyed."
    ]
  },
  {
    name: "Staff of Fire",
    equipment_category: {
      index: "staff",
      name: "Staff",
      url: "/api/equipment-categories/staff"
    },
    desc: [
      "Staff, very rare (requires attunement by a druid, sorcerer, warlock, or wizard)",
      "You have resistance to fire damage while you hold this staff.",
      "The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: burning hands (1 charge), fireball (3 charges), or wall of fire (4 charges).",
      "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff blackens, crumbles into cinders, and is destroyed."
    ]
  },
  {
    name: "Staff of Healing",
    equipment_category: {
      index: "staff",
      name: "Staff",
      url: "/api/equipment-categories/staff"
    },
    desc: [
      "Staff, rare (requires attunement by a bard, cleric, or druid)",
      "This staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability modifier: cure wounds (1 charge per spell level, up to 4th), lesser restoration (2 charges), or mass cure wounds (5 charges).",
      "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff vanishes in a flash of light, lost forever."
    ]
  },
  {
    name: "Staff of Striking",
    equipment_category: {
      index: "staff",
      name: "Staff",
      url: "/api/equipment-categories/staff"
    },
    desc: [
      "Staff, very rare (requires attunement)",
      "This staff can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it.",
      "The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage. The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff."
    ]
  },
  {
    name: "Staff of Power",
    equipment_category: {
      index: "staff",
      name: "Staff",
      url: "/api/equipment-categories/staff"
    },
    desc: [
      "Staff, very rare (requires attunement by a sorcerer, warlock, or wizard)",
      "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.",
      "The staff has 20 charges for the following properties. The staff regains 2d8 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff retains its +2 bonus to attack and damage rolls but loses all other properties. On a 20, the staff regains 1d8 + 2 charges.",
      "Power Strike. When you hit with a melee attack using the staff, you can expend 1 charge to deal an extra 1d6 force damage to the target.",
      "Spells. While holding this staff, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus: cone of cold (5 charges), fireball (5th-level version, 5 charges), globe of invulnerability (6 charges), hold monster (5 charges), levitate (2 charges), lightning bolt (5th-level version, 5 charges), magic missile (1 charge), ray of enfeeblement (1 charge), or wall of force (5 charges).",
      "Retributive Strike. You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.",
      "You have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 × the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.",
      "| Distance from Origin | Damage |",
      "|---|---|",
      "| 10 ft. away or closer | 8 × the number of charges in the staff |",
      "| 11 to 20 ft. away | 6 × the number of charges in the staff |",
      "| 21 to 30 ft. away | 4 × the number of charges in the staff |"
    ]
  },
  {
    name: "Spellguard Shield",
    equipment_category: {
      index: "armor",
      name: "Armor",
      url: "/api/equipment-categories/armor"
    },
    desc: [
      "Armor (shield), very rare (requires attunement)",
      "While holding this shield, you have advantage on saving throws against spells and other magical effects, and spell attacks have disadvantage against you."
    ]
  },
  {
    name: "Staff of Swarming Insects",
    equipment_category: {
      index: "staff",
      name: "Staff",
      url: "/api/equipment-categories/staff"
    },
    desc: [
      "Staff, very rare (requires attunement by a bard, cleric, druid, sorcerer, warlock, or wizard)",
      "This staff has 10 charges and regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses.",
      "Spells. While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC: giant insect (4 charges) or insect plague (5 charges).",
      "Insect Cloud. While holding the staff, you can use an action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect."
    ]
  },
  {
    name: "Sphere of Annihilation",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, legendary",
      "This 2-foot-diameter black sphere is a hole in the multiverse, hovering in space and stabilized by a magical field surrounding it.",
      "The sphere obliterates all matter it passes through and all matter that passes through it. Artifacts are the exception. Unless an artifact is susceptible to damage from a sphere of annihilation, it passes through the sphere unscathed. Anything else that touches the sphere but isn't wholly engulfed and obliterated by it takes 4d10 force damage.",
      "The sphere is stationary until someone controls it. If you are within 60 feet of an uncontrolled sphere, you can use an action to make a DC 25 Intelligence (Arcana) check. On a success, the sphere levitates in one direction of your choice, up to a number of feet equal to 5 × your Intelligence modifier (minimum 5 feet). On a failure, the sphere moves 10 feet toward you. A creature whose space the sphere enters must succeed on a DC 13 Dexterity saving throw or be touched by it, taking 4d10 force damage.",
      "If you attempt to control a sphere that is under another creature's control, you make an Intelligence (Arcana) check contested by the other creature's Intelligence (Arcana) check. The winner of the contest gains control of the sphere and can levitate it as normal.",
      "If the sphere comes into contact with a planar portal, such as that created by the gate spell, or an extradimensional space, such as that within a portable hole, the GM determines randomly what happens, using the following table.",
      "| d100 | Result |",
      "|---|---|",
      "| 01-50 | The sphere is destroyed. |",
      "| 51-85 | The sphere moves through the portal or into the extradimensional space. |",
      "| 86-00 | A spatial rift sends each creature and object within 180 feet of the sphere, including the sphere, to a random plane of existence. |"
    ]
  },
  {
    name: "Staff of Charming",
    equipment_category: {
      index: "staff",
      name: "Staff",
      url: "/api/equipment-categories/staff"
    },
    desc: [
      "Staff, rare (requires attunement by a bard, cleric, druid, sorcerer, warlock, or wizard)",
      "While holding this staff, you can use an action to expend 1 of its 10 charges to cast charm person, command, or comprehend languages from it using your spell save DC. The staff can also be used as a magic quarterstaff.",
      "If you are holding the staff and fail a saving throw against an enchantment spell that targets only you, you can turn your failed save into a successful one. You can't use this property of the staff again until the next dawn. If you succeed on a save against an enchantment spell that targets only you, with or without the staff's intervention, you can use your reaction to expend 1 charge from the staff and turn the spell back on its caster as if you had cast the spell.",
      "The staff regains 1d8 + 2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff."
    ]
  },
  {
    name: "Staff of the Magi",
    equipment_category: {
      index: "staff",
      name: "Staff",
      url: "/api/equipment-categories/staff"
    },
    desc: [
      "Staff, legendary (requires attunement by a sorcerer, warlock, or wizard)",
      "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While you hold it, you gain a +2 bonus to spell attack rolls.",
      "The staff has 50 charges for the following properties. It regains 4d6 + 2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 20, the staff regains 1d12 + 1 charges.",
      "Spell Absorption. While holding the staff, you have advantage on saving throws against spells. In addition, you can use your reaction when another creature casts a spell that targets only you. If you do, the staff absorbs the magic of the spell, canceling its effect and gaining a number of charges equal to the absorbed spell's level. However, if doing so brings the staff's total number of charges above 50, the staff explodes as if you activated its retributive strike (see below).",
      "Spells. While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability: conjure elemental (7 charges), dispel magic (3 charges), fireball (7th-level version, 7 charges), flaming sphere (2 charges), ice storm (4 charges), invisibility (2 charges), knock (2 charges), lightning bolt (7th-level version, 7 charges), passwall (5 charges), plane shift (7 charges), telekinesis (5 charges), wall of fire (4 charges), or web (2 charges).",
      "You can also use an action to cast one of the following spells from the staff without using any charges: arcane lock, detect magic, enlarge/reduce, light, mage hand, or protection from evil and good.",
      "Retributive Strike. You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.",
      "You have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 × the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.",
      "| Distance from Origin | Damage |",
      "|---|---|",
      "| 10 ft. away or closer | 8 × the number of charges in the staff |",
      "| 11 to 20 ft. away | 6 × the number of charges in the staff |",
      "| 21 to 30 ft. away | 4 × the number of charges in the staff |"
    ]
  },
  {
    name: "Staff of the Woodlands",
    equipment_category: {
      index: "staff",
      name: "Staff",
      url: "/api/equipment-categories/staff"
    },
    desc: [
      "Staff, rare (requires attunement by a druid)",
      "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.",
      "The staff has 10 charges for the following properties. It regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.",
      "Spells. You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: animal friendship (1 charge), awaken (5 charges), barkskin (2 charges), locate animals or plants (2 charges), speak with animals (1 charge), speak with plants (3 charges), or wall of thorns (6 charges).",
      "You can also use an action to cast the pass without trace spell from the staff without using any charges. Tree Form. You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius.",
      "The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by detect magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff."
    ]
  },
  {
    name: "Staff of the Python",
    equipment_category: {
      index: "staff",
      name: "Staff",
      url: "/api/equipment-categories/staff"
    },
    desc: [
      "Staff, very rare (requires attunement by a cleric, druid, or warlock)",
      "You can use an action to speak this staff's command word and throw the staff on the ground within 10 feet of you. The staff becomes a giant constrictor snake under your control and acts on its own initiative count. By using a bonus action to speak the command word again, you return the staff to its normal form in a space formerly occupied by the snake.",
      "On your turn, you can mentally command the snake if it is within 60 feet of you and you aren't incapacitated. You decide what action the snake takes and where it moves during its next turn, or you can issue it a general command, such as to attack your enemies or guard a location.",
      "If the snake is reduced to 0 hit points, it dies and reverts to its staff form. The staff then shatters and is destroyed. If the snake reverts to staff form before losing all its hit points, it regains all of them."
    ]
  },
  {
    name: "Stone of Controlling Earth Elementals",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare",
      "If the stone is touching the ground, you can use an action to speak its command word and summon an earth elemental, as if you had cast the conjure elemental spell. The stone can't be used this way again until the next dawn. The stone weighs 5 pounds."
    ]
  },
  {
    name: "Staff of Thunder and Lightning",
    equipment_category: {
      index: "staff",
      name: "Staff",
      url: "/api/equipment-categories/staff"
    },
    desc: [
      "Staff, very rare (requires attunement)",
      "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. It also has the following additional properties. When one of these properties is used, it can't be used again until the next dawn.",
      "Lightning. When you hit with a melee attack using the staff, you can cause the target to take an extra 2d6 lightning damage.",
      "Thunder. When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder, audible out to 300 feet. The target you hit must succeed on a DC 17 Constitution saving throw or become stunned until the end of your next turn.",
      "Lightning Strike. You can use an action to cause a bolt of lightning to leap from the staff's tip in a line that is 5 feet wide and 120 feet long. Each creature in that line must make a DC 17 Dexterity saving throw, taking 9d6 lightning damage on a failed save, or half as much damage on a successful one.",
      "Thunderclap. You can use an action to cause the staff to issue a deafening thunderclap, audible out to 600 feet. Each creature within 60 feet of you (not including you) must make a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 1 minute. On a successful save, a creature takes half damage and isn't deafened.",
      "Thunder and Lightning. You can use an action to use the Lightning Strike and Thunderclap properties at the same time. Doing so doesn't expend the daily use of those properties, only the use of this one."
    ]
  },
  {
    name: "Staff of Withering",
    equipment_category: {
      index: "staff",
      name: "Staff",
      url: "/api/equipment-categories/staff"
    },
    desc: [
      "Staff, rare (requires attunement by a cleric, druid, or warlock)",
      "This staff has 3 charges and regains 1d3 expended charges daily at dawn.",
      "The staff can be wielded as a magic quarterstaff. On a hit, it deals damage as a normal quarterstaff, and you can expend 1 charge to deal an extra 2d10 necrotic damage to the target. In addition, the target must succeed on a DC 15 Constitution saving throw or have disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution."
    ]
  },
  {
    name: "Stone of Good Luck (Luckstone)",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "While this polished agate is on your person, you gain a +1 bonus to ability checks and saving throws."
    ]
  },
  {
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
    ]
  },
  {
    name: "Sword of Life Stealing",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (any sword), rare (requires attunement)",
      "When you attack a creature with this magic weapon and roll a 20 on the attack roll, that target takes an extra 3d6 necrotic damage, provided that the target isn't a construct or an undead. You gain temporary hit points equal to the extra damage dealt."
    ]
  },
  {
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
    ]
  },
  {
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
    ]
  },
  {
    name: "Talisman of Pure Good",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, legendary (requires attunement by a creature of good alignment)",
      "This talisman is a mighty symbol of goodness. A creature that is neither good nor evil in alignment takes 6d6 radiant damage upon touching the talisman. An evil creature takes 8d6 radiant damage upon touching the talisman. Either sort of creature takes the damage again each time it ends its turn holding or carrying the talisman.",
      "If you are a good cleric or paladin, you can use the talisman as a holy symbol, and you gain a +2 bonus to spell attack rolls while you wear or hold it.",
      "The talisman has 7 charges. If you are wearing or holding it, you can use an action to expend 1 charge from it and choose one creature you can see on the ground within 120 feet of you. If the target is of evil alignment, a flaming fissure opens under it. The target must succeed on a DC 20 Dexterity saving throw or fall into the fissure and be destroyed, leaving no remains. The fissure then closes, leaving no trace of its existence. When you expend the last charge, the talisman disperses into motes of golden light and is destroyed."
    ]
  },
  {
    name: "Talisman of the Sphere",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, legendary (requires attunement)",
      "When you make an Intelligence (Arcana) check to control a sphere of annihilation while you are holding this talisman, you double your proficiency bonus on the check. In addition, when you start your turn with control over a sphere of annihilation, you can use an action to levitate it 10 feet plus a number of additional feet equal to 10 × your Intelligence modifier."
    ]
  },
  {
    name: "Talisman of Ultimate Evil",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, legendary (requires attunement by a creature of evil alignment)",
      "This item symbolizes unrepentant evil. A creature that is neither good nor evil in alignment takes 6d6 necrotic damage upon touching the talisman. A good creature takes 8d6 necrotic damage upon touching the talisman. Either sort of creature takes the damage again each time it ends its turn holding or carrying the talisman.",
      "If you are an evil cleric or paladin, you can use the talisman as a holy symbol, and you gain a +2 bonus to spell attack rolls while you wear or hold it.",
      "The talisman has 6 charges. If you are wearing or holding it, you can use an action to expend 1 charge from the talisman and choose one creature you can see on the ground within 120 feet of you. If the target is of good alignment, a flaming fissure opens under it. The target must succeed on a DC 20 Dexterity saving throw or fall into the fissure and be destroyed, leaving no remains. The fissure then closes, leaving no trace of its existence. When you expend the last charge, the talisman dissolves into foul-smelling slime and is destroyed."
    ]
  },
  {
    name: "Tome of Leadership and Influence",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, very rare",
      "This book contains guidelines for influencing and charming others, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Charisma score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century."
    ]
  },
  {
    name: "Tome of Clear Thought",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, very rare",
      "This book contains memory and logic exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Intelligence score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century."
    ]
  },
  {
    name: "Trident of Fish Command",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (trident), uncommon (requires attunement)",
      "This trident is a magic weapon. It has 3 charges. While you carry it, you can use an action and expend 1 charge to cast dominate beast (save DC 15) from it on a beast that has an innate swimming speed. The trident regains 1d3 expended charges daily at dawn."
    ]
  },
  {
    name: "Tome of Understanding",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, very rare",
      "This book contains intuition and insight exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Wisdom score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century."
    ]
  },
  {
    name: "Universal Solvent",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, legendary",
      "This tube holds milky liquid with a strong alcohol smell. You can use an action to pour the contents of the tube onto a surface within reach. The liquid instantly dissolves up to 1 square foot of adhesive it touches, including sovereign glue."
    ]
  },
  {
    name: "Vicious Weapon",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (any), rare",
      "When you roll a 20 on your attack roll with this magic weapon, your critical hit deals an extra 2d6 damage of the weapon's type."
    ]
  },
  {
    name: "Vorpal Sword",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (any sword that deals slashing damage), legendary (requires attunement)",
      "You gain a +3 bonus to attack and damage rolls made with this magic weapon. In addition, the weapon ignores resistance to slashing damage.",
      "When you attack a creature that has at least one head with this weapon and roll a 20 on the attack roll, you cut off one of the creature's heads. The creature dies if it can't survive without the lost head. A creature is immune to this effect if it is immune to slashing damage, doesn't have or need a head, has legendary actions, or the GM decides that the creature is too big for its head to be cut off with this weapon. Such a creature instead takes an extra 6d8 slashing damage from the hit."
    ]
  },
  {
    name: "Wand of Enemy Detection",
    equipment_category: {
      index: "wand",
      name: "Wand",
      url: "/api/equipment-categories/wand"
    },
    desc: [
      "Wand, rare (requires attunement)",
      "This wand has 7 charges. While holding it, you can use an action and expend 1 charge to speak its command word. For the next minute, you know the direction of the nearest creature hostile to you within 60 feet, but not its distance from you. The wand can sense the presence of hostile creatures that are ethereal, invisible, disguised, or hidden, as well as those in plain sight. The effect ends if you stop holding the wand.",
      "The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed."
    ]
  },
  {
    name: "Wand of Fear",
    equipment_category: {
      index: "wand",
      name: "Wand",
      url: "/api/equipment-categories/wand"
    },
    desc: [
      "Wand, rare (requires attunement)",
      "This wand has 7 charges for the following properties. It regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
      "Command. While holding the wand, you can use an action to expend 1 charge and command another creature to flee or grovel, as with the command spell (save DC 15).",
      "Cone of Fear. While holding the wand, you can use an action to expend 2 charges, causing the wand's tip to emit a 60-foot cone of amber light. Each creature in the cone must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. While it is frightened in this way, a creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If it has nowhere it can move, the creature can use the Dodge action. At the end of each of its turns, a creature can repeat the saving throw, ending the effect on itself on a success."
    ]
  },
  {
    name: "Wand of Fireballs",
    equipment_category: {
      index: "wand",
      name: "Wand",
      url: "/api/equipment-categories/wand"
    },
    desc: [
      "Wand, rare (requires attunement by a spellcaster)",
      "This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the fireball spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.",
      "The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed."
    ]
  },
  {
    name: "Wand of Binding",
    equipment_category: {
      index: "wand",
      name: "Wand",
      url: "/api/equipment-categories/wand"
    },
    desc: [
      "Wand, rare (requires attunement by a spellcaster)",
      "This wand has 7 charges for the following properties. It regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
      "Spells. While holding the wand, you can use an action to expend some of its charges to cast one of the following spells (save DC 17): hold monster (5 charges) or hold person (2 charges).",
      "Assisted Escape. While holding the wand, you can use your reaction to expend 1 charge and gain advantage on a saving throw you make to avoid being paralyzed or restrained, or you can expend 1 charge and gain advantage on any check you make to escape a grapple."
    ]
  },
  {
    name: "Wand of Lightning Bolts",
    equipment_category: {
      index: "wand",
      name: "Wand",
      url: "/api/equipment-categories/wand"
    },
    desc: [
      "Wand, rare (requires attunement by a spellcaster)",
      "This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the lightning bolt spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.",
      "The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed."
    ]
  },
  {
    name: "Wand of Magic Detection",
    equipment_category: {
      index: "wand",
      name: "Wand",
      url: "/api/equipment-categories/wand"
    },
    desc: [
      "Wand, uncommon",
      "This wand has 3 charges. While holding it, you can expend 1 charge as an action to cast the detect magic spell from it. The wand regains 1d3 expended charges daily at dawn."
    ]
  },
  {
    name: "Wand of Magic Missiles",
    equipment_category: {
      index: "wand",
      name: "Wand",
      url: "/api/equipment-categories/wand"
    },
    desc: [
      "Wand, uncommon",
      "This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the magic missile spell from it. For 1 charge, you cast the 1st-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.",
      "The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed."
    ]
  },
  {
    name: "Wand of Paralysis",
    equipment_category: {
      index: "wand",
      name: "Wand",
      url: "/api/equipment-categories/wand"
    },
    desc: [
      "Wand, rare (requires attunement by a spellcaster)",
      "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cause a thin blue ray to streak from the tip toward a creature you can see within 60 feet of you. The target must succeed on a DC 15 Constitution saving throw or be paralyzed for 1 minute. At the end of each of the target's turns, it can repeat the saving throw, ending the effect on itself on a success.",
      "The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed."
    ]
  },
  {
    name: "Wand of the War Mage, +1, +2, or +3",
    equipment_category: {
      index: "wand",
      name: "Wand",
      url: "/api/equipment-categories/wand"
    },
    desc: [
      "Wand, uncommon (+1), rare (+2), or very rare (+3) (requires attunement by a spellcaster)",
      "While holding this wand, you gain a bonus to spell attack rolls determined by the wand's rarity. In addition, you ignore half cover when making a spell attack."
    ]
  },
  {
    name: "Wand of Polymorph",
    equipment_category: {
      index: "wand",
      name: "Wand",
      url: "/api/equipment-categories/wand"
    },
    desc: [
      "Wand, very rare (requires attunement by a spellcaster)",
      "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the polymorph spell (save DC 15) from it.",
      "The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed."
    ]
  },
  {
    name: "Wand of Secrets",
    equipment_category: {
      index: "wand",
      name: "Wand",
      url: "/api/equipment-categories/wand"
    },
    desc: [
      "Wand, uncommon",
      "The wand has 3 charges. While holding it, you can use an action to expend 1 of its charges, and if a secret door or trap is within 30 feet of you, the wand pulses and points at the one nearest to you. The wand regains 1d3 expended charges daily at dawn."
    ]
  },
  {
    name: "Wand of Web",
    equipment_category: {
      index: "wand",
      name: "Wand",
      url: "/api/equipment-categories/wand"
    },
    desc: [
      "Wand, uncommon (requires attunement by a spellcaster)",
      "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the web spell (save DC 15) from it.",
      "The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed."
    ]
  },
  {
    name: "Wand of Wonder",
    equipment_category: {
      index: "wand",
      name: "Wand",
      url: "/api/equipment-categories/wand"
    },
    desc: [
      "Wand, rare (requires attunement by a spellcaster)",
      "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges and choose a target within 120 feet of you. The target can be a creature, an object, or a point in space. Roll d100 and consult the following table to discover what happens.",
      "If the effect causes you to cast a spell from the wand, the spell's save DC is 15. If the spell normally has a range expressed in feet, its range becomes 120 feet if it isn't already.",
      "If an effect covers an area, you must center the spell on and include the target. If an effect has multiple possible subjects, the GM randomly determines which ones are affected.",
      "The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into dust and is destroyed.",
      "| d100 | Effect |",
      "|---|---|",
      "| 01-05 | You cast slow. 06-10 You cast faerie fire. |",
      "| 11-15 | You are stunned until the start of your next turn, believing something awesome just happened. 16-20 You cast gust of wind. |",
      "| 21-25 | You cast detect thoughts on the target you chose. If you didn't target a creature, you instead take 1d6 psychic damage. |",
      "| 26-30 | You cast stinking cloud. |",
      "| 31-33 | Heavy rain falls in a 60-foot radius centered on the target. The area becomes lightly obscured. The rain falls until the start of your next turn. |",
      "| 34-36 | An animal appears in the unoccupied space nearest the target. The animal isn't under your control and acts as it normally would. Roll a d100 to determine which animal appears. On a 01-25, a rhinoceros appears; on a 26-50, an elephant appears; and on a 51-100, a rat appears. |",
      "| 37-46 | You cast lightning bolt. |",
      "| 47-49 | A cloud of 600 oversized butterflies fills a 30-foot radius centered on the target. The area becomes heavily obscured. The butterflies remain for 10 minutes. |",
      "| 50-53 | You enlarge the target as if you had cast enlarge/reduce. If the target can't be affected by that spell, or if you didn't target a creature, you become the target. |",
      "| 54-58 | You cast darkness. |",
      "| 59-62 | Grass grows on the ground in a 60-foot radius centered on the target. If grass is already there, it grows to ten times its normal size and remains overgrown for 1 minute. |",
      "| 63-65 | An object of the GM's choice disappears into the Ethereal Plane. The object must be neither worn nor carried, within 120 feet of the target, and no larger than 10 feet in any dimension. |",
      "| 66-69 | You shrink yourself as if you had cast enlarge/reduce on yourself. |",
      "| 70-79 | You cast fireball. |",
      "| 80-84 | You cast invisibility on yourself. |",
      "| 85-87 | Leaves grow from the target. If you chose a point in space as the target, leaves sprout from the creature nearest to that point. Unless they are picked off, the leaves turn brown and fall off after 24 hours. |",
      "| 88-90 | A stream of 1d4 × 10 gems, each worth 1 gp, shoots from the wand's tip in a line 30 feet long and 5 feet wide. Each gem deals 1 bludgeoning damage, and the total damage of the gems is divided equally among all creatures in the line. |",
      "| 91-95 | A burst of colorful shimmering light extends from you in a 30-foot radius. You and each creature in the area that can see must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. |",
      "| 96-97 | The target's skin turns bright blue for 1d10 days. If you chose a point in space, the creature nearest to that point is affected. |",
      "| 98-100 | If you targeted a creature, it must make a DC 15 Constitution saving throw. If you didn't target a creature, you become the target and must make the saving throw. If the saving throw fails by 5 or more, the target is instantly petrified. On any other failed save, the target is restrained and begins to turn to stone. While restrained in this way, the target must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the target is freed by the greater restoration spell or similar magic. |"
    ]
  },
  {
    name: "Wand of Many Worlds",
    equipment_category: {
      index: "wand",
      name: "Wand",
      url: "/api/equipment-categories/wand"
    },
    desc: [
      "Wondrous item, legendary",
      "This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter.",
      "You can use an action to unfold and place the well of many worlds on a solid surface, whereupon it creates a two-way portal to another world or plane of existence. Each time the item opens a portal, the GM decides where it leads. You can use an action to close an open portal by taking hold of the edges of the cloth and folding it up. Once well of many worlds has opened a portal, it can't do so again for 1d8 hours."
    ]
  },
  {
    name: "Weapon, +1, +2, or +3",
    equipment_category: {
      index: "weapon",
      name: "Weapon",
      url: "/api/equipment-categories/weapon"
    },
    desc: [
      "Weapon (any), uncommon (+1), rare (+2), or very rare (+3)",
      "You have a bonus to attack and damage rolls made with this magic weapon. The bonus is determined by the weapon's rarity."
    ]
  },
  {
    name: "Wind Fan",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon",
      "While holding this fan, you can use an action to cast the gust of wind spell (save DC 13) from it. Once used, the fan shouldn't be used again until the next dawn. Each time it is used again before then, it has a cumulative 20 percent chance of not working and tearing into useless, nonmagical tatters."
    ]
  },
  {
    name: "Winged Boots",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, uncommon (requires attunement)",
      "While you wear these boots, you have a flying speed equal to your walking speed. You can use the boots to fly for up to 4 hours, all at once or in several shorter flights, each one using a minimum of 1 minute from the duration. If you are flying when the duration expires, you descend at a rate of 30 feet per round until you land.",
      "The boots regain 2 hours of flying capability for every 12 hours they aren't in use."
    ]
  },
  {
    name: "Wings of Flying",
    equipment_category: {
      index: "wondrous-item",
      name: "Wondrous Item",
      url: "/api/equipment-categories/wondrous-item"
    },
    desc: [
      "Wondrous item, rare (requires attunement)",
      "While wearing this cloak, you can use an action to speak its command word. This turns the cloak into a pair of bat wings or bird wings on your back for 1 hour or until you repeat the command word as an action. The wings give you a flying speed of 60 feet. When they disappear, you can't use them again for 1d12 hours.",
      "Sentient Magic Items",
      "Some magic items possess sentience and personality. Such an item might be possessed, haunted by the spirit of a previous owner, or self-aware thanks to the magic used to create it. In any case, the item behaves like a character, complete with personality quirks, ideals, bonds, and sometimes flaws. A sentient item might be a cherished ally to its wielder or a continual thorn in the side.",
      "Most sentient items are weapons. Other kinds of items can manifest sentience, but consumable items such as potions and scrolls are never sentient.",
      "Sentient magic items function as NPCs under the GM's control. Any activated property of the item is under the item's control, not its wielder's. As long as the wielder maintains a good relationship with the item, the wielder can access those properties normally. If the relationship is strained, the item can suppress its activated properties or even turn them against the wielder."
    ]
  }
];
