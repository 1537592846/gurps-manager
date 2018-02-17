import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EquipmentsPage } from '../equipments/equipments';
import { InventoryPage } from '../inventory/inventory';
import { SkillsPage } from '../skills/skills';
import { TestsPage } from '../tests/tests';
import { StatusPage } from '../status/status';
import { ExtrasPage } from '../extras/extras';
import { Character } from '../../../models/Character';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  
  tests: any = TestsPage;
  status: any = StatusPage;
  extras: any = ExtrasPage;
  equipments: any = EquipmentsPage;
  inventory: any = InventoryPage;
  skills: any = SkillsPage;
  char:Character;
  
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    //Getting data
    this.char = this.navParams.get('char');
  }
  goToTests(){
    this.navCtrl.push(TestsPage,{char:this.char});
  }
  goToStatus(){
    this.navCtrl.push(StatusPage,{char:this.char});
  }
  goToExtras(){
    this.navCtrl.push(ExtrasPage,{char:this.char});
  }
  goToEquipments(){
    this.navCtrl.push(EquipmentsPage,{char:this.char});
  }
  goToInventory(){
    this.navCtrl.push(InventoryPage,{char:this.char});
  }
  goToSkills(){
    this.navCtrl.push(SkillsPage,{char:this.char});
  }
}
