import { ViewController, NavParams } from "ionic-angular";
import { DataProvider } from "../../providers/data/data";
import { Component } from "@angular/core";
import { Character } from "../../../models/Character";
import { Functions, EquipmentStatus } from "../../../models/Functions";

@Component({
  selector: 'modal-test.html',
  templateUrl: 'modal-test.html'
})
export class ModalTest {
  char: Character
  testName: string
  testBasicValue: number
  testBasicValueName: string
  testModValue: number
  testEquipmentValue: number
  testEndResult: number

  constructor(public viewCtrl: ViewController, public params: NavParams, public dataProvider: DataProvider) {
    this.testName = params.data.test
    this.char = params.data.char
    this.defineTestValues()
  }

  defineTestValues() {
    this.testBasicValue = this.char[this.testName]
    this.testBasicValueName = this.testName.toUpperCase()[0]+this.testName.substr(1)
    this.testModValue = 0
    this.testEquipmentValue = Functions.getEquipmentStatus(this.char.equipments, EquipmentStatus.Strenght)
  }
  
  addModValue(){
    this.testModValue++
  }

  removeModValue(){
    this.testModValue--
  }
}