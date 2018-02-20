export class ShortRangeWeapon {

    public id: number;
    public name: string;
    public description: string;
    public formula: string;

    constructor() {
    }
    public static getWeapon() {
        return { id: 1, name: "Broadsword", description: "A long one-handed sword", formula: "Parry:11" } as ShortRangeWeapon;
    }
}

export class LongRangeWeapon {

    public id: number;
    public name: string;
    public description: string;
    public formula: string;

    constructor() {
    }
    public static getWeapon() {
        return { id: 1, name: "Pole lance", description: "A long weapon, with a long reach", formula: "Parry:8" } as LongRangeWeapon;
    }
}

export class Shield {

    public id: number;
    public name: string;
    public description: string;
    public formula: string;
    public max_life_points: number;
    public current_life_points: number;

    constructor() {
    }
    public static getShield() {
        return { id: 1, name: "Shield of Shielding", description: "A shield for shielding", max_life_points: 25, current_life_points: 25 } as Shield;
    }
}

export class Armor {

    public id: number;
    public name: string;
    public description: string;
    public formula: string;

    constructor() {
    }
    public static getArmor() {
        return { id: 1, name: "Basic armor", description: "A basic set piece", formula: "RD:2" } as Armor;
    }
}

export class Consumable {

    public id: number;
    public name: string;
    public description: string;
    public formula: string;

    constructor() {
    }
}

export class Other {

    public id: number;
    public name: string;
    public description: string;
    public formula: string;

    constructor() {
    }
}