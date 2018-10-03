import { DBId } from "../src/providers/data/data";

export class Language {

    public id: number
    public name: string
    public description: string
    public level: number
    public levelCap: number

    constructor() {
    }
}
export interface LanguageInterface {
    DBId: DBId;
    Id: number;
    Name: string;
    Description: string;
    Level: number;
    LevelCap: number;
}