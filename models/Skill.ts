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
        return this.attribute == "Strenght"
    }

    isDexterity(): boolean {
        return this.attribute == "Dexterity"
    }

    isIntelligence(): boolean {
        return this.attribute == "Intelligence"
    }

    isHealth(): boolean {
        return this.attribute == "Health"
    }
}