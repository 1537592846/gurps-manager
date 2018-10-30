import { OneHandWeapon, TwoHandWeapon, Shield, Armor } from './Item'

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
    getBalanceAttackType() {
        if (this.left_hand != undefined) {
            return this.left_hand.skillUsed
        }
        if (this.right_hand != undefined) {
            return this.right_hand.skillUsed
        }
        if (this.both_hands != undefined) {
            return this.both_hands.skillUsed
        }
        return "unhanded"
    }
    getPiercingAttackType() {
        if (this.left_hand != undefined) {
            return this.left_hand.skillUsed
        }
        if (this.right_hand != undefined) {
            return this.right_hand.skillUsed
        }
        if (this.both_hands != undefined) {
            return this.both_hands.skillUsed
        }
        if (this.shield != undefined) {
            return this.shield.skillUsed
        }
        return "unhanded"
    }
    getParry() {
        if (this.left_hand != undefined) {
            let data = JSON.parse(this.left_hand.formula)
            return data.parry
        }
        if (this.right_hand != undefined) {
            let data = JSON.parse(this.right_hand.formula)
            return data.parry
        }
        if (this.both_hands != undefined) {
            let data = JSON.parse(this.both_hands.formula)
            return data.parry
        }
        return undefined
    }
    hasShield(){
        if (this.shield != undefined) {
            return true
        }
        return false
    }
    getShieldBonus() {
        if (this.shield != undefined) {
            let data = JSON.parse(this.shield.formula)
            return Number.parseInt(data.bd)
        }
        return 0
    }
}