import { Disadvantage } from '../../../models/Disadvantage';
import { ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Jsonp } from '@angular/http';

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

  constructor(public viewCtrl: ViewController, public params: NavParams) {
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
    this.disadvantages = []
    var disadvantage = new Disadvantage()

    disadvantage.id = 1
    disadvantage.name = "Mental"
    disadvantage.description = "A bad fitted body"
    disadvantage.cost = 5
    disadvantage.level = 1
    disadvantage.levelCap = 1
    disadvantage.types = ["mental"]
    disadvantage.formula = "{health_test:-1,knockout_test:-1}"
    this.disadvantages.push(disadvantage)
    disadvantage = new Disadvantage()

    disadvantage.id = 2
    disadvantage.name = "Mental2"
    disadvantage.description = "Lost a hand"
    disadvantage.cost = 5
    disadvantage.level = 1
    disadvantage.levelCap = 2
    disadvantage.types = ["mental"]
    disadvantage.formula = "{short_range_weapon:no,long_range_weapon:no}"
    this.disadvantages.push(disadvantage)
    disadvantage = new Disadvantage()

    disadvantage.id = 3
    disadvantage.name = "Bad Fit"
    disadvantage.description = "A bad fitted body"
    disadvantage.cost = 5
    disadvantage.level = 1
    disadvantage.levelCap = 1
    disadvantage.types = ["mundane", "physical"]
    disadvantage.formula = "{health_test:-1,knockout_test:-1}"
    this.disadvantages.push(disadvantage)
    disadvantage = new Disadvantage()

    disadvantage.id = 4
    disadvantage.name = "Handless"
    disadvantage.description = "Lost a hand"
    disadvantage.cost = 5
    disadvantage.level = 1
    disadvantage.levelCap = 2
    disadvantage.types = ["physical"]
    disadvantage.formula = "{short_range_weapon:no,long_range_weapon:no}"
    this.disadvantages.push(disadvantage)
    disadvantage = new Disadvantage()

    disadvantage.id = 11
    disadvantage.name = "Fingerless"
    disadvantage.description = "Lost a finger"
    disadvantage.cost = 5
    disadvantage.level = 1
    disadvantage.levelCap = 10
    disadvantage.types = ["physical", "mundane"]
    disadvantage.formula = "{}"
    this.disadvantages.push(disadvantage)
    disadvantage = new Disadvantage()

    disadvantage.id = 9
    disadvantage.name = "Extra arm"
    disadvantage.description = "Well, you know, an extra arm"
    disadvantage.cost = 5
    disadvantage.level = 1
    disadvantage.levelCap = Infinity
    disadvantage.types = ["supernatural", "exotic", "physical"]
    disadvantage.formula = "{}"
    this.disadvantages.push(disadvantage)
    disadvantage = new Disadvantage()

    disadvantage.id = 10
    disadvantage.name = "Extra head"
    disadvantage.description = "Well, you know, an extra head"
    disadvantage.cost = 5
    disadvantage.level = 1
    disadvantage.levelCap = 3
    disadvantage.types = ["supernatural", "exotic", "physical"]
    disadvantage.formula = "{}"
    this.disadvantages.push(disadvantage)
    disadvantage = new Disadvantage()

    disadvantage.id = 7
    disadvantage.name = "Savant"
    disadvantage.description = "Closed-off mentally"
    disadvantage.cost = 5
    disadvantage.level = 1
    disadvantage.levelCap = 1
    disadvantage.types = ["social", "mental", "exotic"]
    disadvantage.formula = "{}"
    this.disadvantages.push(disadvantage)
    disadvantage = new Disadvantage()

    disadvantage.id = 8
    disadvantage.name = "Painless"
    disadvantage.description = "No pain response"
    disadvantage.cost = 5
    disadvantage.level = 1
    disadvantage.levelCap = 1
    disadvantage.types = ["exotic", "physical"]
    disadvantage.formula = "{}"
    this.disadvantages.push(disadvantage)
    disadvantage = new Disadvantage()

    disadvantage.id = 5
    disadvantage.name = "Misfit"
    disadvantage.description = "Problem child"
    disadvantage.cost = 5
    disadvantage.level = 1
    disadvantage.levelCap = 1
    disadvantage.types = ["social", "mental", "physical"]
    disadvantage.formula = "{}"
    this.disadvantages.push(disadvantage)
    disadvantage = new Disadvantage()

    disadvantage.id = 6
    disadvantage.name = "Hiki-NEET"
    disadvantage.description = "A loner who doesn't leave his house and fears the outside too much"
    disadvantage.cost = 5
    disadvantage.level = 1
    disadvantage.levelCap = 2
    disadvantage.types = ["social"]
    disadvantage.formula = "{}"
    this.disadvantages.push(disadvantage)
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