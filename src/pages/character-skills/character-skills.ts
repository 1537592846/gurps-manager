import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterAdvantagesPage } from '../character-advantages/character-advantages';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-character-skills',
  templateUrl: 'character-skills.html'
})
export class CharacterSkillsPage {
  
  new_char:Character;

  constructor(public navCtrl: NavController) {
  }
  goToCharacterAdvantages(){
    this.navCtrl.push(CharacterAdvantagesPage,this.new_char);
  }
}
