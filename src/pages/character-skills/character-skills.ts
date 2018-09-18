import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { Skill } from '../../../models/Skill';
import { CharacterLanguagesPage } from '../character-languages/character-languages';

@Component({
  selector: 'page-character-skills',
  templateUrl: 'character-skills.html'
})
export class CharacterSkillsPage {
  
  new_char:Character;

  constructor(public navCtrl: NavController,public navParams: NavParams) {
    //Getting data
    this.new_char = this.navParams.get('new_char');
  }
  goToCharacterLanguages(){
    this.navCtrl.push(CharacterLanguagesPage,{new_char:this.new_char});
  }
  removeSkill(skill:Skill){
    for(var i = 0; i < this.new_char.skills.length; i++) { 
      if(this.new_char.skills[i] == skill){
        this.new_char.skills.splice(i, 1);
      } 
    }
  }
  addSkill(){
    var skill={id:4,name:"WAT AGAIN",difficulty:{description:"HT",level:{id:4,description:"Hard"}},level:2,description:"*insert wat woman picture here*",formula:""};
    this.new_char.skills.push(skill as Skill);
  }
}
