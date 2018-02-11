import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  char=new Character(0);
  
  constructor(public navCtrl: NavController) {
  }
  goToTests(){
    this.navCtrl.push(TestsPage,this.char);
  }
  goToStatus(){
    this.navCtrl.push(StatusPage,this.char);
  }
  goToExtras(){
    this.navCtrl.push(ExtrasPage,this.char);
  }
  goToEquipments(){
    this.navCtrl.push(EquipmentsPage,this.char);
  }
  goToInventory(){
    this.navCtrl.push(InventoryPage,this.char);
  }
  goToSkills(){
    this.navCtrl.push(SkillsPage,this.char);
  }
}
