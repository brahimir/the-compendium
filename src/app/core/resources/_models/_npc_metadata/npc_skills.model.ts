export class NpcSkills {
    acrobatics: string;
    animal_handling: string;
    arcana: string;
    atheltics: string;
    deception: string;
    endurance: string;
    history: string;
    insight: string;
    intimidation: string;
    investigation: string;
    medicine: string;
    nature: string;
    perception: string;
    performance: string;
    persuasion: string;
    religion: string;
    sleight_of_hand: string;
    stealth: string;
    survival: string;

    /**
     * Instantiates an instance of an Skills object.
     */
    constructor(
        acrobatics: string,
        animal_handling: string,
        arcana: string,
        atheltics: string,
        deception: string,
        endurance: string,
        history: string,
        insight: string,
        intimidation: string,
        investigation: string,
        medicine: string,
        nature: string,
        perception: string,
        performance: string,
        persuasion: string,
        religion: string,
        sleight_of_hand: string,
        stealth: string,
        survival: string
    ) {
        this.acrobatics = acrobatics || null;
        this.animal_handling = animal_handling || null;
        this.arcana = arcana || null;
        this.atheltics = atheltics || null;
        this.deception = deception || null;
        this.endurance = endurance || null;
        this.history = history || null;
        this.insight = insight || null;
        this.intimidation = intimidation || null;
        this.investigation = investigation || null;
        this.medicine = medicine || null;
        this.nature = nature || null;
        this.perception = perception || null;
        this.performance = performance || null;
        this.persuasion = persuasion || null;
        this.religion = religion || null;
        this.sleight_of_hand = sleight_of_hand || null;
        this.stealth = stealth || null;
        this.survival = survival || null;
    }
}