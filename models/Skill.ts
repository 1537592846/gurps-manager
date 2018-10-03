export class Skill {   

    public id: number;
    public name: string;
    public description: string;
    public attribute: string;
    public difficulty: string;
    public level: number;
    public cost: number;

    constructor() {
    }

    isStrenght(): boolean {
        return this.attribute == "ST"
    }

    isDexterity(): boolean {
        return this.attribute == "DX"
    }

    isIntelligence(): boolean {
        return this.attribute == "IQ"
    }

    isHealth(): boolean {
        return this.attribute == "HT"
    }
}
export interface SkillInterface {
    DBId: DBId;
    Id: number;
    Name: string;
    Description: string;
    Attribute: string;
    Difficulty: string;
    Level: number;
    Cost: number;
}
export interface DBId {
    Timestamp: number;
    Machine: number;
    Pid: number;
    Increment: number;
    CreationTime: string;
}