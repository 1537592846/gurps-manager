import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Language } from './Language'
import { Skill } from './Skill'
import { Advantage } from './Advantage'
import { Disadvantage } from './Disadvantage'
import { Inventory } from './Inventory'
import {Equipment} from './Equipment'
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
    max_effort_points: number;
    current_effort_points: number;
    speed: number;
    movement: number;

    //Character Languages
    languages: Language;

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
            this.prepareSqlite();
            this.getCharacter(this.sqlite);
            this.languages = this.getLanguages(this.sqlite);
            this.skills = this.getSkills(this.sqlite);
            this.advantages = this.getAdvantages(this.sqlite);
            this.disadvantages = this.getDisadvantages(this.sqlite);
            this.equipments=this.getEquipments(this.sqlite);
        }
        this.max_life_points=10;
        this.current_life_points=this.max_life_points;
        this.max_effort_points=10;
        this.current_effort_points=this.max_effort_points;
        this.equipments=new Equipment();
        return this;
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
}