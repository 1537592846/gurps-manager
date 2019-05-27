import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disadvantage } from '../../../models/Disadvantage';
import { Advantage } from '../../../models/Advantage';
import { Skill } from '../../../models/Skill';
import { Language } from '../../../models/Language';
import { Character, CharacterApi } from '../../../models/Character';
import { OneHandWeapon, TwoHandWeapon, Shield, Armor, Consumable, Other } from '../../../models/Item';

@Injectable()
export class DataProvider {
  public apiAddress: string = "http://35.198.14.36/api/"
  public timeoutRequest: number = 10000;
  public retryRequest: number = 3;

  constructor(public http: HttpClient) {
  }

  public getDisadvantages() {
    return new Promise(resolve => {
      this.http.get<Disadvantage[]>(this.apiAddress + 'Disadvantages/get').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getCharacter(id:number){
    return new Promise(resolve => {
      this.http.get<Character>(this.apiAddress + 'Characters/get/'+id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getCharacters(){
    return new Promise(resolve => {
      this.http.get<CharacterApi[]>(this.apiAddress + 'Characters/list').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getNextCharacterId(){
    return new Promise(resolve => {
      this.http.get<number>(this.apiAddress + 'Characters/next').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public saveNewCharacter(character:Character){
    var char=JSON.stringify(character)
    return new Promise(resolve => {
      let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      this.http.post(this.apiAddress+"Characters/save",char,httpOptions)
      .subscribe(res => {
        resolve(res)
        return res
      },
      (err) => {
        resolve(err)
        console.log(err)
        return false
      }
    );
    });
  }

  public saveCharacter(character:Character){
    var char=JSON.stringify(character)
    return new Promise(resolve => {
      let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      this.http.post(this.apiAddress+"Characters/update",char,httpOptions)
      .subscribe(res => {
        resolve(res)
        return res
      },
      (err) => {
        resolve(err)
        console.log(err)
        return false
      }
    );
    });
  }

  public getAdvantages() {
    return new Promise(resolve => {
      this.http.get<Advantage[]>(this.apiAddress + 'Advantages/get').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getSkills() {
    return new Promise(resolve => {
      this.http.get<Skill[]>(this.apiAddress + 'Skills/get').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getLanguages() {
    return new Promise(resolve => {
      this.http.get<Language[]>(this.apiAddress + 'Languages/get').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getOneHandWeapons(){
    return new Promise(resolve => {
      this.http.get<OneHandWeapon[]>(this.apiAddress + 'Equipments/getType/one_hand').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getTwoHandWeapons(){
    return new Promise(resolve => {
      this.http.get<TwoHandWeapon[]>(this.apiAddress + 'Equipments/getType/two_hand').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getShields(){
    return new Promise(resolve => {
      this.http.get<Shield[]>(this.apiAddress + 'Equipments/getType/shield').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getHeads(){
    return new Promise(resolve => {
      this.http.get<Armor[]>(this.apiAddress + 'Equipments/getType/head').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getTorax(){
    return new Promise(resolve => {
      this.http.get<Armor[]>(this.apiAddress + 'Equipments/getType/torax').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getLegs(){
    return new Promise(resolve => {
      this.http.get<Armor[]>(this.apiAddress + 'Equipments/getType/legs').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getFeets(){
    return new Promise(resolve => {
      this.http.get<Armor[]>(this.apiAddress + 'Equipments/getType/feet').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getArms(){
    return new Promise(resolve => {
      this.http.get<Armor[]>(this.apiAddress + 'Equipments/getType/arms').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getHands(){
    return new Promise(resolve => {
      this.http.get<Armor[]>(this.apiAddress + 'Equipments/getType/hands').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getConsumables(){
    return new Promise(resolve => {
      this.http.get<Consumable[]>(this.apiAddress + 'Items/getType/consumable').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getOthers(){
    return new Promise(resolve => {
      this.http.get<Other[]>(this.apiAddress + 'Items/getType/other').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public saveItem(item:any){
    var data=JSON.stringify(item)
    return new Promise(resolve => {
      let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      this.http.post(this.apiAddress+"items/add",data,httpOptions)
      .subscribe(res => {
        resolve(res)
        return res
      },
      (err) => {
        resolve(err)
        console.log(err)
        return false
      }
    );
    });
  }
}
