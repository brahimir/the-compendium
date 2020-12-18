export class Item {
    id: number;
    name: string;
    type: string;
    requires_attunement: boolean;
    rarity: string;
    value: string;
    description: string;
    ratings: number[];

    /**
     * Instantiates an instance of the Item Object.
     * @param id The id of the Item
     * @param name The name of the Item
     * @param type The type of Item
     * @param requires_attunement True if the Item requires attunement, False otherwise
     * @param rarity The rartiy of the Item (Common, Uncommon, Rare, Very Rare)
     * @param value The value of the Item
     * @param description The description of the Item
     * @param ratings The ratings of the Item
     */
    constructor(
        id: number,
        name: string,
        type: string,
        requires_attunement: boolean,
        rarity: string,
        value: string,
        description: string,
        ratings: number[],
    ) {
        this.id = id;
        this.name = name;
        this.type = type || null;
        this.requires_attunement = requires_attunement || false;
        this.rarity = rarity || null;
        this.value = value || null;
        this.description = description || null;
        this.ratings = ratings || null;
    }
}