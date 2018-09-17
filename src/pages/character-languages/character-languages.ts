import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CharacterSkillsPage } from '../character-skills/character-skills'
import { Character } from '../../../models/Character';
import { Language } from '../../../models/Language';
import { CharacterResumePage } from '../character-resume/character-resume';

@Component({
  selector: 'page-character-languages',
  templateUrl: 'character-languages.html'
})
export class CharacterLanguagesPage {

  new_char: Character;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //Getting data
    this.new_char = this.navParams.get('new_char');
  }
  goToCharacterResume() {
    this.navCtrl.push(CharacterResumePage, { new_char: this.new_char });
  }
  removeLanguage(language:Language){
    for(var i = 0; i < this.new_char.languages.length; i++) { 
      if(this.new_char.languages[i] == language){
        this.new_char.languages.splice(i, 1);
      } 
    }
  }
  addLanguage(){
    var language={id:4,name:"Anglo-Saxan",level:{id:2,description:"Fluent"}};
    this.new_char.languages.push(language);
  }
}
