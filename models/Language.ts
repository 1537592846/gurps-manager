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
export interface DBId {
    Timestamp: number;
    Machine: number;
    Pid: number;
    Increment: number;
    CreationTime: string;
}