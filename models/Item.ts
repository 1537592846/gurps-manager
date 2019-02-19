class Item {
    constructor() {
        this.bought = false
        this.equipped = ""
    }

    public id: number
    public name: string
    public nt: number
    public description: string
    public cost: number
    public weight: number
    public quantity: number
    public formula: string
    public type: string
    public bought: boolean
    public equipped: string
}

export class OneHandWeapon extends Item {
    public skillType: string

    constructor() {
        super()
        this.type = "one_hand"
        this.skillType=""
    }
}

export class TwoHandWeapon extends Item {
    public skillType: string

    constructor() {
        super()
        this.type = "two_hand"
        this.skillType=""
    }
}

export class Shield extends Item {
    public max_life_points: number;
    public current_life_points: number;
    public resistence: number;

    constructor() {
        super()
        this.type = "shield"
        this.max_life_points = 0;
        this.current_life_points = 0;
    }
}

export class Armor extends Item {
    public resistence: number;
    constructor() {
        super()
    }
}

export class Consumable extends Item {
    constructor(){
        super()
        this.type="consumable"
    }
}

export class Other extends Item {
    constructor(){
        super()
        this.type="other"
    }
}