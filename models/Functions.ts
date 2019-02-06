import { Equipment } from "./Equipment";

export class Constants {
    static readonly Strenght: number = 10
    static readonly Dexterity: number = 20
    static readonly Intelligence: number = 20
    static readonly Health: number = 10
    static readonly LifePoints: number = 2
    static readonly Will: number = 5
    static readonly Perception: number = 5
    static readonly FatiguePoints: number = 3
    static readonly Speed: number = 5
    static readonly BasicMovement: number = 5
    static readonly Language: number = 3
    static readonly LanguageLevel: string[] = ["None", "Broken", "Accented", "Native", "Maternal"]
    static readonly WeaponPiercingAttack: string[] = ["1d-6", "1d-6", "1d-5", "1d-5", "1d-4", "1d-4", "1d-3", "1d-3", "1d-2", "1d-2", "1d-1", "1d-1", "1d", "1d", "1d+1", "1d+1", "1d+2", "1d+2", "2d-1", "2d-1", "2d", "2d", "2d+1", "2d+1", "2d+2", "2d+2", "3d-1", "3d-1", "3d", "3d"]
    static readonly WeaponBalanceAttack: string[] = ["1d-5", "1d-5", "1d-4", "1d-4", "1d-3", "1d-3", "1d-2", "1d-2", "1d-1", "1d", "1d+1", "1d+2", "2d-1", "2d", "2d+1", "2d+2", "3d-1", "3d", "3d+1", "3d+2", "4d-1", "4d", "4d+1", "4d+2", "5d-1", "5d", "5d+1", "5d+1", "5d+2", "5d+2"]
}

export class Functions {
    static getEquipmentStatus(equipments: Equipment, status: string): number {
        var returnValue = 0
        try {
            returnValue += JSON.parse(equipments.left_hand.formula)[status]
        } catch (e) { }
        try {
            returnValue += JSON.parse(equipments.right_hand.formula)[status]
        } catch (e) { }
        try {
            returnValue += JSON.parse(equipments.both_hands.formula)[status]
        } catch (e) { }
        try {
            returnValue += JSON.parse(equipments.head.formula)[status]
        } catch (e) { }
        try {
            returnValue += JSON.parse(equipments.torax.formula)[status]
        } catch (e) { }
        try {
            returnValue += JSON.parse(equipments.hands.formula)[status]
        } catch (e) { }
        try {
            returnValue += JSON.parse(equipments.arms.formula)[status]
        } catch (e) { }
        try {
            returnValue += JSON.parse(equipments.feet.formula)[status]
        } catch (e) { }
        try {
            returnValue += JSON.parse(equipments.legs.formula)[status]
        } catch (e) { }
        return returnValue
    }
}

export enum EquipmentStatus {
    Strenght = "strenght",
    Dexterity = "dexterity",
    Intelligence = "intelligence",
    Health = "health",
    LifePoints = "life_points",
    Will = "will",
    Perception = "perception",
    FatiguePoints = "fatigue_points",
    Speed = "speed",
    BasicMovement = "basic_movement",
    BalanceAttack = "balance_attack",
    PiercingAttack = "piercing_attack",
    MinimunStrenght = "min_strenght",
    Reach = "reach",
    Parry = "parry",
    ArmorLocal = "local",
    Resistance = "resistance",
    Defense = "defense"
}