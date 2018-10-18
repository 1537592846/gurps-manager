import { ViewController, NavParams } from 'ionic-angular'
import { Component } from '@angular/core'
import { DataProvider } from '../../providers/data/data'
import { Character } from '../../../models/Character';
import { OneHandWeapon, TwoHandWeapon, Shield, Armor } from '../../../models/Item';
import { Constants } from '../../../models/Constants';
import { isNumber } from 'ionic-angular/umd/util/util';

@Component({
  selector: 'modal-buy-item.html',
  templateUrl: 'modal-buy-item.html'
})
export class ModalBuyItems {
  char: Character
  oneHands: OneHandWeapon[] = []
  twoHands: TwoHandWeapon[] = []
  shields: Shield[] = []
  heads: Armor[] = []
  torax: Armor[] = []
  arms: Armor[] = []
  hands: Armor[] = []
  legs: Armor[] = []
  feets: Armor[] = []
  strenght: number

  constructor(public viewCtrl: ViewController, public params: NavParams, public dataProvider: DataProvider) {
    this.strenght = this.params.get("strenght")
  }

  Balance(weapon: any) {
    let weaponFormula = JSON.parse(weapon.formula)
    var bap: string = "Balance:"
    if (weaponFormula.balance_attack != undefined) {
      var base = Constants.WeaponBalanceAttack[this.strenght - 1]
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
      bap+=" "+weaponType
    } else {
      bap += "-"
    }
    return bap
  }

  Piercing(weapon: any) {
    let weaponFormula = JSON.parse(weapon.formula)
    var bap: string = "Piercing:"
    if (weaponFormula.piercing_attack != undefined) {
      var base = Constants.WeaponBalanceAttack[this.strenght - 1]
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
      bap+=" "+weaponType
    } else {
      bap += "-"
    }
    return bap
  }

  Resistance(shield:Shield){
    let shieldFormula = JSON.parse(shield.formula)
    return "Resistence:"+shieldFormula.shield_resistence
  }

  updateOneHands() {
    if (this.oneHands == null || this.oneHands.length == 0) {
      this.dataProvider.getOneHandWeapons().then(res => {
        let data = res as any[]
        for (let i = 0; i < data.length; i++) {
          var oneHand = new OneHandWeapon
          oneHand.id = data[i].Id
          oneHand.name = data[i].Name
          oneHand.nt = data[i].NT
          oneHand.description = data[i].Description
          oneHand.cost = data[i].Cost
          oneHand.weight = data[i].Weight
          oneHand.quantity = 1
          oneHand.formula = data[i].Formula
          oneHand.type = data[i].Type
          this.oneHands.push(oneHand)
        }
      })
        .catch(error => { console.log(error) });
    }
  }

  updateTwoHands() {
    if (this.twoHands == null || this.twoHands.length == 0) {
      this.dataProvider.getTwoHandWeapons().then(res => {
        let data = res as any[]
        for (let i = 0; i < data.length; i++) {
          var twoHand = new TwoHandWeapon
          twoHand.id = data[i].Id
          twoHand.name = data[i].Name
          twoHand.nt = data[i].NT
          twoHand.description = data[i].Description
          twoHand.cost = data[i].Cost
          twoHand.weight = data[i].Weight
          twoHand.quantity = 1
          twoHand.formula = data[i].Formula
          twoHand.type = data[i].Type
          this.twoHands.push(twoHand)
        }
      })
        .catch(error => { console.log(error) });
    }
  }

  updateShields() {
    if (this.shields == null || this.shields.length == 0) {
      this.dataProvider.getShields().then(res => {
        let data = res as any[]
        for (let i = 0; i < data.length; i++) {
          var shield = new Shield
          shield.id = data[i].Id
          shield.name = data[i].Name
          shield.nt = data[i].NT
          shield.description = data[i].Description
          shield.cost = data[i].Cost
          shield.weight = data[i].Weight
          shield.quantity = 1
          shield.max_life_points = JSON.parse(data[i].Formula).life_points
          shield.current_life_points = shield.max_life_points
          shield.formula = data[i].Formula
          shield.type = data[i].Type
          this.shields.push(shield)
        }
      })
        .catch(error => { console.log(error) });
    }
  }

  returnData(item: any) {
    this.viewCtrl.dismiss(item)
  }
}