import { Level } from './Level'

export class Language {

    public id: number;
    public name: string;
    public level: Level;

    constructor() {
    }
    getLanguages() {
        return [
            [1, "Latin", [1, "Native"]],
            [1, "Germanic", [1, "Fluent"]],
            [1, "Barbaric", [1, "Rudimentary"]]
        ]
    }
}