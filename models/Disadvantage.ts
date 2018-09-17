export class Disadvantage {

  public id: number;
  public name: string;
  public description: string;
  public types: string[];
  public cost: number;
  public level: number;
  public levelCap: number;
  public formula: string;  

  constructor() {
    this.id= 3,
      this.name= "Bad Fit"
      this.description= "A bad fitted body"
      this.cost= 5
      this.level= 1
      this.levelCap= 1
      this.types= ["mundane", "physical"]
      this.formula= "{health_test:-1,knockout_test:-1}"
  }

  isMental(): boolean {
    return this.types.find(x => x == "mental") != ""
  }

  isPhysical(): boolean {
    return this.types.find(x => x == "physical") != ""
  }

  isSocial(): boolean {
    return this.types.find(x => x == "social") != ""
  }

  isExotic(): boolean {
    return this.types.find(x => x == "exotic") != ""
  }

  isSupernatural(): boolean {
    return this.types.find(x => x == "supernatural") != ""
  }

  isMundane(): boolean {
    return this.types.find(x => x == "mundane") != ""
  }
}