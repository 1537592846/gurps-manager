import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CharacterFeaturesPage } from '../character-features/character-features';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { Character } from '../../../models/Character';
import { DataProvider } from '../../providers/data/data';
import { ModalCharacters } from '../modal-character/modal-character';

@Component({
  selector: 'page-gurps-manager',
  templateUrl: 'gurps-manager.html'
})


export class GurpsManagerPage {
  profileModal:any
  constructor(public navCtrl: NavController,public dataProvider:DataProvider,public modalCtrl:ModalController) {
    console.clear()
  }

  goToCharacterFeatures() {
    this.navCtrl.setRoot(CharacterFeaturesPage, { new_char: new Character(0,this.dataProvider) });
  }
  
  goToTabsController() {
    this.profileModal = this.modalCtrl.create(ModalCharacters)
    this.profileModal.present();
    this.profileModal.onDidDismiss(characterApi => {
      if (characterApi != null) {
        let character=new Character(characterApi.id,this.dataProvider)
        this.navCtrl.push(TabsControllerPage, { char: character});
      }
    })
  }
}
