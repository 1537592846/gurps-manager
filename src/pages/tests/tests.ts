import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-tests',
  templateUrl: 'tests.html'
})
export class TestsPage {

  char: Character;
  constructor(public navParams: NavParams, public dataProvider: DataProvider) {
    //Getting data
    this.char = navParams.data
  }
  ionViewWillEnter() {
    //Getting data
    this.char;
  }
  ionViewWillLeave() {
    this.dataProvider.saveCharacter(this.char).then(res => {
      if (res) {
        console.log("Sucesso")
      } else {
        //Pagina de erro

        console.log("Erro")
      }
    })
      .catch(error => { console.log(error) })
  }
  // Life functions
  removeLife() {
    this.char.current_life_points -= 1;
  }
  addLife() {
    if (this.char.current_life_points < this.char.max_life_points) {
      this.char.current_life_points += 1;
    }
  }
  //Fatigue functions
  removeFatigue() {
    this.char.current_fatigue_points -= 1;
  }
  addFatigue() {
    if (this.char.current_fatigue_points < this.char.max_fatigue_points) {
      this.char.current_fatigue_points += 1;
    }
  }
  //Shield functions
  removeShield() {
    this.char.equipments.shield.current_life_points -= 1;
    if (this.char.equipments.shield.current_life_points == 0) {
      this.char.destroyShield();
    }
  }
  addShield() {
    if (this.char.equipments.shield.current_life_points < this.char.equipments.shield.max_life_points) {
      this.char.equipments.shield.current_life_points += 1;
    }
  }
  getTestValue(type: string) {
    let testValue = 0
    switch (type) {
      case "strenght": testValue=this.char.strenght;break
      case "dexterity": testValue=this.char.dexterity;break
      case "intelligence": testValue=this.char.intelligence;break
      case "health": testValue=this.char.health;break
      case "perception": testValue=this.char.perception;break
      case "will": testValue=this.char.will;break
      case "balance_attack": testValue=this.char.getBalanceAttack();break
      case "piercing_attack": testValue=this.char.getPiercingAttack();break
      case "dodge": testValue=this.char.getDodge();break
      case "parry": testValue=this.char.getParry();break
      case "block": testValue=this.char.getBlock();break
    }
  }
}