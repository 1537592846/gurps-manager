import { Disadvantage } from '../../../models/Disadvantage';
import { ViewController } from 'ionic-angular';
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

  constructor(public viewCtrl: ViewController) {
  }

  updateMental(){
    if (this.mentals.length == 0) {
      var disadvantage=new Disadvantage()
      console.log(disadvantage)
      this.mentals.push(disadvantage)
      disadvantage.types=["social","mental","exotic"]
      this.mentals.push(disadvantage)
      disadvantage.types=["mundane"]
      this.mentals.push(disadvantage)
    }
  }

  updatePhysical() {
    if (this.physicals.length == 0) {
      //UpdatePhysicals
    }
  }

  updateSocial() {
    if (this.socials.length == 0) {
      //UpdateSocials
    }
  }

  updateExotic() {
    if (this.exotics.length == 0) {
      //UpdateExotics
    }
  }

  updateSupernatural() {
    if (this.supernaturals.length == 0) {
      //UpdateSupernaturals
    }
  }

  updateMundane() {
    if (this.mundanes.length == 0) {
      //UpdateMundanes
    }
  }

  returnData(disadvantage:Disadvantage) {
    this.viewCtrl.dismiss(disadvantage)
  }
}