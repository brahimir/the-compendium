export class Npc {
    id: number;
    name: string;
    size: string;
    alignment: string;
    armor_class: number;
    hit_points: number;
    alt_hit_points: string;
    speed: string;
    ability_scores: {
        STR: string,
        DEX: string,
        CON: string,
        INT: string,
        WIS: string,
        CHA: string
    };
    saving_throws: {
        STR: string,
        DEX: string,
        CON: string,
        INT: string,
        WIS: string,
        CHA: string
    };
    skills: {
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
    };
    damage_immunities: string[];
    condition_immunities: string[];
    senses: string[];
    languages: string[];
    challenge_rating: number;
    experience: string;
    abilities: Object[];
    actions: Object[];
    legendary_actions: Object[];
    ratings: number[];

    /**
     * 
     * @param id The Npc id
     * @param name The Npc name
     * @param size The Npc size
     * @param alignment The Npc alignment
     * @param armor_class The Npc armor class
     * @param hit_points The Npc hit points
     * @param alt_hit_points The Npc alternate hit points 
     * @param speed The Npc speed
     * @param ability_scores The Npc ability scores
     * @param saving_throws The Npc saving throws
     * @param skills The Npc skills
     * @param damage_immunities The Npc damage immunities
     * @param condition_immunities The Npc condition immunities
     * @param senses The Npc senses
     * @param languages The Npc languages
     * @param challenge_rating The Npc challenge rating
     * @param experience The Npc experience
     * @param abilities The Npc abilities
     * @param actions The Npc actions
     * @param legendary_actions The Npc legendary actions
     * @param ratings The Npc ratings
     */
    constructor(
        id: number,
        name: string,
        size: string,
        alignment: string,
        armor_class: number,
        hit_points: number,
        alt_hit_points: string,
        speed: string,
        ability_scores: {
            STR: string,
            DEX: string,
            CON: string,
            INT: string,
            WIS: string,
            CHA: string
        },
        saving_throws: {
            STR: string,
            DEX: string,
            CON: string,
            INT: string,
            WIS: string,
            CHA: string
        },
        skills: {
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
        },
        damage_immunities: string[],
        condition_immunities: string[],
        senses: string[],
        languages: string[],
        challenge_rating: number,
        experience: string,
        abilities: Object[],
        actions: Object[],
        legendary_actions: Object[],
        ratings: number[]
    ) {
        this.id = id;
        this.name = name;
        this.size = size || null;
        this.alignment = alignment || null;
        this.armor_class = armor_class || null;
        this.hit_points = hit_points || null;
        this.alt_hit_points = alt_hit_points || null;
        this.speed = speed || null;
        this.ability_scores = ability_scores|| null;
        this.saving_throws = saving_throws || null;
        this.skills = skills || null;
        this.damage_immunities = damage_immunities || null;
        this.condition_immunities = condition_immunities || null;
        this.senses = senses || null;
        this.languages = languages || null;
        this.challenge_rating = challenge_rating || null;
        this.experience = experience || null;
        this.abilities = abilities || null;
        this.actions = actions || null;
        this.legendary_actions = legendary_actions || null;
        this.ratings = ratings || null;
    }
}