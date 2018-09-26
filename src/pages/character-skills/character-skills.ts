import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { Skill } from '../../../models/Skill';
import { CharacterLanguagesPage } from '../character-languages/character-languages';
import { ModalSkills } from '../modal-skills/modal-skills';

@Component({
  selector: 'page-character-skills',
  templateUrl: 'character-skills.html'
})
export class CharacterSkillsPage {

  new_char: Character;
  profileModal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    //Getting data
    this.new_char = this.navParams.get('new_char');
  }
  goToNextPage() {
    this.navCtrl.push(CharacterLanguagesPage, { new_char: this.new_char });
  }
  removeSkill(skill: Skill) {
    for (var i = 0; i < this.new_char.skills.length; i++) {
      if (this.new_char.skills[i] == skill) {
        this.new_char.skills.splice(i, 1);
        this.new_char.current_points -= skill.cost * skill.level
      }
    }
  }
  openModal() {
    this.profileModal = this.modalCtrl.create(ModalSkills, { skills: this.new_char.skills })
    this.profileModal.present();
    this.profileModal.onDidDismiss(skill => {
      if (skill != null) {
        skill.level = 1
        this.new_char.skills.push(skill)
        this.new_char.current_points -= skill.cost
      }
    })
  }
  addSkillLevel(skill: Skill) {
    var index = this.new_char.skills.indexOf(skill);
    this.new_char.skills[index].level++;
    this.new_char.current_points += skill.cost
  }
  removeSkillLevel(skill: Skill) {
    var index = this.new_char.skills.indexOf(skill);
    this.new_char.skills[index].level--;
    this.new_char.current_points -= skill.cost
  }
}
