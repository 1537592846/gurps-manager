import { Component } from '@angular/core';
import { NavParams, ModalController } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { ModalBuyItems } from '../modal-buy-item/modal-buy-item';
import { ModalAddItems } from '../modal-add-item/modal-add-item';
import { ModalAddNewItems } from '../modal-add-new-item/modal-add-new-item';

@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html'
})
export class InventoryPage {

  char: Character;
  weapons: any[];
  shields: any[];
  armors: any[];
  consumables: any[];
  others: any[];
  profileModal: any

  constructor(public navParams: NavParams, public modalCtrl: ModalController) {
    //Getting data
    this.char = navParams.data
    this.getInventory();
  }
  ionViewWillEnter() {
    this.getInventory();
  }
  ionViewWillExit() {
    for (let i = 0; i < this.weapons.length; i++) {
      switch (this.weapons[i].type) {
        case "one-hand": this.char.inventory.one_hand_weapons.push(this.weapons[i]); break
        case "two-hand": this.char.inventory.two_hand_weapons.push(this.weapons[i]); break
        case "shield": this.char.inventory.shields.push(this.weapons[i]); break
      }
    }
    this.char.inventory.shields = this.shields
    this.char.inventory.armors = this.armors
    this.char.inventory.consumables = this.consumables
    this.char.inventory.others = this.others
  }
  openBuyItemModal() {
    this.profileModal = this.modalCtrl.create(ModalBuyItems, { strenght: this.char.strenght })
    this.profileModal.present()
    this.profileModal.onDidDismiss(item => {
      if (item == null) return
      item.bought = true
      switch (item.type) {
        case "one-hand":
        case "two-hand": this.weapons.push(item); break
        case "shield": this.char.inventory.shields.push(item); break
        case "head":
        case "torax":
        case "arms":
        case "hands":
        case "legs":
        case "feet": this.char.inventory.armors.push(item); break
        case "consumable": this.char.inventory.consumables.push(item); break
        case "other": this.char.inventory.others.push(item); break
      }
      this.char.resources -= item.cost
    })
  }
  openAddItemModal() {
    this.profileModal = this.modalCtrl.create(ModalAddItems, { strenght: this.char.strenght })
    this.profileModal.present()
    this.profileModal.onDidDismiss(item => {
      if (item == null) return
      item.bought = false
      switch (item.type) {
        case "one-hand":
        case "two-hand": this.weapons.push(item); break
        case "shield": this.char.inventory.shields.push(item); break
        case "head":
        case "torax":
        case "arms":
        case "hands":
        case "legs":
        case "feet": this.char.inventory.armors.push(item); break
        case "consumable": this.char.inventory.consumables.push(item); break
        case "other": this.char.inventory.others.push(item); break
      }
    })
  }
  openAddNewItemModal() {
  this.profileModal = this.modalCtrl.create(ModalAddNewItems, { resouces: this.char.resources })
    this.profileModal.present()
    this.profileModal.onDidDismiss(item => {
      console.log(item)
    })    
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
    for (let i = 0; i < this.char.inventory.one_hand_weapons.length; i++) {
      this.weapons.push(this.char.inventory.one_hand_weapons[i])
    }
    for (let i = 0; i < this.char.inventory.two_hand_weapons.length; i++) {
      this.weapons.push(this.char.inventory.two_hand_weapons[i])
    }
  }
  getShields() {
    this.shields = [];
    for (let i = 0; i < this.char.inventory.shields.length; i++) {
      this.shields.push(this.char.inventory.shields[i])
    }
  }
  getArmors() {
    this.armors = [];
    for (let i = 0; i < this.char.inventory.armors.length; i++) {
      this.armors.push(this.char.inventory.armors[i])
    }
  }
  getConsumables() {
    this.consumables = [];
    for (let i = 0; i < this.char.inventory.consumables.length; i++) {
      this.consumables.push(this.char.inventory.consumables[i])
    }
  }
  getOthers() {
    this.others = [];
    for (let i = 0; i < this.char.inventory.others.length; i++) {
      this.others.push(this.char.inventory.others[i])
    }
  }
}