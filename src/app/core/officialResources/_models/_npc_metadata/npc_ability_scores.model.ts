export class NpcAbilityScores {
    strength: string;
    dexterity: string;
    constitution: string;
    intelligence: string;
    wisdom: string;
    charisma: string;

    /**
     * Instantiates an instance of an AbilityScores object.
     */
    constructor(
        strength: string,
        dexterity: string,
        constitution: string,
        intelligence: string,
        wisdom: string,
        charisma: string,
    ) {
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.intelligence = intelligence;
        this.wisdom = wisdom;
        this.charisma = charisma;
    }
}