import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ViewController, NavParams } from "ionic-angular";
import { DataProvider } from "../../providers/data/data";
import { Component } from "@angular/core";
import { Character } from "../../../models/Character";
import { Functions } from "../../../models/Functions";

@Component({
  selector: 'modal-test.html',
  templateUrl: 'modal-test.html'
})
export class ModalTest {
  char: Character
  testName: string
  testModValue: number

  testBasicValue: number
  testBasicValueName: string
  testEndResult: number
  testEquipmentValue: number

  testLeftHandBasicValue: number
  testLeftHandEquipmentValue: number
  testLeftHandEndResult: number

  testRightHandBasicValue: number
  testRightHandEquipmentValue: number
  testRightHandEndResult: number

  constructor(public viewCtrl: ViewController, public params: NavParams, public dataProvider: DataProvider) {
    this.testName = params.data.test
    this.char = params.data.char
    this.defineTestValues()
  }

  defineTestValues() {
    this.testBasicValueName = this.testName.toUpperCase()[0] + this.testName.substr(1)
    this.testModValue = 0
    switch (this.testName) {
      case "attack":
        {
          break
        }
      case "dodge":
        {
          break
        }
      case "parry":
        {
          this.testBasicValueName = this.testName.toUpperCase()[0] + this.testName.substr(1)
          var leftHand: any
          var rightHand: any
          if (this.char.equipments.both_hands.formula == undefined || this.char.equipments.both_hands.formula === "") {
            try {
              leftHand = JSON.parse(this.char.equipments.left_hand.formula)
              this.testLeftHandBasicValue = 3 + Number.parseInt("" + this.char.returnWeaponSkillLevel(this.char.equipments.left_hand) / 2)
            } catch (e) { }
            try {
              rightHand = JSON.parse(this.char.equipments.right_hand.formula)
              this.testRightHandBasicValue = 3 + Number.parseInt("" + this.char.returnWeaponSkillLevel(this.char.equipments.right_hand) / 2)
            } catch (e) { }
          } else {
            try {
              leftHand = JSON.parse(this.char.equipments.both_hands.formula)
              this.testLeftHandBasicValue = 3 + Number.parseInt("" + this.char.returnWeaponSkillLevel(this.char.equipments.both_hands) / 2)
            } catch (e) { }
            try {
              rightHand = JSON.parse(this.char.equipments.both_hands.formula)
              this.testRightHandBasicValue = 3 + Number.parseInt("" + this.char.returnWeaponSkillLevel(this.char.equipments.both_hands) / 2)
            } catch (e) { }
          }
          if (leftHand == undefined)
            this.testLeftHandEquipmentValue = -1
          else
            if (leftHand.parry == "No")
              this.testLeftHandBasicValue = -1
            else
              this.testLeftHandEquipmentValue = Number.parseInt(leftHand.parry)
          if (rightHand == undefined)
            this.testRightHandEquipmentValue = -1
          else
            if (rightHand.parry == "No")
              this.testRightHandBasicValue = -1
            else
              this.testRightHandEquipmentValue = Number.parseInt(rightHand.parry)
          break
        }
      case "block":
        {
          break
        }
      default:
        {
          this.testBasicValue = this.char[this.testName]
          this.testEquipmentValue = Functions.getEquipmentStatus(this.char.equipments, this.testName)
          break
        }
    }
  }

  addModValue() {
    this.testModValue++
  }

  removeModValue() {
    this.testModValue--
  }
}