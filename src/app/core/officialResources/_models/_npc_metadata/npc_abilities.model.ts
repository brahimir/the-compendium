export class NpcAbilities {
    ability: string;
    description: string;

    /**
     * Instantiates an instance of an Abilities object.
     */
    constructor(
        ability: string, 
        description: string
    ) {
        this.ability = ability;
        this.description = description;
    }
}