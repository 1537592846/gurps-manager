import { Inventory } from './../../../models/Inventory';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CharacterFeaturesPage } from '../character-features/character-features';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { Character } from '../../../models/Character';
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
      if (characterApi != undefined) {
        this.dataProvider.getCharacter(characterApi.id).then(res => {
          let data = res as any
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
          if (data.Equipments.LeftHand.Id != 0) {
            character.equipments.left_hand = new OneHandWeapon
            character.equipments.left_hand.id = data.Equipments.LeftHand.Id
            character.equipments.left_hand.name = data.Equipments.LeftHand.Name
            character.equipments.left_hand.nt = data.Equipments.LeftHand.NT
            character.equipments.left_hand.description = data.Equipments.LeftHand.Description
            character.equipments.left_hand.cost = data.Equipments.LeftHand.Cost
            character.equipments.left_hand.weight = data.Equipments.LeftHand.Weight
            character.equipments.left_hand.formula = data.Equipments.LeftHand.Formula
            character.equipments.left_hand.bought = data.Equipments.LeftHand.Bought
            character.equipments.left_hand.quantity = 1
          }
          if (data.Equipments.RightHand.Id != 0) {
            character.equipments.right_hand = new OneHandWeapon
            character.equipments.right_hand.id = data.Equipments.RightHand.Id
            character.equipments.right_hand.name = data.Equipments.RightHand.Name
            character.equipments.right_hand.nt = data.Equipments.RightHand.NT
            character.equipments.right_hand.description = data.Equipments.RightHand.Description
            character.equipments.right_hand.cost = data.Equipments.RightHand.Cost
            character.equipments.right_hand.weight = data.Equipments.RightHand.Weight
            character.equipments.right_hand.formula = data.Equipments.RightHand.Formula
            character.equipments.right_hand.bought = data.Equipments.RightHand.Bought
            character.equipments.right_hand.quantity = 1
          }
          if (data.Equipments.BothHands.Id != 0) {
            character.equipments.both_hands = new TwoHandWeapon
            character.equipments.both_hands.id = data.Equipments.BothHands.Id
            character.equipments.both_hands.name = data.Equipments.BothHands.Name
            character.equipments.both_hands.nt = data.Equipments.BothHands.NT
            character.equipments.both_hands.description = data.Equipments.BothHands.Description
            character.equipments.both_hands.cost = data.Equipments.BothHands.Cost
            character.equipments.both_hands.weight = data.Equipments.BothHands.Weight
            character.equipments.both_hands.formula = data.Equipments.BothHands.Formula
            character.equipments.both_hands.bought = data.Equipments.BothHands.Bought
            character.equipments.both_hands.quantity = 1
          }
          if (data.Equipments.Shield.Id != 0) {
            character.equipments.shield = new Shield
            let json = JSON.parse(data.Equipments.Shield.Formula)
            character.equipments.shield.max_life_points = Number.parseInt(json.life_points)
            if (json.current_life_points == undefined) {
              character.equipments.shield.current_life_points = character.equipments.shield.max_life_points
            } else {
              character.equipments.shield.current_life_points = Number.parseInt(json.current_life_points)
            }
            character.equipments.shield.resistence = json.resistence
            character.equipments.shield.id = data.Equipments.Shield.Id
            character.equipments.shield.name = data.Equipments.Shield.Name
            character.equipments.shield.nt = data.Equipments.Shield.NT
            character.equipments.shield.description = data.Equipments.Shield.Description
            character.equipments.shield.cost = data.Equipments.Shield.Cost
            character.equipments.shield.weight = data.Equipments.Shield.Weight
            character.equipments.shield.formula = data.Equipments.Shield.Formula
            character.equipments.shield.bought = data.Equipments.Shield.Bought
            character.equipments.shield.quantity = 1
          }
          if (data.Equipments.Head.Id != 0) {
            character.equipments.head = new Armor
            let json = JSON.parse(data.Equipments.Head.Formula)
            character.equipments.head.resistence = json.resistence
            character.equipments.head.id = data.Equipments.Head.Id
            character.equipments.head.name = data.Equipments.Head.Name
            character.equipments.head.nt = data.Equipments.Head.NT
            character.equipments.head.description = data.Equipments.Head.Description
            character.equipments.head.cost = data.Equipments.Head.Cost
            character.equipments.head.weight = data.Equipments.Head.Weight
            character.equipments.head.formula = data.Equipments.Head.Formula
            character.equipments.head.bought = data.Equipments.Head.Bought
            character.equipments.head.quantity = 1
          }
          if (data.Equipments.Torax.Id != 0) {
            character.equipments.torax = new Armor
            let json = JSON.parse(data.Equipments.Torax.Formula)
            character.equipments.torax.resistence = json.resistence
            character.equipments.torax.id = data.Equipments.Torax.Id
            character.equipments.torax.name = data.Equipments.Torax.Name
            character.equipments.torax.nt = data.Equipments.Torax.NT
            character.equipments.torax.description = data.Equipments.Torax.Description
            character.equipments.torax.cost = data.Equipments.Torax.Cost
            character.equipments.torax.weight = data.Equipments.Torax.Weight
            character.equipments.torax.formula = data.Equipments.Torax.Formula
            character.equipments.torax.bought = data.Equipments.Torax.Bought
            character.equipments.torax.quantity = 1
          }
          if (data.Equipments.Arms.Id != 0) {
            character.equipments.arms = new Armor
            let json = JSON.parse(data.Equipments.Arms.Formula)
            character.equipments.arms.resistence = json.resistence
            character.equipments.arms.id = data.Equipments.Arms.Id
            character.equipments.arms.name = data.Equipments.Arms.Name
            character.equipments.arms.nt = data.Equipments.Arms.NT
            character.equipments.arms.description = data.Equipments.Arms.Description
            character.equipments.arms.cost = data.Equipments.Arms.Cost
            character.equipments.arms.weight = data.Equipments.Arms.Weight
            character.equipments.arms.formula = data.Equipments.Arms.Formula
            character.equipments.arms.bought = data.Equipments.Arms.Bought
            character.equipments.arms.quantity = 1
          }
          if (data.Equipments.Hands.Id != 0) {
            character.equipments.hands = new Armor
            let json = JSON.parse(data.Equipments.Hands.Formula)
            character.equipments.hands.resistence = json.resistence
            character.equipments.hands.id = data.Equipments.Hands.Id
            character.equipments.hands.name = data.Equipments.Hands.Name
            character.equipments.hands.nt = data.Equipments.Hands.NT
            character.equipments.hands.description = data.Equipments.Hands.Description
            character.equipments.hands.cost = data.Equipments.Hands.Cost
            character.equipments.hands.weight = data.Equipments.Hands.Weight
            character.equipments.hands.formula = data.Equipments.Hands.Formula
            character.equipments.hands.bought = data.Equipments.Hands.Bought
            character.equipments.hands.quantity = 1
          }
          if (data.Equipments.Legs.Id != 0) {
            character.equipments.legs = new Armor
            let json = JSON.parse(data.Equipments.Legs.Formula)
            character.equipments.legs.resistence = json.resistence
            character.equipments.legs.id = data.Equipments.Legs.Id
            character.equipments.legs.name = data.Equipments.Legs.Name
            character.equipments.legs.nt = data.Equipments.Legs.NT
            character.equipments.legs.description = data.Equipments.Legs.Description
            character.equipments.legs.cost = data.Equipments.Legs.Cost
            character.equipments.legs.weight = data.Equipments.Legs.Weight
            character.equipments.legs.formula = data.Equipments.Legs.Formula
            character.equipments.legs.bought = data.Equipments.Legs.Bought
            character.equipments.legs.quantity = 1
          }
          if (data.Equipments.Feet.Id != 0) {
            character.equipments.feet = new Armor
            let json = JSON.parse(data.Equipments.Feet.Formula)
            character.equipments.feet.resistence = json.resistence
            character.equipments.feet.id = data.Equipments.Feet.Id
            character.equipments.feet.name = data.Equipments.Feet.Name
            character.equipments.feet.nt = data.Equipments.Feet.NT
            character.equipments.feet.description = data.Equipments.Feet.Description
            character.equipments.feet.cost = data.Equipments.Feet.Cost
            character.equipments.feet.weight = data.Equipments.Feet.Weight
            character.equipments.feet.formula = data.Equipments.Feet.Formula
            character.equipments.feet.bought = data.Equipments.Feet.Bought
            character.equipments.feet.quantity = 1
          }
          for (let i = 0; data.Languages != undefined && i < data.Languages.length; i++) {
            let language = new Language()
            language.name = data.Languages[i].Name
            language.description = data.Languages[i].Description
            language.id = data.Languages[i].Id
            language.level = data.Languages[i].Level
            language.levelCap = data.Languages[i].LevelCap
            character.languages.push(language)
          }
          for (let i = 0; data.Skills != undefined && i < data.Skills.length; i++) {
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
          for (let i = 0; data.Advantages != undefined && i < data.Advantages.length; i++) {
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
          for (let i = 0; data.Disadvantages != undefined && i < data.Disadvantages.length; i++) {
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
          if (data.Inventory != undefined) {
            character.inventory.armors = []
            for (let i = 0; data.Inventory.Armors != undefined && i < data.Inventory.Armors.length; i++) {
              let armor = new Armor()
              armor.id = data.Inventory.Armors[i].Id
              armor.name = data.Inventory.Armors[i].Name
              armor.description = data.Inventory.Armors[i].Description
              armor.cost = data.Inventory.Armors[i].Cost
              armor.nt = data.Inventory.Armors[i].NT
              armor.quantity = 1
              armor.weight = data.Inventory.Armors[i].Weight
              armor.formula = data.Inventory.Armors[i].Formula
              armor.type = data.Inventory.Armors[i].Type
              armor.resistence = JSON.parse(armor.formula).Resistence
              character.inventory.armors.push(armor)
            }
            character.inventory.consumables = []
            for (let i = 0; data.Inventory.Consumables != undefined && i < data.Inventory.Consumables.length; i++) {
              let consumable = new Consumable()
              consumable.id = data.Inventory.Consumables[i].Id
              consumable.name = data.Inventory.Consumables[i].Name
              consumable.description = data.Inventory.Consumables[i].Description
              consumable.cost = data.Inventory.Consumables[i].Cost
              consumable.nt = data.Inventory.Consumables[i].NT
              consumable.quantity = 1
              consumable.weight = data.Inventory.Consumables[i].Weight
              consumable.formula = data.Inventory.Consumables[i].Formula
              character.inventory.consumables.push(consumable)
            }
            character.inventory.one_hand_weapons = []
            for (let i = 0; data.Inventory.OneHandWeapons != undefined && i < data.Inventory.OneHandWeapons.length; i++) {
              let oneHandWeapon = new OneHandWeapon()
              oneHandWeapon.id = data.Inventory.OneHandWeapons[i].Id
              oneHandWeapon.name = data.Inventory.OneHandWeapons[i].Name
              oneHandWeapon.description = data.Inventory.OneHandWeapons[i].Description
              oneHandWeapon.cost = data.Inventory.OneHandWeapons[i].Cost
              oneHandWeapon.nt = data.Inventory.OneHandWeapons[i].NT
              oneHandWeapon.quantity = 1
              oneHandWeapon.weight = data.Inventory.OneHandWeapons[i].Weight
              oneHandWeapon.formula = data.Inventory.OneHandWeapons[i].Formula
              character.inventory.one_hand_weapons.push(oneHandWeapon)
            }
            character.inventory.two_hand_weapons = []
            for (let i = 0; data.Inventory.TwoHandWeapons != undefined && i < data.Inventory.TwoHandWeapons.length; i++) {
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
            character.inventory.others = []
            for (let i = 0; data.Inventory.Others != undefined && i < data.Inventory.Others.length; i++) {
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
            character.inventory.shields = []
            for (let i = 0; data.Inventory.Shields != undefined && i < data.Inventory.Shields.length; i++) {
              let shield = new Shield
              let json = JSON.parse(data.Inventory.Shield.Formula)
              shield.max_life_points = Number.parseInt(json.life_points)
              if (json.current_life_points == undefined) {
                shield.current_life_points = shield.max_life_points
              } else {
                shield.current_life_points = Number.parseInt(json.current_life_points)
              }
              shield.resistence = json.resistence
              shield.id = data.Equipments.Shield.Id
              shield.name = data.Equipments.Shield.Name
              shield.nt = data.Equipments.Shield.NT
              shield.description = data.RightHand.Shield.Description
              shield.cost = data.Equipments.Shield.Cost
              shield.weight = data.Equipments.Shield.Weight
              shield.formula = data.Equipments.Shield.Formula
              shield.bought = data.Equipments.Shield.Bought
              shield.quantity = 1
            }
          }
          this.navCtrl.push(TabsControllerPage, { char: character });
        })
          .catch(error => { console.log(error) });
      }
    })
  }
}