import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Character } from '../../../models/Character';
import { Language } from '../../../models/Language';
import { CharacterResumePage } from '../character-resume/character-resume';
import { Constants } from '../../../models/Functions';
import { ModalLanguages } from '../modal-languages/modal-languages';

@Component({
  selector: 'page-character-languages',
  templateUrl: 'character-languages.html'
})
export class CharacterLanguagesPage {

  new_char: Character;
  profileModal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    //Getting data
    this.new_char = this.navParams.get('new_char');
  }
  goToNextPage() {
    this.navCtrl.push(CharacterResumePage, { new_char: this.new_char });
  }
  removeLanguage(language: Language) {
    for (var i = 0; i < this.new_char.languages.length; i++) {
      if (this.new_char.languages[i].name == language.name) {
        this.new_char.languages.splice(i, 1);
        if (i != 0) {
          this.new_char.current_points -= language.level * Constants.Language
        }
      }
    }
  }
  openModal() {
    this.profileModal = this.modalCtrl.create(ModalLanguages, { languages: this.new_char.languages })
    this.profileModal.present();
    this.profileModal.onDidDismiss(language => {
      if (language != undefined) {
        if (this.new_char.languages.length == 0) {
          language.level = 4
        } else {
          language.level = 1
          this.new_char.current_points += Constants.Language
        }
        this.new_char.languages.push(language)
      }
    })
  }
  addLanguageLevel(language: Language) {
    var index = this.new_char.languages.indexOf(language);
    this.new_char.languages[index].level++;
    this.new_char.current_points += Constants.Language
  }
  removeLanguageLevel(language: Language) {
    var index = this.new_char.languages.indexOf(language);
    this.new_char.languages[index].level--;
    this.new_char.current_points -= Constants.Language
  }
  getLanguageDescription(language: Language): string {
    if (this.new_char.languages[0] == language) {
      return Constants.LanguageLevel[4]
    } else {
      return Constants.LanguageLevel[language.level]
    }
  }
}