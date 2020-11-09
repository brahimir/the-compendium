export class WeaponsTable {
    public static weapons: any = [
      {
        id: 1,
        name: "Greatsword",
        is_martial: true,
        damage: "2d6",
        damage_type: "Slashing",
        rarity: "Common",
        value: "50gp",
        properties: "Heavy, two-handed.",
        description: "A giant sword wielded with 2 hands."
      },
      {
        id: 2,
        name: "Club",
        is_martial: false,
        damage: "1d4",
        damage_type: "Bludgeoning",
        rarity: "Common",
        value: "1sp",
        properties: "Light",
        description: "Simple club or baton made of wood."
      },
      {
        id: 3,
        name: "Dagger",
        is_martial: false,
        damage: "1d4",
        damage_type: "Piercing",
        rarity: "Common",
        value: "2gp",
        properties: "Finesse, light, thrown (range 20/60)",
        description: "Simple blade, designed for quick melee attacks or throws."
      },
      {
        id: 4,
        name: "Javelin",
        is_martial: false,
        damage: "1d6",
        damage_type: "Piercing",
        rarity: "Common",
        value: "5sp",
        properties: "Thrown (range 30/120)",
        description: "A type of simple, thrown, ranged weapon, similar to a shortspear."
      },
      {
        id: 5,
        name: "Quarterstaff",
        is_martial: false,
        damage: "1d6",
        damage_type: "Bludgeoning",
        rarity: "Common",
        value: "2sp",
        properties: "Versatile (1d8)",
        description: "A quarterstaff is a double weapon. You can fight with it as if fighting with two weapons, but if you do, you incur all the normal attack penalties associated with fighting with two weapons, just as if you were using a one-handed weapon and a light weapon."
      },
      {
        id: 6,
        name: "Spear",
        is_martial: false,
        damage: "1d4",
        damage_type: "Bludgeoning",
        rarity: "Common",
        value: "1sp",
        properties: "Thrown (range 20/60), versatile (1d8)",
        description: "Simple staff of wood with an afixed point on the end."
      },
      {
        id: 7,
        name: "Shortbow",
        is_martial: false,
        damage: "1d6",
        damage_type: "Piercing",
        rarity: "Common",
        value: "25gp",
        properties: "Ammunition (range 80/320), two-handed",
        description: "Simple bow made from a flexible bow shaft and bowstring."
      },
      {
        id: 8,
        name: "Battleaxe",
        is_martial: true,
        damage: "1d8",
        damage_type: "Slashing",
        rarity: "Common",
        value: "10gp",
        properties: "Versatile (1d10)",
        description: "An axe designed for battle."
      },
      {
        id: 9,
        name: "Halbred",
        is_martial: true,
        damage: "1d10",
        damage_type: "Slashing",
        rarity: "Common",
        value: "20gp",
        properties: "Heavy, reach, two-handed",
        description: "A halberd is a military two-handed melee weapon in the axe and polearm weapon groups. A halberd has reach, so a character wielding it can make attacks other than opportunity attacks on enemies either 1 or 2 squares away."
      },
      {
        id: 10,
        name: "Lance",
        is_martial: true,
        damage: "1d12",
        damage_type: "Piercing",
        rarity: "Common",
        value: "10gp",
        properties: "Reach, special",
        description: "While it lacks the two-handed property, the specific special rules for the lance state that if used while not mounted it requires two hands to use, so even with the feat it could only be used for two-weapon fighting from horseback."
      },
    ];
  }
  