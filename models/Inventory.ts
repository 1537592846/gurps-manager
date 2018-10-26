import { OneHandWeapon, TwoHandWeapon, Shield, Armor, Consumable, Other } from "./Item";

export class Inventory {

    public one_hand_weapons: OneHandWeapon[];
    public two_hand_weapons: TwoHandWeapon[];
    public shields: Shield[];
    public armors: Armor[];
    public consumables: Consumable[];
    public others: Other[];

    constructor() {
        this.one_hand_weapons = {} as OneHandWeapon[];
        this.two_hand_weapons = {} as TwoHandWeapon[];
        this.shields = {} as Shield[];
        this.armors = {} as Armor[];
        this.consumables = {} as Consumable[];
        this.others = {} as Other[];
    }

    public getValue() {
        var value = 0;
        for (let i = 0; i < this.one_hand_weapons.length; i++) {
            value += this.one_hand_weapons[i].cost
        }
        for (let i = 0; i < this.two_hand_weapons.length; i++) {
            value += this.two_hand_weapons[i].cost
        }
        for (let i = 0; i < this.shields.length; i++) {
            value += this.shields[i].cost
        }
        for (let i = 0; i < this.armors.length; i++) {
            value += this.armors[i].cost
        }
        for (let i = 0; i < this.consumables.length; i++) {
            value += this.consumables[i].cost * this.consumables[i].quantity
        }
        for (let i = 0; i < this.others.length; i++) {
            value += this.others[i].cost * this.others[i].quantity
        }
        return value;
    }

    public getWeight(): number {
        var weight = 0;
        for (let i = 0; i < this.one_hand_weapons.length; i++) {
            weight += this.one_hand_weapons[i].weight
        }
        for (let i = 0; i < this.two_hand_weapons.length; i++) {
            weight += this.two_hand_weapons[i].weight
        }
        for (let i = 0; i < this.shields.length; i++) {
            weight += this.shields[i].weight
        }
        for (let i = 0; i < this.armors.length; i++) {
            weight += this.armors[i].weight
        }
        for (let i = 0; i < this.consumables.length; i++) {
            weight += this.consumables[i].weight * this.consumables[i].quantity
        }
        for (let i = 0; i < this.others.length; i++) {
            weight += this.others[i].weight * this.others[i].quantity
        }
        return weight;
    }
}