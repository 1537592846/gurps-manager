import { CharacterApi } from '../../../models/Character';
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
    if (this.characters == undefined || this.characters.length == 0) {
      this.dataProvider.getCharacters().then(res => {
        console.log(res)
        let data = res as any[]
        data.sort((n1, n2) => {
          if (n1.Id > n2.Id)
            return 1
          if (n1.Id < n2.Id)
            return -1
          return 0
        })
        for (let i = 0; i < data.length; i++) {
          var character = new CharacterApi()
          character.id = data[i].Id
          character.name = data[i].Name
          character.description = data[i].Description
          this.characters.push(character)
        }
      })
        .catch(error => { alert(error) });
    }
  }

  returnData(characterApi: CharacterApi) {
    this.viewCtrl.dismiss(characterApi)
  }
}