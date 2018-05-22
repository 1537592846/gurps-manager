import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../src/providers/database/database';

export class Advantage {

    public id: number;
    public name: string;
    public description: string;
    public formula: string;

    constructor() {
    }
}

@Injectable()
export class AdvantageProvider {
  
  constructor(private dbProvider: DatabaseProvider) { }

  public insert(advantage: Advantage) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'insert into Advantages (name,description,formula ) values (?, ?, ?)';
        let data = [advantage.name,advantage.description,advantage.formula];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public update(advantage: Advantage) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'update Advantages set name = ?, description = ?, formula = ? where id = ?';
        let data = [advantage.name,advantage.description,advantage.formula];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public remove(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'delete from Advantage where id = ?';
        let data = [id];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public get(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'select * from Advantage where id = ?';
        let data = [id];

        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let item = data.rows.item(0);
              let advantage = new Advantage();
              advantage.id = item.id;
              advantage.name = item.name;
              advantage.description = item.price;
              advantage.formula = item.duedate;

              return advantage;
            }

            return null;
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public getAll() {
    console.log("Starting query")
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        console.log("Starting query2")
        let sql = 'select * from Advantages';
        var data:any[]=[]
        return db.executeSql(sql,data)
          .then((data: any) => {
            console.log("Starting query3")
            if (data.rows.length > 0) {
              let advantages: any[] = [];
              for (var i = 0; i < data.rows.length; i++) {
                var advantage = data.rows.item(i);
                advantages.push(advantage);
              }
              return advantages;
            } else {
              console.log("Starting query4")
              return [];
            }
          })
          .catch((e) => console.error("Error:"+e));
      })
      .catch((e) =>console.error("Error2:"+e));
  }
}