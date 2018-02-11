export class ShortRangeWeapon {

    public id: number;
    public name: string;
    public description: string;
    public formula: string;

    constructor() {
    }
}

export class LongRangeWeapon {

    public id: number;
    public name: string;
    public description: string;
    public formula: string;

    constructor() {
    }
}

export class Shield {

    public id: number;
    public name: string;
    public description: string;
    public formula: string;
    public max_life_points:number;
    public current_life_points:number;

    constructor() {
        this.name="Shield of Shielding";
    }
}

export class Armor {

    public id: number;
    public name: string;
    public description: string;
    public formula: string;

    constructor() {
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