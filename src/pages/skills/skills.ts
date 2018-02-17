import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html'
})
export class SkillsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  char:Character;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //Getting data
    this.char = this.navParams.get('char');
  }
  
}
