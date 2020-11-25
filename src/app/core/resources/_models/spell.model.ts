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
    ) {
        this.id = id;
        this.name = name;
        this.is_cantrip = is_cantrip;
        this.classes = classes;
        this.level = level;
        this.school = school;
        this.casting_time = casting_time;
        this.range = range;
        this.duration = duration;
        this.components = components;
        this.description = description;
        this.at_higher_levels = at_higher_levels;
    }
}