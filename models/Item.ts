class Item {
    public id: number
    public name: string
    public nt:number
    public description: string
    public cost:number
    public weight: number
    public quantity: number
    public formula: string
    public type:string
}

export class OneHandWeapon extends Item {
    constructor(){
        super()
        this.type="one_hand"
    }
}

export class TwoHandWeapon extends Item {
    constructor(){
        super()
        this.type="two_hand"
    }
}

export class Shield extends Item {
    public max_life_points: number;
    public current_life_points: number;

    constructor(){
        super()
        this.type="shield"
        this.max_life_points=0;
        this.current_life_points=0;
    }
}

export class Armor extends Item {
    constructor(){
        super()
        this.type="armor"
    }
}

export class Consumable extends Item {
}

export class Other extends Item {
}