import { Armor } from "../../_models/armor.model";

export const armors: Armor[] = [
  {
    name: "Padded",
    armor_category: "Light",
    armor_class: { base: 11, dex_bonus: true, max_bonus: null },
    str_minimum: 0,
    stealth_disadvantage: true,
    weight: 8,
    cost: { quantity: 5, unit: "gp" }
  },
  {
    name: "Leather",
    armor_category: "Light",
    armor_class: { base: 11, dex_bonus: true, max_bonus: null },
    str_minimum: 0,
    stealth_disadvantage: false,
    weight: 10,
    cost: { quantity: 10, unit: "gp" }
  },
  {
    name: "Studded Leather",
    armor_category: "Light",
    armor_class: { base: 12, dex_bonus: true, max_bonus: null },
    str_minimum: 0,
    stealth_disadvantage: false,
    weight: 13,
    cost: { quantity: 45, unit: "gp" }
  },
  {
    name: "Hide",
    armor_category: "Medium",
    armor_class: { base: 12, dex_bonus: true, max_bonus: 2 },
    str_minimum: 0,
    stealth_disadvantage: false,
    weight: 12,
    cost: { quantity: 10, unit: "gp" }
  },
  {
    name: "Chain Shirt",
    armor_category: "Medium",
    armor_class: { base: 13, dex_bonus: true, max_bonus: 2 },
    str_minimum: 0,
    stealth_disadvantage: false,
    weight: 20,
    cost: { quantity: 50, unit: "gp" }
  },
  {
    name: "Breastplate",
    armor_category: "Medium",
    armor_class: { base: 14, dex_bonus: true, max_bonus: 2 },
    str_minimum: 0,
    stealth_disadvantage: false,
    weight: 20,
    cost: { quantity: 400, unit: "gp" }
  },
  {
    name: "Scale Mail",
    armor_category: "Medium",
    armor_class: { base: 14, dex_bonus: true, max_bonus: 2 },
    str_minimum: 0,
    stealth_disadvantage: true,
    weight: 45,
    cost: { quantity: 50, unit: "gp" }
  },
  {
    name: "Half Plate",
    armor_category: "Medium",
    armor_class: { base: 15, dex_bonus: true, max_bonus: 2 },
    str_minimum: 0,
    stealth_disadvantage: true,
    weight: 40,
    cost: { quantity: 750, unit: "gp" }
  },
  {
    name: "Ring Mail",
    armor_category: "Heavy",
    armor_class: { base: 14, dex_bonus: false, max_bonus: null },
    str_minimum: 0,
    stealth_disadvantage: true,
    weight: 40,
    cost: { quantity: 30, unit: "gp" }
  },
  {
    name: "Chain Mail",
    armor_category: "Heavy",
    armor_class: { base: 16, dex_bonus: false, max_bonus: null },
    str_minimum: 13,
    stealth_disadvantage: true,
    weight: 55,
    cost: { quantity: 75, unit: "gp" }
  },
  {
    name: "Splint",
    armor_category: "Heavy",
    armor_class: { base: 17, dex_bonus: false, max_bonus: null },
    str_minimum: 15,
    stealth_disadvantage: true,
    weight: 60,
    cost: { quantity: 200, unit: "gp" }
  },
  {
    name: "Shield",
    armor_category: "Shield",
    armor_class: { base: 2, dex_bonus: false, max_bonus: null },
    str_minimum: 0,
    stealth_disadvantage: false,
    weight: 6,
    cost: { quantity: 10, unit: "gp" }
  },
  {
    name: "Plate",
    armor_category: "Heavy",
    armor_class: { base: 18, dex_bonus: false, max_bonus: null },
    str_minimum: 15,
    stealth_disadvantage: true,
    weight: 65,
    cost: { quantity: 1500, unit: "gp" }
  },
  {
    name: "Adamantine Armor",
    desc: [
      "Armor (medium or heavy, but not hide), uncommon",
      "This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you’re wearing it, any critical hit against you becomes a normal hit."
    ]
  },
  {
    name: "Animated Shield",
    desc: [
      "Armor (shield), very rare (requires attunement)",
      "While holding this shield, you can speak its command word as a bonus action to cause it to animate. The shield leaps into the air and hovers in your space to protect you as if you were wielding it, leaving your hands free. The shield remains animated for 1 minute, until you use a bonus action to end this effect, or until you are incapacitated or die, at which point the shield falls to the ground or into your hand if you have one free."
    ]
  },
  {
    name: "Armor, +1, +2, or +3",
    desc: [
      "Armor (light, medium, or heavy), rare (+1), very rare (+2), or legendary (+3)",
      "You have a bonus to AC while wearing this armor. The bonus is determined by its rarity."
    ]
  },
  {
    name: "Armor of Invulnerability",
    desc: [
      "Armor (plate), legendary (requires attunement)",
      "You have resistance to nonmagical damage while you wear this armor. Additionally, you can use an action to make yourself immune to nonmagical damage for 10 minutes or until you are no longer wearing the armor. Once this special action is used, it can’t be used again until the next dawn."
    ]
  },
  {
    name: "Armor of Resistance",
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
    desc: [
      "Armor (plate), rare (requires attunement)",
      "While wearing this armor, you have resistance to  one of the following damage types: bludgeoning, piercing, or slashing. The GM chooses the type or determines it randomly.",
      "Curse. This armor is cursed, a fact that is revealed only when an identify spell is cast on the armor or you attune to it. Attuning to the armor curses you until you are targeted by the remove curse spell or similar magic; removing the armor fails to end the curse. While cursed, you have vulnerability to two of the three damage types associated with the armor (not the one to which it grants resistance)."
    ]
  },
  {
    name: "Demon Armor",
    desc: [
      "Armor (plate), very rare (requires attunement)",
      "While wearing this armor, you gain a +1 bonus to AC, and you can understand and speak Abyssal. In addition, the armor's clawed gauntlets turn unarmed strikes with your hands into magic weapons that deal slashing damage, with a +1 bonus to attack rolls and damage rolls and a damage die of 1d8. Curse. Once you don this cursed armor, you can't doff it unless you are targeted by the remove curse spell or similar magic. While wearing the armor, you have disadvantage on attack rolls against demons and on saving throws against their spells and special abilities."
    ]
  },
  {
    name: "Dragon Scale Mail",
    desc: [
      "Armor (shield), rare (requires attunement)",
      "Dragon scale mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off scales and gift them to humanoids. Other times, hunters carefully skin and preserve the hide of a dead dragon. In either case, dragon scale mail is highly valued. While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to one damage type that is determined by the kind of dragon that provided the scales (see the table). Additionally, you can focus your senses as an action to magically discern the distance and direction to the closest dragon within 30 miles of you that is of the same type as the armor. This special action can't be used again until the next dawn. | Dragon | Resistance | |---|---| | Black | Acid | | Blue | Lightning | | Brass | Fire | | Bronze | Lightning | | Copper | Acid | | Gold | Fire | | Green | Poison | | Red | Fire | | Silver | Cold | | White | Cold |"
    ]
  },
  {
    name: "Dwarven Plate",
    desc: [
      "Armor (plate), very rare",
      "While wearing this armor, you gain a +2 bonus to AC. In addition, if an effect moves you against your will along the ground, you can use your reaction to reduce the distance you are moved by up to 10 feet."
    ]
  },
  {
    name: "Dwarven Plate",
    desc: [
      "Armor (chain shirt), rare",
      "You gain a +1 bonus to AC while you wear this armor. You are considered proficient with this armor even if you lack proficiency with medium armor."
    ]
  },
  {
    name: "Plate Armor of Etherealness",
    desc: [
      "Armor (plate), legendary (requires attunement)",
      "While you're wearing this armor, you can speak its command word as an action to gain the effect of the etherealness spell, which last for 10 minutes or until you remove the armor or use an action to speak the command word again. This property of the armor can't be used again until the next dawn."
    ]
  },
  {
    name: "Shield of Missile Attraction",
    desc: [
      "Armor (plate), legendary (requires attunement)",
      "While holding this shield, you have resistance to damage from ranged weapon attacks. Curse. This shield is cursed. Attuning to it curses you until you are targeted by the remove curse spell or similar magic. Removing the shield fails to end the curse on you. Whenever a ranged weapon attack is made against a target within 10 feet of you, the curse causes you to become the target instead."
    ]
  }
];
