export class Armor {
    id: number;
    name: string;
    type: string;
    armor_class: string;
    stealth_disadvantage: boolean;
    strength_requirement: boolean;
    requires_attunement: boolean;
    rarity: string;
    value: string;
    description: string;
    ratings: number[];

    /**
     * Instatiates an instance of an Armor Object.
     * @param id The id of the Armor
     * @param name The name of the Armor
     * @param type The type of Armor
     * @param armor_class The armor class of the Armor
     * @param stealth_disadvantage True if the Armor has disadvantage on stealth checks, False otherwise
     * @param strength_requirement True if the Armor has a strength requirement, False otherwise
     * @param requires_attunement True if the Armor requires attunement, False otherwise
     * @param rarity The rarity of the Armor (Common, Uncommon, Rare, Very Rare)
     * @param value The value of the Armor in gp
     * @param description The description of the Armor
     * @param ratings The ratings of the Armor
     */
    constructor(
        id: number,
        name: string,
        type: string,
        armor_class: string,
        stealth_disadvantage: boolean,
        strength_requirement: boolean,
        requires_attunement: boolean,
        rarity: string,
        value: string,
        description: string,
        ratings: number[]
    ) {
        this.id = id;
        this.name = name;
        this.type = type || null;
        this.armor_class = armor_class || null;
        this.stealth_disadvantage = stealth_disadvantage || false;
        this.strength_requirement = strength_requirement || false;
        this.requires_attunement = requires_attunement || false;
        this.rarity = rarity || null;
        this.value = value || null;
        this.description = description || null;
        this.ratings = ratings || null;
    }
}