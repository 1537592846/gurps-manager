import { Language } from './Language'

export class Character {

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
    speed: number;
    movement: number;

    //Character Languages
    char_languages: Language;

    constructor() {
        this.name="";
    }
}