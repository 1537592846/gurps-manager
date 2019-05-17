import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { Skill } from '../../../models/Skill';
import { DataProvider } from '../../providers/data/data';
import { GurpsManagerPage } from '../gurps-manager/gurps-manager';

@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html'
})
export class SkillsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  char: Character;
  constructor(public navParams: NavParams,public navCtrl:NavController, public dataProvider: DataProvider) {
    //Getting data
    this.char = navParams.data
  }
  getSkillLevel(skill: Skill) {
    switch (skill.attribute) {
      case "ST": return this.char.strength + skill.level;
      case "DX": return this.char.dexterity + skill.level;
      case "IQ": return this.char.intelligence + skill.level;
      case "HT": return this.char.health + skill.level;
    }
  }

  goHome(){
    this.dataProvider.saveCharacter(this.char).then(res => {
      if (!res) {
        console.log("Error saving character");
      }
    })
    this.navCtrl.setRoot(GurpsManagerPage, {     });
  }
}
