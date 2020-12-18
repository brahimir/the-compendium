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
    ratings: number[];

    /**
     * 
     * @param id The Weapon id
     * @param name The Weapon name
     * @param type The Weapon type
     * @param is_martial True if the Weapon is a martial Weapon, False otherwise
     * @param damage The Weapon damage
     * @param damage_type The Weapon damamge type
     * @param requires_attunement True if the Weapon requires attunement, False otherwise
     * @param rarity The Weapon rarity (Common, Uncommon, Rare, Very Rare)
     * @param value The Weapon value
     * @param properties The Weapon properties
     * @param description The Weapon description
     * @param ratings The Weapon ratings
     */
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
        ratings: number[]
    ) {
        this.id = id;
        this.name = name;
        this.type = type || null;
        this.is_martial = is_martial || null;
        this.damage = damage || null;
        this.damage_type = damage_type || null;
        this.requires_attunement = requires_attunement || null;
        this.rarity = rarity || null;
        this.value = value || null;
        this.properties = properties || null;
        this.description = description || null;
        this.ratings = ratings || null;
    }
}