import { CharacterApiInterface, CharacterApi } from '../../../models/Character';
import { ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'modal-character.html',
  templateUrl: 'modal-character.html'
})
export class ModalCharacters {
  characters: CharacterApi[] = []

  constructor(public viewCtrl: ViewController, public params: NavParams, public dataProvider: DataProvider) {
    this.updateCharacters()
  }

  updateCharacters() {
    if (this.characters == null || this.characters.length == 0) {
      this.dataProvider.getCharacters().then(res => {
        let data = res as CharacterApi[]
        for (let i = 0; i < data.length; i++) {
          var characterInterface: CharacterApiInterface = JSON.parse(JSON.stringify(data[i]))
          var character = new CharacterApi()
          character.id = characterInterface.Id
          character.name = characterInterface.Name
          character.description = characterInterface.Description
          this.characters.push(character)
        }
      })
        .catch(error => { console.log(error) });
    }
  }

  returnData(characterApi: CharacterApi) {
    this.viewCtrl.dismiss(characterApi)
  }
}