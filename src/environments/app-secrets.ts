// API Routes
export const routes = {
    // Auth
    AUTH: {
        USERS: 'api/users',
        PERMISSIONS: 'api/permissions',
        ROLES: 'api/roles',
    },
    // Resources
    OFFICIAL: {
        BASE: 'https://www.dnd5eapi.co',
        WEAPONS: 'https://www.dnd5eapi.co/api/equipment-categories/weapon',
        ARMORS: 'https://www.dnd5eapi.co/api/equipment-categories/armor',
        ITEMS: 'http://localhost:8080/api/items',
        NPCS: 'https://www.dnd5eapi.co/api/monsters',
        SPELLS: 'https://www.dnd5eapi.co/api/spells',
    },
    HOMEBREW: {
        WEAPONS: 'https://us-central1-the-compendium-server.cloudfunctions.net/app/api/homebrewWeapons',
        ARMORS: 'https://us-central1-the-compendium-server.cloudfunctions.net/app/api/homebrewArmors',
        ITEMS: 'https://us-central1-the-compendium-server.cloudfunctions.net/app/api/homebrewItems',
        NPCS: 'https://us-central1-the-compendium-server.cloudfunctions.net/app/api/homebrewNpcs',
        SPELLS: 'https://us-central1-the-compendium-server.cloudfunctions.net/app/api/homebrewSpells',
    }
}