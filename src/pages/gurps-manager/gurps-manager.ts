import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterFeaturesPage } from '../character-features/character-features';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { Character } from '../../../models/Character';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-gurps-manager',
  templateUrl: 'gurps-manager.html'
})
export class GurpsManagerPage {
  constructor(public navCtrl: NavController,private storage: Storage) {
    storage.set("name","Ryuzaki");
    storage.get("id").then((val)=>{
    })
  }
  goToCharacterFeatures() {
    this.navCtrl.push(CharacterFeaturesPage,{new_char:Character.emptyCharacter()});
  }
  goToTabsController() {
    var char=new Character(0);
    this.navCtrl.setRoot(TabsControllerPage,{char:char});
  }
}
