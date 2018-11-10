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
    this.names= { "left_hand": "Empty", "right_hand": "Empty", "head": "Empty", "torax": "Empty", "arms": "Empty", "hands": "Empty", "legs": "Empty", "feet": "Empty" }
    if (this.char.equipments.both_hands.name != undefined) {
      this.names.left_hand = this.char.equipments.both_hands.name
      this.names.right_hand = this.char.equipments.both_hands.name
    } else {
      if (this.char.equipments.left_hand.name != undefined) {
        this.names.left_hand = this.char.equipments.left_hand.name
      }
      if (this.char.equipments.shield.name != undefined) {
        this.names.right_hand = this.char.equipments.shield.name
      } else {
        if (this.char.equipments.right_hand.name != undefined) {
          this.names.right_hand = this.char.equipments.right_hand.name
        }
      }
    }
    if (this.char.equipments.head.name != undefined) {
      this.names.head = this.char.equipments.head.name
    }
    if (this.char.equipments.torax.name != undefined) {
      this.names.torax = this.char.equipments.torax.name
    }
    if (this.char.equipments.arms.name != undefined) {
      this.names.arms = this.char.equipments.arms.name
    }
    if (this.char.equipments.hands.name != undefined) {
      this.names.hands = this.char.equipments.hands.name
    }
    if (this.char.equipments.legs.name != undefined) {
      this.names.legs = this.char.equipments.legs.name
    }
    if (this.char.equipments.feet.name != undefined) {
      this.names.feet = this.char.equipments.feet.name
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
                  this.char.inventory.one_hand_weapons.splice(i, 1);
                }
              }
              this.char.equipments.left_hand = equipment
              return
            }
            if (equipment.type == "two_hand") {
              for (let i = 0; i < this.char.inventory.two_hand_weapons.length; i++) {
                if (this.char.inventory.two_hand_weapons[i].name == equipment.name) {
                  this.char.inventory.two_hand_weapons.splice(i, 1);
                }
              }
              this.char.equipments.both_hands = equipment
              return
            }
            this.names.left_hand = equipment.name
            break;
          }
          case 'right_hand': {
            if (equipment.type == "one_hand") {
              for (let i = 0; i < this.char.inventory.one_hand_weapons.length; i++) {
                if (this.char.inventory.one_hand_weapons[i].name == equipment.name) {
                  this.char.inventory.one_hand_weapons.splice(i, 1);
                }
              }
              this.char.equipments.left_hand = equipment
              return
            }
            if (equipment.type == "two_hand") {
              for (let i = 0; i < this.char.inventory.two_hand_weapons.length; i++) {
                if (this.char.inventory.two_hand_weapons[i].name == equipment.name) {
                  this.char.inventory.two_hand_weapons.splice(i, 1);
                }
              }
              this.char.equipments.both_hands = equipment
              return
            }
            if (equipment.type == "shield") {
              for (let i = 0; i < this.char.inventory.shields.length; i++) {
                if (this.char.inventory.shields[i].name == equipment.name) {
                  this.char.inventory.shields.splice(i, 1);
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
                this.char.inventory.armors.splice(i, 1);
              }
            }
            this.char.equipments.head = equipment
            this.names.head = equipment.name
            break;
          }
          case 'torax': {
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors.splice(i, 1);
              }
            }
            this.char.equipments.torax = equipment
            this.names.torax = equipment.name
            break;
          }
          case 'legs': {
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors.splice(i, 1);
              }
            }
            this.char.equipments.legs = equipment
            this.names.legs = equipment.name
            break;
          }
          case 'feet': {
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors.splice(i, 1);
              }
            }
            this.char.equipments.feet = equipment
            this.names.feet = equipment.name
            break;
          }
          case 'arms': {
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors.splice(i, 1);
              }
            }
            this.char.equipments.arms = equipment
            this.names.arms = equipment.name
            break;
          }
          case 'hands': {
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors.splice(i, 1);
              }
            }
            this.char.equipments.hands = equipment
            this.names.hands = equipment.name
            break;
          }
        }
      }
    })
  }

  changeEquipment(type: string) {
    this.profileModal = this.modalCtrl.create(ModalEquipments, { type: type, char: this.char })
    this.profileModal.present();
    this.profileModal.onDidDismiss(equipment => {
      if (equipment != undefined) {
        switch (type) {
          case 'left_hand': {
            if (equipment.type == "one_hand") {
              for (let i = 0; i < this.char.inventory.one_hand_weapons.length; i++) {
                if (this.char.inventory.one_hand_weapons[i].name == equipment.name) {
                  this.char.inventory.one_hand_weapons.splice(i, 1);
                }
              }
              this.char.inventory.one_hand_weapons.push(this.char.equipments.left_hand)
              this.char.equipments.left_hand = equipment
              return
            }
            if (equipment.type == "two_hand") {
              for (let i = 0; i < this.char.inventory.two_hand_weapons.length; i++) {
                if (this.char.inventory.two_hand_weapons[i].name == equipment.name) {
                  this.char.inventory.two_hand_weapons.splice(i, 1);
                }
              }
              this.char.inventory.two_hand_weapons.push(this.char.equipments.both_hands)
              this.char.equipments.both_hands = equipment
              return
            }
          }
          case 'right_hand': {
            if (equipment.type == "one_hand") {
              for (let i = 0; i < this.char.inventory.one_hand_weapons.length; i++) {
                if (this.char.inventory.one_hand_weapons[i].name == equipment.name) {
                  this.char.inventory.one_hand_weapons.splice(i, 1);
                }
              }
              this.char.inventory.one_hand_weapons.push(this.char.equipments.right_hand)
              this.char.equipments.right_hand = equipment
              return
            }
            if (equipment.type == "two_hand") {
              for (let i = 0; i < this.char.inventory.two_hand_weapons.length; i++) {
                if (this.char.inventory.two_hand_weapons[i].name == equipment.name) {
                  this.char.inventory.two_hand_weapons.splice(i, 1);
                }
              }
              this.char.inventory.two_hand_weapons.push(this.char.equipments.both_hands)
              this.char.equipments.both_hands = equipment
              return
            }
            if (equipment.type == "shield") {
              for (let i = 0; i < this.char.inventory.shields.length; i++) {
                if (this.char.inventory.shields[i].name == equipment.name) {
                  this.char.inventory.shields.splice(i, 1);
                }
              }
              this.char.inventory.shields.push(this.char.equipments.shield)
              this.char.equipments.shield = equipment
              return
            }
          }
          case 'head': {
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors.splice(i, 1);
              }
            }
            this.char.inventory.armors.push(this.char.equipments.head)
            this.char.equipments.head = equipment
            return
          }
          case 'torax': {
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors.splice(i, 1);
              }
            }
            this.char.inventory.armors.push(this.char.equipments.torax)
            this.char.equipments.torax = equipment
            return
          }
          case 'legs': {
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors.splice(i, 1);
              }
            }
            this.char.inventory.armors.push(this.char.equipments.legs)
            this.char.equipments.legs = equipment
            return
          }
          case 'feet': {
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors.splice(i, 1);
              }
            }
            this.char.inventory.armors.push(this.char.equipments.feet)
            this.char.equipments.feet = equipment
            return
          }
          case 'arms': {
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors.splice(i, 1);
              }
            }
            this.char.inventory.armors.push(this.char.equipments.arms)
            this.char.equipments.arms = equipment
            return
          }
          case 'hands': {
            for (let i = 0; i < this.char.inventory.armors.length; i++) {
              if (this.char.inventory.armors[i].name == equipment.name) {
                this.char.inventory.armors.splice(i, 1);
              }
            }
            this.char.inventory.armors.push(this.char.equipments.hands)
            this.char.equipments.hands = equipment
            return
          }
        }
      }
    })
  }

  removeEquipment(type: string) {
    switch (type) {
      case 'left_hand': {
        if (this.char.equipments.left_hand != new OneHandWeapon) {
          this.char.inventory.one_hand_weapons.push(this.char.equipments.left_hand)
          this.char.equipments.left_hand = new OneHandWeapon
        } else {
          this.char.inventory.two_hand_weapons.push(this.char.equipments.both_hands)
          this.char.equipments.both_hands = new TwoHandWeapon
        }
        return
      }
      case 'right_hand': {
        if (this.char.equipments.left_hand != new OneHandWeapon) {
          switch (this.char.equipments.right_hand.type) {
            case "one_hand": {
              this.char.inventory.one_hand_weapons.push(this.char.equipments.right_hand)
              this.char.equipments.right_hand = new OneHandWeapon
              return
            }
            case "shield": {
              this.char.inventory.shields.push(this.char.equipments.shield)
              this.char.equipments.shield = new Shield
              return
            }
          }
        } else {
          this.char.inventory.two_hand_weapons.push(this.char.equipments.both_hands)
          this.char.equipments.both_hands = new TwoHandWeapon
        }
        break;
      }
      case 'head': {
        this.char.inventory.armors.push(this.char.equipments.head)
        this.char.equipments.head = new Armor
        break;
      }
      case 'torax': {
        this.char.inventory.armors.push(this.char.equipments.torax)
        this.char.equipments.torax = new Armor
        break;
      }
      case 'legs': {
        this.char.inventory.armors.push(this.char.equipments.legs)
        this.char.equipments.legs = new Armor
        break;
      }
      case 'feet': {
        this.char.inventory.armors.push(this.char.equipments.feet)
        this.char.equipments.feet = new Armor
        break;
      }
      case 'arms': {
        this.char.inventory.armors.push(this.char.equipments.arms)
        this.char.equipments.arms = new Armor
        break;
      }
      case 'hands': {
        this.char.inventory.armors.push(this.char.equipments.hands)
        this.char.equipments.hands = new Armor
        break;
      }
    }
  }
}