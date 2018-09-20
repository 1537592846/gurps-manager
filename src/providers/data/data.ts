import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disadvantage } from '../../../models/Disadvantage';
import { Advantage } from '../../../models/Advantage';

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

  public getAdvantages() {
    return new Promise(resolve => {
      this.http.get<Advantage[]>(this.apiAddress + 'Advantages/get').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
