import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) { }

  /**
   * Cria um banco caso não exista ou pega um banco existente com o nome no parametro
   */
  public getDB() {
    return this.sqlite.create({
      name: 'gurps_manager.db',
      location: 'default'
    });
  }

  /**
   * Cria a estrutura inicial do banco de dados
   */
  public createDatabase() {
    return this.getDB()
      .then((db: SQLiteObject) => {

        // Criando as tabelas
        this.createTables(db);

        // Inserindo dados padrão
        this.insertDefaultItems(db);

      })
      .catch(e => console.log(e));
  }

  /**
   * Criando as tabelas no banco de dados
   * @param db
   */
  private createTables(db: SQLiteObject) {
    // Criando as tabelas
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS Advantage (id integer primary key AUTOINCREMENT NOT NULL, name TEXT, description TEXT, formula TEXT)'],
    ])
      .then(() => console.log('Default Tables created'))
      .catch(e => console.error('Erro when creating default tables', e));
  }

  /**
   * Incluindo os dados padrões
   * @param db
   */
  private insertDefaultItems(db: SQLiteObject) {
    db.executeSql('select COUNT(id) as qtd from Advantage', {})
      .then((data: any) => {
        //Se não existe nenhum registro
        if (data.rows.item(0).qtd == 0) {

          // Criando as tabelas
          db.sqlBatch([
            ['insert into Advantage (name,description,formula) values (?,?,?)', ['Beaty','Better social interactions with people','{"skill_cost":5}']],
            ['insert into Advantage (name,description,formula) values (?,?,?)', ['Well Fit','A body in shape','{"skill_cost":5;"health":1;"knockout_test":2}']],
            ['insert into Advantage (name,description,formula) values (?,?,?)', ['Wellest Fit','A body in better shape','{"skill_cost":15;"health":2;"knockout_test":4}']]
          ])
            .then(() => console.log('Default data inserted'))
            .catch(e => console.error('Error when inserting default data in Advantage', e));

        }
      })
      .catch(e => console.error('Error when trying to read data from Advantage', e));
  }
}