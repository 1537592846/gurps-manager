import { Component } from '@angular/core';
import { NavParams, ModalController } from 'ionic-angular';
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
  profileModal:any

  constructor(public navParams: NavParams, public modalCtrl: ModalController) {
    //Getting data
    this.char = navParams.data
    this.getInventory();
  }
  ionViewWillEnter() {
    this.getInventory();
  }
  openBuyItemModal(){
    this.profileModal = this.modalCtrl.create(ModalBuyItem, {})
    this.profileModal.present();
    this.profileModal.onDidDismiss(language => {
      
    })
  }
  openAddItemModal(){
    
  }
  openAddNewItemModal(){
    
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
    for(let i=0;i<this.char.inventory.one_hand_weapons.length;i++){
      this.weapons.push(this.char.inventory.one_hand_weapons[i])
    }
    for(let i=0;i<this.char.inventory.two_hand_weapons.length;i++){
      this.weapons.push(this.char.inventory.two_hand_weapons[i])
    }
  }
  getShields() {
    this.shields = [];
    for(let i=0;i<this.char.inventory.shields.length;i++){
      this.shields.push(this.char.inventory.shields[i])
    }
  }
  getArmors() {
    this.armors = [];
    for(let i=0;i<this.char.inventory.armors.length;i++){
      this.armors.push(this.char.inventory.armors[i])
    }
  }
  getConsumables() {
    this.consumables = [];
    for(let i=0;i<this.char.inventory.consumables.length;i++){
      this.consumables.push(this.char.inventory.consumables[i])
    }
  }
  getOthers() {
    this.others = [];
    for(let i=0;i<this.char.inventory.others.length;i++){
      this.others.push(this.char.inventory.others[i])
    }
  }
}