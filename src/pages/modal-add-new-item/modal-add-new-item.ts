import { OneHandWeapon, TwoHandWeapon, Shield, Armor, Consumable, Other } from './../../../models/Item';
import { ViewController, NavParams } from 'ionic-angular'
import { Component } from '@angular/core'
import { DataProvider } from '../../providers/data/data'
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'modal-add-new-item.html',
  templateUrl: 'modal-add-new-item.html'
})
export class ModalAddNewItems {
  resouces: number = 0
  form: any;

  constructor(public viewCtrl: ViewController, public params: NavParams, public dataProvider: DataProvider, public formBuilder: FormBuilder) {
    this.resouces = this.params.get("resouces")
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.min(3), Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      type: ['', Validators.compose([Validators.required])],  
      nt: ['', Validators.compose([ Validators.pattern('[0-9]{1}')])],
      description: ['', Validators.compose([Validators.minLength(3), Validators.pattern('[a-zA-Z .,]*'), Validators.required])],
      weight: ['', Validators.compose([Validators.pattern('[0-9.]*'), Validators.required])],
      cost: ['', Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      max_life_points: ['', Validators.compose([Validators.min(1), Validators.pattern('[0-9]*')])],
      resistence: ['', Validators.compose([Validators.min(1), Validators.pattern('[Dd0-9]*')])],
      balance_attack: ['', Validators.compose([Validators.minLength(3), Validators.pattern('[a-zA-Z0-9\+\-.,]*')])],
      piercing_attack: ['', Validators.compose([Validators.minLength(3), Validators.pattern('[a-zA-Z0-9\+\-.,]*')])]
    })
  }

  returnData() {
    if (this.form.valid) {
      let data = this.form.getRawValue()
      let item: any
      switch (data.type) {
        case "one_hand": {
          item = new OneHandWeapon;
          item.formula = '{'
          if (data.balance_attack != undefined && data.balance_attack!="") {
            item.formula += '"balance_attack":"' + data.balance_attack + '"'
          }
          if (data.piercing_attack != undefined && data.piercing_attack!="") {
            item.formula += ',"piercing_attack":"' + data.piercing_attack + '"'
          }
          item.formula += '}'
          break
        }
        case "two_hand": {
          item = new TwoHandWeapon;
          item.formula = '{'
          if (data.balance_attack != undefined) {
            item.formula += '"balance_attack":"' + data.balance_attack + '"'
          }
          if (data.piercing_attack != undefined) {
            item.formula += ',"piercing_attack":"' + data.piercing_attack + '"'
          }
          item.formula += '}'
          break
        }
        case "shield": {
          item = new Shield;
          item.formula = '{"max_life_points":'+data.max_life_points+',"resistence":"'+data.resistence+'"'
          break
        }
        case "head": item = new Armor; break
        case "torax": item = new Armor; break
        case "arms": item = new Armor; break
        case "hands": item = new Armor; break
        case "legs": item = new Armor; break
        case "feet": item = new Armor; break
        case "consumable": item = new Consumable; break
        case "other": item = new Other; break
      }
      item.name = data.name
      item.type = data.type
      if(data.nt==""){
        item.nt=10
      }else{
        item.nt=Number.parseInt(data.nt)
      }
      item.description = data.description
      item.weight = Number.parseFloat(data.weight)
      item.cost = Number.parseInt(data.cost)
      item.max_life_points = Number.parseInt(data.max_life_points)
      item.resistence = data.resistence
      item.bought=false
      item.equipped=""
      this.viewCtrl.dismiss(item)
    } else {
      this.form.markAsPending()
    }
  }
}