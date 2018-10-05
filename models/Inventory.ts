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

    public static getInventory() {
        var inventory = new Inventory();
        inventory.one_hand_weapons = [OneHandWeapon.getWeapon()];
        inventory.two_hand_weapons = [TwoHandWeapon.getWeapon()];
        inventory.shields = [Shield.getShield()];
        inventory.armors = [Armor.getArmor()];
        inventory.consumables = [Consumable.getConsumable()];
        inventory.others = [Other.getOther()];
        return inventory;
    }

    public getValue(){
        var value=0;
        this.one_hand_weapons.forEach(element => {
            value+=element.weight*element.quantity;
        });
        this.two_hand_weapons.forEach(element => {
            value+=element.weight*element.quantity;
        });
        this.shields.forEach(element => {
            value+=element.weight*element.quantity;
        });
        this.armors.forEach(element => {
            value+=element.weight*element.quantity;
        });
        this.consumables.forEach(element => {
            value+=element.weight*element.quantity;
        });
        this.others.forEach(element => {
            value+=element.weight*element.quantity;
        });
        return value;
    }

    public getWeight():number{
        var weight=0;
        this.one_hand_weapons.forEach(element => {
            weight+=element.weight*element.quantity;
        });
        this.two_hand_weapons.forEach(element => {
            weight+=element.weight*element.quantity;
        });
        this.shields.forEach(element => {
            weight+=element.weight*element.quantity;
        });
        this.armors.forEach(element => {
            weight+=element.weight*element.quantity;
        });
        this.consumables.forEach(element => {
            weight+=element.weight*element.quantity;
        });
        this.others.forEach(element => {
            weight+=element.weight*element.quantity;
        });
        return weight;
    }
}