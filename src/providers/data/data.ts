import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../../../models/Character';

@Injectable()
export class DataProvider {
  public apiAddress: string = "http://35.198.14.36/api/"
  public timeoutRequest: number = 10000;
  public retryRequest: number = 3;

  constructor(public httpClient: HttpClient, public http: HttpClient) {
  }

  private GetRequest(resolve: (value?: {} | PromiseLike<{}>) => void,address:string) {
    var request = new Request(address, {
      method: 'GET',
      cache: 'no-cache',
      mode: 'cors'
    });
    fetch(request)
      .then(function (response) {
        response.json().then(function (data) {
          resolve(data);
        });
      })
      .catch(function (error) {
        alert(error);
      });
  }

  public getDisadvantages() {
    return new Promise(resolve => {
      this.GetRequest(resolve,this.apiAddress + 'Disadvantages/get');
    })
  }

  public getCharacter(id: number) {
    return new Promise(resolve => {
      this.GetRequest(resolve,this.apiAddress + 'Characters/get/'+id);
    })
  }

  public getCharacters() {
    return new Promise(resolve => {
      this.GetRequest(resolve,this.apiAddress + 'Characters/list');
    })
  }

  public getNextCharacterId() {
    return new Promise(resolve => {
      this.GetRequest(resolve,this.apiAddress + 'characters/next');
    })
  }  

  public saveNewCharacter(character: Character) {
    var char = JSON.stringify(character)
    return new Promise(resolve => {
      let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      this.http.post(this.apiAddress + "Characters/save", char, httpOptions)
        .subscribe(res => {
          resolve(res)
          return res
        },
          (err) => {
            resolve(err)
            alert(err)
            return false
          }
        );
    });
  }

  public saveCharacter(character: Character) {
    var char = JSON.stringify(character)
    return new Promise(resolve => {
      let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      this.http.post(this.apiAddress + "Characters/update", char, httpOptions)
        .subscribe(res => {
          resolve(res)
          return res
        },
          (err) => {
            resolve(err)
            alert(err)
            return false
          }
        );
    });
  }

  public getAdvantages() {
    return new Promise(resolve => {
      this.GetRequest(resolve,this.apiAddress + 'Advantages/get');
    })
  }

  public getSkills() {
    return new Promise(resolve => {
      this.GetRequest(resolve,this.apiAddress + 'Skills/get');
    })
  }

  public getLanguages() {
    return new Promise(resolve => {
      this.GetRequest(resolve,this.apiAddress + 'Languages/get');
    })
  }

  public getOneHandWeapons() {
    return new Promise(resolve => {
      this.GetRequest(resolve,this.apiAddress + 'Equipments/getType/one_hand');
    })
  }

  public getTwoHandWeapons() {
    return new Promise(resolve => {
      this.GetRequest(resolve,this.apiAddress + 'Equipments/getType/two_hand');
    })
  }

  public getShields() {
    return new Promise(resolve => {
      this.GetRequest(resolve,this.apiAddress + 'Equipments/getType/shield');
    })
  }

  public getHeads() {
    return new Promise(resolve => {
      this.GetRequest(resolve,this.apiAddress + 'Equipments/getType/head');
    })
  }

  public getTorax() {
    return new Promise(resolve => {
      this.GetRequest(resolve,this.apiAddress + 'Equipments/getType/torax');
    })
  }

  public getLegs() {
    return new Promise(resolve => {
      this.GetRequest(resolve,this.apiAddress + 'Equipments/getType/legs');
    })
  }

  public getFeets() {
    return new Promise(resolve => {
      this.GetRequest(resolve,this.apiAddress + 'Equipments/getType/feet');
    })
  }

  public getArms() {
    return new Promise(resolve => {
      this.GetRequest(resolve,this.apiAddress + 'Equipments/getType/arms');
    })
  }

  public getHands() {
    return new Promise(resolve => {
      this.GetRequest(resolve,this.apiAddress + 'Equipments/getType/hands');
    })
  }

  public getConsumables() {
    return new Promise(resolve => {
      this.GetRequest(resolve,this.apiAddress + 'Items/getType/consumable');
    })
  }

  public getOthers() {
    return new Promise(resolve => {
      this.GetRequest(resolve,this.apiAddress + 'Items/getType/other');
    })
  }

  public saveItem(item: any) {
    var data = JSON.stringify(item)
    return new Promise(resolve => {
      let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      this.http.post(this.apiAddress + "items/add", data, httpOptions)
        .subscribe(res => {
          resolve(res)
          return res
        },
          (err) => {
            resolve(err)
            alert(err)
            return false
          }
        );
    });
  }
}
