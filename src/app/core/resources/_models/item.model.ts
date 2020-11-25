export class Item {
    id: number;
    name: string;
    type: string;
    requires_attunement: boolean;
    rarity: string;
    value: string;
    description: string;

    constructor(
        id: number,
        name: string,
        type: string,
        requires_attunement: boolean,
        rarity: string,
        value: string,
        description: string,
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.requires_attunement = requires_attunement;
        this.rarity = rarity;
        this.value = value;
        this.description = description;
    }
}