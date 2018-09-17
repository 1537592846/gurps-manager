export class Advantage {

    public id: number;
    public name: string;
    public description: string;
    public types:string[];
    public cost:number;
    public level:number;
    public levelCap:number;    
    public formula: string;

    constructor() {
    }

    isMental():boolean{
      return this.types.find(x=>x=="mental")!=""
      }
    
      isPhysical():boolean{
        return this.types.find(x=>x=="physical")!=""
      }
    
      isSocial():boolean{
        return this.types.find(x=>x=="social")!=""
      }
    
      isExotic():boolean{
        return this.types.find(x=>x=="exotic")!=""
      }
    
      isSupernatural():boolean{
        return this.types.find(x=>x=="supernatural")!=""
      }
    
      isMundane():boolean{
        return this.types.find(x=>x=="mundane")!=""
      }
}