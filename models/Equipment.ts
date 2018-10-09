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
}