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