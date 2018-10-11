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

  char: Character;
  equipments: any[];
  profileModal: any

  constructor(public navParams: NavParams, public modalCtrl: ModalController) {
    //Getting data
    this.char = navParams.data

  }
  ionViewWillEnter() {
    this.getEquipments();
  }
  getEquipments() {
    this.equipments = [];
    if (this.char.equipments.both_hands != null) {
      this.equipments.push({ label: "Both Hands", name: this.char.equipments.both_hands.name });
    } else {
      if (this.char.equipments.left_hand != null) {
        this.equipments.push({ label: "Left Hand", name: this.char.equipments.left_hand.name });
      }
      if (this.char.equipments.shield != null) {
        this.equipments.push({ label: "Shield", name: "Shield of shielding" });
      } else {
        if (this.char.equipments.right_hand != null) {
          this.equipments.push({ label: "Right Hand", name: this.char.equipments.right_hand.name });
        }
      }
    }
  }
  getEquipmentName(type: string): string {
    switch (type) {
      case 'left_hand': {
        if (this.char.equipments.both_hands.name != undefined) return this.char.equipments.both_hands.name
        if (this.char.equipments.left_hand.name != undefined) return this.char.equipments.left_hand.name
      }
      case 'right_hand': {
        if (this.char.equipments.both_hands.name != undefined) return this.char.equipments.both_hands.name
        if (this.char.equipments.right_hand.name != undefined) return this.char.equipments.right_hand.name
        if (this.char.equipments.shield.name != undefined) return this.char.equipments.shield.name
      }
      case 'head': if (this.char.equipments.head.name != undefined) return this.char.equipments.head.name
      case 'torax': if (this.char.equipments.torax.name != undefined) return this.char.equipments.torax.name
      case 'legs': if (this.char.equipments.legs.name != undefined) return this.char.equipments.legs.name
      case 'feet': if (this.char.equipments.feet.name != undefined) return this.char.equipments.feet.name
      case 'arms': if (this.char.equipments.arms.name != undefined) return this.char.equipments.arms.name
      case 'hands': if (this.char.equipments.hands.name != undefined) return this.char.equipments.hands.name
    }
    return "Empty"
  }

  equipEquipment(type: string) {
    this.profileModal = this.modalCtrl.create(ModalEquipments, { type: type })
    this.profileModal.present();
    this.profileModal.onDidDismiss(equipment => {
      if (equipment != null) {
        switch (type) {
          case 'left_hand': {
            if (equipment.type == "one_hand") {
              this.char.equipments.left_hand = equipment
              return
            }
            if (equipment.type == "two_hand") {
              this.char.equipments.both_hands = equipment
              return
            }
            if (equipment.type == "shield") {
              this.char.equipments.shield = equipment
            }
          }
          case 'right_hand': {
            if (equipment.type == "one_hand") {
              this.char.equipments.right_hand = equipment
              return
            }
            if (equipment.type == "two_hand") {
              this.char.equipments.both_hands = equipment
              return
            }
            if (equipment.type == "shield") {
              this.char.equipments.shield = equipment
            }
          }
          case 'head': this.char.equipments.head = equipment
          case 'torax': this.char.equipments.torax = equipment
          case 'legs': this.char.equipments.legs = equipment
          case 'feet': this.char.equipments.feet = equipment
          case 'arms': this.char.equipments.arms = equipment
          case 'hands': this.char.equipments.hands = equipment
        }
      }
    })
  }

  changeEquipment(type: string) {
    this.profileModal = this.modalCtrl.create(ModalEquipments, { type: type })
    this.profileModal.present();
    this.profileModal.onDidDismiss(equipment => {
      if (equipment != null) {
        switch (type) {
          case 'left_hand': {
            if (equipment.type == "one_hand") {
              this.char.equipments.left_hand = equipment
              for (var i = 0; i < this.char.inventory.one_hand_weapons.length; i++) {
                if (this.char.inventory.one_hand_weapons[i].name == equipment.name) {
                  this.char.inventory.one_hand_weapons.splice(i, 1);
                }
              }
              return
            }
            if (equipment.type == "two_hand") {
              this.char.equipments.both_hands = equipment
              for (var i = 0; i < this.char.inventory.two_hand_weapons.length; i++) {
                if (this.char.inventory.two_hand_weapons[i].name == equipment.name) {
                  this.char.inventory.two_hand_weapons.splice(i, 1);
                }
              }
              return
            }
            if (equipment.type == "shield") {
              this.char.equipments.shield = equipment
              for (var i = 0; i < this.char.inventory.shields.length; i++) {
                if (this.char.inventory.shields[i].name == equipment.name) {
                  this.char.inventory.shields.splice(i, 1);
                }
              }
            }
          }
          case 'right_hand': {
            if (equipment.type == "one_hand") {
              this.char.equipments.right_hand = equipment
              for (var i = 0; i < this.char.inventory.one_hand_weapons.length; i++) {
                if (this.char.inventory.one_hand_weapons[i].name == equipment.name) {
                  this.char.inventory.one_hand_weapons.splice(i, 1);
                }
              }
              return
            }
            if (equipment.type == "two_hand") {
              this.char.equipments.both_hands = equipment
              for (var i = 0; i < this.char.inventory.two_hand_weapons.length; i++) {
                if (this.char.inventory.two_hand_weapons[i].name == equipment.name) {
                  this.char.inventory.two_hand_weapons.splice(i, 1);
                }
              }
              return
            }
            if (equipment.type == "shield") {
              this.char.equipments.shield = equipment
              for (var i = 0; i < this.char.inventory.shields.length; i++) {
                if (this.char.inventory.shields[i].name == equipment.name) {
                  this.char.inventory.shields.splice(i, 1);
                }
              }
            }
          }
          case 'head': this.char.equipments.head = equipment
          case 'torax': this.char.equipments.torax = equipment
          case 'legs': this.char.equipments.legs = equipment
          case 'feet': this.char.equipments.feet = equipment
          case 'arms': this.char.equipments.arms = equipment
          case 'hands': this.char.equipments.hands = equipment
        }
      }
    })
  }

  removeEquipment(type: string) {
    switch (type) {
      case 'left_hand': {
        if (this.char.equipments.left_hand.name != undefined) {
          this.char.inventory.one_hand_weapons.push(this.char.equipments.left_hand)
          this.char.equipments.left_hand = new OneHandWeapon()
        }
        if (this.char.equipments.both_hands.name != undefined) {
          this.char.inventory.two_hand_weapons.push(this.char.equipments.both_hands)
          this.char.equipments.both_hands = new TwoHandWeapon()
        }
      }
      case 'right_hand': {
        if (this.char.equipments.right_hand.name != undefined) {
          this.char.inventory.one_hand_weapons.push(this.char.equipments.right_hand)
          this.char.equipments.right_hand = new OneHandWeapon()
        }
        if (this.char.equipments.both_hands.name != undefined) {
          this.char.inventory.two_hand_weapons.push(this.char.equipments.both_hands)
          this.char.equipments.both_hands = new TwoHandWeapon()
        }
        if (this.char.equipments.shield.name != undefined) {
          this.char.inventory.shields.push(this.char.equipments.shield)
          this.char.equipments.shield = new Shield()
        }
      }
      case 'head': {
        this.char.inventory.armors.push(this.char.equipments.head)
        this.char.equipments.head = new Armor()
      }
      case 'torax': {
        this.char.inventory.armors.push(this.char.equipments.torax)
        this.char.equipments.head = new Armor()
      }
      case 'legs': {
        this.char.inventory.armors.push(this.char.equipments.legs)
        this.char.equipments.head = new Armor()
      }
      case 'feet': {
        this.char.inventory.armors.push(this.char.equipments.feet)
        this.char.equipments.head = new Armor()
      }
      case 'arms': {
        this.char.inventory.armors.push(this.char.equipments.arms)
        this.char.equipments.head = new Armor()
      }
      case 'hands': {
        this.char.inventory.armors.push(this.char.equipments.hands)
        this.char.equipments.head = new Armor()
      }
    }
  }
}