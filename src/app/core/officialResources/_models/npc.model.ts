export class Npc {
    id: number;
    name: string;
    size: string;
    alignment: string;
    armor_class: number;
    hit_points: number;
    alt_hit_points: string;
    speed: string;
    ability_scores: Object[];
    saving_throws: Object[];
    skills: Object[];
    damage_immunities: string[];
    condition_immunities: string[];
    senses: string[];
    languages: string[];
    challenge_rating: number;
    experience: string;
    abilities: Object[];
    actions: Object[];
    legendary_actions: Object[];

    /**
     * Instantiates an instance of an Npc object.
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
        ability_scores: Object[],
        saving_throws: Object[],
        skills: Object[],
        damage_immunities: string[],
        condition_immunities: string[],
        senses: string[],
        languages: string[],
        challenge_rating: number,
        experience: string,
        abilities: Object[],
        actions: Object[],
        legendary_actions: Object[]
    ) {
        this.id = id;
        this.name = name;
        this.size = size || null;
        this.alignment = alignment || null;
        this.armor_class = armor_class || null;
        this.hit_points = hit_points || null;
        this.alt_hit_points = alt_hit_points || null;
        this.speed = speed || null;
        this.ability_scores = ability_scores || null;
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
    }
}