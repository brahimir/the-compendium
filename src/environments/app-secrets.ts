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
        WEAPONS: 'http://lvh.me:8080/api/homebrewWeapons',
        ARMORS: 'http://localhost:8080/api/homebrewArmors',
        ITEMS: 'http://localhost:8080/api/homebrewItems',
        NPCS: 'http://localhost:8080/api/homebrewNpcs',
        SPELLS: 'http://localhost:8080/api/homebrewSpells',
    }
}