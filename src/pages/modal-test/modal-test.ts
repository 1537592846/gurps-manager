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
  testBasicValue: number
  testLeftHandBasicValue:number
  testRightHandBasicValue:number
  testBasicValueName: string
  testModValue: number
  testEquipmentValue: number
  testEquipmentLeftHandValue: number
  testEquipmentRightHandValue: number
  testEndResult: number
  testEndResultLeftHand: number
  testEndResultRightHand: number

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
          this.testLeftHandBasicValue = 3
          this.testRightHandBasicValue = 3
          var leftHand: any
          var rightHand: any
          if (this.char.equipments.both_hands.formula == undefined || this.char.equipments.both_hands.formula === "") {
            try {
              leftHand = JSON.parse(this.char.equipments.left_hand.formula)
            } catch (e) { }
            try {
              rightHand = JSON.parse(this.char.equipments.right_hand.formula)
            } catch (e) { }
          } else {
            try {
              leftHand = JSON.parse(this.char.equipments.both_hands.formula)
            } catch (e) { }
            try {
              rightHand = JSON.parse(this.char.equipments.both_hands.formula)
            } catch (e) { }
          }
          if (leftHand == undefined)
            this.testEquipmentLeftHandValue = 0
          else
            if (leftHand.parry == "No")
              this.testLeftHandBasicValue = -1
            else
              if (Number.parseInt(leftHand.parry) != undefined)
                this.testEquipmentLeftHandValue = Number.parseInt(leftHand.parry)

          if (rightHand == undefined) {
            this.testEquipmentRightHandValue = 0
          } else {
            var statusRightHand = reg.exec(rightHand.parry)
            this.testEquipmentRightHandValue = rightHand['parry']
          }
          break
        }
      case "block":
        {
          break
        }
      default:
        this.testBasicValue = this.char[this.testName]
        this.testEquipmentValue = Functions.getEquipmentStatus(this.char.equipments, this.testName)
        break
    }
  }

  addModValue() {
    this.testModValue++
  }

  removeModValue() {
    this.testModValue--
  }
}