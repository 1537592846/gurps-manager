import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { AdvantageProvider } from '../../../models/Advantage';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-extras',
  templateUrl: 'extras.html'
})
export class ExtrasPage {

  current_carry_category: string;
  current_movement: number;
  dodge: number;
  char: Character;

  constructor(public navParams: NavParams,public dbProvider:DatabaseProvider) {
    //Getting data
    this.char = navParams.data;
    new AdvantageProvider(dbProvider).getAll()
      .then((result: any) => {
        console.log("Result:" + result)
        this.char.advantages=result;
      });
  }
  ionViewWillEnter() {
    this.current_carry_category = this.getCharCarryCategory();
    this.current_movement = this.getCharMovement();
    this.dodge = this.getCharDodge();
  }
  getCharCarryCategory() {
    return this.char.getCarryCategory();
  }
  getCharMovement() {
    return this.char.getMovement();
  }
  getCharDodge() {
    return this.char.getDodge();
  }
}
