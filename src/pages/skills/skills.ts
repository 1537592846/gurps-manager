import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { Skill } from '../../../models/Skill';

@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html'
})
export class SkillsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  char: Character;
  constructor(public navParams: NavParams) {
    //Getting data
    this.char = navParams.data;
  }
  getSkillLevel(skill: Skill) {
    switch (skill.difficulty.description) {
      case "ST": return this.char.strenght + skill.level;
      case "DX": return this.char.dexterity + skill.level;
      case "IQ": return this.char.intelligence + skill.level;
      case "HT": return this.char.health + skill.level;
    }
  }
}
