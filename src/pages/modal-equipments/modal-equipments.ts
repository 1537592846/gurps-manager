import { Component } from "@angular/core";
import { OneHandWeapon, TwoHandWeapon, Shield, Armor } from "../../../models/Item";
import { Equipment } from "../../../models/Equipment";
import { ViewController, NavParams } from "ionic-angular";
import { DataProvider } from "../../providers/data/data";

@Component({
  selector: 'modal-equipments.html',
  templateUrl: 'modal-equipments.html'
})
export class ModalEquipments {
  one_hand_weapons: OneHandWeapon[] = []
  two_hand_weapons: TwoHandWeapon[] = []
  shields: Shield[] = []
  heads: Armor[] = []
  torax: Armor[] = []
  legs: Armor[] = []
  foot: Armor[] = []
  arms: Armor[] = []
  hands: Armor[] = []
  char_equipment: Equipment = new Equipment()
  equipmentType: string

  constructor(public viewCtrl: ViewController, public params: NavParams, public dataProvider: DataProvider) {
    this.equipmentType = params.data
    this.updateEquipments()
  }

  updateEquipments() {
    switch (this.equipmentType) {
      case"left_hand":
      case"right_hand":{
        if (this.one_hand_weapons == null || this.one_hand_weapons.length == 0) {
          this.dataProvider.getOneHandWeapons().then(res => {
            let data = res as OneHandWeapon[]
            for (let i = 0; i < data.length; i++) {
              var oneHandWeapon = new OneHandWeapon
              oneHandWeapon.id = data[i].id
              oneHandWeapon.name = data[i].name
              oneHandWeapon.nt = data[i].nt
              oneHandWeapon.description = data[i].description
              oneHandWeapon.cost = data[i].cost
              oneHandWeapon.weight = data[i].weight
              oneHandWeapon.quantity = data[i].quantity
              oneHandWeapon.formula = data[i].formula
              this.one_hand_weapons.push(oneHandWeapon)
            }
          })
            .catch(error => { console.log(error) });
        }
        if (this.two_hand_weapons == null || this.two_hand_weapons.length == 0) {
          this.dataProvider.getTwoHandWeapons().then(res => {
            let data = res as TwoHandWeapon[]
            for (let i = 0; i < data.length; i++) {
              var twoHandWeapon = new TwoHandWeapon
              twoHandWeapon.id = data[i].id
              twoHandWeapon.name = data[i].name
              twoHandWeapon.nt = data[i].nt
              twoHandWeapon.description = data[i].description
              twoHandWeapon.cost = data[i].cost
              twoHandWeapon.weight = data[i].weight
              twoHandWeapon.quantity = data[i].quantity
              twoHandWeapon.formula = data[i].formula
              this.two_hand_weapons.push(twoHandWeapon)
            }
          })
            .catch(error => { console.log(error) });
        }
        if (this.shields == null || this.shields.length == 0) {
          this.dataProvider.getShields().then(res => {
            let data = res as Shield[]
            for (let i = 0; i < data.length; i++) {
              var shield = new Shield
              shield.id = data[i].id
              shield.name = data[i].name
              shield.nt = data[i].nt
              shield.description = data[i].description
              shield.cost = data[i].cost
              shield.weight = data[i].weight
              shield.quantity = data[i].quantity
              shield.formula = data[i].formula
              shield.max_life_points = data[i].max_life_points
              shield.current_life_points = data[i].current_life_points
              this.shields.push(shield)
            }
          })
            .catch(error => { console.log(error) });
        }
      }
      case "head": {
        if (this.heads == null || this.heads.length == 0) {
          this.dataProvider.getHeads().then(res => {
            let data = res as Armor[]
            for (let i = 0; i < data.length; i++) {
              var head = new Armor
              head.id = data[i].id
              head.name = data[i].name
              head.nt = data[i].nt
              head.description = data[i].description
              head.cost = data[i].cost
              head.weight = data[i].weight
              head.quantity = data[i].quantity
              head.formula = data[i].formula
              this.heads.push(head)
            }
          })
            .catch(error => { console.log(error) });
        }
      }
      case "torax": {
        if (this.heads == null || this.heads.length == 0) {
          this.dataProvider.getTorax().then(res => {
            let data = res as Armor[]
            for (let i = 0; i < data.length; i++) {
              var head = new Armor
              head.id = data[i].id
              head.name = data[i].name
              head.nt = data[i].nt
              head.description = data[i].description
              head.cost = data[i].cost
              head.weight = data[i].weight
              head.quantity = data[i].quantity
              head.formula = data[i].formula
              this.heads.push(head)
            }
          })
            .catch(error => { console.log(error) });
        }
      }
      case "legs": {
        if (this.legs == null || this.legs.length == 0) {
          this.dataProvider.getLegs().then(res => {
            let data = res as Armor[]
            for (let i = 0; i < data.length; i++) {
              var leg = new Armor
              leg.id = data[i].id
              leg.name = data[i].name
              leg.nt = data[i].nt
              leg.description = data[i].description
              leg.cost = data[i].cost
              leg.weight = data[i].weight
              leg.quantity = data[i].quantity
              leg.formula = data[i].formula
              this.legs.push(leg)
            }
          })
            .catch(error => { console.log(error) });
        }
      }
      case "feet": {
        if (this.foot == null || this.foot.length == 0) {
          this.dataProvider.getFeets().then(res => {
            let data = res as Armor[]
            for (let i = 0; i < data.length; i++) {
              var feet = new Armor
              feet.id = data[i].id
              feet.name = data[i].name
              feet.nt = data[i].nt
              feet.description = data[i].description
              feet.cost = data[i].cost
              feet.weight = data[i].weight
              feet.quantity = data[i].quantity
              feet.formula = data[i].formula
              this.foot.push(feet)
            }
          })
            .catch(error => { console.log(error) });
        }
      }
      case "arms": {
        if (this.arms == null || this.arms.length == 0) {
          this.dataProvider.getArms().then(res => {
            let data = res as Armor[]
            for (let i = 0; i < data.length; i++) {
              var arm = new Armor
              arm.id = data[i].id
              arm.name = data[i].name
              arm.nt = data[i].nt
              arm.description = data[i].description
              arm.cost = data[i].cost
              arm.weight = data[i].weight
              arm.quantity = data[i].quantity
              arm.formula = data[i].formula
              this.arms.push(arm)
            }
          })
            .catch(error => { console.log(error) });
        }
      }
      case "hands": {
        if (this.hands == null || this.hands.length == 0) {
          this.dataProvider.getHands().then(res => {
            let data = res as Armor[]
            for (let i = 0; i < data.length; i++) {
              var hand = new Armor
              hand.id = data[i].id
              hand.name = data[i].name
              hand.nt = data[i].nt
              hand.description = data[i].description
              hand.cost = data[i].cost
              hand.weight = data[i].weight
              hand.quantity = data[i].quantity
              hand.formula = data[i].formula
              this.hands.push(hand)
            }
          })
            .catch(error => { console.log(error) });
        }
      }
    }
  }

  returnData(equipment: any) {
    this.viewCtrl.dismiss(equipment)
  }
}