import { Component } from '@angular/core';
import { NavParams, ModalController } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { ModalBuyItems } from '../modal-buy-item/modal-buy-item';
import { ModalAddItems } from '../modal-add-item/modal-add-item';
import { ModalAddNewItems } from '../modal-add-new-item/modal-add-new-item';
import { DataProvider } from '../../providers/data/data';

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
  current_weight: number = 0
  current_price: number = 0
  current_category: string = "None"

  constructor(public navParams: NavParams, public modalCtrl: ModalController, public dataProvider: DataProvider) {
    //Getting data
    this.char = navParams.data
    this.getInventory()
    this.updateInfo()
  }
  ionViewWillEnter() {
    this.getInventory();
  }
  ionViewWillLeave() {
    this.char.inventory.one_hand_weapons = []
    this.char.inventory.two_hand_weapons = []
    this.char.inventory.shields = []
    this.char.inventory.armors = []
    this.char.inventory.consumables = []
    this.char.inventory.others = []
    for (let i = 0; i < this.weapons.length; i++) {
      switch (this.weapons[i].type) {
        case "one-hand": this.char.inventory.one_hand_weapons.push(this.weapons[i]); break
        case "two-hand": this.char.inventory.two_hand_weapons.push(this.weapons[i]); break
      }
    }
    for (let i = 0; i < this.shields.length; i++) {
      this.char.inventory.shields.push(this.shields[i])
    }
    for (let i = 0; i < this.armors.length; i++) {
      this.char.inventory.armors.push(this.armors[i])
    }
    for (let i = 0; i < this.consumables.length; i++) {
      this.char.inventory.consumables.push(this.consumables[i])
    }
    for (let i = 0; i < this.others.length; i++) {
      this.char.inventory.others.push(this.others[i])
    }
    this.char.inventory.shields = this.shields
    this.char.inventory.armors = this.armors
    this.char.inventory.consumables = this.consumables
    this.char.inventory.others = this.others
    this.char.current_carry_weight=this.char.inventory.getWeight()
    this.dataProvider.saveCharacter(this.char).then(res => {
      if (res) {
        console.log("Sucesso")
      } else {
        //Pagina de erro

        console.log("Erro")
      }
    })
      .catch(error => { console.log(error) })
  }
  updateInfo() {
    this.current_weight = this.char.inventory.getWeight()
    this.char.current_carry_weight = this.current_weight
    this.current_price = this.char.inventory.getValue()
    this.current_category = this.char.getCarryCategory()
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
        case "shield": this.shields.push(item); break
        case "head":
        case "torax":
        case "arms":
        case "hands":
        case "legs":
        case "feet": this.armors.push(item); break
        case "consumable": this.consumables.push(item); break
        case "other": this.others.push(item); break
      }
      this.char.resources -= item.cost
      this.updateInfo()
    })
  }
  openAddItemModal() {
    this.profileModal = this.modalCtrl.create(ModalAddItems, { strenght: this.char.strenght })
    this.profileModal.present()
    this.profileModal.onDidDismiss(item => {
      if (item == null) return
      item.bought = false
      switch (item.type) {
        case "one-hand": this.weapons.push(item); break
        case "two-hand": this.weapons.push(item); break
        case "shield": this.shields.push(item); break
        case "head":
        case "torax":
        case "arms":
        case "hands":
        case "legs":
        case "feet": this.armors.push(item); break
        case "consumable": this.consumables.push(item); break
        case "other": this.others.push(item); break
      }
      this.updateInfo()
    })
  }
  openAddNewItemModal() {
    this.profileModal = this.modalCtrl.create(ModalAddNewItems, { resouces: this.char.resources })
    this.profileModal.present()
    this.profileModal.onDidDismiss(item => {
      this.updateInfo()
    })
  }
  getInventory() {
    this.weapons = [];
    this.shields = [];
    this.armors = [];
    this.consumables = [];
    this.others = [];
    for (let i = 0; i < this.char.inventory.one_hand_weapons.length; i++) {
      this.weapons.push(this.char.inventory.one_hand_weapons[i])
    }
    for (let i = 0; i < this.char.inventory.two_hand_weapons.length; i++) {
      this.weapons.push(this.char.inventory.two_hand_weapons[i])
    }
    for (let i = 0; i < this.char.inventory.shields.length; i++) {
      this.shields.push(this.char.inventory.shields[i])
    }
    for (let i = 0; i < this.char.inventory.armors.length; i++) {
      this.armors.push(this.char.inventory.armors[i])
    }
    for (let i = 0; i < this.char.inventory.consumables.length; i++) {
      this.consumables.push(this.char.inventory.consumables[i])
    }
    for (let i = 0; i < this.char.inventory.others.length; i++) {
      this.others.push(this.char.inventory.others[i])
    }
  }
}