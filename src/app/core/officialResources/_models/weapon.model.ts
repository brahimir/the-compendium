export class Weapon {
    id: number;
    name: string;
    type: string;
    is_martial: boolean;
    damage: string;
    damage_type: string;
    requires_attunement: boolean;
    rarity: string;
    value: string;
    properties: string;
    description: string;

    constructor(
        id: number,
        name: string,
        type: string,
        is_martial: boolean,
        damage: string,
        damage_type: string,
        requires_attunement: boolean,
        rarity: string,
        value: string,
        properties: string,
        description: string,
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.is_martial = is_martial;
        this.damage = damage;
        this.damage_type = damage_type;
        this.requires_attunement = requires_attunement;
        this.rarity = rarity;
        this.value = value;
        this.properties = properties;
        this.description = description;
    }
}