import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disadvantage } from '../../../models/Disadvantage';
import { Advantage } from '../../../models/Advantage';
import { Skill } from '../../../models/Skill';
import { Language } from '../../../models/Language';
import { Character, CharacterApi } from '../../../models/Character';

@Injectable()
export class DataProvider {
  public apiAddress: string = "http://localhost:42862/api/"
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

  public saveCharacter(character:Character){
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
      (error) => {
        resolve(error)
        console.log(error)
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
}

export interface DBId {
  Timestamp: number;
  Machine: number;
  Pid: number;
  Increment: number;
  CreationTime: string;
}
