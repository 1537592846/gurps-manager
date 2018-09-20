import { Disadvantage, DisadvantageInterface } from '../../../models/Disadvantage';
import { ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Jsonp } from '@angular/http';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'modal-disadvantages.html',
  templateUrl: 'modal-disadvantages.html'
})
export class ModalDisadvantages {
  mentals: Disadvantage[] = []
  physicals: Disadvantage[] = []
  socials: Disadvantage[] = []
  exotics: Disadvantage[] = []
  supernaturals: Disadvantage[] = []
  mundanes: Disadvantage[] = []
  disadvantages: Disadvantage[] = []
  char_disadvantages: Disadvantage[] = []

  constructor(public viewCtrl: ViewController, public params: NavParams, public dataProvider: DataProvider) {
    
    this.updateDisadvantages()
  }

  updateMental() {
    this.updateDisadvantages()
    this.updateCharDisadvantages()

    if (this.mentals.length == 0) {
      for (let i = 0; i < this.disadvantages.length; i++) {
        if (this.disadvantages[i].isMental()) {
          this.mentals.push(this.disadvantages[i])
        }
      }
    }
  }

  updatePhysical() {    
    this.updateDisadvantages()
    this.updateCharDisadvantages()

    if (this.physicals.length == 0) {
      for (let i = 0; i < this.disadvantages.length; i++) {
        if (this.disadvantages[i].isPhysical()) {
          this.physicals.push(this.disadvantages[i])
        }
      }
    }
  }

  updateSocial() {
    this.updateDisadvantages()
    this.updateCharDisadvantages()

    if (this.socials.length == 0) {
      for (let i = 0; i < this.disadvantages.length; i++) {
        if (this.disadvantages[i].isSocial()) {
          this.socials.push(this.disadvantages[i])
        }
      }
    }
  }


  updateExotic() {
    this.updateDisadvantages()
    this.updateCharDisadvantages()

    if (this.exotics.length == 0) {
      for (let i = 0; i < this.disadvantages.length; i++) {
        if (this.disadvantages[i].isExotic()) {
          this.exotics.push(this.disadvantages[i])
        }
      }
    }
  }


  updateSupernatural() {
    this.updateDisadvantages()
    this.updateCharDisadvantages()

    if (this.supernaturals.length == 0) {
      for (let i = 0; i < this.disadvantages.length; i++) {
        if (this.disadvantages[i].isSupernatural()) {
          this.supernaturals.push(this.disadvantages[i])
        }
      }
    }
  }


  updateMundane() {
    this.updateDisadvantages()
    this.updateCharDisadvantages()

    if (this.mundanes.length == 0) {
      for (let i = 0; i < this.disadvantages.length; i++) {
        if (this.disadvantages[i].isMundane()) {
          this.mundanes.push(this.disadvantages[i])
        }
      }
    }
  }

  updateCharDisadvantages() {
    this.char_disadvantages = this.params.get("disadvantages")
  }

  updateDisadvantages() {
    if (this.disadvantages == null || this.disadvantages.length == 0) {
      this.dataProvider.getDisadvantages().then(res => {
        let data = res as Disadvantage[]
        for (let i = 0; i < data.length; i++) {
          var disadvantageInterface: DisadvantageInterface = JSON.parse(JSON.stringify(data[i]))
          var disadvantage = new Disadvantage
          disadvantage.id = disadvantageInterface.Id
          disadvantage.name = disadvantageInterface.Name
          disadvantage.description = disadvantageInterface.Description
          disadvantage.cost = disadvantageInterface.Cost
          disadvantage.types = disadvantageInterface.Types
          disadvantage.level = disadvantageInterface.Level
          disadvantage.levelCap = disadvantageInterface.LevelCap
          disadvantage.formula = disadvantageInterface.Formula
          this.disadvantages.push(disadvantage)
        }
      })
        .catch(error => { console.log(error) });
    }
  }

  notInCharList(disadvantage: Disadvantage): boolean {
    for (let i = 0; i < this.char_disadvantages.length; i++) {
      if (this.char_disadvantages[i].name == disadvantage.name) {
        return false
      }
    }
    return true
  }

  returnData(disadvantage: Disadvantage) {
    this.viewCtrl.dismiss(disadvantage)
  }
}