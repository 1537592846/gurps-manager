import { ViewController, NavParams } from 'ionic-angular'
import { Component } from '@angular/core'
import { DataProvider } from '../../providers/data/data'
import { OneHandWeapon, TwoHandWeapon, Shield, Armor, Other } from '../../../models/Item';
import { Constants } from '../../../models/Functions';
import { Consumable } from '../../../models/Item';

@Component({
  selector: 'modal-buy-item.html',
  templateUrl: 'modal-buy-item.html'
})
export class ModalBuyItems {
  oneHands: OneHandWeapon[] = []
  twoHands: TwoHandWeapon[] = []
  shields: Shield[] = []
  heads: Armor[] = []
  torax: Armor[] = []
  arms: Armor[] = []
  hands: Armor[] = []
  legs: Armor[] = []
  feets: Armor[] = []
  consumables: Consumable[] = []
  others: Other[] = []
  strength: number
  resources: number

  constructor(public viewCtrl: ViewController, public params: NavParams, public dataProvider: DataProvider) {
    this.strength = this.params.get("strength")
    this.resources = this.params.get("resources")
  }

  Balance(weapon: any) {
    let weaponFormula = JSON.parse(weapon.formula)
    var bap: string = "Balance:"
    if (weaponFormula.balance_attack != "No") {
      var base = Constants.WeaponBalanceAttack[this.strength - 1]
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
      console.log(weapon.name)
      console.log(baseSignal)
      console.log(weaponSignal)
      if (baseSignal != undefined) {
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
    if (weaponFormula.piercing_attack != "No") {
      var base = Constants.WeaponBalanceAttack[this.strength - 1]
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
      if (baseSignal != undefined) {
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

  updateOneHands() {
    if (this.oneHands == undefined || this.oneHands.length == 0) {
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
        .catch(error => { alert(error) });
    }
  }

  updateTwoHands() {
    if (this.twoHands == undefined || this.twoHands.length == 0) {
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
        .catch(error => { alert(error) });
    }
  }

  updateShields() {
    if (this.shields == undefined || this.shields.length == 0) {
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
          shield.resistence = JSON.parse(data[i].Formula).resistence
          shield.max_life_points = JSON.parse(data[i].Formula).life_points
          shield.current_life_points = shield.max_life_points
          shield.formula = data[i].Formula
          shield.type = data[i].Type
          this.shields.push(shield)
        }
      })
        .catch(error => { alert(error) });
    }
  }

  updateHeads() {
    if (this.heads == undefined || this.heads.length == 0) {
      this.dataProvider.getHeads().then(res => {
        let data = res as any[]
        for (let i = 0; i < data.length; i++) {
          var head = new Armor
          head.id = data[i].Id
          head.name = data[i].Name
          head.nt = data[i].NT
          head.description = data[i].Description
          head.cost = data[i].Cost
          head.weight = data[i].Weight
          head.quantity = 1
          head.resistence = JSON.parse(data[i].Formula).resistence
          head.formula = data[i].Formula
          head.type = data[i].Type
          this.heads.push(head)
        }
      })
        .catch(error => { alert(error) });
    }
  }

  updateTorax() {
    if (this.torax == undefined || this.torax.length == 0) {
      this.dataProvider.getTorax().then(res => {
        let data = res as any[]
        for (let i = 0; i < data.length; i++) {
          var torax = new Armor
          torax.id = data[i].Id
          torax.name = data[i].Name
          torax.nt = data[i].NT
          torax.description = data[i].Description
          torax.cost = data[i].Cost
          torax.weight = data[i].Weight
          torax.quantity = 1
          torax.resistence = JSON.parse(data[i].Formula).resistence
          torax.formula = data[i].Formula
          torax.type = data[i].Type
          this.torax.push(torax)
        }
      })
        .catch(error => { alert(error) });
    }
  }

  updateArms() {
    if (this.arms == undefined || this.arms.length == 0) {
      this.dataProvider.getArms().then(res => {
        let data = res as any[]
        for (let i = 0; i < data.length; i++) {
          var arm = new Armor
          arm.id = data[i].Id
          arm.name = data[i].Name
          arm.nt = data[i].NT
          arm.description = data[i].Description
          arm.cost = data[i].Cost
          arm.weight = data[i].Weight
          arm.quantity = 1
          arm.resistence = JSON.parse(data[i].Formula).resistence
          arm.formula = data[i].Formula
          arm.type = data[i].Type
          this.arms.push(arm)
        }
      })
        .catch(error => { alert(error) });
    }
  }

  updateHands() {
    if (this.hands == undefined || this.hands.length == 0) {
      this.dataProvider.getHands().then(res => {
        let data = res as any[]
        for (let i = 0; i < data.length; i++) {
          var hand = new Armor
          hand.id = data[i].Id
          hand.name = data[i].Name
          hand.nt = data[i].NT
          hand.description = data[i].Description
          hand.cost = data[i].Cost
          hand.weight = data[i].Weight
          hand.quantity = 1
          hand.resistence = JSON.parse(data[i].Formula).resistence
          hand.formula = data[i].Formula
          hand.type = data[i].Type
          this.hands.push(hand)
        }
      })
        .catch(error => { alert(error) });
    }
  }

  updateLegs() {
    if (this.legs == undefined || this.legs.length == 0) {
      this.dataProvider.getLegs().then(res => {
        let data = res as any[]
        for (let i = 0; i < data.length; i++) {
          var leg = new Armor
          leg.id = data[i].Id
          leg.name = data[i].Name
          leg.nt = data[i].NT
          leg.description = data[i].Description
          leg.cost = data[i].Cost
          leg.weight = data[i].Weight
          leg.quantity = 1
          leg.resistence = JSON.parse(data[i].Formula).resistence
          leg.formula = data[i].Formula
          leg.type = data[i].Type
          this.legs.push(leg)
        }
      })
        .catch(error => { alert(error) });
    }
  }

  updateFeets() {
    if (this.feets == undefined || this.feets.length == 0) {
      this.dataProvider.getFeets().then(res => {
        let data = res as any[]
        for (let i = 0; i < data.length; i++) {
          var feet = new Armor
          feet.id = data[i].Id
          feet.name = data[i].Name
          feet.nt = data[i].NT
          feet.description = data[i].Description
          feet.cost = data[i].Cost
          feet.weight = data[i].Weight
          feet.quantity = 1
          feet.resistence = JSON.parse(data[i].Formula).resistence
          feet.formula = data[i].Formula
          feet.type = data[i].Type
          this.feets.push(feet)
        }
      })
        .catch(error => { alert(error) });
    }
  }

  updateConsumables() {
    if (this.consumables == undefined || this.consumables.length == 0) {
      this.dataProvider.getConsumables().then(res => {
        let data = res as any[]
        for (let i = 0; i < data.length; i++) {
          var consumable = new Consumable
          consumable.id = data[i].Id
          consumable.name = data[i].Name
          consumable.nt = data[i].NT
          consumable.description = data[i].Description
          consumable.cost = data[i].Cost
          consumable.weight = data[i].Weight
          consumable.quantity = 1
          consumable.formula = data[i].Formula
          consumable.type = data[i].Type
          this.consumables.push(consumable)
        }
      })
        .catch(error => { alert(error) });
    }
  }

  updateOthers() {
    if (this.others == undefined || this.others.length == 0) {
      this.dataProvider.getOthers().then(res => {
        let data = res as any[]
        for (let i = 0; i < data.length; i++) {
          var other = new Other
          other.id = data[i].Id
          other.name = data[i].Name
          other.nt = data[i].NT
          other.description = data[i].Description
          other.cost = data[i].Cost
          other.weight = data[i].Weight
          other.quantity = 1
          other.formula = data[i].Formula
          other.type = data[i].Type
          this.others.push(other)
        }
      })
        .catch(error => { alert(error) });
    }
  }

  returnData(item: any) {
    this.viewCtrl.dismiss(item)
  }
}