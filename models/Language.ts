import { Level } from './Level'

export class Language {

    public id: number;
    public name: string;
    public level: Level;

    constructor() {
    }
    public static getLanguages() {
        return [
            {id:1,name:"Latin",level:{id:1,description:"Native"}},
            {id:1,name:"Germanic",level:{id:2,description:"Accent"}},
            {id:1,name:"Celtic",level:{id:3,description:"Fluent"}}
        ]
    }
}