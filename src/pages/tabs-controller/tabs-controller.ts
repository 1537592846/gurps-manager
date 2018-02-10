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
  
  testsRoot: any = TestsPage;
  statusRoot: any = StatusPage;
  extrasRoot: any = ExtrasPage;
  equipmentsRoot: any = EquipmentsPage;
  inventoryRoot: any = InventoryPage;
  skillsRoot: any = SkillsPage;
  
  constructor(public navCtrl: NavController) {
    this.goToStatus();
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
