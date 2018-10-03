import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { CharacterSkillsPage } from '../character-skills/character-skills';
import { Constants } from '../../../models/Constants';

@Component({
  selector: 'page-character-status',
  templateUrl: 'character-status.html'
})
export class CharacterStatusPage {

  //Character object
  new_char: Character;
  //Maximun and minimun limits
  max_strenght: number;
  max_dexterity: number;
  max_intelligence: number;
  max_health: number;
  max_life_points: number;
  max_will: number;
  max_perception: number;
  max_fatigue_points: number;
  min_basic_movement: number;
  max_basic_movement: number;
  speed_aux: number;
  min_speed_aux: number;
  max_speed_aux: number;
  current_points:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //Getting data
    this.new_char = this.navParams.get('new_char');
    //Setting values
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
    this.new_char.speed = this.new_char.getMinSpeed() * 1;
    this.speed_aux = this.new_char.getMinSpeed() * 4;
    this.min_speed_aux = this.speed_aux;
    this.new_char.basic_movement = this.new_char.getMinBasicMovement() * 1;
    this.min_basic_movement = this.new_char.basic_movement;
    this.current_points=this.new_char.current_points
    this.updateAll();
  }
  goToNextPage() {
    this.updateAll();
    this.new_char.current_points=this.current_points
    this.navCtrl.push(CharacterSkillsPage, { new_char: this.new_char });
  }
  getMax(statCurrent: number, statMin: number, price: number) {
    return Math.round((this.new_char.max_points - this.current_points + (statCurrent - statMin) * price) / price + statMin);
  }
  getCurrentPoints() {
    this.current_points=this.new_char.current_points
    this.current_points += (this.new_char.strenght - this.new_char.min_status) * Constants.Strenght;
    this.current_points += (this.new_char.dexterity - this.new_char.min_status) * Constants.Dexterity;
    this.current_points += (this.new_char.intelligence - this.new_char.min_status) * Constants.Intelligence;
    this.current_points += (this.new_char.health - this.new_char.min_status) * Constants.Health;

    this.current_points += (this.new_char.max_life_points - this.new_char.strenght) * Constants.LifePoints;
    this.current_points += (this.new_char.will - this.new_char.intelligence) * Constants.Will;
    this.current_points += (this.new_char.perception - this.new_char.intelligence) * Constants.Perception;
    this.current_points += (this.new_char.max_fatigue_points - this.new_char.health) * Constants.FatiguePoints;
    this.current_points += (this.speed_aux - this.new_char.getMinSpeed() * 4) * Constants.Speed;
    this.current_points += (this.new_char.basic_movement - this.new_char.getMinBasicMovement()) * Constants.BasicMovement;
  }
  updateStrenght() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_strenght = this.getMax(this.new_char.strenght, this.new_char.min_status, Constants.Strenght);
    //Changing if over max limit
    if (this.new_char.strenght > this.max_strenght) {
      this.new_char.strenght = this.max_strenght;
      this.updateStrenght();
    }
    //Setting values that grow with it
    if (this.new_char.strenght > this.new_char.max_life_points) {
      this.new_char.max_life_points = this.new_char.strenght;
      this.updateLifePoints();
    }
  }
  updateDexterity() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_dexterity = this.getMax(this.new_char.dexterity, this.new_char.min_status, Constants.Dexterity);
    //Changing if over max limit
    if (this.new_char.dexterity > this.max_dexterity) {
      this.new_char.dexterity = this.max_dexterity;
      this.updateDexterity();
    }
    //Setting values that grow with it
    if (this.new_char.getMinSpeed() > this.speed_aux / 4) {
      this.new_char.speed = this.new_char.getMinSpeed();
      this.speed_aux = this.new_char.speed * 4;
      this.updateSpeed();
    }
  }
  updateIntelligence() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_intelligence = this.getMax(this.new_char.intelligence, this.new_char.min_status, Constants.Intelligence);
    //Changing if over max limit
    if (this.new_char.intelligence > this.max_intelligence) {
      this.new_char.intelligence = this.max_intelligence;
      this.updateIntelligence();
    }
    //Setting values that grow with it
    if (this.new_char.intelligence > this.new_char.will) {
      this.new_char.will = this.new_char.intelligence;
      this.updateWill();
    }
    if (this.new_char.intelligence > this.new_char.perception) {
      this.new_char.perception = this.new_char.intelligence;
      this.updatePerception();
    }
  }
  updateHealth() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_health = this.getMax(this.new_char.health, this.new_char.min_status, Constants.Health);
    //Changing if over max limit
    if (this.new_char.health > this.max_health) {
      this.new_char.health = this.max_health;
      this.updateHealth();
    }
    //Setting values that grow with it
    if (this.new_char.getMinSpeed() > this.speed_aux / 4) {
      this.new_char.speed = this.new_char.getMinSpeed();
      this.speed_aux = this.new_char.speed * 4;
      this.updateSpeed();
    }
    if (this.new_char.health > this.new_char.max_fatigue_points) {
      this.new_char.max_fatigue_points = this.new_char.health;
      this.updateFatiguePoints();
    }
  }
  updateLifePoints() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_life_points = this.getMax(this.new_char.max_life_points, this.new_char.strenght, Constants.LifePoints);
    //Changing if over max limit
    if (this.new_char.max_life_points > this.max_life_points) {
      this.new_char.max_life_points = this.max_life_points;
      this.updateLifePoints();
      this.updateStrenght();
    }
  }
  updateWill() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_will = this.getMax(this.new_char.will, this.new_char.intelligence, Constants.Will);
    //Changing if over max limit
    if (this.new_char.will > this.max_will) {
      this.new_char.will = this.max_will;
      this.updateWill();
      this.updateIntelligence();
    }
  }
  updatePerception() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_perception = this.getMax(this.new_char.perception, this.new_char.intelligence, Constants.Perception);
    //Changing if over max limit
    if (this.new_char.perception > this.max_perception) {
      this.new_char.perception = this.max_perception;
      this.updatePerception();
      this.updateIntelligence();
    }
  }
  updateFatiguePoints() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_fatigue_points = this.getMax(this.new_char.max_fatigue_points, this.new_char.health, Constants.FatiguePoints);
    //Changing if over max limit
    if (this.new_char.max_fatigue_points > this.max_fatigue_points) {
      this.new_char.max_fatigue_points = this.max_fatigue_points;
      this.updateFatiguePoints();
      this.updateHealth();
    }
  }
  updateSpeed() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_speed_aux = this.getMax(this.speed_aux, this.new_char.getMinSpeed() * 4, Constants.Speed);
    this.min_speed_aux = this.new_char.getMinSpeed() * 4;
    //Changing if over max limit
    if (this.speed_aux / 4 > this.max_speed_aux) {
      this.speed_aux = this.max_speed_aux * 4;
      this.updateSpeed();
      this.updateDexterity();
      this.updateHealth();
    }
    //Setting values that grow with it
    this.new_char.speed = this.speed_aux / 4;
    this.new_char.basic_movement = this.new_char.getMinBasicMovement();
    this.updateBasicMovement();
  }
  updateBasicMovement() {
    //Calculating current points
    this.getCurrentPoints();
    //Calculating max range
    this.max_basic_movement = this.getMax(this.new_char.basic_movement, this.new_char.getMinSpeed(), Constants.BasicMovement);
    this.min_basic_movement = this.new_char.getMinBasicMovement();
    //Changing if over max limit
    if (this.new_char.basic_movement > this.max_basic_movement) {
      this.new_char.basic_movement = this.max_basic_movement;
      this.updateBasicMovement();
    }
  }
  updateAll() {
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
}