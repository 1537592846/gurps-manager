import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
    var advantage=new Advantage();
    advantage.id=3
    advantage.name="Well Fit"
    advantage.description="A well fitted body"
    advantage.cost=5
    advantage.level=1
    advantage.levelCap=1
    advantage.types=["mundane","physical"]
    advantage.formula="{health_test:1,knockout_test:2}"
    this.new_char.advantages.push(advantage);
  }
}
