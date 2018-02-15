import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CharacterLanguagesPage } from '../character-languages/character-languages';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-character-status',
  templateUrl: 'character-status.html'
})
export class CharacterStatusPage {

  new_char: Character;
  max_strenght: number;
  max_dexterity: number;
  max_intelligence: number;
  max_health: number;
  max_life_points: number;
  max_will: number;
  max_perception: number;
  max_fatigue_points: number;
  max_speed: number;
  speed_aux:number;
  max_basic_movement: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //Getting data
    this.new_char = this.navParams.get('new_char');
    //Setting values
    this.new_char.current_points = 0;
    //Setting minimun values
    this.new_char.strenght = this.new_char.min_status * 1;
    this.new_char.dexterity = this.new_char.min_status * 1;
    this.new_char.intelligence = this.new_char.min_status * 1;
    this.new_char.health = this.new_char.min_status * 1;
    this.new_char.max_points = this.new_char.max_points * 1;
    this.new_char.min_status = this.new_char.min_status * 1;
    this.new_char.max_life_points = this.new_char.strenght * 1;
    this.new_char.will = this.new_char.intelligence * 1;
    this.new_char.perception = this.new_char.intelligence * 1;
    this.new_char.max_fatigue_points = this.new_char.health * 1;
    this.new_char.speed = this.new_char.getSpeed()*1;
    this.speed_aux=this.new_char.getSpeed()*4;
    this.new_char.basic_movement = this.new_char.getMinBasicMovement()*1;
    //Setting maximun values
    this.updateStrenght();
    this.updateDexterity();
    this.updateIntelligence();
    this.updateHealth();
    this.updateLifePoints();
    this.updateWill();
    this.updatePerception();
    this.updateFatiguePoints();
    this.updateSpeed();
    this.updateBasicMovement();
  }
  goToCharacterLanguages() {
    this.navCtrl.push(CharacterLanguagesPage, { new_char: this.new_char });
  }
  getMax(statCurrent: number, statMin: number, price: number) {
    return (this.new_char.max_points - this.new_char.current_points + (statCurrent - statMin) * price) / price + statMin;
  }
  getCurrentPoints() {
    this.new_char.current_points = (this.new_char.strenght - this.new_char.min_status) * 10;
    this.new_char.current_points += (this.new_char.dexterity - this.new_char.min_status) * 20;
    this.new_char.current_points += (this.new_char.intelligence - this.new_char.min_status) * 20;
    this.new_char.current_points += (this.new_char.health - this.new_char.min_status) * 10;

    this.new_char.current_points += (this.new_char.max_life_points - this.new_char.health) * 10;
    this.new_char.current_points += (this.new_char.will - this.new_char.intelligence) * 10;
    this.new_char.current_points += (this.new_char.perception - this.new_char.intelligence) * 10;
    this.new_char.current_points += (this.new_char.max_fatigue_points - this.new_char.health) * 10;
    this.new_char.current_points += (this.new_char.speed - (this.new_char.dexterity + this.new_char.health) / 4) * 10;
    this.new_char.current_points += Math.round(this.new_char.speed) > this.new_char.speed ? (this.new_char.basic_movement - Math.round(this.new_char.speed) - 1) * 10 : (this.new_char.basic_movement - Math.round(this.new_char.speed)) * 10;
  }
  updateStrenght() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_strenght = this.getMax(this.new_char.strenght, this.new_char.min_status, 10);
    //Changing if over max limit
    if (this.new_char.strenght > this.max_strenght) {
      this.new_char.strenght = this.max_strenght;
    }
    //Setting values that grow with it
    if (this.new_char.strenght > this.new_char.max_life_points) {
      this.new_char.max_life_points = this.new_char.strenght;
    }
  }
  updateDexterity() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_dexterity = this.getMax(this.new_char.dexterity, this.new_char.min_status, 20);
    //Changing if over max limit
    if (this.new_char.dexterity > this.max_dexterity) {
      this.new_char.dexterity = this.max_dexterity;
    }
    //Setting values that grow with it
    if (this.new_char.getSpeed() > this.new_char.speed/4) {
      this.new_char.speed = this.new_char.getSpeed()*4;
    }
  }
  updateIntelligence() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_intelligence = this.getMax(this.new_char.intelligence, this.new_char.min_status, 20);
    //Changing if over max limit
    if (this.new_char.intelligence > this.max_intelligence) {
      this.new_char.intelligence = this.max_intelligence;
    }
    //Setting values that grow with it
    if (this.new_char.intelligence > this.new_char.will) {
      this.new_char.will = this.new_char.intelligence;
    }
    if (this.new_char.intelligence > this.new_char.perception) {
      this.new_char.perception = this.new_char.intelligence;
    }
  }
  updateHealth() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_health = this.getMax(this.new_char.health, this.new_char.min_status, 10);
    //Changing if over max limit
    if (this.new_char.health > this.max_health) {
      this.new_char.health = this.max_health;
    }
    //Setting values that grow with it
    if (this.new_char.getSpeed() > this.new_char.speed/4) {
      this.new_char.speed = this.new_char.getSpeed()*4;
    }
    if (this.new_char.health > this.new_char.max_fatigue_points) {
      this.new_char.max_fatigue_points = this.new_char.health;
    }
  }
  updateLifePoints() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_life_points = this.getMax(this.new_char.max_life_points, this.new_char.strenght, 10);
    //Changing if over max limit
    if (this.new_char.max_life_points > this.max_life_points) {
      this.new_char.max_life_points = this.max_life_points;
    }
  }
  updateWill() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_will = this.getMax(this.new_char.will, this.new_char.intelligence, 10);
    //Changing if over max limit
    if (this.new_char.will > this.max_will) {
      this.new_char.will = this.max_will;
    }
  }
  updatePerception() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_perception = this.getMax(this.new_char.perception, this.new_char.intelligence, 10);
    //Changing if over max limit
    if (this.new_char.perception > this.max_perception) {
      this.new_char.perception = this.max_perception;
    }
  }
  updateFatiguePoints() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_fatigue_points = this.getMax(this.new_char.max_fatigue_points, this.new_char.health, 10);
    //Changing if over max limit
    if (this.new_char.max_fatigue_points > this.max_fatigue_points) {
      this.new_char.max_fatigue_points = this.max_fatigue_points;
    }
  }
  updateSpeed() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_speed = this.getMax(this.speed_aux/4, this.new_char.getSpeed(), 10);
    //Changing if over max limit
    if (this.speed_aux/4 > this.max_speed) {
      this.speed_aux = this.max_speed*4;
    }
    //Setting values that grow with it
    this.new_char.basic_movement=this.new_char.getMinBasicMovement();
  }
  updateBasicMovement() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_basic_movement = this.getMax(this.new_char.basic_movement, this.new_char.getSpeed(), 10);
    //Changing if over max limit
    if (this.new_char.basic_movement > this.max_basic_movement) {
      this.new_char.basic_movement = this.max_basic_movement
    }
  }
}