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
        WEAPONS: 'https://us-central1-the-compendium-server.cloudfunctions.net/app/api/homebrewWeapons',
        ARMORS: 'https://us-central1-the-compendium-server.cloudfunctions.net/app/api/homebrewArmors',
        ITEMS: 'https://us-central1-the-compendium-server.cloudfunctions.net/app/api/homebrewItems',
        NPCS: 'https://us-central1-the-compendium-server.cloudfunctions.net/app/api/homebrewNpcs',
        SPELLS: 'https://us-central1-the-compendium-server.cloudfunctions.net/app/api/homebrewSpells',
    }
}