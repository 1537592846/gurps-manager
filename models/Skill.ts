import { Level } from "./Level";

export class Skill {

    public id: number;
    public name: string;
    public difficulty: Difficulty;
    public level: number;
    public description: string;
    public formula: string;

    constructor() {
    }
    public static getSkills() {
        return [
            {id:1,name:"ABC",difficulty:{description:"DX",level:{id:1,description:"Easy"}},level:0,description:"a, b and c",formula:"Strenght test:+3,Stun test:+2"},
            {id:2,name:"DEF",difficulty:{description:"IQ",level:{id:2,description:"Moderate"}},level:4,description:"d, e and f",formula:"Perception test:+3"},
            {id:3,name:"WAT",difficulty:{description:"HT",level:{id:4,description:"Hard"}},level:5,description:"*insert wat woman picture here*",formula:""}
        ]as Skill[]
    }
}
export class Difficulty{
    public level:Level;
    public description;
}