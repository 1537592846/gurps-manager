import { Advantage } from '../../../models/Advantage';
import { ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'modal-advantages.html',
  templateUrl: 'modal-advantages.html'
})
export class ModalAdvantages {
  mentals: Advantage[] = []
  physicals: Advantage[] = []
  socials: Advantage[] = []
  exotics: Advantage[] = []
  supernaturals: Advantage[] = []
  mundanes: Advantage[] = []
  advantages: Advantage[] = []
  char_advantages: Advantage[] = []

  constructor(public viewCtrl: ViewController, public params: NavParams, public dataProvider: DataProvider) {
    this.updateAdvantages()
  }

  updateMental() {
    this.updateAdvantages()
    this.updateCharAdvantages()

    if (this.mentals.length == 0) {
      for (let i = 0; i < this.advantages.length; i++) {
        if (this.advantages[i].isMental()) {
          this.mentals.push(this.advantages[i])
        }
      }
    }
  }

  updatePhysical() {    
    this.updateAdvantages()
    this.updateCharAdvantages()

    if (this.physicals.length == 0) {
      for (let i = 0; i < this.advantages.length; i++) {
        if (this.advantages[i].isPhysical()) {
          this.physicals.push(this.advantages[i])
        }
      }
    }
  }

  updateSocial() {
    this.updateAdvantages()
    this.updateCharAdvantages()

    if (this.socials.length == 0) {
      for (let i = 0; i < this.advantages.length; i++) {
        if (this.advantages[i].isSocial()) {
          this.socials.push(this.advantages[i])
        }
      }
    }
  }


  updateExotic() {
    this.updateAdvantages()
    this.updateCharAdvantages()

    if (this.exotics.length == 0) {
      for (let i = 0; i < this.advantages.length; i++) {
        if (this.advantages[i].isExotic()) {
          this.exotics.push(this.advantages[i])
        }
      }
    }
  }


  updateSupernatural() {
    this.updateAdvantages()
    this.updateCharAdvantages()

    if (this.supernaturals.length == 0) {
      for (let i = 0; i < this.advantages.length; i++) {
        if (this.advantages[i].isSupernatural()) {
          this.supernaturals.push(this.advantages[i])
        }
      }
    }
  }


  updateMundane() {
    this.updateAdvantages()
    this.updateCharAdvantages()

    if (this.mundanes.length == 0) {
      for (let i = 0; i < this.advantages.length; i++) {
        if (this.advantages[i].isMundane()) {
          this.mundanes.push(this.advantages[i])
        }
      }
    }
  }

  updateCharAdvantages() {
    this.char_advantages = this.params.get("advantages")
  }

  updateAdvantages() {
    if (this.advantages == undefined || this.advantages.length == 0) {
      this.dataProvider.getAdvantages().then(res => {
        let data = res as any[]
        for (let i = 0; i < data.length; i++) {
          var advantage = new Advantage
          advantage.id = data[i].Id
          advantage.name = data[i].Name
          advantage.description = data[i].Description
          advantage.cost = data[i].Cost
          advantage.types = data[i].Types
          advantage.level = data[i].Level
          advantage.levelCap = data[i].LevelCap
          advantage.formula = data[i].Formula
          this.advantages.push(advantage)
        }
      })
        .catch(error => { alert(error) });
    }
  }

  notInCharList(advantage: Advantage): boolean {
    for (let i = 0; i < this.char_advantages.length; i++) {
      if (this.char_advantages[i].name == advantage.name) {
        return false
      }
    }
    return true
  }

  returnData(advantage: Advantage) {
    this.viewCtrl.dismiss(advantage)
  }
}