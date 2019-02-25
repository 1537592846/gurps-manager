import { ModalAddResource } from './../pages/modal-add-resource/modal-add-resource';
import { ModalAddItems } from './../pages/modal-add-item/modal-add-item';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TestsPage } from '../pages/tests/tests';
import { StatusPage } from '../pages/status/status';
import { ExtrasPage } from '../pages/extras/extras';
import { EquipmentsPage } from '../pages/equipments/equipments';
import { InventoryPage } from '../pages/inventory/inventory';
import { SkillsPage } from '../pages/skills/skills';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { GurpsManagerPage } from '../pages/gurps-manager/gurps-manager';
import { CharacterFeaturesPage } from '../pages/character-features/character-features';
import { CharacterStatusPage } from '../pages/character-status/character-status';
import { CharacterLanguagesPage } from '../pages/character-languages/character-languages';
import { CharacterAdvantagesPage } from '../pages/character-advantages/character-advantages';
import { CharacterDisadvantagesPage } from '../pages/character-disadvantages/character-disadvantages';
import { CharacterResumePage } from '../pages/character-resume/character-resume';
import { CharacterSkillsPage } from '../pages/character-skills/character-skills';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { ModalDisadvantages } from '../pages/modal-disadvantages/modal-disadvantages';
import { DataProvider } from '../providers/data/data';
import { HttpClientModule } from '@angular/common/http';
import { ModalAdvantages } from '../pages/modal-advantages/modal-advantages';
import { ModalSkills } from '../pages/modal-skills/modal-skills';
import { ModalLanguages } from '../pages/modal-languages/modal-languages';
import { ModalCharacters } from '../pages/modal-character/modal-character';
import { ModalEquipments } from '../pages/modal-equipments/modal-equipments';
import { ModalBuyItems } from '../pages/modal-buy-item/modal-buy-item';
import { ModalAddNewItems } from '../pages/modal-add-new-item/modal-add-new-item';
import { ModalTest } from '../pages/modal-test/modal-test';
//Lista de Providers (DAOs) criados

@NgModule({
  declarations: [
    MyApp,
    TestsPage,
    StatusPage,
    ExtrasPage,
    EquipmentsPage,
    InventoryPage,
    SkillsPage,
    TabsControllerPage,
    GurpsManagerPage,
    CharacterFeaturesPage,
    CharacterDisadvantagesPage,
    CharacterAdvantagesPage,
    CharacterStatusPage,
    CharacterSkillsPage,
    CharacterLanguagesPage,
    CharacterResumePage,
    ModalAdvantages,
    ModalBuyItems,
    ModalAddItems,
    ModalAddNewItems,
    ModalCharacters,
    ModalDisadvantages,
    ModalEquipments,
    ModalLanguages,
    ModalSkills,
    ModalTest,
    ModalAddResource
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TestsPage,
    StatusPage,
    ExtrasPage,
    EquipmentsPage,
    InventoryPage,
    SkillsPage,
    TabsControllerPage,
    GurpsManagerPage,
    CharacterFeaturesPage,
    CharacterDisadvantagesPage,
    CharacterAdvantagesPage,
    CharacterStatusPage,
    CharacterSkillsPage,
    CharacterLanguagesPage,
    CharacterResumePage,
    ModalDisadvantages,
    ModalAdvantages,
    ModalBuyItems,
    ModalAddItems,
    ModalAddNewItems,
    ModalCharacters,
    ModalEquipments,
    ModalLanguages,
    ModalSkills,
    ModalTest,
    ModalAddResource
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}