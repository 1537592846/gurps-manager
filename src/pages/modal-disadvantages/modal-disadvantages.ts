import { Disadvantage } from '../../../models/Disadvantage';
import { ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

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

  constructor(public viewCtrl: ViewController, params: NavParams) {
    this.disadvantages=(params.get('disadvantages'))
  }

  updateMental() {
    if (this.mentals.length == 0) {
      var disadvantage = new Disadvantage()

      disadvantage.id = 1
      disadvantage.name = "Moron"
      disadvantage.description = "Stupidity"
      disadvantage.cost = 10
      disadvantage.level = 1
      disadvantage.levelCap = 1
      disadvantage.types = ["mental"]
      disadvantage.formula = "{intelligence_test:-1}"
      this.mentals.push(disadvantage)
      disadvantage = new Disadvantage()

      disadvantage.id = 2
      disadvantage.name = "Schizophrenia"
      disadvantage.description = "Disease"
      disadvantage.cost = 5
      disadvantage.level = 1
      disadvantage.levelCap = 3
      disadvantage.types = ["mental", "supernatural"]
      disadvantage.formula = "{}"
      this.mentals.push(disadvantage)
    }
  }

  updatePhysical() {
    if (this.physicals.length == 0) {
      var disadvantage = new Disadvantage()

      disadvantage.id = 3
      disadvantage.name = "Bad Fit"
      disadvantage.description = "A bad fitted body"
      disadvantage.cost = 5
      disadvantage.level = 1
      disadvantage.levelCap = 1
      disadvantage.types = ["mundane", "physical"]
      disadvantage.formula = "{health_test:-1,knockout_test:-1}"
      this.physicals.push(disadvantage)
      disadvantage = new Disadvantage()

      disadvantage.id = 4
      disadvantage.name = "Handless"
      disadvantage.description = "Lost a hand"
      disadvantage.cost = 5
      disadvantage.level = 1
      disadvantage.levelCap = 2
      disadvantage.types = ["physical"]
      disadvantage.formula = "{short_range_weapon:no,long_range_weapon:no}"
      this.physicals.push(disadvantage)
    }
  }

  updateSocial() {
    if (this.socials.length == 0) {
      var disadvantage = new Disadvantage()

      disadvantage.id = 5
      disadvantage.name = "Misfit"
      disadvantage.description = "Problem child"
      disadvantage.cost = 5
      disadvantage.level = 1
      disadvantage.levelCap = 1
      disadvantage.types = ["social", "mental", "physical"]
      disadvantage.formula = "{}"
      this.socials.push(disadvantage)
      disadvantage = new Disadvantage()

      disadvantage.id = 6
      disadvantage.name = "Hiki-NEET"
      disadvantage.description = "A loner who doesn't leave his house and fears the outside too much"
      disadvantage.cost = 5
      disadvantage.level = 1
      disadvantage.levelCap = 2
      disadvantage.types = ["social"]
      disadvantage.formula = "{}"
      this.socials.push(disadvantage)
    }
  }

  updateExotic() {
    if (this.exotics.length == 0) {
      var disadvantage = new Disadvantage()

      disadvantage.id = 7
      disadvantage.name = "Savant"
      disadvantage.description = "Closed-off mentally"
      disadvantage.cost = 5
      disadvantage.level = 1
      disadvantage.levelCap = 1
      disadvantage.types = ["social", "mental", "exotic"]
      disadvantage.formula = "{}"
      this.exotics.push(disadvantage)

      disadvantage = new Disadvantage()
      disadvantage.id = 8
      disadvantage.name = "Painless"
      disadvantage.description = "No pain response"
      disadvantage.cost = 5
      disadvantage.level = 1
      disadvantage.levelCap = 1
      disadvantage.types = ["exotic", "physical"]
      disadvantage.formula = "{}"
      this.exotics.push(disadvantage)
    }
  }

  updateSupernatural() {
    if (this.supernaturals.length == 0) {
      var disadvantage = new Disadvantage()

      disadvantage.id = 9
      disadvantage.name = "Extra arm"
      disadvantage.description = "Well, you know, an extra arm"
      disadvantage.cost = 5
      disadvantage.level = 1
      disadvantage.levelCap = Infinity
      disadvantage.types = ["supernatural", "exotic", "physical"]
      disadvantage.formula = "{}"
      this.supernaturals.push(disadvantage)
      disadvantage = new Disadvantage()

      disadvantage.id = 10
      disadvantage.name = "Extra head"
      disadvantage.description = "Well, you know, an extra head"
      disadvantage.cost = 5
      disadvantage.level = 1
      disadvantage.levelCap = 3
      disadvantage.types = ["supernatural", "exotic", "physical"]
      disadvantage.formula = "{}"
      this.supernaturals.push(disadvantage)
    }
  }

  updateMundane() {
    if (this.mundanes.length == 0) {
      var disadvantage = new Disadvantage()

      disadvantage.id = 11
      disadvantage.name = "Fingerless"
      disadvantage.description = "Lost a finger"
      disadvantage.cost = 5
      disadvantage.level = 1
      disadvantage.levelCap = 10
      disadvantage.types = ["physical", "mundane"]
      disadvantage.formula = "{}"
      this.mundanes.push(disadvantage)
    }
  }

  returnData(disadvantage: Disadvantage) {
    this.viewCtrl.dismiss(disadvantage)
  }
}