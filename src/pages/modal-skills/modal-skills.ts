import { Skill, SkillInterface } from '../../../models/Skill';
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
          var skillInterface: SkillInterface = JSON.parse(JSON.stringify(data[i]))
          var skill = new Skill
          skill.id = skillInterface.Id
          skill.name = skillInterface.Name
          skill.description = skillInterface.Description
          skill.attribute = skillInterface.Attribute
          skill.difficulty=skillInterface.Difficulty
          skill.cost = skillInterface.Cost
          skill.level = skillInterface.Level
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