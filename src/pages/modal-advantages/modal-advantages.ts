import { ModalController } from 'ionic-angular';
import { Advantage } from '../../../models/Advantage';

export class ModalAdvantages {
  mentals:Advantage[] = []
  physicals:Advantage[] = []
  socials:Advantage[] = []
  exotics:Advantage[] = []
  supernaturals:Advantage[] = []
  mundanes:Advantage[] = []

  constructor(public modalCtrl: ModalController) { 
  }

  presentModal() {
    const modal = this.modalCtrl.create(ModalAdvantages);
    modal.present();
  }

  updateMental(){
    if(this.mentals.length==0){
      //UpdateMentals
    }
  }

  updatePhysical(){
    if(this.physicals.length==0){
      //UpdatePhysicals
    }
  }

  updateSocial(){
    if(this.socials.length==0){
      //UpdateSocials
    }
  }

  updateExotic(){
    if(this.exotics.length==0){
      //UpdateExotics
    }
  }

  updateSupernatural(){
    if(this.supernaturals.length==0){
      //UpdateSupernaturals
    }
  }

  updateMundane(){
    if(this.mundanes.length==0){
      //UpdateMundanes
    }
  }
}