class Item {
    public quantity: number;
    public weight: number;
    public id: number;
    public name: string;
    public description: string;
    public formula: string;

    public getItem(type: string) {
        switch (type) {
            case "short": return OneHandWeapon.getWeapon();
            case "short": return TwoHandWeapon.getWeapon();
            case "short": return Shield.getShield();
            case "short": return Armor.getArmor();
            case "short": return Consumable.getConsumable();
            case "short": return Other.getOther();
        }
    }
}

export class OneHandWeapon extends Item {
    public static getWeapon() {
        return { id: 1, name: "Broadsword", description: "A long one-handed sword", formula: "Parry:11", quantity: 1, weight: 100 } as OneHandWeapon;
    }
}

export class TwoHandWeapon extends Item {
    public static getWeapon() {
        return { id: 1, name: "Pole lance", description: "A long weapon, with a long reach", formula: "Parry:8", quantity: 1, weight: 100 } as TwoHandWeapon;
    }
}

export class Shield extends Item {
    public max_life_points: number;
    public current_life_points: number;

    public static getShield() {
        return { id: 1, name: "Shield of Shielding", description: "A shield for shielding", max_life_points: 25, current_life_points: 25, quantity: 1, weight: 100 } as Shield;
    }
}

export class Armor extends Item {
    public static getArmor() {
        return { id: 1, name: "Basic armor", description: "A basic set piece", formula: "RD:2", quantity: 4, weight: 100 } as Armor;
    }
}

export class Consumable extends Item {
    public static getConsumable() {
        return { id: 1, name: "Stamina Potion", description: "A small potion that recovers effort points", formula: "current_effort_points+2", quantity: 4, weight: 100 } as Consumable;
    }
}

export class Other extends Item {
    public static getOther() {
        return { id: 1, name: "Locket", description: "Contains the photo of your love", formula: "", quantity: 1, weight: 100 } as Other;
    }
}