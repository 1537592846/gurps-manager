import { Skill } from '../../../models/Skill';
import { ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'modal-skills.html',
  templateUrl: 'modal-skills.html'
})
export class ModalSkills {
  strenghts: Skill[] = []
  dexterities: Skill[] = []
  intelligences: Skill[] = []
  healths: Skill[] = []
  skills: Skill[] = []
  char_skills: Skill[] = []

  constructor(public viewCtrl: ViewController, public params: NavParams, public dataProvider: DataProvider) {

    this.updateSkills()
  }

  updateStrenght() {
    this.updateSkills()
    this.updateCharSkills()

    if (this.strenghts.length == 0) {
      for (let i = 0; i < this.skills.length; i++) {
        if (this.skills[i].isStrenght()) {
          this.strenghts.push(this.skills[i])
        }
      }
    }
  }

  updateDexterity() {
    this.updateSkills()
    this.updateCharSkills()

    if (this.dexterities.length == 0) {
      for (let i = 0; i < this.skills.length; i++) {
        if (this.skills[i].isDexterity()) {
          this.dexterities.push(this.skills[i])
        }
      }
    }
  }

  updateIntelligence() {
    this.updateSkills()
    this.updateCharSkills()

    if (this.intelligences.length == 0) {
      for (let i = 0; i < this.skills.length; i++) {
        if (this.skills[i].isIntelligence()) {
          this.intelligences.push(this.skills[i])
        }
      }
    }
  }

  updateHealth() {
    this.updateSkills()
    this.updateCharSkills()

    if (this.healths.length == 0) {
      for (let i = 0; i < this.skills.length; i++) {
        if (this.skills[i].isHealth()) {
          this.healths.push(this.skills[i])
        }
      }
    }
  }

  updateCharSkills() {
    this.char_skills = this.params.get("skills")
  }

  updateSkills() {
    if (this.skills == null || this.skills.length == 0) {
      this.dataProvider.getSkills().then(res => {
        let data = res as Skill[]
        for (let i = 0; i < data.length; i++) {
          var skill = new Skill
          skill.id = data[i].id
          skill.name = data[i].name
          skill.description = data[i].description
          skill.attribute = data[i].attribute
          skill.difficulty=data[i].difficulty
          skill.cost = data[i].cost
          skill.level = data[i].level
          this.skills.push(skill)
        }
      })
      .catch(error => { console.log(error) });
    }
  }

  notInCharList(skill: Skill): boolean {
    for (let i = 0; i < this.char_skills.length; i++) {
      if (this.char_skills[i].name == skill.name) {
        return false
      }
    }
    return true
  }

  returnData(skill: Skill) {
    this.viewCtrl.dismiss(skill)
  }
}