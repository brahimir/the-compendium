export class Spell {
    id: number;
    name: string;
    level: number;
    is_cantrip: boolean;
    classes: string[];
    school: string;
    casting_time: string;
    range: string;
    duration: string;
    components: string;
    description: string;
    at_higher_levels: string;
    ratings: number[];

    /**
     * 
     * @param id The Spell id
     * @param name The Spell name
     * @param level The Spell level
     * @param is_cantrip True if the Spell is a cantrip, False otherwise
     * @param classes The Spell classes
     * @param school The Spell school
     * @param casting_time The Spell casting time
     * @param range The Spell range
     * @param duration The Spell duration
     * @param components The Spell componenets
     * @param description The Spell description
     * @param at_higher_levels The Spell at higher levels
     * @param ratings The Spell ratings
     */
    constructor(
        id: number,
        name: string,
        level: number,
        is_cantrip: boolean,
        classes: string[],
        school: string,
        casting_time: string,
        range: string,
        duration: string,
        components: string,
        description: string,
        at_higher_levels: string,
        ratings: number[]
    ) {
        this.id = id;
        this.name = name;
        this.is_cantrip = is_cantrip || false;
        this.classes = classes || null;
        this.level = level || null;
        this.school = school || null;
        this.casting_time = casting_time || null;
        this.range = range || null;
        this.duration = duration || null;
        this.components = components || null;
        this.description = description || null;
        this.at_higher_levels = at_higher_levels || null;
        this.ratings = ratings || null;
    }
}