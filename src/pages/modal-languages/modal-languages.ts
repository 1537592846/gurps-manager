import { Language } from '../../../models/Language';
import { ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'modal-languages.html',
  templateUrl: 'modal-languages.html'
})
export class ModalLanguages {
  languages: Language[] = []
  char_languages: Language[] = []

  constructor(public viewCtrl: ViewController, public params: NavParams, public dataProvider: DataProvider) {
    this.updateLanguages()
    this.updateCharLanguages()
  }

  updateCharLanguages() {
    this.char_languages = this.params.get("languages")
  }

  updateLanguages() {
    if (this.languages == undefined || this.languages.length == 0) {
      this.dataProvider.getLanguages().then(res => {
        let data = res as any[]
        for (let i = 0; i < data.length; i++) {
          var language = new Language
          language.id = data[i].Id
          language.name = data[i].Name
          language.description = data[i].Description
          language.level = data[i].Level
          language.levelCap = data[i].LevelCap
          this.languages.push(language)
        }
      })
        .catch(error => { console.log(error) });
    }
  }

  notInCharList(language: Language): boolean {
    for (let i = 0; i < this.char_languages.length; i++) {
      if (this.char_languages[i].name == language.name) {
        return false
      }
    }
    return true
  }

  returnData(language: Language) {
    this.viewCtrl.dismiss(language)
  }
}