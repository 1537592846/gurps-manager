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
      this.equipments.push([{ label: "Both Hands", name: "Greatsword" }]);
    } else {
      if (this.char.equipments.left_hand != null) {
        this.equipments.push([{ label: "Left Hand", name: "Longsword" }]);
      }
      if (this.char.equipments.shield != null) {
        this.equipments.push({ label: "Shield", name: "Shield of shielding" });
      } else {
        this.equipments.push([{ label: "Right Hand", name: "Silver Dagger" }]);
      }
    }
  }
}
