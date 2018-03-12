import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class Database {
    theConsole: string = "Console Messages";

    options: any = {
        name: 'gurps-manager_database',
        location: 'default',
        createFromLocation: 1
    }

    private db: SQLiteObject;

    constructor(private sqlite: SQLite) {
        this.connectToDb();
    }

    private connectToDb(): void {
        this.sqlite.create(this.options)
            .then((db: SQLiteObject) => {
                this.db = db;
                this.configureTables();
            })
            .catch(e => this.theConsole += JSON.stringify(e));
    }

    configureTables() {
        this.configureSkillsTable();
    }

    configureCharacterTable(): string {
        return 'create table IF NOT EXISTS "Characters" (id PRIMARY KEY,username VARCHAR(255) UNIQUE, password VARCHAR(255));';
    }

    configureSkillsTable(): string {
        var sql = 'create table IF NOT EXISTS "Skills" (id PRIMARY KEY,username VARCHAR(255), password VARCHAR(255));';
        return sql;
    }

    configureAdvantagesDisadvantagesTable() {
        this.executeQuery('create table IF NOT EXIST "AdvantagesDisadvantages" (id PRIMARY KEY, name VARCHAR(50), description VARCHAR(300), difficulty INTEGER, level INTEGER, formula STRING)');
        this.executeQuery(
            'insert into AdvantageDisadvantages ('+
            'name' +
            'description' +
            'difficulty' +
            'level' +
            'formula' +
            ')'+
            'VALUES'+
            '('+
            'Abafador de Mana'+
            ''+
            ''+
            ''+
            ''+
            ')'
        );
    }

    addUser(username, password): void {

        var sql = "INSERT INTO `user` (username,password) VALUES ('" + username + "','" + password + "')";

        this.db.executeSql(sql, {})
            .then(() => this.theConsole += "\n" + 'Executed SQL' + sql)
            .catch(e => this.theConsole += "Error: " + JSON.stringify(e));


    }

    getDealer() {
        var sql = "SELECT * FROM user";

        this.db.executeSql(sql, {})
            .then((result) => {
                this.theConsole += JSON.stringify(result);
                if (result.rows.length > 0) {
                    this.theConsole += 'Result' + result.rows.item(0);
                }
                this.theConsole += "\n" + result.rows.item(0).username + result.rows.item(0).password;
                this.theConsole += "\n" + 'Rows' + result.rows.length;

            })

            .catch(e => this.theConsole += JSON.stringify(e));
    }

    getConsoleMessages() {
        return this.theConsole;
    }

    executeQuery(sql: string) {
        this.db.executeSql(sql, {})
            .then(() => this.theConsole += 'Executed SQL' + sql)
            .catch(e => this.theConsole += "Error: " + JSON.stringify(e));
    }
}