import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-extras',
  templateUrl: 'extras.html'
})
export class ExtrasPage {

  current_carry_category: string;
  current_movement:number;
  dodge:number;
  char: Character;
  
  constructor(public navParams: NavParams) {
    //Getting data
    this.char = navParams.get('charParam');
    this.current_carry_category=this.getCharCarryCategory();
    this.current_movement=this.getCharMovement();
    this.dodge=this.getCharDodge();
  }
  getCharCarryCategory() {
    return Character.getCarryCategory(this.char);
  }
  getCharMovement() {
    return Character.getMovement(this.char);
  }
  getCharDodge(){
    return Character.getDodge(this.char);
  }
}
