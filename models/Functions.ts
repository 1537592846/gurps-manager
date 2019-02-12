import { Equipment } from "./Equipment";

export class Constants {
    static readonly Strength: number = 10
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
            var value: number = this.getJsonProperty(equipments.left_hand.formula, status)
            returnValue += value
        } catch (e) { }
        try {
            var value: number = this.getJsonProperty(equipments.right_hand.formula, status)
            returnValue += value
        } catch (e) { }
        try {
            var value: number = this.getJsonProperty(equipments.both_hands.formula, status)
            returnValue += value
        } catch (e) { }
        try {
            var value: number = this.getJsonProperty(equipments.head.formula, status)
            returnValue += value
        } catch (e) { }
        try {
            var value: number = this.getJsonProperty(equipments.torax.formula, status)
            returnValue += value
        } catch (e) { }
        try {
            var value: number = this.getJsonProperty(equipments.legs.formula, status)
            returnValue += value
        } catch (e) { }
        try {
            var value: number = this.getJsonProperty(equipments.feet.formula, status)
            returnValue += value
        } catch (e) { }
        try {
            var value: number = this.getJsonProperty(equipments.arms.formula, status)
            returnValue += value
        } catch (e) { }
        try {
            var value: number = this.getJsonProperty(equipments.hands.formula, status)
            returnValue += value
        } catch (e) { }
        return returnValue
    }

    static getJsonProperty(formula: string, property: string): number {
        var regExpression = ('"' + property + '":"([\\d|\\w]+)"')
        var regex = new RegExp(regExpression)
        var valor: number = Number.parseInt(regex.exec(formula)[1])
        return valor
    }
}

export enum EquipmentStatus {
    Strength = "strength",
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
    MinimunStrength = "min_strength",
    Reach = "reach",
    Parry = "parry",
    ArmorLocal = "local",
    Resistance = "resistance",
    Defense = "defense"
}