import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { Disadvantage } from '../../../models/Disadvantage';
import { CharacterAdvantagesPage } from '../character-advantages/character-advantages';

@Component({
  selector: 'page-character-disadvantages',
  templateUrl: 'character-disadvantages.html'
})
export class CharacterDisadvantagesPage {

  new_char: Character;

  constructor(public navCtrl: NavController,public navParams: NavParams) {
    //Getting data
    this.new_char = this.navParams.get('new_char');
  }
  goToCharacterAdvantages() {
    this.navCtrl.push(CharacterAdvantagesPage,{new_char:this.new_char});
  }
  removeDisadvantage(disadvantage:Disadvantage){
    for(var i = 0; i < this.new_char.disadvantages.length; i++) { 
      if(this.new_char.disadvantages[i] == disadvantage){
        this.new_char.disadvantages.splice(i, 1);
      } 
    }
  }
  addDisadvantage(){
    var disadvantage={ id: 3, name: "BEST fit", description: "No more fit than this", formula: "Health test:+5;Knockout test:+8" }
    this.new_char.disadvantages.push(disadvantage);
  }
}
