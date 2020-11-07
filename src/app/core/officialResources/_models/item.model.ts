export class Item {
    id: number;
    name: string;
    type: string;
    rarity: string;
    value: string;
    description: string;

    constructor(
        id: number,
        name: string,
        type: string,
        rarity: string,
        value: string,
        description: string,
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.rarity = rarity;
        this.value = value;
        this.description = description;
    }
}