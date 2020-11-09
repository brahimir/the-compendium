export class NpcsTable {
  public static npcs: any = [
    {
      id: 1,
      name: "Ancient Copper Dragon",
      size: "Gargantuan Dragon",
      alignment: "Chaotic Good",
      armor_class: 21,
      hit_points: 350,
      alt_hit_points: "(20d20 + 140)",
      speed: "40 ft., climb 40ft., fly 80ft.",
      ability_scores: {
        STR: "27 (+8)",
        DEX: "12 (+1)",
        CON: "25 (+7)",
        INT: "20 (+5)",
        WIS: "17 (+3)",
        CHA: "19 (+4)",
      },
      saving_throws: {
        STR: null,
        DEX: "+8",
        CON: "+14",
        INT: null,
        WIS: "+10",
        CHA: "+11"
      },
      skills: {
        acrobatics: null,
        animal_handling: null,
        arcana: null,
        atheltics: null,
        deception: "+11",
        endurance: null,
        history: null,
        insight: null,
        intimidation: null,
        investigation: null,
        medicine: null,
        nature: null,
        perception: "+17",
        performance: null,
        persuasion: null,
        religion: null,
        sleight_of_hand: null,
        stealth: "+8",
        survival: null
      },
      damage_immunities: ["Acid"],
      condition_immunities: null,
      senses: ["Blindsight 60ft.", "Darkvision 120ft.", "Passive Perception 27"],
      languages: ["Common", "Draconic"],
      challenge_rating: 21,
      experience: "33,000 XP",
      abilities: [
        {
          ability: "Legendary Resistance (3/day)",
          description: "If the dragon failes a saving throw, it can choose to succeed instead."
        }
      ],
      actions: [
        {
          action: "Multiattack",
          description: "The dragon can use its Frightful Presence. It can then make three attacks: one with its Bite and two with its Claws."
        },
        {
          action: "Bite",
          description: "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
        },
        {
          action: "Claw",
          description: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
        },
        {
          action: "Tail",
          description: "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
        },
        {
          action: "Frightful Presence",
          description: "Each creature of the dragon's choice that is within 120 feet of the Dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become Frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the Effect on itself on a success. If a creature's saving throw is successful or the Effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          action: "Breath Weapons",
          description: "The Dragon uses one of the following Breath Weapons."
        },
        {
          action: "Acid Breath",
          description: "The Dragon exhales acid in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 63 (14d8) acid damage on a failed save, or half as much damage on a successful one."
        },
        {
          action: "Slowing Breath",
          description: "The Dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 22 Constitution saving throw. On a failed save, the creature can't use Reactions, its speed is halved, and it can't make more than one Attack on its turn. In addition, the creature can use either an action or a Bonus Action on its turn, but not both. These Effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the Effect on itself with a successful save."
        },
        {
          action: "Change Shape",
          description: "The Dragon magically polymorphs into a Humanoid or beast that has a Challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any Equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). In a new form, the Dragon retains its Alignment, Hit Points, Hit Dice, ability to speak, Proficiencies, Legendary Resistance, Lair Actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its Statistics and capabilities are otherwise replaced by those of the new form, except any Class Features or legendary Actions of that form."
        }
      ],
      legendary_actions: [
        {
          action: "",
          description: "Can take 3 Legendary Actions, choosing from the options below. Only one legendary action can be used at a time, and only at the end of another creature's turn. Spent legendary Actions are regained at the start of each turn."
        },
        {
          action: "Detect",
          description: "The Dragon makes a Wisdom (Perception) check."
        },
        {
          action: "Tail Attack",
          description: "The Dragon makes a Tail Attack."
        },
        {
          action: "Wing Attack (Costs 2 Actions)",
          description: "The Dragon beats its wings. Each creature within 15 ft. of the Dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The Dragon can then fly up to half its flying speed."
        },
      ]
    },
    {
      id: 2,
      name: "Cockatrice",
      size: "Small Monstrosity",
      alignment: "Unaligned",
      armor_class: 11,
      hit_points: 27,
      alt_hit_points: "(6d6 + 6)",
      speed: "20ft., fly 40ft.",
      ability_scores: {
        STR: "6 (-2)",
        DEX: "12 (+1)",
        CON: "12 (+1)",
        INT: "2 (-4)",
        WIS: "13 (+1)",
        CHA: "5 (-3)",
      },
      saving_throws: {
        STR: null,
        DEX: null,
        CON: null,
        INT: null,
        WIS: null,
        CHA: null
      },
      skills: {
        acrobatics: null,
        animal_handling: null,
        arcana: null,
        atheltics: null,
        deception: null,
        endurance: null,
        history: null,
        insight: null,
        intimidation: null,
        investigation: null,
        medicine: null,
        nature: null,
        perception: null,
        performance: null,
        persuasion: null,
        religion: null,
        sleight_of_hand: null,
        stealth: null,
        survival: null
      },
      damage_immunities: null,
      condition_immunities: null,
      senses: ["Darkvision 60ft.", "passive Perception 11"],
      languages: null,
      challenge_rating: 0.5,
      experience: "1000 XP",
      abilities: null,
      actions: [
        {
          action: "Bite",
          description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw against being magically Petrified. On a failed save, the creature begins to turn to stone and is Restrained. It must repeat the saving throw at the end of its next turn. On a success, the Effect ends. On a failure, the creature is Petrified for 24 hours."
        }
      ],
      legendary_actions: null
    },
    {
      id: 3,
      name: "Chuul",
      size: "Large Aberration",
      alignment: "Chaotic Evil",
      armor_class: 16,
      hit_points: 93,
      alt_hit_points: "(11d10 + 33)",
      speed: "30ft., swim 30ft.",
      ability_scores: {
        STR: "19 (+4)",
        DEX: "10 (+0)",
        CON: "16 (+3)",
        INT: "5 (-3)",
        WIS: "11 (+0)",
        CHA: "5 (-3)",
      },
      saving_throws: null,
      skills: {
        acrobatics: null,
        animal_handling: null,
        arcana: null,
        atheltics: null,
        deception: null,
        endurance: null,
        history: null,
        insight: null,
        intimidation: null,
        investigation: null,
        medicine: null,
        nature: null,
        perception: "+4",
        performance: null,
        persuasion: null,
        religion: null,
        sleight_of_hand: null,
        stealth: null,
        survival: null
      },
      damage_immunities: ["Poison"],
      condition_immunities: ["Poisoned"],
      senses: ["Darkvision 60ft.", "passive Perception 14"],
      languages: ["Understands Deep Speech, but can't speak."],
      challenge_rating: 4,
      experience: "1,100 XP",
      abilities: [
        {
          ability: "Amphibious",
          description: "The chuul can breathe air and water."
        },
        {
          ability: "Sense Magic",
          description: "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the Detect Magic spell but itself isn't magical."
        }
      ],
      actions: [
        {
          action: "Multiattack",
          description: "The chuul makes two pincer attacks. If the chuul is Grappling a creature, the chuul can also use its tentacles once."
        },
        {
          action: "Pincer",
          description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. The target is Grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures Grappled."
        },
        {
          action: "Tentacles",
          description: "One creature Grappled by the chuul must succeed on a DC 13 Constitution saving throw or be Poisoned for 1 minute. Until this poison ends, the target is Paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the Effect on itself on a success."
        },
      ],
      legendary_actions: null
    },
    {
      id: 4,
      name: "Grimlock",
      size: "Medium Humanoid (grimlock)",
      alignment: "Neutral Evil",
      armor_class: 11,
      hit_points: 11,
      alt_hit_points: "(2d8 + 2)",
      speed: "30ft., swim 30ft.",
      ability_scores: {
        STR: "19 (+4)",
        DEX: "10 (+0)",
        CON: "16 (+3)",
        INT: "5 (-3)",
        WIS: "11 (+0)",
        CHA: "5 (-3)",
      },
      saving_throws: null,
      skills: {
        acrobatics: null,
        animal_handling: null,
        arcana: null,
        atheltics: null,
        deception: null,
        endurance: null,
        history: null,
        insight: null,
        intimidation: null,
        investigation: null,
        medicine: null,
        nature: null,
        perception: "+4",
        performance: null,
        persuasion: null,
        religion: null,
        sleight_of_hand: null,
        stealth: null,
        survival: null
      },
      damage_immunities: ["Poison"],
      condition_immunities: ["Poisoned"],
      senses: ["Darkvision 60ft.", "passive Perception 14"],
      languages: ["Understands Deep Speech, but can't speak."],
      challenge_rating: 4,
      experience: "1,100 XP",
      abilities: [
        {
          ability: "Amphibious",
          description: "The chuul can breathe air and water."
        },
        {
          ability: "Sense Magic",
          description: "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the Detect Magic spell but itself isn't magical."
        }
      ],
      actions: [
        {
          action: "Multiattack",
          description: "The chuul makes two pincer attacks. If the chuul is Grappling a creature, the chuul can also use its tentacles once."
        },
        {
          action: "Pincer",
          description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. The target is Grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures Grappled."
        },
        {
          action: "Tentacles",
          description: "One creature Grappled by the chuul must succeed on a DC 13 Constitution saving throw or be Poisoned for 1 minute. Until this poison ends, the target is Paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the Effect on itself on a success."
        },
      ],
      legendary_actions: null
    },
    {
      id: 4,
      name: "Grimlock",
      size: "Medium Humanoid (grimlock)",
      alignment: "Neutral Evil",
      armor_class: 11,
      hit_points: 11,
      alt_hit_points: "(2d8 + 2)",
      speed: "30ft., swim 30ft.",
      ability_scores: {
        STR: "19 (+4)",
        DEX: "10 (+0)",
        CON: "16 (+3)",
        INT: "5 (-3)",
        WIS: "11 (+0)",
        CHA: "5 (-3)",
      },
      saving_throws: null,
      skills: {
        acrobatics: null,
        animal_handling: null,
        arcana: null,
        atheltics: null,
        deception: null,
        endurance: null,
        history: null,
        insight: null,
        intimidation: null,
        investigation: null,
        medicine: null,
        nature: null,
        perception: "+4",
        performance: null,
        persuasion: null,
        religion: null,
        sleight_of_hand: null,
        stealth: null,
        survival: null
      },
      damage_immunities: ["Poison"],
      condition_immunities: ["Poisoned"],
      senses: ["Darkvision 60ft.", "passive Perception 14"],
      languages: ["Understands Deep Speech, but can't speak."],
      challenge_rating: 4,
      experience: "1,100 XP",
      abilities: [
        {
          ability: "Amphibious",
          description: "The chuul can breathe air and water."
        },
        {
          ability: "Sense Magic",
          description: "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the Detect Magic spell but itself isn't magical."
        }
      ],
      actions: [
        {
          action: "Multiattack",
          description: "The chuul makes two pincer attacks. If the chuul is Grappling a creature, the chuul can also use its tentacles once."
        },
        {
          action: "Pincer",
          description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. The target is Grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures Grappled."
        },
        {
          action: "Tentacles",
          description: "One creature Grappled by the chuul must succeed on a DC 13 Constitution saving throw or be Poisoned for 1 minute. Until this poison ends, the target is Paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the Effect on itself on a success."
        },
      ],
      legendary_actions: null
    },
    {
      id: 4,
      name: "Grimlock",
      size: "Medium Humanoid (grimlock)",
      alignment: "Neutral Evil",
      armor_class: 11,
      hit_points: 11,
      alt_hit_points: "(2d8 + 2)",
      speed: "30ft., swim 30ft.",
      ability_scores: {
        STR: "19 (+4)",
        DEX: "10 (+0)",
        CON: "16 (+3)",
        INT: "5 (-3)",
        WIS: "11 (+0)",
        CHA: "5 (-3)",
      },
      saving_throws: null,
      skills: {
        acrobatics: null,
        animal_handling: null,
        arcana: null,
        atheltics: null,
        deception: null,
        endurance: null,
        history: null,
        insight: null,
        intimidation: null,
        investigation: null,
        medicine: null,
        nature: null,
        perception: "+4",
        performance: null,
        persuasion: null,
        religion: null,
        sleight_of_hand: null,
        stealth: null,
        survival: null
      },
      damage_immunities: ["Poison"],
      condition_immunities: ["Poisoned"],
      senses: ["Darkvision 60ft.", "passive Perception 14"],
      languages: ["Understands Deep Speech, but can't speak."],
      challenge_rating: 4,
      experience: "1,100 XP",
      abilities: [
        {
          ability: "Amphibious",
          description: "The chuul can breathe air and water."
        },
        {
          ability: "Sense Magic",
          description: "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the Detect Magic spell but itself isn't magical."
        }
      ],
      actions: [
        {
          action: "Multiattack",
          description: "The chuul makes two pincer attacks. If the chuul is Grappling a creature, the chuul can also use its tentacles once."
        },
        {
          action: "Pincer",
          description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. The target is Grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures Grappled."
        },
        {
          action: "Tentacles",
          description: "One creature Grappled by the chuul must succeed on a DC 13 Constitution saving throw or be Poisoned for 1 minute. Until this poison ends, the target is Paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the Effect on itself on a success."
        },
      ],
      legendary_actions: null
    },
    {
      id: 4,
      name: "Grimlock",
      size: "Medium Humanoid (grimlock)",
      alignment: "Neutral Evil",
      armor_class: 11,
      hit_points: 11,
      alt_hit_points: "(2d8 + 2)",
      speed: "30ft., swim 30ft.",
      ability_scores: {
        STR: "19 (+4)",
        DEX: "10 (+0)",
        CON: "16 (+3)",
        INT: "5 (-3)",
        WIS: "11 (+0)",
        CHA: "5 (-3)",
      },
      saving_throws: null,
      skills: {
        acrobatics: null,
        animal_handling: null,
        arcana: null,
        atheltics: null,
        deception: null,
        endurance: null,
        history: null,
        insight: null,
        intimidation: null,
        investigation: null,
        medicine: null,
        nature: null,
        perception: "+4",
        performance: null,
        persuasion: null,
        religion: null,
        sleight_of_hand: null,
        stealth: null,
        survival: null
      },
      damage_immunities: ["Poison"],
      condition_immunities: ["Poisoned"],
      senses: ["Darkvision 60ft.", "passive Perception 14"],
      languages: ["Understands Deep Speech, but can't speak."],
      challenge_rating: 4,
      experience: "1,100 XP",
      abilities: [
        {
          ability: "Amphibious",
          description: "The chuul can breathe air and water."
        },
        {
          ability: "Sense Magic",
          description: "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the Detect Magic spell but itself isn't magical."
        }
      ],
      actions: [
        {
          action: "Multiattack",
          description: "The chuul makes two pincer attacks. If the chuul is Grappling a creature, the chuul can also use its tentacles once."
        },
        {
          action: "Pincer",
          description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. The target is Grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures Grappled."
        },
        {
          action: "Tentacles",
          description: "One creature Grappled by the chuul must succeed on a DC 13 Constitution saving throw or be Poisoned for 1 minute. Until this poison ends, the target is Paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the Effect on itself on a success."
        },
      ],
      legendary_actions: null
    },
    {
      id: 4,
      name: "Grimlock",
      size: "Medium Humanoid (grimlock)",
      alignment: "Neutral Evil",
      armor_class: 11,
      hit_points: 11,
      alt_hit_points: "(2d8 + 2)",
      speed: "30ft., swim 30ft.",
      ability_scores: {
        STR: "19 (+4)",
        DEX: "10 (+0)",
        CON: "16 (+3)",
        INT: "5 (-3)",
        WIS: "11 (+0)",
        CHA: "5 (-3)",
      },
      saving_throws: null,
      skills: {
        acrobatics: null,
        animal_handling: null,
        arcana: null,
        atheltics: null,
        deception: null,
        endurance: null,
        history: null,
        insight: null,
        intimidation: null,
        investigation: null,
        medicine: null,
        nature: null,
        perception: "+4",
        performance: null,
        persuasion: null,
        religion: null,
        sleight_of_hand: null,
        stealth: null,
        survival: null
      },
      damage_immunities: ["Poison"],
      condition_immunities: ["Poisoned"],
      senses: ["Darkvision 60ft.", "passive Perception 14"],
      languages: ["Understands Deep Speech, but can't speak."],
      challenge_rating: 4,
      experience: "1,100 XP",
      abilities: [
        {
          ability: "Amphibious",
          description: "The chuul can breathe air and water."
        },
        {
          ability: "Sense Magic",
          description: "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the Detect Magic spell but itself isn't magical."
        }
      ],
      actions: [
        {
          action: "Multiattack",
          description: "The chuul makes two pincer attacks. If the chuul is Grappling a creature, the chuul can also use its tentacles once."
        },
        {
          action: "Pincer",
          description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. The target is Grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures Grappled."
        },
        {
          action: "Tentacles",
          description: "One creature Grappled by the chuul must succeed on a DC 13 Constitution saving throw or be Poisoned for 1 minute. Until this poison ends, the target is Paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the Effect on itself on a success."
        },
      ],
      legendary_actions: null
    },
    {
      id: 4,
      name: "Grimlock",
      size: "Medium Humanoid (grimlock)",
      alignment: "Neutral Evil",
      armor_class: 11,
      hit_points: 11,
      alt_hit_points: "(2d8 + 2)",
      speed: "30ft., swim 30ft.",
      ability_scores: {
        STR: "19 (+4)",
        DEX: "10 (+0)",
        CON: "16 (+3)",
        INT: "5 (-3)",
        WIS: "11 (+0)",
        CHA: "5 (-3)",
      },
      saving_throws: null,
      skills: {
        acrobatics: null,
        animal_handling: null,
        arcana: null,
        atheltics: null,
        deception: null,
        endurance: null,
        history: null,
        insight: null,
        intimidation: null,
        investigation: null,
        medicine: null,
        nature: null,
        perception: "+4",
        performance: null,
        persuasion: null,
        religion: null,
        sleight_of_hand: null,
        stealth: null,
        survival: null
      },
      damage_immunities: ["Poison"],
      condition_immunities: ["Poisoned"],
      senses: ["Darkvision 60ft.", "passive Perception 14"],
      languages: ["Understands Deep Speech, but can't speak."],
      challenge_rating: 4,
      experience: "1,100 XP",
      abilities: [
        {
          ability: "Amphibious",
          description: "The chuul can breathe air and water."
        },
        {
          ability: "Sense Magic",
          description: "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the Detect Magic spell but itself isn't magical."
        }
      ],
      actions: [
        {
          action: "Multiattack",
          description: "The chuul makes two pincer attacks. If the chuul is Grappling a creature, the chuul can also use its tentacles once."
        },
        {
          action: "Pincer",
          description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. The target is Grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures Grappled."
        },
        {
          action: "Tentacles",
          description: "One creature Grappled by the chuul must succeed on a DC 13 Constitution saving throw or be Poisoned for 1 minute. Until this poison ends, the target is Paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the Effect on itself on a success."
        },
      ],
      legendary_actions: null
    },
    {
      id: 4,
      name: "Grimlock",
      size: "Medium Humanoid (grimlock)",
      alignment: "Neutral Evil",
      armor_class: 11,
      hit_points: 11,
      alt_hit_points: "(2d8 + 2)",
      speed: "30ft., swim 30ft.",
      ability_scores: {
        STR: "19 (+4)",
        DEX: "10 (+0)",
        CON: "16 (+3)",
        INT: "5 (-3)",
        WIS: "11 (+0)",
        CHA: "5 (-3)",
      },
      saving_throws: null,
      skills: {
        acrobatics: null,
        animal_handling: null,
        arcana: null,
        atheltics: null,
        deception: null,
        endurance: null,
        history: null,
        insight: null,
        intimidation: null,
        investigation: null,
        medicine: null,
        nature: null,
        perception: "+4",
        performance: null,
        persuasion: null,
        religion: null,
        sleight_of_hand: null,
        stealth: null,
        survival: null
      },
      damage_immunities: ["Poison"],
      condition_immunities: ["Poisoned"],
      senses: ["Darkvision 60ft.", "passive Perception 14"],
      languages: ["Understands Deep Speech, but can't speak."],
      challenge_rating: 4,
      experience: "1,100 XP",
      abilities: [
        {
          ability: "Amphibious",
          description: "The chuul can breathe air and water."
        },
        {
          ability: "Sense Magic",
          description: "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the Detect Magic spell but itself isn't magical."
        }
      ],
      actions: [
        {
          action: "Multiattack",
          description: "The chuul makes two pincer attacks. If the chuul is Grappling a creature, the chuul can also use its tentacles once."
        },
        {
          action: "Pincer",
          description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. The target is Grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures Grappled."
        },
        {
          action: "Tentacles",
          description: "One creature Grappled by the chuul must succeed on a DC 13 Constitution saving throw or be Poisoned for 1 minute. Until this poison ends, the target is Paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the Effect on itself on a success."
        },
      ],
      legendary_actions: null
    },
  ];
}
