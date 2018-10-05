import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html'
})
export class InventoryPage {

  char: Character;
  weapons: any[];
  shields:any[];
  armors:any[];
  consumables:any[];
  others:any[];

  constructor(public navParams: NavParams) {
    //Getting data
    this.char = navParams.get('new_char');
    this.getInventory();
  }
  ionViewWillEnter() {
    this.getInventory();
  }
  getInventory() {
    this.getWeapons();
    this.getShields();
    this.getArmors();
    this.getConsumables();
    this.getOthers();
  }
  getWeapons() {
    this.weapons = [];
    this.char.inventory.one_hand_weapons.forEach(element => {
      this.weapons.push(element);
    });
    this.char.inventory.two_hand_weapons.forEach(element => {
      this.weapons.push(element);
    });
  }
  getShields() {
    this.shields = [];
    this.char.inventory.shields.forEach(element => {
      this.shields.push(element);
    });
  }
  getArmors() {
    this.armors = [];
    this.char.inventory.armors.forEach(element => {
      this.armors.push(element);
    });
  }
  getConsumables() {
    this.consumables = [];
    this.char.inventory.consumables.forEach(element => {
      this.consumables.push(element);
    });
  }
  getOthers() {
    this.others = [];
    this.char.inventory.others.forEach(element => {
      this.others.push(element);
    });
  }
}