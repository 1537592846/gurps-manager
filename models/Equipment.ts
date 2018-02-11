import {ShortRangeWeapon,LongRangeWeapon,Shield,Armor} from './Item'

export class Equipment{

    public left_hand:ShortRangeWeapon;
    public right_hand:ShortRangeWeapon;
    public both_hands:LongRangeWeapon;
    public shield:Shield;
    public head:Armor;
    public torax:Armor;
    public legs:Armor;
    public feet:Armor;
    public arms:Armor;
    public hands:Armor;

    constructor() {
        this.left_hand=null;
        this.right_hand=null;
        this.both_hands=null;
        this.shield=new Shield();
        this.head=null;
        this.torax=null;
        this.legs=null;
        this.feet=null;
        this.arms=null;
        this.hands=null;
    }

    destroyShield(){
        this.shield=null;
    }
}