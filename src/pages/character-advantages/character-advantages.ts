import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CharacterDisadvantagesPage } from '../character-disadvantages/character-disadvantages';
import { Character } from '../../../models/Character';
import { Advantage } from '../../../models/Advantage';
import { CharacterStatusPage } from '../character-status/character-status';

@Component({
  selector: 'page-character-advantages',
  templateUrl: 'character-advantages.html'
})
export class CharacterAdvantagesPage {

  new_char: Character;
  
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    //Getting data
    this.new_char = this.navParams.get('new_char');
  }
  goToCharacterStatus(){
    this.navCtrl.push(CharacterStatusPage,{new_char:this.new_char});
  }
  removeAdvantage(advantage:Advantage){
    for(var i = 0; i < this.new_char.advantages.length; i++) { 
      if(this.new_char.advantages[i] == advantage){
        this.new_char.advantages.splice(i, 1);
      } 
    }
  }
  addAdvantage(){
    var advantage={ id: 3, name: "BEST fit", description: "No more fit than this", formula: "Health test:+5;Knockout test:+8" }
    this.new_char.advantages.push(advantage);
  }
}
