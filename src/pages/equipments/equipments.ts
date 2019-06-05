import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { NavParams, ModalController, NavController } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { ModalEquipments } from '../modal-equipments/modal-equipments';
import { OneHandWeapon, Shield, TwoHandWeapon, Armor } from '../../../models/Item';
import { Equipment } from '../../../models/Equipment';
import { GurpsManagerPage } from '../gurps-manager/gurps-manager';

@Component({
  selector: 'page-equipments',
  templateUrl: 'equipments.html'
})
export class EquipmentsPage {

  char: Character
  names: any = { "left_hand": "Empty", "right_hand": "Empty", "head": "Empty", "torax": "Empty", "arms": "Empty", "hands": "Empty", "legs": "Empty", "feet": "Empty" }
  profileModal: any

  constructor(public navParams: NavParams, public navCtrl: NavController,public modalCtrl: ModalController, public dataProvider: DataProvider) {
    //Getting data
    this.char = navParams.data
  }
  ionViewWillEnter() {
    this.getEquipments();
  }

  getEquipments() {
    this.names = { "left_hand": "Empty", "right_hand": "Empty", "head": "Empty", "torax": "Empty", "arms": "Empty", "hands": "Empty", "legs": "Empty", "feet": "Empty" }
    var oneHands = this.char.inventory.one_hand_weapons.filter(equip => equip.equipped != "")
    var twoHands = this.char.inventory.two_hand_weapons.filter(equip => equip.equipped != "")
    var shields = this.char.inventory.shields.filter(equip => equip.equipped != "")
    var armors = this.char.inventory.armors.filter(equip => equip.equipped != "")
    var equipped: any[] = []
    for (var i = 0; i < oneHands.length; i++) {
      equipped.push(oneHands[i])
    }
    for (var i = 0; i < twoHands.length; i++) {
      equipped.push(twoHands[i])
    }
    for (var i = 0; i < shields.length; i++) {
      equipped.push(shields[i])
    }
    for (var i = 0; i < armors.length; i++) {
      equipped.push(armors[i])
    }
    for (var i = 0; i < equipped.length; i++) {
      switch (equipped[i].equipped) {
        case "left_hand": {
          this.char.equipments.left_hand = equipped[i]
          this.names.left_hand = equipped[i].name
          break
        }
        case "right_hand": {
          this.char.equipments.right_hand = equipped[i]
          this.names.right_hand = equipped[i].name
          break
        }
        case "both_hands": {
          this.char.equipments.both_hands = equipped[i]
          this.names.left_hand = equipped[i].name
          this.names.right_hand = equipped[i].name
          break
        }
        case "shield": {
          this.char.equipments.shield = equipped[i]
          this.names.right_hand = equipped[i].name
          break
        }
        case "head": {
          this.char.equipments.head = equipped[i]
          this.names.head = equipped[i].name
          break
        }
        case "torax": {
          this.char.equipments.torax = equipped[i]
          this.names.torax = equipped[i].name
          break
        }
        case "hands": {
          this.char.equipments.hands = equipped[i]
          this.names.hands = equipped[i].name
          break
        }
        case "arms": {
          this.char.equipments.arms = equipped[i]
          this.names.arms = equipped[i].name
          break
        }
        case "legs": {
          this.char.equipments.legs = equipped[i]
          this.names.legs = equipped[i].name
          break
        }
        case "feet": {
          this.char.equipments.feet = equipped[i]
          this.names.feet = equipped[i].name
          break
        }
        default: {
          alert("Equipment with wrong type")
        }
      }
    }
    this.dataProvider.saveCharacter(this.char).then(res => {
      if (!res) {
        alert("Error saving equipment")
      }
    })
      .catch(error => { alert(error) })
  }

  equipEquipment(type: string) {
    this.profileModal = this.modalCtrl.create(ModalEquipments, { type: type, char: this.char })
    this.profileModal.present();
    this.profileModal.onDidDismiss(equipment => {
      if (equipment != undefined) {
        this.equippingEquipment(equipment, type)
      }
    })
  }

  changeEquipment(type: string) {
    this.profileModal = this.modalCtrl.create(ModalEquipments, { type: type, char: this.char })
    this.profileModal.present();
    this.profileModal.onDidDismiss(equipment => {
      if (equipment != undefined) {
        this.equippingEquipment(equipment, type)
      }
    })
  }

  removeEquipment(type: string) {
    switch (type) {
      case 'left_hand': {
        if (this.char.equipments.left_hand != undefined && this.char.equipments.left_hand.name != undefined) {
          this.char.inventory.one_hand_weapons.filter(equip => equip.equipped === "left_hand")[0].equipped = ""
          this.char.equipments.left_hand = new OneHandWeapon()
        }
        if (this.char.equipments.both_hands != undefined && this.char.equipments.both_hands.name != undefined) {
          this.char.inventory.two_hand_weapons.filter(equip => equip.equipped === "both_hands")[0].equipped = ""
          this.char.equipments.both_hands = new TwoHandWeapon()
        }
        break
      }
      case 'right_hand': {
        alert(this.char.equipments)
        if (this.char.equipments.right_hand != undefined && this.char.equipments.right_hand.name != undefined) {
          this.char.inventory.one_hand_weapons.filter(equip => equip.equipped === "right_hand")[0].equipped = ""
          this.char.equipments.right_hand = new OneHandWeapon()
        }
        if (this.char.equipments.both_hands != undefined && this.char.equipments.both_hands.name != undefined) {
          this.char.inventory.two_hand_weapons.filter(equip => equip.equipped === "both_hands")[0].equipped = ""
          this.char.equipments.both_hands = new TwoHandWeapon()
        }
        if (this.char.equipments.shield != undefined && this.char.equipments.shield.name != undefined) {
          this.char.inventory.shields.filter(equip => equip.equipped === "shield")[0].equipped = ""
          this.char.equipments.shield = new Shield()
        }
        break
      }
      case 'both_hands': {
        if (this.char.equipments.left_hand != undefined && this.char.equipments.left_hand.name != undefined) {
          this.char.inventory.one_hand_weapons.filter(equip => equip.equipped === "left_hand")[0].equipped = ""
          this.char.equipments.left_hand = new OneHandWeapon()
        }
        if (this.char.equipments.right_hand != undefined && this.char.equipments.right_hand.name != undefined) {
          this.char.inventory.one_hand_weapons.filter(equip => equip.equipped === "right_hand")[0].equipped = ""
          this.char.equipments.right_hand = new OneHandWeapon()
        }
        if (this.char.equipments.both_hands != undefined && this.char.equipments.both_hands.name != undefined) {
          this.char.inventory.two_hand_weapons.filter(equip => equip.equipped === "both_hands")[0].equipped = ""
          this.char.equipments.both_hands = new TwoHandWeapon()
        }
        if (this.char.equipments.shield != undefined && this.char.equipments.shield.name != undefined) {
          this.char.inventory.shields.filter(equip => equip.equipped === "shield")[0].equipped = ""
          this.char.equipments.shield = new Shield()
        }
        break
      }
      case 'head': {
        if (this.char.equipments.head != undefined && this.char.equipments.head.name != undefined) {
          this.char.inventory.armors.filter(equip => equip == this.char.equipments.head)[0].equipped = ""
          this.char.equipments.head = new Armor()
        }
        break
      }
      case 'torax': {
        if (this.char.equipments.torax != undefined && this.char.equipments.torax.name != undefined) {
          this.char.inventory.armors.filter(equip => equip == this.char.equipments.torax)[0].equipped = ""
          this.char.equipments.torax = new Armor()
        } break
      }
      case 'legs': {
        if (this.char.equipments.legs != undefined && this.char.equipments.legs.name != undefined) {
          this.char.inventory.armors.filter(equip => equip == this.char.equipments.legs)[0].equipped = ""
          this.char.equipments.legs = new Armor()
        }
        break
      }
      case 'feet': {
        if (this.char.equipments.feet != undefined && this.char.equipments.feet.name != undefined) {
          this.char.inventory.armors.filter(equip => equip == this.char.equipments.feet)[0].equipped = ""
          this.char.equipments.feet = new Armor()
        }
        break
      }
      case 'arms': {
        if (this.char.equipments.arms != undefined && this.char.equipments.arms.name != undefined) {
          this.char.inventory.armors.filter(equip => equip == this.char.equipments.arms)[0].equipped = ""
          this.char.equipments.arms = new Armor()
        }
        break
      }
      case 'hands': {
        if (this.char.equipments.hands != undefined && this.char.equipments.hands.name != undefined) {
          this.char.inventory.armors.filter(equip => equip == this.char.equipments.hands)[0].equipped = ""
          this.char.equipments.hands = new Armor()
        }
        break
      }
    }
    this.getEquipments()
  }

  equippingEquipment(equipment: any, type: string) {
    switch (equipment.type) {
      case 'one_hand': {
        for (let i = 0; i < this.char.inventory.one_hand_weapons.length; i++) {
          if (this.char.inventory.one_hand_weapons[i].name == equipment.name) {
            this.char.inventory.one_hand_weapons[i].equipped = type;
          }
        }
        this.removeEquipment(type)
        break;
      }
      case "two_hand": {
        for (let i = 0; i < this.char.inventory.two_hand_weapons.length; i++) {
          if (this.char.inventory.two_hand_weapons[i].name == equipment.name) {
            this.char.inventory.two_hand_weapons[i].equipped = "both_hands";
          }
        }
        this.removeEquipment("both_hands")
        break;
      }
      case 'shield': {
        for (let i = 0; i < this.char.inventory.shields.length; i++) {
          if (this.char.inventory.shields[i].name == equipment.name) {
            this.char.inventory.shields[i].equipped = "shield";
          }
        }
        this.removeEquipment("right_hand")
        break;
      }
      case 'head':
      case 'torax':
      case 'legs':
      case 'feet':
      case 'arms':
      case 'hands': {
        for (let i = 0; i < this.char.inventory.armors.length; i++) {
          if (this.char.inventory.armors[i].name == equipment.name) {
            this.char.inventory.armors[i].equipped = equipment.type;
          }
        }
        this.removeEquipment(type)
        break;
      }
    }
  }

  goHome(){
    this.dataProvider.saveCharacter(this.char).then(res => {
      if (!res) {
        alert("Error saving character");
      }
    })
    this.navCtrl.setRoot(GurpsManagerPage, {     });
  }
}