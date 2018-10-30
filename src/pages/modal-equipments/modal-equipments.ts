import { Component } from "@angular/core";
import { OneHandWeapon, TwoHandWeapon, Shield, Armor } from "../../../models/Item";
import { Equipment } from "../../../models/Equipment";
import { ViewController, NavParams } from "ionic-angular";
import { DataProvider } from "../../providers/data/data";
import { Constants } from "../../../models/Constants";
import { Character } from "../../../models/Character";

@Component({
  selector: 'modal-equipments.html',
  templateUrl: 'modal-equipments.html'
})
export class ModalEquipments {
  listEquipments: any[] = []
  char: Character
  equipmentType: string = ""

  constructor(public viewCtrl: ViewController, public params: NavParams, public dataProvider: DataProvider) {
    this.equipmentType = params.data.type
    this.char = params.data.char
    this.updateEquipments()
  }

  Balance(weapon: any) {
    let weaponFormula = JSON.parse(weapon.formula)
    var bap: string = "Balance:"
    if (weaponFormula.balance_attack != undefined) {
      var base = Constants.WeaponBalanceAttack[this.char.strenght - 1]
      let weaponSignal = ""
      let weaponBonus = ""
      let weaponType = ""
      let baseDiceNumber = ""
      let baseSignal = ""
      let baseBonus = ""
      baseDiceNumber = base[0]
      baseSignal = base[2]
      baseBonus = base[3]
      if (weaponFormula.balance_attack[0] == "+" || weaponFormula.balance_attack[0] == "-") {
        weaponSignal = weaponFormula.balance_attack[0]
        weaponBonus = weaponFormula.balance_attack[1]
        weaponType = weaponFormula.balance_attack.split(weaponBonus)[1]
      } else {
        weaponType = weaponFormula.balance_attack
      }
      bap += baseDiceNumber + "d"
      let finalBonus = 0
      if (baseSignal != "") {
        if (baseSignal == "-") {
          finalBonus -= Number.parseInt(baseBonus)
        } else {
          finalBonus += Number.parseInt(baseBonus)
        }
      }
      if (weaponSignal != "") {
        if (weaponSignal == "-") {
          finalBonus -= Number.parseInt(weaponBonus)
        } else {
          finalBonus += Number.parseInt(weaponBonus)
        }
      }
      if (finalBonus != 0) {
        if (finalBonus < 0) {
          bap += "-" + finalBonus
        } else {
          bap += "+" + finalBonus
        }
      }
      bap += " " + weaponType
    } else {
      bap += "-"
    }
    return bap
  }

  Piercing(weapon: any) {
    let weaponFormula = JSON.parse(weapon.formula)
    var bap: string = "Piercing:"
    if (weaponFormula.piercing_attack != undefined) {
      var base = Constants.WeaponBalanceAttack[this.char.strenght - 1]
      let weaponSignal = ""
      let weaponBonus = ""
      let weaponType = ""
      let baseDiceNumber = ""
      let baseSignal = ""
      let baseBonus = ""
      baseDiceNumber = base[0]
      baseSignal = base[2]
      baseBonus = base[3]
      if (weaponFormula.piercing_attack[0] == "+" || weaponFormula.piercing_attack[0] == "-") {
        weaponSignal = weaponFormula.piercing_attack[0]
        weaponBonus = weaponFormula.piercing_attack[1]
        weaponType = weaponFormula.piercing_attack.split(weaponBonus)[1]
      } else {
        weaponType = weaponFormula.piercing_attack
      }
      bap += baseDiceNumber + "d"
      let finalBonus = 0
      if (baseSignal != "") {
        if (baseSignal == "-") {
          finalBonus -= Number.parseInt(baseBonus)
        } else {
          finalBonus += Number.parseInt(baseBonus)
        }
      }
      if (weaponSignal != "") {
        if (weaponSignal == "-") {
          finalBonus -= Number.parseInt(weaponBonus)
        } else {
          finalBonus += Number.parseInt(weaponBonus)
        }
      }
      if (finalBonus != 0) {
        if (finalBonus < 0) {
          bap += "-" + finalBonus
        } else {
          bap += "+" + finalBonus
        }
      }
      bap += " " + weaponType
    } else {
      bap += "-"
    }
    return bap
  }

  Resistence(armor: any) {
    let armorFormula = JSON.parse(armor.formula)
    return "Resistence:" + armorFormula.resistence
  }

  updateEquipments() {
    switch (this.equipmentType) {
      case "right_hand": {
        for (let i = 0; i < this.char.inventory.shields.length; i++) {
          this.listEquipments.push(this.char.inventory.shields[i])
        }
      }
      case "left_hand": {
        for (let i = 0; i < this.char.inventory.one_hand_weapons.length; i++) {
          this.listEquipments.push(this.char.inventory.one_hand_weapons[i])
        }
        for (let i = 0; i < this.char.inventory.two_hand_weapons.length; i++) {
          this.listEquipments.push(this.char.inventory.two_hand_weapons[i])
        }
        break
      }
      case "head": {
        for (let i = 0; i < this.char.inventory.armors.length; i++) {
          if (this.char.inventory.armors[i].type == "head") {
            this.listEquipments.push(this.char.inventory.armors[i])
          }
        }
        break
      }
      case "torax": {
        for (let i = 0; i < this.char.inventory.armors.length; i++) {
          if (this.char.inventory.armors[i].type == "torax") {
            this.listEquipments.push(this.char.inventory.armors[i])
          }
        }
        break
      }
      case "legs": {
        for (let i = 0; i < this.char.inventory.armors.length; i++) {
          if (this.char.inventory.armors[i].type == "legs") {
            this.listEquipments.push(this.char.inventory.armors[i])
          }
        }
        break
      }
      case "feet": {
        for (let i = 0; i < this.char.inventory.armors.length; i++) {
          if (this.char.inventory.armors[i].type == "feet") {
            this.listEquipments.push(this.char.inventory.armors[i])
          }
        }
        break
      }
      case "arms": {
        for (let i = 0; i < this.char.inventory.armors.length; i++) {
          if (this.char.inventory.armors[i].type == "arms") {
            this.listEquipments.push(this.char.inventory.armors[i])
          }
        }
        break
      }
      case "hands": {
        for (let i = 0; i < this.char.inventory.armors.length; i++) {
          if (this.char.inventory.armors[i].type == "hands") {
            this.listEquipments.push(this.char.inventory.armors[i])
          }
        }
        break
      }
    }
    console.log(this.char)
  }

  returnData(equipment: any) {
    this.viewCtrl.dismiss(equipment)
  }
}