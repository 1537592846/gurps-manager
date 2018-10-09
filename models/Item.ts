class Item {
    public id: number
    public name: string
    public nt:number
    public description: string
    public cost:number
    public weight: number
    public quantity: number
    public formula: string
}

export class OneHandWeapon extends Item {
    public type:string

    constructor(){
        super()
        this.type="one_hand"
    }
}

export class TwoHandWeapon extends Item {
    public type:string

    constructor(){
        super()
        this.type="two_hand"
    }
}

export class Shield extends Item {
    public max_life_points: number;
    public current_life_points: number;
    public type:string

    constructor(){
        super()
        this.type="shield"
        this.max_life_points=0;
        this.current_life_points=0;
    }
}

export class Armor extends Item {
    public type:string

    constructor(){
        super()
        this.type="armor"
    }
}

export class Consumable extends Item {
}

export class Other extends Item {
}