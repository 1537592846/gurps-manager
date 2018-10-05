import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CharacterFeaturesPage } from '../character-features/character-features';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { Character, CharacterInterface } from '../../../models/Character';
import { DataProvider } from '../../providers/data/data';
import { ModalCharacters } from '../modal-character/modal-character';
import { Language } from '../../../models/Language';
import { Skill } from '../../../models/Skill';
import { Advantage } from '../../../models/Advantage';
import { Disadvantage } from '../../../models/Disadvantage';
import { Armor, Consumable, OneHandWeapon, TwoHandWeapon, Other, Shield } from '../../../models/Item';

@Component({
  selector: 'page-gurps-manager',
  templateUrl: 'gurps-manager.html'
})


export class GurpsManagerPage {
  profileModal: any
  constructor(public navCtrl: NavController, public dataProvider: DataProvider, public modalCtrl: ModalController) {
    console.clear()
  }

  goToCharacterFeatures() {
    this.dataProvider.getNextCharacterId().then(res => {
      let new_char = new Character(res as number)
      this.navCtrl.setRoot(CharacterFeaturesPage, { new_char: new_char });
    })
  }

  goToTabsController() {
    this.profileModal = this.modalCtrl.create(ModalCharacters)
    this.profileModal.present();
    this.profileModal.onDidDismiss(characterApi => {
      if (characterApi != null) {
        this.dataProvider.getCharacter(characterApi.id).then(res => {
          let data = res as CharacterInterface
          let character = new Character(data.Id)
          character.id = data.Id
          character.name = data.Name
          character.age = data.Age
          character.height = data.Height
          character.weight = data.Weight
          character.min_status = data.MinimunStatusPoints
          character.max_points = data.MaxPoints
          character.current_points = data.CurrentPoints
          character.resources = data.Resources
          character.description = data.Description
          character.strenght = data.Status.Strenght
          character.dexterity = data.Status.Dexterity
          character.intelligence = data.Status.Intelligence
          character.health = data.Status.Health
          character.max_life_points = data.Status.MaxLifePoints
          character.current_life_points = data.Status.CurrentLifePoints
          character.will = data.Status.Will
          character.perception = data.Status.Perception
          character.max_fatigue_points = data.Status.MaxFatiguePoints
          character.current_fatigue_points = data.Status.CurrentFatiguePoints
          character.speed = data.Status.Speed
          character.basic_movement = data.Status.BasicMovement
          character.max_carry_weight = data.Status.MaxCarryWeight
          character.current_carry_weight = data.Status.CurrentCarryWeight
          for (let i = 0; data.Languages != null && i < data.Languages.length; i++) {
            let language = new Language()
            language.name = data.Languages[i].Name
            language.description = data.Languages[i].Description
            language.id = data.Languages[i].Id
            language.level = data.Languages[i].Level
            language.levelCap = data.Languages[i].LevelCap
            character.languages.push(language)
          }
          for (let i = 0; data.Skills != null && i < data.Skills.length; i++) {
            let skill = new Skill()
            skill.name = data.Skills[i].Name
            skill.description = data.Skills[i].Description
            skill.id = data.Skills[i].Id
            skill.level = data.Skills[i].Level
            skill.attribute = data.Skills[i].Attribute
            skill.cost = data.Skills[i].cost
            skill.difficulty = data.Skills[i].Difficulty
            character.skills.push(skill)
          }
          for (let i = 0; data.Advantages != null && i < data.Advantages.length; i++) {
            let advantage = new Advantage()
            advantage.name = data.Advantages[i].Name
            advantage.description = data.Advantages[i].Description
            advantage.id = data.Advantages[i].Id
            advantage.level = data.Advantages[i].Level
            advantage.cost = data.Advantages[i].cost
            advantage.formula = data.Advantages[i].formula
            advantage.levelCap = data.Advantages[i].LevelCap
            advantage.types = data.Advantages[i].Types
            character.advantages.push(advantage)
          }
          for (let i = 0; data.Disadvantages != null && i < data.Disadvantages.length; i++) {
            let disadvantage = new Disadvantage()
            disadvantage.name = data.Disadvantages[i].Name
            disadvantage.description = data.Disadvantages[i].Description
            disadvantage.id = data.Disadvantages[i].Id
            disadvantage.level = data.Disadvantages[i].Level
            disadvantage.cost = data.Disadvantages[i].cost
            disadvantage.formula = data.Disadvantages[i].formula
            disadvantage.levelCap = data.Disadvantages[i].LevelCap
            disadvantage.types = data.Disadvantages[i].Types
            character.disadvantages.push(disadvantage)
          }
          if (data.Inventory != null) {
            for (let i = 0; data.Inventory.Armors != null && i < data.Inventory.Armors.length; i++) {
              let armor = new Armor()
              armor.id = data.Inventory.Armors[i].Id
              armor.name = data.Inventory.Armors[i].Name
              armor.description = data.Inventory.Armors[i].Description
              armor.cost = data.Inventory.Armors[i].Cost
              armor.nt = data.Inventory.Armors[i].Nt
              armor.quantity = data.Inventory.Armors[i].Quantity
              armor.weight = data.Inventory.Armors[i].Weight
              armor.formula = data.Inventory.Armors[i].Formula
              character.inventory.armors.push(armor)
            }
            for (let i = 0; data.Inventory.Consumables != null && i < data.Inventory.Consumables.length; i++) {
              let consumable = new Consumable()
              consumable.id = data.Inventory.Consumables[i].Id
              consumable.name = data.Inventory.Consumables[i].Name
              consumable.description = data.Inventory.Consumables[i].Description
              consumable.cost = data.Inventory.Consumables[i].Cost
              consumable.nt = data.Inventory.Consumables[i].Nt
              consumable.quantity = data.Inventory.Consumables[i].Quantity
              consumable.weight = data.Inventory.Consumables[i].Weight
              consumable.formula = data.Inventory.Consumables[i].Formula
              character.inventory.consumables.push(consumable)
            }
            for (let i = 0; data.Inventory.OneHandWeapons != null && i < data.Inventory.OneHandWeapons.length; i++) {
              let oneHandWeapon = new OneHandWeapon()
              oneHandWeapon.id = data.Inventory.OneHandWeapons[i].Id
              oneHandWeapon.name = data.Inventory.OneHandWeapons[i].Name
              oneHandWeapon.description = data.Inventory.OneHandWeapons[i].Description
              oneHandWeapon.cost = data.Inventory.OneHandWeapons[i].Cost
              oneHandWeapon.nt = data.Inventory.OneHandWeapons[i].Nt
              oneHandWeapon.quantity = data.Inventory.OneHandWeapons[i].Quantity
              oneHandWeapon.weight = data.Inventory.OneHandWeapons[i].Weight
              oneHandWeapon.formula = data.Inventory.OneHandWeapons[i].Formula
              character.inventory.one_hand_weapons.push(oneHandWeapon)
            }
            for (let i = 0; data.Inventory.TwoHandWeapons != null && i < data.Inventory.TwoHandWeapons.length; i++) {
              let twoHandWeapon = new TwoHandWeapon()
              twoHandWeapon.id = data.Inventory.TwoHandWeapons[i].Id
              twoHandWeapon.name = data.Inventory.TwoHandWeapons[i].Name
              twoHandWeapon.description = data.Inventory.TwoHandWeapons[i].Description
              twoHandWeapon.cost = data.Inventory.TwoHandWeapons[i].Cost
              twoHandWeapon.nt = data.Inventory.TwoHandWeapons[i].Nt
              twoHandWeapon.quantity = data.Inventory.TwoHandWeapons[i].Quantity
              twoHandWeapon.weight = data.Inventory.TwoHandWeapons[i].Weight
              twoHandWeapon.formula = data.Inventory.TwoHandWeapons[i].Formula
              character.inventory.two_hand_weapons.push(twoHandWeapon)
            }
            for (let i = 0; data.Inventory.Others != null && i < data.Inventory.Others.length; i++) {
              let other = new Other()
              other.id = data.Inventory.Others[i].Id
              other.name = data.Inventory.Others[i].Name
              other.description = data.Inventory.Others[i].Description
              other.cost = data.Inventory.Others[i].Cost
              other.nt = data.Inventory.Others[i].Nt
              other.quantity = data.Inventory.Others[i].Quantity
              other.weight = data.Inventory.Others[i].Weight
              other.formula = data.Inventory.Others[i].Formula
              character.inventory.others.push(other)
            }
            for (let i = 0; data.Inventory.Shields != null && i < data.Inventory.Shields.length; i++) {
              let shield = new Shield()
              shield.id = data.Inventory.Shields[i].Id
              shield.name = data.Inventory.Shields[i].Name
              shield.description = data.Inventory.Shields[i].Description
              shield.cost = data.Inventory.Shields[i].Cost
              shield.nt = data.Inventory.Shields[i].Nt
              shield.quantity = data.Inventory.Shields[i].Quantity
              shield.weight = data.Inventory.Shields[i].Weight
              shield.formula = data.Inventory.Shields[i].Formula
              character.inventory.shields.push(shield)
            }
          }
          this.navCtrl.push(TabsControllerPage, { char: character });
        })
          .catch(error => { console.log(error) });
      }
    })
  }
}