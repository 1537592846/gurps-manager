import { Language } from './Language'
import { Skill } from './Skill'
import { Advantage } from './Advantage'
import { Disadvantage } from './Disadvantage'
import { Inventory } from './Inventory'
import { Equipment } from './Equipment'
import { Constants } from './Constants';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { isNumber } from 'ionic-angular/umd/util/util';

export class Character {

    //Database
    id: number;

    //Character Features
    name: string;
    age: number;
    nt: number;
    height: number;
    weight: number;
    min_status: number;
    max_points: number;
    current_points: number;
    resources: number;
    description: string;

    //Character Status
    strenght: number;
    dexterity: number;
    intelligence: number;
    health: number;
    max_life_points: number;
    current_life_points: number;
    will: number;
    perception: number;
    max_fatigue_points: number;
    current_fatigue_points: number;
    speed: number;
    basic_movement: number;

    //Character Calculated Values
    max_carry_weight: number;
    current_carry_weight: number;

    //Character Languages
    languages: Language[];

    //Character Skills
    skills: Skill[];

    //Character Advantages
    advantages: Advantage[];

    //Character Disadvantages
    disadvantages: Disadvantage[];

    //Character Inventory
    inventory: Inventory;

    //Character Equipment
    equipments: Equipment;

    constructor(id: number) {
        this.id = id
        this.name = ""
        this.age = 0
        this.height = 0
        this.weight = 0
        this.min_status = 0
        this.max_points = 0
        this.current_points = 0
        this.resources = 0
        this.description = ""
        this.strenght = 0
        this.dexterity = 0
        this.intelligence = 0
        this.health = 0
        this.max_life_points = 0
        this.current_life_points = 0
        this.will = 0
        this.perception = 0
        this.max_fatigue_points = 0
        this.current_fatigue_points = 0
        this.speed = 0
        this.basic_movement = 0
        this.max_carry_weight = 0
        this.current_carry_weight = 0
        this.languages = []
        this.skills = []
        this.advantages = []
        this.disadvantages = []
        this.inventory = new Inventory()
        this.equipments = new Equipment()
    }
    getMinBasicMovement() {
        if (Math.round(this.speed) > this.speed) {
            return Math.round(this.speed) - 1;
        } return Math.round(this.speed);
    }
    getMinSpeed() {
        return (this.health + this.dexterity) / 4;
    }
    public getCarryCategory() {
        if (this.current_carry_weight <= this.max_carry_weight) {
            return "None";
        } else {
            if (this.current_carry_weight <= this.max_carry_weight * 2) {
                return "Light";
            } else {
                if (this.current_carry_weight <= this.max_carry_weight * 3) {
                    return "Moderate";
                } else {
                    if (this.current_carry_weight <= this.max_carry_weight * 6) {
                        return "Heavy";
                    } else {
                        return "Very Heavy";
                    }
                }
            }
        }
    }
    public getMovement() {
        switch (this.getCarryCategory()) {
            case "None": return Math.round(this.basic_movement)
            case "Light": return Math.round(this.basic_movement * 0.8)
            case "Moderate": return Math.round(this.basic_movement * 0.6)
            case "Heavy": return Math.round(this.basic_movement * 0.4)
            case "Very Heavy": return Math.round(this.basic_movement * 0.2)
        }
    }
    public getDodge() {
        return this.getMovement() + 3 + this.equipments.getShieldBonus();
    }
    public getParry() {
        let parry = this.equipments.getParry()
        let parryValue = 0
        if (parry == undefined) return 0
        if (isNumber(parry)) {
            parryValue = Number.parseInt(parry.toString())
        } else {
            parryValue = Number.parseInt(parry.toString()[0]);
        }
        return parryValue + this.equipments.getShieldBonus()
    }
    public getBlock(){
        if(this.equipments.hasShield()){
            
        }
        let blockValue = 0
        if (block == undefined) return 0
        if (isNumber(block)) {
            blockValue = Number.parseInt(block.toString())
        } else {
            blockValue = Number.parseInt(block.toString()[0]);
        }
        return blockValue + this.equipments.getShieldBonus()
    }
    public destroyShield() {
        this.equipments.shield = null;
    }
    public getBalanceAttack() {
        let attackSkill = this.equipments.getBalanceAttackType()
        if (attackSkill == "unhanded") return Constants.UnhandedTest
        let skillUsed = this.hasSkill(attackSkill)
        if (skillUsed != undefined) {
            if (skillUsed.isStrenght()) {
                return skillUsed.level + this.strenght
            }
            if (skillUsed.isDexterity()) {
                return skillUsed.level + this.dexterity
            }
            if (skillUsed.isIntelligence()) {
                return skillUsed.level + this.intelligence
            }
            if (skillUsed.isHealth()) {
                return skillUsed.level + this.health
            }
        }
        return 0
    }
    public getPiercingAttack() {
        let attackSkill = this.equipments.getPiercingAttackType()
        if (attackSkill == "unhanded") return Constants.UnhandedTest
        let skillUsed = this.hasSkill(attackSkill)
        if (skillUsed != undefined) {
            if (skillUsed.isStrenght()) {
                return skillUsed.level + this.strenght
            }
            if (skillUsed.isDexterity()) {
                return skillUsed.level + this.dexterity
            }
            if (skillUsed.isIntelligence()) {
                return skillUsed.level + this.intelligence
            }
            if (skillUsed.isHealth()) {
                return skillUsed.level + this.health
            }
        }
        return 0
    }
    hasSkill(skill: string) {
        for (let i = 0; i < this.skills.length; i++) {
            if (this.skills[i].name == skill) {
                return this.skills[i];
            }
        }
        return undefined;
    }
}

export class CharacterApi {
    id: number
    name: string
    description: string
}
