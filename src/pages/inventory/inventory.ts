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
        case "one_hand": this.char.inventory.one_hand_weapons.push(this.weapons[i]); break
        case "two_hand": this.char.inventory.two_hand_weapons.push(this.weapons[i]); break
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
    this.char.current_carry_weight = this.char.inventory.getWeight()
    this.dataProvider.saveCharacter(this.char).then(res => {
      if (!res) {
        console.log("Erro")
      }
    })
      .catch(error => { console.log(error) })
  }
  updateInfo() {
    this.current_weight = this.char.inventory.getWeight()
    console.log(this.current_weight)
    this.char.current_carry_weight = this.current_weight
    this.current_price = this.char.inventory.getValue()
    this.current_category = this.char.getCarryCategory()
  }
  openBuyItemModal() {
    this.profileModal = this.modalCtrl.create(ModalBuyItems, { strength: this.char.strength, resources: this.char.resources })
    this.profileModal.present()
    this.profileModal.onDidDismiss(item => {
      if (item == undefined) return
      item.bought = true
      switch (item.type) {
        case "one_hand": this.char.inventory.one_hand_weapons.push(item); this.weapons.push(item); break
        case "two_hand": this.char.inventory.two_hand_weapons.push(item); this.weapons.push(item); break
        case "shield": this.char.inventory.shields.push(item); this.shields.push(item); break
        case "head":
        case "torax":
        case "arms":
        case "hands":
        case "legs":
        case "feet": this.char.inventory.armors.push(item); this.armors.push(item); break
        case "consumable": this.char.inventory.consumables.push(item); this.consumables.push(item); break
        case "other": this.char.inventory.others.push(item); this.others.push(item); break
      }
      this.char.resources -= item.cost
    })
    this.updateInfo()
  }
  openAddItemModal() {
    this.profileModal = this.modalCtrl.create(ModalAddItems, { strength: this.char.strength, resources: this.char.resources })
    this.profileModal.present()
    this.profileModal.onDidDismiss(item => {
      if (item == undefined) return
      item.bought = false
      switch (item.type) {
        case "one_hand":
        case "two_hand": this.weapons.push(item); break
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
    })
    this.updateInfo()
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
  sellItem(item: any) {
    this.char.resources += item.cost
    this.destroyItem(item)
  }
  destroyItem(item: any) {
    console.log(this.char.inventory.one_hand_weapons)
    console.log(this.char.inventory.one_hand_weapons.indexOf(item))
    switch (item.type) {
      case "one_hand": {
        this.char.inventory.one_hand_weapons.splice(this.char.inventory.one_hand_weapons.indexOf(item), 1)
        break;
      }
      case "two_hand": {
        this.char.inventory.two_hand_weapons.splice(this.char.inventory.two_hand_weapons.indexOf(item), 1)
        break;
      }
      case "shield": {
        this.char.inventory.shields.splice(this.char.inventory.shields.indexOf(item), 1)
        break;
      }
      case "head":
      case "torax":
      case "arms":
      case "hands":
      case "legs":
      case "feet": {
        this.char.inventory.armors.splice(this.char.inventory.armors.indexOf(item), 1)
        break;
      }
      case "consumable": {
        this.char.inventory.consumables.splice(this.char.inventory.consumables.indexOf(item), 1)
        break;
      }
      case "other": {
        this.char.inventory.others.splice(this.char.inventory.others.indexOf(item), 1)
        break;
      }
    }
    this.updateInfo()
    this.getInventory()
  }
}