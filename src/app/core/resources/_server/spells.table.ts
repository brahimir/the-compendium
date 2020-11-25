export class SpellsTable {
  public static spells: any = [
    {
      "name": "Burning Hands",
      "level": 1,
      "is_cantrip": false,
      "classes": ["Sorcerer", "Wizard"],
      "school": "Evocation",
      "casting_time": "1 Action",
      "range": "Self (15-foot-cone)",
      "duration": "Instantaneous",
      "components": "V S",
      "description": "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren’t being worn or carried.",
      "at_higher_levels": "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
    },
    {
      "name": "Chill Touch",
      "level": 1,
      "is_cantrip": false,
      "classes": ["Sorcerer", "Warlock", "Wizard"],
      "school": "Necromancy",
      "casting_time": "1 Action",
      "range": "120 feet",
      "duration": "1 Round",
      "components": "V S",
      "description": "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can’t regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn.",
      "at_higher_levels": "This spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
    },
    {
      "name": "Counterspell",
      "level": 3,
      "is_cantrip": false,
      "classes": ["Sorcerer", "Warlock", "Wizard"],
      "school": "Abjuration",
      "casting_time": "1 Reaction",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "S",
      "description": "You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell’s level. On a success, the creature’s spell fails and has no effect.",
      "at_higher_levels": "When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used."
    },
    {
      "name": "Eldritch Blast",
      "level": 0,
      "is_cantrip": true,
      "classes": ["Warlock"],
      "school": "Evocation",
      "casting_time": "1 Action",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V S",
      "description": "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage.",
      "at_higher_levels": "The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam."
    },
    {
      "name": "Fire Bolt",
      "level": 0,
      "is_cantrip": true,
      "classes": ["Sorcerer", "Wizard"],
      "school": "Evocation",
      "casting_time": "1 Action",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V S",
      "description": "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn’t being worn or carried.",
      "at_higher_levels": "This spell’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
    },
    {
      "name": "Wall of Thorns",
      "level": 6,
      "is_cantrip": false,
      "classes": ["Druid"],
      "school": "Conjuration",
      "casting_time": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 10 minutes.",
      "components": "V S M (a handful of thorns)",
      "description": "You create a wall of tough, pliable, tangled brush bristling with needle-sharp thorns. The wall appears within range on a solid surface and lasts for the duration. You choose to make the wall up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-foot diameter and is up to 20 feet high and 5 feet thick. The wall blocks line of sight. When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 7d8 piercing damage, or half as much damage on a successful save. A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature moves through the wall, it must spend 4 feet of movement. Furthermore, the first time a creature enters the wall on a turn or ends its turn there, the creature must make a Dexterity saving throw. It takes 7d8 slashing damage on a failed save, or half as much damage on a successful one.",
      "at_higher_levels": "When you cast this spell using a spell slot of 7th level or higher, both types of damage increase by 1d8 for each slot level above 6th."
    },
    {
      "name": "Hold Monster",
      "level": 5,
      "is_cantrip": false,
      "classes": ["Bard", "Sorcerer", "Warlock", "Wizard"],
      "school": "Enchantment",
      "casting_time": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 minute.",
      "components": "V S M (a small, straight piece of iron)",
      "description": "Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. This spell has no effect on undead. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.",
      "at_higher_levels": "When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th. The creatures must be within 30 feet of each other when you target them."
    },
    {
      "name": "Polymorph",
      "level": 4,
      "is_cantrip": false,
      "classes": ["Bard", "Druid", "Sorcerer", "Wizard"],
      "school": "Transmutation",
      "casting_time": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute.",
      "components": "V S M (a caterpillar cocoon)",
      "description": "This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. The spell has no effect on a shapechanger or a creature with 0 hit points.\nThe transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast whose challenge rating is equal to or less than the target’s (or the target’s level, if it doesn’t have a challenge rating). The target’s game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality.\nThe target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn’t reduce the creature’s normal form to 0 hit points, it isn’t knocked unconscious.\nThe creature is limited in the actions it can perform by the nature of its new form, and it can’t speak, cast spells, or take any other action that requires hands or speech.\nThe target’s gear melds into the new form. The creature can’t activate, use, wield, or otherwise benefit from any of its equipment.",
      "at_higher_levels": null
    },
    {
      "name": "Mass Heal",
      "level": 9,
      "is_cantrip": false,
      "classes": ["Cleric"],
      "school": "Evocation",
      "casting_time": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V S",
      "description": "A flood of healing energy flows from you into injured creatures around you. You restore up to 700 hit points, divided as you choose among any number of creatures that you can see within range. Creatures healed by this spell are also cured of all diseases and any effect making them blinded or deafened. This spell has no effect on undead or constructs.",
      "at_higher_levels": null
    },
    {
      "name": "Meteor Swarm",
      "level": 9,
      "is_cantrip": false,
      "classes": ["Sorcerer", "Wizard"],
      "school": "Evocation",
      "casting_time": "1 Action",
      "range": "1 mile",
      "duration": "Instantaneous",
      "components": "V S",
      "description": "Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creature takes 20d6 fire damage and 20d6 bludgeoning damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one fiery burst is affected only once.\nThe spell damages objects in the area and ignites flammable objects that aren’t being worn or carried.",
      "at_higher_levels": null
    },
    {
      "name": "Power Word: Kill",
      "level": 9,
      "is_cantrip": false,
      "classes": ["Bard", "Sorcerer", "Warlock", "Wizard"],
      "school": "Enchantment",
      "casting_time": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V",
      "description": "You utter a word of power that can compel one creature you can see within range to die instantly. If the creature you choose has 100 hit points or fewer, it dies. Otherwise, the spell has no effect.",
      "at_higher_levels": null
    },
  ]
}
