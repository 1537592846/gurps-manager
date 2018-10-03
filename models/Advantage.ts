import { DBId } from "../src/providers/data/data";

export class Advantage {

  public id: number;
  public name: string;
  public description: string;
  public types: string[];
  public cost: number;
  public level: number;
  public levelCap: number;
  public formula: string;

  constructor() {
  }

  isMental(): boolean {
    return this.types.find(x => x == "Mental") != undefined
  }

  isPhysical(): boolean {
    return this.types.find(x => x == "Physical") != undefined
  }

  isSocial(): boolean {
    return this.types.find(x => x == "Social") != undefined
  }

  isExotic(): boolean {
    return this.types.find(x => x == "Exotic") != undefined
  }

  isSupernatural(): boolean {
    return this.types.find(x => x == "Supernatural") != undefined
  }

  isMundane(): boolean {
    return this.types.find(x => x == "Mundane") != undefined
  }
}

export interface AdvantageInterface {
  DBId: DBId;
  Id: number;
  Name: string;
  Description: string;
  Types?: (string)[] | null;
  Cost: number;
  Level: number;
  LevelCap: number;
  Formula: string;
}