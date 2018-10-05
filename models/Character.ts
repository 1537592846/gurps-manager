import { DBId } from "../src/providers/data/data";
import { Language } from './Language'
import { Skill } from './Skill'
import { Advantage } from './Advantage'
import { Disadvantage } from './Disadvantage'
import { Inventory } from './Inventory'
import { Equipment } from './Equipment'
import { DataProvider } from '../src/providers/data/data'

export class Character {

    //Database
    id: number;
    dataProvider: DataProvider

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

    constructor(id: number, dataProvider: DataProvider) {
        this.dataProvider = dataProvider
        if (id != 0) {
            this.loadCharacter(id);
        } else {
            this.createCharacter();
        }
    }
    loadCharacter(id: number) {
        this.dataProvider.getCharacter(id).then(res => {
            let data = res as Character
            console.log(data)
            var characterInterface: CharacterInterface = JSON.parse(JSON.stringify(data))
            this.id = characterInterface.Id
            this.name = characterInterface.Name
            this.age = characterInterface.Age
            this.height = characterInterface.Height
            this.weight = characterInterface.Weight
            this.min_status = characterInterface.Min_status
            this.max_points = characterInterface.Max_points
            this.current_points = characterInterface.Current_points
            this.resource = characterInterface.Resource
            this.description = characterInterface.Description
            this.strenght = characterInterface.Strenght
            this.dexterity = characterInterface.Dexterity
            this.intelligence = characterInterface.Intelligence
            this.health = characterInterface.Health
            this.max_life_points = characterInterface.Max_life_points
            this.current_life_points = characterInterface.Current_life_points
            this.will = characterInterface.Will
            this.perception = characterInterface.Perception
            this.max_fatigue_points = characterInterface.Max_fatigue_points
            this.current_fatigue_points = characterInterface.Current_fatigue_points
            this.speed = characterInterface.Speed
            this.basic_movement = characterInterface.Basic_movement
            this.max_carry_weight = characterInterface.Max_carry_weight
            this.current_carry_weight = characterInterface.Current_carry_weight
            this.languages = characterInterface.Languages
            this.skills = characterInterface.Skills
            this.advantages = characterInterface.Advantages
            this.disadvantages = characterInterface.Disadvantages
            this.inventory = characterInterface.Inventory
            this.equipments = characterInterface.Equipments
        })
            .catch(error => { console.log(error) });
    }
    createCharacter() {
        this.dataProvider.getNextCharacterId().then(res => {
            let data = res as number
            this.id = data
            this.name = ""
            this.age =0
            this.height =0
            this.weight =0
            this.min_status =0
            this.max_points =0
            this.current_points =0
            this.resource =0
            this.description =""
            this.strenght =0
            this.dexterity =0
            this.intelligence =0
            this.health =0
            this.max_life_points =0
            this.current_life_points =0
            this.will =0
            this.perception =0
            this.max_fatigue_points =0
            this.current_fatigue_points =0
            this.speed =0
            this.basic_movement =0
            this.max_carry_weight =0
            this.current_carry_weight =0
            this.languages =[]
            this.skills =[]
            this.advantages =[]
            this.disadvantages =[]
            this.inventory =new Inventory()
            this.equipments =new Equipment()
        })
            .catch(error => { console.log(error) });
    }
    saveCharacter() {
        this.dataProvider.saveCharacter(this).then(res => {
            if (res) {
                console.log("Sucesso")
            } else {
                console.log("Erro")
            }
        })
            .catch(error => { console.log(error) })
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
        return this.getMovement() + 3;
    }
    public destroyShield() {
        this.equipments.shield = null;
    }
}

export interface CharacterInterface {
    DBId: DBId;
    Id: number
    Name: string
    Age: number
    Height: number
    Weight: number
    Min_status: number
    Max_points: number
    Current_points: number
    Resource: number
    Description: string
    Strenght: number
    Dexterity: number
    Intelligence: number
    Health: number
    Max_life_points: number
    Current_life_points: number
    Will: number
    Perception: number
    Max_fatigue_points: number
    Current_fatigue_points: number
    Speed: number
    Basic_movement: number
    Max_carry_weight: number
    Current_carry_weight: number
    Languages: Language[]
    Skills: Skill[]
    Advantages: Advantage[]
    Disadvantages: Disadvantage[]
    Inventory: Inventory
    Equipments: Equipment
}

export class CharacterApi{
    id: number
    name: string
    description:string
}

export class CharacterApiInterface{
    DBId: DBId
    Id: number
    Name:string
    Description:string
}