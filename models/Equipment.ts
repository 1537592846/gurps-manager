import { ShortRangeWeapon, LongRangeWeapon, Shield, Armor } from './Item'

export class Equipment {

    public left_hand: ShortRangeWeapon;
    public right_hand: ShortRangeWeapon;
    public both_hands: LongRangeWeapon;
    public shield: Shield;
    public head: Armor;
    public torax: Armor;
    public legs: Armor;
    public feet: Armor;
    public arms: Armor;
    public hands: Armor;

    constructor() {
    }
    public static getEquipments(type: string) {
        switch (type) {
            case "both": return {
                both_hands: LongRangeWeapon.getWeapon(),
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
                left_hand: ShortRangeWeapon.getWeapon(),
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
                left_hand: ShortRangeWeapon.getWeapon(),
                right_hand: ShortRangeWeapon.getWeapon(),
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