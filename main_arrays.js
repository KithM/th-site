// Arrays

// Pre-configured Arrays
var loot = [
    { name: `Dagger`,              minDamage: 3.000, maxDamage: 13.00, itemType: `Weapon`, ignoreTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`,`Wood`], p: 0.14 },
    { name: `Sword`,               minDamage: 5.000, maxDamage: 15.00, itemType: `Weapon`, ignoreTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`], p: 0.23 },
    { name: `Axe`,                 minDamage: 6.000, maxDamage: 15.00, itemType: `Weapon`, ignoreTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`,`Wood`], p: 0.20 },
    { name: `Mace`,                minDamage: 8.000, maxDamage: 13.00, itemType: `Weapon`, ignoreTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`,`Wood`], p: 0.18 },
    { name: `Longsword`,           minDamage: 9.000, maxDamage: 14.00, itemType: `Weapon`, ignoreTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`,`Wood`], p: 0.18 },
    { name: `Greatsword`,          minDamage: 10.00, maxDamage: 16.00, itemType: `Weapon`, ignoreTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`,`Wood`], p: 0.11 },
    { name: `Battleaxe`,           minDamage: 12.00, maxDamage: 15.00, itemType: `Weapon`, ignoreTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`,`Wood`], p: 0.14 },
    { name: `Warhammer`,           minDamage: 11.00, maxDamage: 17.00, itemType: `Weapon`, ignoreTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`,`Wood`], p: 0.12 },

    { name: `Staff`,               minDamage: 5.00, maxDamage: 15.00, itemType: `Weapon`, ignoreTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`,`Steel Plate`,`Dragon Plate`,`Diamond Plate`], p: 0.04 },
    { name: `Grand Staff`,         minDamage: 8.00, maxDamage: 18.50, itemType: `Weapon`, ignoreTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`,`Steel Plate`,`Dragon Plate`,`Diamond Plate`], p: 0.02 },

    { name: `Shortbow`,            minDamage: 5.000, maxDamage: 11.00, itemType: `Weapon`, ignoreTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`,`Steel Plate`,`Dragon Plate`,`Diamond Plate`], p: 0.13 },
    { name: `Longbow`,             minDamage: 6.000, maxDamage: 15.00, itemType: `Weapon`, ignoreTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`,`Steel Plate`,`Dragon Plate`,`Diamond Plate`], p: 0.09 },
    { name: `Crossbow`,            minDamage: 8.000, maxDamage: 16.00, itemType: `Weapon`, ignoreTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`,`Steel Plate`,`Dragon Plate`,`Diamond Plate`], p: 0.06 },

    { name: `Shield`,              armorRating: 8.000, itemType: `Wearable`, itemSubType:`Shield`, ignoreTypes: [`Cloth`], p: 0.11 },
    { name: `Wall Shield`,         armorRating: 13.00, itemType: `Wearable`, itemSubType:`Shield`, ignoreTypes: [`Cloth`,`Hide`,`Basic Leather`], p: 0.04 },

    { name: `Shirt`,               armorRating: 1.000, itemType: `Wearable`, itemSubType:`Chest`, onlyTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`], p: 0.22 },
    { name: `Duster`,              armorRating: 1.000, itemType: `Wearable`, itemSubType:`Chest`, onlyTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`], p: 0.10 },
    { name: `Jacket`,              armorRating: 2.000, itemType: `Wearable`, itemSubType:`Chest`, onlyTypes: [`Hide`,`Basic Leather`,`Leather`], p: 0.16 },
    { name: `Chestpiece`,          armorRating: 6.000, itemType: `Wearable`, itemSubType:`Chest`, ignoreTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`,`Wood`], p: 0.16 },

    { name: `Helmet`,              armorRating: 3.000, itemType: `Wearable`, itemSubType:`Head`, ignoreTypes: [`Cloth`,`Hide`,`Wood`], p: 0.16 },
    { name: `Heavy Helmet`,        armorRating: 5.000, itemType: `Wearable`, itemSubType:`Head`, ignoreTypes: [`Cloth`,`Hide`,`Wood`], p: 0.06 },

    { name: `Shoes`,               armorRating: 1.000, itemType: `Wearable`, itemSubType:`Feet`, onlyTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`], p: 0.13 },
    { name: `Boots`,               armorRating: 3.000, itemType: `Wearable`, itemSubType:`Feet`, ignoreTypes: [`Cloth`,`Wood`], p: 0.17 },
    { name: `Heavy Boots`,         armorRating: 4.000, itemType: `Wearable`, itemSubType:`Feet`, ignoreTypes: [`Cloth`,`Wood`,`Hide`,`Basic Leather`], p: 0.07 },

    { name: `Gauntlets`,           armorRating: 3.000, itemType: `Wearable`, itemSubType:`Hands`, ignoreTypes: [`Cloth`,`Wood`], p: 0.18 },
    { name: `Heavy Gauntlets`,     armorRating: 5.000, itemType: `Wearable`, itemSubType:`Hands`, ignoreTypes: [`Cloth`,`Hide`,`Wood`], p: 0.08 },

    { name: `Pants`,               armorRating: 1.000, itemType: `Wearable`, itemSubType:`Legs`, onlyTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`], p: 0.20 },
    { name: `Leggings`,            armorRating: 4.000, itemType: `Wearable`, itemSubType:`Legs`, ignoreTypes: [`Cloth`,`Wood`], p: 0.15 },
    { name: `Heavy Leggings`,      armorRating: 7.000, itemType: `Wearable`, itemSubType:`Legs`, ignoreTypes: [`Cloth`,`Hide`,`Wood`], p: 0.07 },

    { name: `Small Sack`,          itemType: `Inventory`, slots: 3, onlyTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`], p: 0.11 },
    { name: `Medium Sack`,         itemType: `Inventory`, slots: 5, onlyTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`], p: 0.10 },
    { name: `Large Sack`,          itemType: `Inventory`, slots: 7, onlyTypes: [`Hide`,`Basic Leather`,`Leather`], p: 0.09 },

    { name: `Small Knapsack`,      itemType: `Inventory`, slots: 6, onlyTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`], p: 0.10 },
    { name: `Medium Knapsack`,     itemType: `Inventory`, slots: 10, onlyTypes: [`Hide`,`Basic Leather`,`Leather`], p: 0.09 },
    { name: `Large Knapsack`,      itemType: `Inventory`, slots: 15, onlyTypes: [`Basic Leather`,`Leather`], p: 0.08 },

    { name: `Small Backpack`,      itemType: `Inventory`, slots: 10, onlyTypes: [`Cloth`,`Hide`,`Basic Leather`,`Leather`], p: 0.09 },
    { name: `Medium Backpack`,     itemType: `Inventory`, slots: 15, onlyTypes: [`Basic Leather`,`Leather`], p: 0.06 },
    { name: `Large Backpack`,      itemType: `Inventory`, slots: 20, onlyTypes: [`Basic Leather`,`Leather`], p: 0.06 },
    { name: `Traveler's Pack`,     itemType: `Inventory`, slots: 30, onlyTypes: [`Basic Leather`,`Leather`], p: 0.04 },
    { name: `Adventurer's Pack`,   itemType: `Inventory`, slots: 40, onlyTypes: [`Leather`], p: 0.03 },

    { name: `Scrap`,               itemType: `Junk`, onlyTypes: [`Wood`,`Steel`,`Iron`], p: 0.15 },
    { name: `Rag`,                 itemType: `Junk`, onlyTypes: [`Basic Leather`,`Cloth`,`Hide`], p: 0.10 },

    { name: `Ore`,                 itemType: `Material`, onlyTypes: [`Steel`,`Iron`,`Metallic`,`Silver`,`Platinum`,`Oladium`,`Caxium`], p: 0.04 },
    { name: `Plank`,               itemType: `Material`, onlyTypes: [`Wood`], p: 0.03 }
];

var enchantments = [
    { p: 1.00 }
];

var leatherenchants = [
    { p: 0.89 },

    { name: `Covering`,            armorRating: 1.000, p: 0.09, onlyTypes: [`Wearable`] },
    { name: `Yielding`,            armorRating: 1.500, p: 0.08, onlyTypes: [`Wearable`] },
    { name: `Buffering`,           armorRating: 2.000, p: 0.08, onlyTypes: [`Wearable`] },
    { name: `Armoring`,            armorRating: 3.000, p: 0.08, onlyTypes: [`Wearable`] }
];
var metalenchants = [
    { p: 0.81 },

    { name: `Slashing`,            minDamage: 0.000, maxDamage: 5.000, p: 0.09, onlyTypes: [`Weapon`] },
    { name: `Laceration`,          minDamage: 2.000, maxDamage: 6.000, p: 0.07, onlyTypes: [`Weapon`] },
    { name: `the Huntress`,        minDamage: 2.000, maxDamage: 9.000, p: 0.05, onlyTypes: [`Weapon`] },
    { name: `Capturing`,           minDamage: 3.250, maxDamage: 11.450, p: 0.11, onlyTypes: [`Weapon`] },
    { name: `Bleeding`,            minDamage: 4.000, maxDamage: 14.000, p: 0.09, onlyTypes: [`Weapon`] },
    { name: `Weeping`,             minDamage: 4.500, maxDamage: 13.825, p: 0.10, onlyTypes: [`Weapon`] },
    { name: `Hemorrhaging`,        minDamage: 5.000, maxDamage: 15.000, p: 0.08, onlyTypes: [`Weapon`] },
    { name: `Grasp`,               minDamage: 2.750, maxDamage: 16.000, p: 0.10, onlyTypes: [`Weapon`] },

    { name: `Light`,               minDamage: 1.000, maxDamage: 10.000, minHeal: 0, maxHeal: 1, p: 0.10, onlyTypes: [`Weapon`] },
    { name: `Shining`,             minDamage: 1.250, maxDamage: 11.000, minHeal: 0, maxHeal: 3, p: 0.09, onlyTypes: [`Weapon`] },
    { name: `Blinding Light`,      minDamage: 1.500, maxDamage: 12.000, minHeal: 1, maxHeal: 5, p: 0.08, onlyTypes: [`Weapon`] },
    { name: `Reckoning`,           minDamage: 2.000, maxDamage: 15.000, minHeal: 2, maxHeal: 6, p: 0.06, onlyTypes: [`Weapon`] },

    { name: `Covering`,            armorRating: 4.500, p: 0.09, onlyTypes: [`Wearable`] },
    { name: `Yielding`,            armorRating: 5.250, p: 0.08, onlyTypes: [`Wearable`] },
    { name: `Buffering`,           armorRating: 5.750, p: 0.08, onlyTypes: [`Wearable`] },
    { name: `Armoring`,            armorRating: 6.000, p: 0.08, onlyTypes: [`Wearable`] },
    { name: `Barring`,             armorRating: 6.500, p: 0.08, onlyTypes: [`Wearable`] },

    { name: `Covering I`,          armorRating: 6.000, p: 0.07, onlyTypes: [`Wearable`] },
    { name: `Yielding I`,          armorRating: 7.000, p: 0.06, onlyTypes: [`Wearable`] },
    { name: `Buffering I`,         armorRating: 8.000, p: 0.06, onlyTypes: [`Wearable`] },
    { name: `Armoring I`,          armorRating: 9.000, p: 0.05, onlyTypes: [`Wearable`] },
    { name: `Barring I`,           armorRating: 10.00, p: 0.04, onlyTypes: [`Wearable`] }
];
var fiberenchants = [
    { p: 0.75 },

    { name: `Light`,               minDamage: 2.125, maxDamage: 12.000, minHeal: 0, maxHeal: 1, p: 0.10, onlyTypes: [`Weapon`] },
    { name: `Shining`,             minDamage: 2.250, maxDamage: 13.000, minHeal: 0, maxHeal: 3, p: 0.09, onlyTypes: [`Weapon`] },
    { name: `Blinding Light`,      minDamage: 2.750, maxDamage: 14.000, minHeal: 1, maxHeal: 5, p: 0.08, onlyTypes: [`Weapon`] },
    { name: `Reckoning`,           minDamage: 4.000, maxDamage: 16.000, minHeal: 2, maxHeal: 6, p: 0.06, onlyTypes: [`Weapon`] },

    { name: `Light I`,             minDamage: 4.000, maxDamage: 13.000, minHeal: 1, maxHeal: 4, p: 0.08, onlyTypes: [`Weapon`] },
    { name: `Shining I`,           minDamage: 5.000, maxDamage: 13.000, minHeal: 1, maxHeal: 5, p: 0.07, onlyTypes: [`Weapon`] },
    { name: `Blinding Light I`,    minDamage: 6.000, maxDamage: 14.000, minHeal: 2, maxHeal: 6, p: 0.06, onlyTypes: [`Weapon`] },
    { name: `Reckoning I`,         minDamage: 7.000, maxDamage: 16.000, minHeal: 4, maxHeal: 7, p: 0.04, onlyTypes: [`Weapon`] },

    { name: `Light II`,            minDamage: 5.500, maxDamage: 14.000, minHeal: 0, maxHeal: 1, p: 0.05, onlyTypes: [`Weapon`] },
    { name: `Shining II`,          minDamage: 6.250, maxDamage: 15.000, minHeal: 0, maxHeal: 3, p: 0.05, onlyTypes: [`Weapon`] },
    { name: `Blinding Light II`,   minDamage: 7.000, maxDamage: 15.000, minHeal: 1, maxHeal: 5, p: 0.04, onlyTypes: [`Weapon`] },
    { name: `Reckoning II`,        minDamage: 7.500, maxDamage: 17.000, minHeal: 2, maxHeal: 6, p: 0.04, onlyTypes: [`Weapon`] },

    { name: `Capturing`,           minDamage: 3.250, maxDamage: 13.450, p: 0.11, onlyTypes: [`Weapon`] },
    { name: `Weeping`,             minDamage: 4.500, maxDamage: 13.825, p: 0.11, onlyTypes: [`Weapon`] },
    { name: `Grasp`,               minDamage: 2.750, maxDamage: 16.000, p: 0.10, onlyTypes: [`Weapon`] },
    { name: `Reaping`,             minDamage: 4.500, maxDamage: 15.000, p: 0.09, onlyTypes: [`Weapon`] },
    { name: `the Enticer`,         minDamage: 4.800, maxDamage: 16.125, p: 0.08, onlyTypes: [`Weapon`] },
    { name: `Sabotage`,            minDamage: 4.950, maxDamage: 16.000, p: 0.07, onlyTypes: [`Weapon`] },
    { name: `Soulsnare`,           minDamage: 5.550, maxDamage: 14.000, p: 0.06, onlyTypes: [`Weapon`] },
    { name: `Sorrow`,              minDamage: 6.825, maxDamage: 13.125, p: 0.06, onlyTypes: [`Weapon`] },
    { name: `the Gravedigger`,     minDamage: 7.250, maxDamage: 13.250, p: 0.06, onlyTypes: [`Weapon`] },
    { name: `the Cage Fighter`,    minDamage: 7.325, maxDamage: 14.500, p: 0.05, onlyTypes: [`Weapon`] },

    { name: `Covering`,            armorRating: 8.500, p: 0.10, onlyTypes: [`Wearable`] },
    { name: `Yielding`,            armorRating: 10.25, p: 0.09, onlyTypes: [`Wearable`] },
    { name: `Buffering`,           armorRating: 10.75, p: 0.09, onlyTypes: [`Wearable`] },
    { name: `Armoring`,            armorRating: 12.00, p: 0.08, onlyTypes: [`Wearable`] },
    { name: `Barring`,             armorRating: 12.50, p: 0.08, onlyTypes: [`Wearable`] },

    { name: `Covering I`,          armorRating: 12.00, p: 0.07, onlyTypes: [`Wearable`] },
    { name: `Yielding I`,          armorRating: 14.00, p: 0.06, onlyTypes: [`Wearable`] },
    { name: `Buffering I`,         armorRating: 16.00, p: 0.06, onlyTypes: [`Wearable`] },
    { name: `Armoring I`,          armorRating: 18.00, p: 0.05, onlyTypes: [`Wearable`] },
    { name: `Barring I`,           armorRating: 20.00, p: 0.04, onlyTypes: [`Wearable`] },

    { name: `Covering II`,         armorRating: 16.00, p: 0.05, onlyTypes: [`Wearable`] },
    { name: `Yielding II`,         armorRating: 17.00, p: 0.05, onlyTypes: [`Wearable`] },
    { name: `Buffering II`,        armorRating: 18.00, p: 0.04, onlyTypes: [`Wearable`] },
    { name: `Armoring II`,         armorRating: 20.00, p: 0.04, onlyTypes: [`Wearable`] },
    { name: `Barring II`,          armorRating: 21.00, p: 0.04, onlyTypes: [`Wearable`] },
];

var lootTypes = [
    { name: `Cloth`,               enchants: [{p:1.00}],       p: 0.30, m: 0.250,  level: 1 },
    { name: `Hide`,                enchants: [{p:1.00}],       p: 0.32, m: 0.500,  level: 1 },
    { name: `Basic Leather`,       enchants: [{p:1.00}],       p: 0.35, m: 0.650,  level: 1 },
    { name: `Wood`,                enchants: [{p:1.00}],       p: 0.35, m: 0.750,  level: 1 },
    { name: `Leather`,             enchants: leatherenchants,  p: 0.35, m: 1.000,  level: 1 },
    { name: `Iron`,                enchants: metalenchants,    p: 0.35, m: 1.125,  level: 2 },
    { name: `Steel`,               enchants: metalenchants,    p: 0.34, m: 1.220,  level: 3 },
    { name: `Steel Plate`,         enchants: metalenchants,    p: 0.34, m: 1.500,  level: 5 },
    { name: `Caxium`,              enchants: metalenchants,    p: 0.34, m: 1.750,  level: 7 },
    { name: `Silver`,              enchants: metalenchants,    p: 0.33, m: 1.750,  level: 7 },
    { name: `Imperial Caxium`,     enchants: metalenchants,    p: 0.33, m: 2.000,  level: 9 },
    { name: `Glass`,               enchants: fiberenchants,    p: 0.33, m: 2.500,  level: 10 },
    { name: `Acrylic`,             enchants: fiberenchants,    p: 0.31, m: 3.750,  level: 12 },
    { name: `Metallic`,            enchants: metalenchants,    p: 0.30, m: 5.000,  level: 13 },
    { name: `Seeker`,              enchants: fiberenchants,    p: 0.29, m: 7.500,  level: 15 },
    { name: `Warlord`,             enchants: metalenchants,    p: 0.27, m: 10.00,  level: 20 },
    { name: `Vampiric`,            enchants: fiberenchants,    p: 0.25, m: 12.50,  level: 21 },
    { name: `Iceshield`,           enchants: enchantments,     p: 0.22, m: 15.00,  level: 22 },
    { name: `Platinum`,            enchants: enchantments,     p: 0.20, m: 20.00,  level: 35 },
    { name: `Oladium`,             enchants: enchantments,     p: 0.17, m: 27.00,  level: 40 },
    { name: `Dragon Plate`,        enchants: enchantments,     p: 0.14, m: 30.00,  level: 50 },
    { name: `Master Dragon Plate`, enchants: enchantments,     p: 0.12, m: 35.00,  level: 55 },
    { name: `Demonic`,             enchants: enchantments,     p: 0.10, m: 40.00,  level: 55 },
    { name: `Demonic Warlord`,     enchants: enchantments,     p: 0.08, m: 50.00,  level: 60 },
    { name: `Celestial`,           enchants: enchantments,     p: 0.05, m: 55.00,  level: 65 },
    { name: `Ascension`,           enchants: enchantments,     p: 0.03, m: 65.75,  level: 75 },
    { name: `Diamond Plate`,       enchants: enchantments,     p: 0.01, m: 75.00,  level: 90 }
];

var quests = [
    { name:`A New Journey`, rewards: [], next: [`Moving On Up`,`Ironworks`,`Home Sweet Home`], requirements: [{reachLevel:1},{discover:`WOOD`}] },
    { name:`Moving On Up`, rewards: [], next: [], requirements: [{reachLevel:5}] },

    { name:`Affluency I`, rewards: [], next: [`Affluency II`], xp: 25, requirements: [{haveSilver:10}] },
    { name:`Affluency II`, rewards: [], next: [`Affluency III`], xp: 50, requirements: [{haveSilver:25}] },
    { name:`Affluency III`, rewards: [], next: [`Affluency IV`], xp: 100, requirements: [{haveSilver:50}] },
    { name:`Affluency IV`, rewards: [], next: [`Affluency V`], xp: 250, requirements: [{haveGold:1}] },
    { name:`Affluency V`, rewards: [], next: [`Affluency VI`], xp: 500, requirements: [{haveGold:2},{haveSilver:50}] },
    { name:`Affluency VI`, rewards: [], next: [`Affluency VII`], xp: 1000, requirements: [{haveGold:5}] },
    { name:`Affluency VII`, rewards: [], next: [`Affluency VIII`], xp: 2500, requirements: [{haveGold:10}] },
    { name:`Affluency VIII`, rewards: [], next: [`Affluency IX`], xp: 5000, requirements: [{haveGold:25}] },
    { name:`Affluency IX`, rewards: [], next: [`Affluency X`], xp: 10000, requirements: [{haveGold:50}] },
    { name:`Affluency X`, rewards: [], next: [], xp: 25000, requirements: [{haveGold:100}] },

    { name:`Ironworks`, rewards: [], next: [`Blacksmith`,`Materialistic`], xp: 25, requirements: [{haveItemMat:`Iron`},{haveItemMat:`Steel`}] },
    { name:`Blacksmith`, rewards: [], next: [], xp: 25, requirements: [{haveItemMat:`Steel Plate`},{haveItemMat:`Caxium`}] },
    { name:`Materialistic`, rewards: [], next: [], xp: 25, requirements: [{haveItemType:`Material`,count:5}] },

    { name:`Home Sweet Home`, rewards: [], next: [], requirements: [{discover:`WTDI`},{discover:`WLC`},{discover:`CHAR`}] }
];

var continents = [
    { name:`Dreven`, level:1 },
    { name:`Coldwind Glacier`, level:20 },
    { name:`Baddran`, level:18 },
    { name:`Kaliyth`, level:20 },
    { name:`The Netheril`, level:30 },
    { name:`Urtune`, level:55 }
];

var regions = [
    { name:`Primada`, level:1, continent:continents[0] },
    { name:`Darkgrove`, level:5, continent:continents[0] },
    { name:`The Spire`, level:6, continent:continents[0] },
    { name:`Klaine's Draught`, level:9, continent:continents[0] },
    { name:`The Marshlands`, level:10, continent:continents[0] },
    { name:`The Wastes`, level:13, continent:continents[0] },
    { name:`Noruun`, level:18, continent:continents[0] },
    { name:`The Icecaps`, level:19, continent:continents[0] },

    { name:`Coldwind`, level:20, continent:continents[1] },

    { name:`Longhorn Forest`, level:18, continent:continents[2] },
    { name:`Redrock Mountains`, level:19, continent:continents[2] },
    { name:`Baddran Caverns`, level:22, continent:continents[2] },
    { name:`White Isles`, level:25, continent:continents[2] },
    { name:`Fiery Springs`, level:27, continent:continents[2] },

    { name:`Awyari Fields`, level:20, continent:continents[3] },
    { name:`Loreridge`, level:22, continent:continents[3] },
    { name:`The Graveyard`, level:24, continent:continents[3] },
    { name:`Dead's Pass`, level:27, continent:continents[3] },

    { name:`Ruined Lands`, level:30, continent:continents[4] },
    { name:`The Obelisk`, level:33, continent:continents[4] },
    { name:`Imperium`, level:34, continent:continents[4] },
    { name:`Nether Ruins`, level:35, continent:continents[4] },
    { name:`The Nethered Rocks`, level:37, continent:continents[4] },
    { name:`Vokkesa's Deep`, level:41, continent:continents[4] },
    { name:`Fallen Gorge`, level:47, continent:continents[4] },
    { name:`The Vortex`, level:50, continent:continents[4] },
    { name:`Zrannlyc's Domain`, level:53, continent:continents[4] },

    { name:`Bineru Hills`, level:55, continent:continents[5] },
    { name:`Raedei Forests`, level:57, continent:continents[5] },
    { name:`Junhsey Mountains`, level:59, continent:continents[5] },
    { name:`Alivaza Grasslands`, level:63, continent:continents[5] },
    { name:`Raedei Growths`, level:64, continent:continents[5] }
];

var locations = [
    {
        displayName:`Charleston Headquarters Recruitment Center`,
        name:`CHQRC`,
        directions:[`CHQ`],
        region:regions[0],
        enemies:[],
        enemySpawnChance:0,
        objects:[]
    },
    {
        displayName:`Charleston Headquarters`,
        name:`CHQ`,
        directions:[`CHQRC`,`PTW`],
        region:regions[0],
        enemies:[],
        enemySpawnChance:0,
        objects:[]
    },
    {
        displayName:`Western Path`,
        name:`PTW`,
        directions:[`WOOD`,`CHQ`,`PTT`],
        region:regions[0],
        enemies:[],
        enemySpawnChance:0,
        objects:[{name:`Chest`,chest:[]}]
    },
    {
        displayName:`Woodston`,
        name:`WOOD`,
        directions:[`PTW`,`PTC`,`WTDI`,`WLC`],
        region:regions[0],
        enemies:[],
        enemySpawnChance:0,
        objects:[{name:`Mailbox`,chest:[]},{name:`Travel Guide`,travel:[]}],
        city:true
    },
    {
        displayName:`The Drunken Inn`,
        name:`WTDI`,
        directions:[`WOOD`],
        region:regions[0],
        enemies:[],
        enemySpawnChance:0,
        inn:{name:`The Drunken Inn`,bedPrice:10},
        shop:{name:`The Drunken Inn`,items:[],sell:0.75,buy:1.0},
        objects:[]
    },
    {
        displayName:`Lenaya's Crafts`,
        name:`WLC`,
        directions:[`WOOD`],
        region:regions[0],
        enemies:[],
        enemySpawnChance:0,
        shop:{name:`Lenaya's Crafts`,items:[],sell:0.9,buy:1.0},
        objects:[]
    },
    {
        displayName:`Eastern Path Fork`,
        name:`PTC`,
        directions:[`PTDG`,`PTCG`,`WOOD`],
        region:regions[0],
        enemies:[],
        enemySpawnChance:0,
        objects:[]
    },
    {
        displayName:`Southern Path`,
        name:`PTT`,
        directions:[`PTW`,`TREL`],
        region:regions[0],
        enemies:[],
        enemySpawnChance:0.2,
        objects:[]
    },
    {
        displayName:`Northern Path`,
        name:`PTDG`,
        directions:[`PTC`],
        region:regions[0],
        enemies:[],
        enemySpawnChance:0.05,
        objects:[]
    },
    {
        displayName:`The Trell`,
        name:`TREL`,
        directions:[`PTT`],
        region:regions[0],
        enemies:[],
        enemySpawnChance:0.25,
        objects:[{name:`Fountain`,loot:[]}]
    },

    {
        displayName:`Eastern Path`,
        name:`PTCG`,
        directions:[`PTC`,`CHRG`],//CHRG
        region:regions[0],
        enemies:[],
        enemySpawnChance:0,
        objects:[]
    },
    {
        displayName:`Charleston Gates`,
        name:`CHRG`,
        directions:[`CHAR`,`PTCG`],
        region:regions[0],
        enemies:[],
        enemySpawnChance:0,
        objects:[]
    },
    {
        displayName:`Charleston`,
        name:`CHAR`,
        directions:[`CHRG`],
        region:regions[0],
        enemies:[],
        enemySpawnChance:0,
        objects:[{name:`Travel Guide`,travel:[]}],
        city:true
    }
];

var enemies = [
    { name:`Gray Wolf`, level: 2, maxhealth: 15, mindamage: 1, maxdamage: 5, p: 0.05 },
    { name:`White Wolf`, level: 3, maxhealth: 18, mindamage: 2, maxdamage: 5, p: 0.02 },

    { name:`Thief`, level: 1, maxhealth: 22, weapon: {mat:`Iron`,item:`Dagger`}, p: 0.30 },
    { name:`Bandit`, level: 2, maxhealth: 29, weapon: {mat:`Iron`,item:`Sword`}, p: 0.15 },
    { name:`Bandit Leader`, level: 3, maxhealth: 35, weapon: {mat:`Iron`,item:`Sword`}, p: 0.04 }
];
