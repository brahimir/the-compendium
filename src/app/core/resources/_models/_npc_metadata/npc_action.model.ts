export class NpcAction {
    title: string;
    description: string;

    /**
     * Instantiates an instance of an Action object.
     */
    constructor(
        title: string, 
        description: string
    ) {
        this.title = title || null;
        this.description = description || null;
    }
}