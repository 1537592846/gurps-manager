import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Language } from './Language'
import { Skill } from './Skill'
import { Advantage } from './Advantage'
import { Disadvantage } from './Disadvantage'
import { Inventory } from './Inventory'
import { Equipment } from './Equipment'
import { List } from 'ionic-angular';

export class Character {

    //Database
    id: number;
    sqlite: SQLite;

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
    inventory: Inventory[];

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
        this.current_carry_weight = 10;
        this.speed = 2.5 + (this.speed * 0.25);
        this.basic_movement = Math.floor(this.speed);
        this.equipments = new Equipment();
    }
    loadCharacter(id: number) {
        this.prepareSqlite();
        this.getCharacter(this.sqlite);
        this.languages = this.getLanguages(this.sqlite);
        this.skills = this.getSkills(this.sqlite);
        this.advantages = this.getAdvantages(this.sqlite);
        this.disadvantages = this.getDisadvantages(this.sqlite);
        this.equipments = this.getEquipments(this.sqlite);
    }
    prepareSqlite() {

    }
    getCharacter(sqlite) {

    }
    getLanguages(sqlite) {
        return null;
    }
    getSkills(sqlite) {
        return null;
    }
    getAdvantages(sqlite) {
        return null;
    }
    getDisadvantages(sqlite) {
        return null;
    }
    getEquipments(sqlite) {
        return null;
    }
    getMinBasicMovement() {
        if (Math.round(this.speed) > this.speed) {
            return Math.round(this.speed) - 1;
        } return Math.round(this.speed);
    }
    getMinSpeed(){
        return (this.health+this.dexterity)/4;
    }
}