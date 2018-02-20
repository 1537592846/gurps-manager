export class Advantage {

    public id: number;
    public name: string;
    public description: string;
    public formula: string;

    constructor() {
    }
    public static getAdvantages() {
        return [
            { id: 1, name: "Beauty", description: "Better with people", formula: "current_points:+5;" },
            { id: 2, name: "Well fit", description: "Better body for resistance", formula: "Health test:+1;Knockout test:+2" },
            { id: 3, name: "Great fit", description: "Evolution of Well fit", formula: "Health test:+2;Knockout test:+3" }
        ]as Advantage[]
    }
}