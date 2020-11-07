export class Armor {
    id: number;
    name: string;
    type: string;
    armor_class: string;
    stealth_disadvantage: string;
    strength_requirement: string;
    rarity: string;
    value: string;
    description: string;
  
/**
     * Instantiates an instance of an Armor object.
     */
    constructor(
            id: number,
            name: string,
            type: string,
            armor_class: string,
            stealth_disadvantage: string,
            strength_requirement: string,
            rarity: string,
            value: string,
            description: string,
        ) { 
            this.id = id;
            this.name = name;
            this.type = type;
            this.armor_class = armor_class;
            this.stealth_disadvantage = stealth_disadvantage;
            this.strength_requirement = strength_requirement;
            this.rarity = rarity;
            this.value = value;
            this.description = description;
    }
  }