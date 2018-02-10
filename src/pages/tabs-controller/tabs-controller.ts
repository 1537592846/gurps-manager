import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EquipmentsPage } from '../equipments/equipments';
import { InventoryPage } from '../inventory/inventory';
import { SkillsPage } from '../skills/skills';
import { TestsPage } from '../tests/tests';
import { StatusPage } from '../status/status';
import { ExtrasPage } from '../extras/extras';

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
  
  constructor(public navCtrl: NavController) {
  }
  goToTests(){
    this.navCtrl.push(TestsPage);
  }
  goToStatus(){
    this.navCtrl.push(StatusPage);
  }
  goToExtras(){
    this.navCtrl.push(ExtrasPage);
  }
  goToEquipments(){
    this.navCtrl.push(EquipmentsPage);
  }
  goToInventory(){
    this.navCtrl.push(InventoryPage);
  }
  goToSkills(){
    this.navCtrl.push(SkillsPage);
  }
}
