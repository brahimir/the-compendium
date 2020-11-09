export class NpcSavingThrows {
    strength: string;
    dexterity: string;
    constitution: string;
    intelligence: string;
    wisdom: string;
    charisma: string;

    /**
     * Instantiates an instance of an SavingThrows object.
     */
    constructor(
        strength: string,
        dexterity: string,
        constitution: string,
        intelligence: string,
        wisdom: string,
        charisma: string,
    ) {
        this.strength = strength || null;
        this.dexterity = dexterity || null;
        this.constitution = constitution || null;
        this.intelligence = intelligence || null;
        this.wisdom = wisdom || null;
        this.charisma = charisma || null;
    }
}