export class Weapon {
    id: number;
    name: string;
    martial: boolean;
    damage: string;
    damage_type: string;
    rarity: string;
    value: string;
    properties: string;
    description: string;

    constructor(
        id: number,
        name: string,
        martial: boolean,
        damage: string,
        damage_type: string,
        rarity: string,
        value: string,
        properties: string,
        description: string,
    ) {
        this.id = id;
        this.name = name;
        this.martial = martial;
        this.damage = damage;
        this.damage_type = damage_type;
        this.rarity = rarity;
        this.value = value;
        this.properties = properties;
        this.description = description;
    }
}