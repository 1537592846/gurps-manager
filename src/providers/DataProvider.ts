import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class DataProvider {

    public apiAddress: string = "http://localhost:42862/"
    public timeoutRequest: number = 10000;
    public retryRequest: number = 3;

    constructor(public storage: Storage) { }
}

@Injectable()
export class WebRequest {

    constructor(public http: HttpClient, public global: DataProvider) { }

    public getDisadvantages() {
        return new Promise(resolve => {
            this.http.get(this.global.apiAddress + 'disadvantages').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }
}