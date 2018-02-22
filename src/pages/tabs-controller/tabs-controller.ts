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
  charParam: any = Character;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //Getting data
    this.charParam = this.navParams.get('char')
  }
}
