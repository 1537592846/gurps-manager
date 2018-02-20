import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-equipments',
  templateUrl: 'equipments.html'
})
export class EquipmentsPage {

  char: Character;
  equipments: any[];

  constructor(public navParams: NavParams) {
    //Getting data
    this.char = navParams.get('charParam');
    this.getEquipments();
  }
  getEquipments() {
    this.equipments = [];
    if (this.char.equipments.both_hands != null) {
      console.log("both hands")
      this.equipments.push({ label: "Both Hands", name: this.char.equipments.both_hands.name });
    } else {
      if (this.char.equipments.left_hand != null) {
        console.log("left hands")
        this.equipments.push({ label: "Left Hand", name: this.char.equipments.left_hand.name });
      }
      if (this.char.equipments.shield != null) {
        console.log("shield")
        this.equipments.push({ label: "Shield", name: "Shield of shielding" });
      } else {
        console.log("right hands")
        this.equipments.push({ label: "Right Hand", name: this.char.equipments.right_hand.name });
      }
    }
  }
}
