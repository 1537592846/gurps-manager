import { SQLite } from '@ionic-native/sqlite';
import { Language } from './Language'
import { Skill } from './Skill'
import { Advantage } from './Advantage'
import { Disadvantage } from './Disadvantage'
import { Inventory } from './Inventory'
import { Equipment } from './Equipment'
import { Database } from './Storage'

export class Character {

    //Database
    id: number;
    sqlite= new Database();

    //Character Features
    name: string;
    age: number;
    height: number;
    weight: number;
    min_status: number;
    max_points: number;
    current_points: number;
    resource: number;
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

    constructor(id) {
        if (id != 0) {
            this.loadCharacter(id);
        } else {
            this.newCharacter();
        }
    }
    newCharacter() {
        this.name = "Ryuzaki";
        this.age = 26;
        this.height = 1.75;
        this.weight = 75;
        this.min_status = 10
        this.max_points = 300
        this.current_points = 50
        this.resource = 500;
        this.description = "Absolutely normal, in every sense of the word.";
        this.strenght = this.min_status + 4;
        this.dexterity = this.min_status + 2;
        this.intelligence = this.min_status + 3;
        this.health = this.min_status + 1;
        this.max_life_points = this.strenght;
        this.current_life_points = this.strenght;
        this.will = this.intelligence;
        this.perception = this.intelligence;
        this.max_fatigue_points = this.health;
        this.current_fatigue_points = this.health;
        this.max_carry_weight = Math.floor(this.strenght * this.strenght / 10);
        this.current_carry_weight = 20;
        this.speed = this.getMinSpeed();
        this.basic_movement = this.getMinBasicMovement();
        this.languages = Language.getLanguages();
        this.skills = Skill.getSkills();
        this.advantages = Advantage.getAdvantages();
        this.disadvantages = Advantage.getAdvantages();
        this.equipments = Equipment.getEquipments("shield");
        this.inventory=Inventory.getInventory();
    }
    public static emptyCharacter() {
        var char = new Character(0);
        char.name = "";
        char.age = 0;
        char.height = 0;
        char.weight = 0;
        char.min_status = 0
        char.max_points = 0
        char.current_points = 0
        char.resource = 0;
        char.description = "";
        char.strenght = 0;
        char.dexterity = 0;
        char.intelligence = 0;
        char.health = 0;
        char.max_life_points = 0;
        char.current_life_points = 0;
        char.will = 0;
        char.perception = 0;
        char.max_fatigue_points = 0;
        char.current_fatigue_points = 0;
        char.max_carry_weight = 0;
        char.current_carry_weight = 0;
        char.speed = 0;
        char.basic_movement = 0;
        char.languages = [];
        char.skills = [];
        char.advantages = [];
        char.disadvantages = [];
        char.equipments = new Equipment();
        return char;
    }
    public static newCharacter() {
        return new Character(0);
    }
    loadCharacter(id: number) {
        this.getCharacter(this.sqlite);
        this.languages = this.getLanguages(this.sqlite);
        this.skills = this.getSkills(this.sqlite);
        this.advantages = this.getAdvantages(this.sqlite);
        this.disadvantages = this.getDisadvantages(this.sqlite);
        this.equipments = this.getEquipments(this.sqlite);
    }
    getCharacter(sqlite) {
    }
    getLanguages(sqlite) {
        return Language.getLanguages();
    }
    getSkills(sqlite) {
        return Skill.getSkills();
    }
    getAdvantages(sqlite) {
        return Advantage.getAdvantages();
    }
    getDisadvantages(sqlite) {
        return Advantage.getAdvantages();
    }
    getEquipments(sqlite) {
        return null;
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
            case "None": return this.basic_movement;
            case "Light": return this.basic_movement * 0.8;
            case "Moderate": return this.basic_movement * 0.6;
            case "Heavy": return this.basic_movement * 0.4;
            case "Very Heavy": return this.basic_movement * 0.2;
        }
    }
    public getDodge() {
       return this.getMovement()+3;
    }
    public destroyShield() {
        this.equipments.shield = null;
    }
}