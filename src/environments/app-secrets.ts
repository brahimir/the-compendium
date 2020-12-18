// API Routes
export const routes = {
    // Auth
    USERS: 'api/users',
    PERMISSIONS: 'api/permissions',
    ROLES: 'api/roles',

    // Resources
    OFFICIAL: {
        WEAPONS: 'http://localhost:8080/api/weapons',
        ARMORS: 'http://localhost:8080/api/armors',
        ITEMS: 'http://localhost:8080/api/items',
        NPCS: 'http://localhost:8080/api/npcs',
        SPELLS: 'http://localhost:8080/api/spells',
    },
    HOMEBREW: {
        WEAPONS: 'http://brahimir.ca:8081/api/homebrewWeapons',
        ARMORS: 'http://brahimir.ca:8081/api/homebrewArmors',
        ITEMS: 'http://brahimir.ca:8081/api/homebrewItems',
        NPCS: 'http://brahimir.ca:8081/api/homebrewNpcs',
        SPELLS: 'http://brahimir.ca:8081/api/homebrewSpells',
    }
}