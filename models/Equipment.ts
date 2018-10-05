import { OneHandWeapon, TwoHandWeapon, Shield, Armor } from './Item'
import { DBId } from "../src/providers/data/data";

export class Equipment {

    public left_hand: OneHandWeapon;
    public right_hand: OneHandWeapon;
    public both_hands: TwoHandWeapon;
    public shield: Shield;
    public head: Armor;
    public torax: Armor;
    public legs: Armor;
    public feet: Armor;
    public arms: Armor;
    public hands: Armor;

    constructor() {
        this.left_hand = new OneHandWeapon()
        this.right_hand = new OneHandWeapon()
        this.both_hands = new TwoHandWeapon()
        this.shield = new Shield()
        this.head = new Armor()
        this.torax = new Armor()
        this.legs = new Armor()
        this.feet = new Armor()
        this.arms = new Armor()
        this.hands = new Armor()
    }
    public static getEquipments(type: string) {
        switch (type) {
            case "both": return {
                both_hands: TwoHandWeapon.getWeapon(),
                left_hand: null,
                right_hand: null,
                shield: null,
                head: Armor.getArmor(),
                torax: Armor.getArmor(),
                legs: Armor.getArmor(),
                feet: Armor.getArmor(),
                arms: Armor.getArmor(),
                hands: Armor.getArmor()
            } as Equipment
            case "shield": return {
                both_hands: null,
                left_hand: OneHandWeapon.getWeapon(),
                right_hand: null,
                shield: Shield.getShield(),
                head: Armor.getArmor(),
                torax: Armor.getArmor(),
                legs: Armor.getArmor(),
                feet: Armor.getArmor(),
                arms: Armor.getArmor(),
                hands: Armor.getArmor()
            } as Equipment
            default: return {
                both_hands: null,
                left_hand: OneHandWeapon.getWeapon(),
                right_hand: OneHandWeapon.getWeapon(),
                shield: null,
                head: Armor.getArmor(),
                torax: Armor.getArmor(),
                legs: Armor.getArmor(),
                feet: Armor.getArmor(),
                arms: Armor.getArmor(),
                hands: Armor.getArmor()
            } as Equipment
        }
    }
}