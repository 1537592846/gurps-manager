import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  public apiAddress: string = "http://localhost:42862/api/"
  public timeoutRequest: number = 10000;
  public retryRequest: number = 3;

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  public getDisadvantages() {
    return new Promise(resolve => {
      this.http.get(this.apiAddress + 'Disadvantages/get').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
