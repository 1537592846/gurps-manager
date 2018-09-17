import { ModalController } from 'ionic-angular';

export class ModalAdvantages {

  constructor(public modalCtrl: ModalController) { }

  presentModal() {
    const modal = this.modalCtrl.create(ModalAdvantages);
    modal.present();
  }
}