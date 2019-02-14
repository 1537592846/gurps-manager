import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { NavParams, ModalController } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { ModalEquipments } from '../modal-equipments/modal-equipments';
import { OneHandWeapon, Armor, TwoHandWeapon, Shield } from '../../../models/Item';

@Component({
  selector: 'page-equipments',
  templateUrl: 'equipments.html'
})
export class EquipmentsPage {

  char: Character
  names: any = { "left_hand": "Empty", "right_hand": "Empty", "head": "Empty", "torax": "Empty", "arms": "Empty", "hands": "Empty", "legs": "Empty", "feet": "Empty" }
  profileModal: any

  constructor(public navParams: NavParams, public modalCtrl: ModalController, public dataProvider: DataProvider) {
    //Getting data
    this.char = navParams.data
  }
  ionViewWillEnter() {
    this.getEquipments();
  }
  ionViewWillLeave() {
    this.dataProvider.saveCharacter(this.char).then(res => {
      if (!res) {
        console.log("Erro")
      }
    })
      .catch(error => { console.log(error) })
  }
  getEquipments() {
    this.names = { "left_hand": "Empty", "right_hand": "Empty", "head": "Empty", "torax": "Empty", "arms": "Empty", "hands": "Empty", "legs": "Empty", "feet": "Empty" }
    var oneHands = this.char.inventory.one_hand_weapons.filter(equip => equip.equipped != "")
    var twoHands = this.char.inventory.two_hand_weapons.filter(equip => equip.equipped != "")
    var shields = this.char.inventory.shields.filter(equip => equip.equipped != "")
    var armors = this.char.inventory.armors.filter(equip => equip.equipped != "")
    var equipped: any[]=[]
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
          this.names.both_hands = equipped[i].name
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
      }
    }
  }

  equipEquipment(type: string) {
    this.profileModal = this.modalCtrl.create(ModalEquipments, { type: type, char: this.char })
    this.profileModal.present();
    this.profileModal.onDidDismiss(equipment => {
      if (equipment != undefined) {
        switch (type) {
          case 'left_hand': {
            if (equipment.type == "one_hand") {
              for (let i = 0; i < this.char.inventory.one_hand_weapons.length; i++) {
                if (this.char.inventory.one_hand_weapons[i].name == equipment.name) {
                  this.char.inventory.one_hand_weapons[i].equipped = "left_hand";
                }
              }
              this.char.equipments.left_hand = equipment
            }
            if (equipment.type == "two_hand") {
              for (let i = 0; i < this.char.inventory.two_hand_weapons.length; i++) {
                if (this.char.inventory.two_hand_weapons[i].name == equipment.name) {
                  this.char.inventory.two_hand_weapons[i].equipped = "both_hand";
                }
              }
              this.char.equipments.both_hands = equipment
              this.names.right_hand = equipment.name
            }
            this.names.left_hand = equipment.name
            break;
          }
          case 'right_hand': {
            if (equipment.type == "one_hand") {
              for (let i = 0; i < this.char.inventory.one_hand_weapons.length; i++) {
                if (this.char.inventory.one_hand_weapons[i].name == equipment.name) {
                  this.char.inventory.one_hand_weapons[i].equipped = "right_hand";
                }
              }
              this.char.equipments.left_hand = equipment
            }
            if (equipment.type == "two_hand") {
              for (let i = 0; i < this.char.inventory.two_hand_weapons.length; i++) {
                if (this.char.inventory.two_hand_weapons[i].name == equipment.name) {
                  this.char.inventory.two_hand_weapons[i].equipped = "both_hand";
                }
              }
              this.char.equipments.both_hands = equipment
              this.names.left_hand = equipment.name
            }
            if (equipment.type == "shield") {
              for (let i = 0; i < this.char.inventory.shields.length; i++) {
                if (this.char.inventory.shields[i].name == equipment.name) {
                  this.char.inventory.shields[i].equipped = "right_hand";
                }
              }
              this.char.equipments.shield = equipment
            }
            this.names.right_hand = equipment.name
            break;
          }
          case 'head': {
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors[i].equipped = equipment.type;
              }
            }
            this.char.equipments.head = equipment
            this.names.head = equipment.name
            break;
          }
          case 'torax': {
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors[i].equipped = equipment.type;
              }
            }
            this.char.equipments.torax = equipment
            this.names.torax = equipment.name
            break;
          }
          case 'legs': {
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors[i].equipped = equipment.type;
              }
            }
            this.char.equipments.legs = equipment
            this.names.legs = equipment.name
            break;
          }
          case 'feet': {
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors[i].equipped = equipment.type;
              }
            }
            this.char.equipments.feet = equipment
            this.names.feet = equipment.name
            break;
          }
          case 'arms': {
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors[i].equipped = equipment.type;
              }
            }
            this.char.equipments.arms = equipment
            this.names.arms = equipment.name
            break;
          }
          case 'hands': {
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors[i].equipped = equipment.type;
              }
            }
            this.char.equipments.hands = equipment
            this.names.hands = equipment.name
            break;
          }
        }
      }
    })
    this.getEquipments()
  }

  changeEquipment(type: string) {
    this.profileModal = this.modalCtrl.create(ModalEquipments, { type: type, char: this.char })
    this.profileModal.present();
    this.profileModal.onDidDismiss(equipment => {
      if (equipment != undefined) {
        switch (type) {
          case 'left_hand': {
            if (equipment.type == "one_hand") {
              this.char.inventory.one_hand_weapons.filter(equip => equip == this.char.equipments.left_hand)[0].equipped = ""
              for (let i = 0; i < this.char.inventory.one_hand_weapons.length; i++) {
                if (this.char.inventory.one_hand_weapons[i].name == equipment.name) {
                  this.char.inventory.one_hand_weapons[i].equipped = "left_hand";
                }
              }
              this.char.equipments.left_hand = equipment
            }
            if (equipment.type == "two_hand") {
              this.char.inventory.two_hand_weapons.filter(equip => equip == this.char.equipments.both_hands)[0].equipped = ""
              for (let i = 0; i < this.char.inventory.two_hand_weapons.length; i++) {
                if (this.char.inventory.two_hand_weapons[i].name == equipment.name) {
                  this.char.inventory.two_hand_weapons[i].equipped = "both_hand";
                }
              }
              this.char.equipments.both_hands = equipment
              this.names.right_hand = equipment.name
            }
            this.names.left_hand = equipment.name
            break;
          }
          case 'right_hand': {
            if (equipment.type == "one_hand") {
              this.char.inventory.one_hand_weapons.filter(equip => equip == this.char.equipments.right_hand)[0].equipped = ""
              for (let i = 0; i < this.char.inventory.one_hand_weapons.length; i++) {
                if (this.char.inventory.one_hand_weapons[i].name == equipment.name) {
                  this.char.inventory.one_hand_weapons[i].equipped = "right_hand";
                }
              }
              this.char.equipments.left_hand = equipment
            }
            if (equipment.type == "two_hand") {
              this.char.inventory.two_hand_weapons.filter(equip => equip == this.char.equipments.both_hands)[0].equipped = ""
              for (let i = 0; i < this.char.inventory.two_hand_weapons.length; i++) {
                if (this.char.inventory.two_hand_weapons[i].name == equipment.name) {
                  this.char.inventory.two_hand_weapons[i].equipped = "both_hand";
                }
              }
              this.char.equipments.both_hands = equipment
              this.names.left_hand = equipment.name
            }
            if (equipment.type == "shield") {
              this.char.inventory.shields.filter(equip => equip == this.char.equipments.shield)[0].equipped = ""
              for (let i = 0; i < this.char.inventory.shields.length; i++) {
                if (this.char.inventory.shields[i].name == equipment.name) {
                  this.char.inventory.shields[i].equipped = "right_hand";
                }
              }
              this.char.equipments.shield = equipment
            }
            this.names.right_hand = equipment.name
            break;
          }
          case 'head': {
            this.char.inventory.armors.filter(equip => equip == this.char.equipments.head)[0].equipped = ""
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors[i].equipped = equipment.type;
              }
            }
            this.char.equipments.head = equipment
            this.names.head = equipment.name
            break;
          }
          case 'torax': {
            this.char.inventory.armors.filter(equip => equip == this.char.equipments.torax)[0].equipped = ""
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors[i].equipped = equipment.type;
              }
            }
            this.char.equipments.torax = equipment
            this.names.torax = equipment.name
            break;
          }
          case 'legs': {
            this.char.inventory.armors.filter(equip => equip == this.char.equipments.legs)[0].equipped = ""
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors[i].equipped = equipment.type;
              }
            }
            this.char.equipments.legs = equipment
            this.names.legs = equipment.name
            break;
          }
          case 'feet': {
            this.char.inventory.armors.filter(equip => equip == this.char.equipments.feet)[0].equipped = ""
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors[i].equipped = equipment.type;
              }
            }
            this.char.equipments.feet = equipment
            this.names.feet = equipment.name
            break;
          }
          case 'arms': {
            this.char.inventory.armors.filter(equip => equip == this.char.equipments.arms)[0].equipped = ""
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors[i].equipped = equipment.type;
              }
            }
            this.char.equipments.arms = equipment
            this.names.arms = equipment.name
            break;
          }
          case 'hands': {
            this.char.inventory.armors.filter(equip => equip == this.char.equipments.hands)[0].equipped = ""
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors[i].equipped = equipment.type;
              }
            }
            this.char.equipments.hands = equipment
            this.names.hands = equipment.name
            break;
          }
        }
      }
    })
    this.getEquipments()
  }

  removeEquipment(type: string) {
    switch (type) {
      case 'left_hand': {
        if (this.char.equipments.left_hand != undefined) {
          this.char.inventory.one_hand_weapons.filter(equip => equip.equipped === "left_hand")[0].equipped = ""
        } else {
          this.char.inventory.two_hand_weapons.filter(equip => equip.equipped === "both_hand")[0].equipped = ""
        }
        break
      }
      case 'right_hand': {
        if (this.char.equipments.right_hand != undefined) {
          this.char.inventory.one_hand_weapons.filter(equip => equip == this.char.equipments.right_hand)[0].equipped = ""
        } else {
          if (this.char.equipments.shield != undefined) {
            this.char.inventory.shields.filter(equip => equip == this.char.equipments.shield)[0].equipped = ""
          } else {
            this.char.inventory.two_hand_weapons.filter(equip => equip == this.char.equipments.both_hands)[0].equipped = ""
          }
        }
        break
      }
      case 'head': {
        this.char.inventory.armors.filter(equip => equip == this.char.equipments.head)[0].equipped = ""
        break
      }
      case 'torax': {
        this.char.inventory.armors.filter(equip => equip == this.char.equipments.torax)[0].equipped = ""
        break
      }
      case 'legs': {
        this.char.inventory.armors.filter(equip => equip == this.char.equipments.legs)[0].equipped = ""
        break
      }
      case 'feet': {
        this.char.inventory.armors.filter(equip => equip == this.char.equipments.feet)[0].equipped = ""
        break
      }
      case 'arms': {
        this.char.inventory.armors.filter(equip => equip == this.char.equipments.arms)[0].equipped = ""
        break
      }
      case 'hands': {
        this.char.inventory.armors.filter(equip => equip == this.char.equipments.hands)[0].equipped = ""
        break
      }
    }
    this.getEquipments()
  }
}