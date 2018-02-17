import { Component } from '@angular/core';
import { TestsPage } from '../tests/tests';
import { StatusPage } from '../status/status';
import { ExtrasPage } from '../extras/extras';
import { InventoryPage } from '../inventory/inventory';
import { EquipmentsPage } from '../equipments/equipments';
import { SkillsPage } from '../skills/skills';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  testsRoot = TestsPage;
  statusRoot = StatusPage;
  extrasRoot = ExtrasPage;
  skillsRoot = SkillsPage;
  inventoryRoot = InventoryPage;
  equipmentsRoot = EquipmentsPage;

  constructor() {

  }
}
