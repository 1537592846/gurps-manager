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
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TestsPage;
  tab2Root: any = StatusPage;
  tab3Root: any = ExtrasPage;
  tab4Root: any = EquipmentsPage;
  tab5Root: any = InventoryPage;
  tab6Root: any = SkillsPage;
  constructor(public navCtrl: NavController) {
  }
  goToEquipments(params){
    if (!params) params = {};
    this.navCtrl.push(EquipmentsPage);
  }goToInventory(params){
    if (!params) params = {};
    this.navCtrl.push(InventoryPage);
  }goToSkills(params){
    if (!params) params = {};
    this.navCtrl.push(SkillsPage);
  }
}
