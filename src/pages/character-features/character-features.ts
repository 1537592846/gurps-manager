import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Character } from '../../../models/Character'
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CharacterDisadvantagesPage } from '../character-disadvantages/character-disadvantages';

@Component({
  selector: 'page-character-features',
  templateUrl: 'character-features.html'
})
export class CharacterFeaturesPage {

  new_char: Character;
  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder:FormBuilder) {
    //Getting data
    this.new_char = this.navParams.get('new_char');
    this.form=this.formBuilder.group( {
        name: ['', Validators.compose([Validators.min(3),Validators.minLength(3),Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        age:['',Validators.compose([Validators.pattern('[0-9]*')])],
        height:['',Validators.compose([Validators.pattern('([0-9]*)|([0-9]*.[0-9]+)')])],
        weight:['',Validators.compose([Validators.pattern('([0-9]*)|([0-9]*.[0-9]+)')])],
        min_status: ['',Validators.compose([Validators.min(1),Validators.pattern('[0-9]*'), Validators.required])],
        max_points: ['',Validators.compose([Validators.min(1),Validators.pattern('[0-9]*'), Validators.required])],
        resources: ['',Validators.compose([Validators.min(0),Validators.pattern('[0-9]*'), Validators.required])],
        nt: ['',Validators.compose([Validators.min(1),Validators.pattern('[0-9]{1}'), Validators.required])],
        description:['', Validators.compose([Validators.minLength(3),Validators.pattern('[a-zA-Z .,]*'), Validators.required])]
    })
  }
  goToCharacterDisadvantages() {
    if (this.form.valid) {
      this.new_char.name=this.form.getRawValue().name
      this.new_char.age=this.form.getRawValue().age
      this.new_char.height=this.form.getRawValue().height
      this.new_char.weight=this.form.getRawValue().weight
      this.new_char.min_status=this.form.getRawValue().min_status
      this.new_char.max_points=this.form.getRawValue().max_points
      this.new_char.resources=this.form.getRawValue().resources
      this.new_char.nt=this.form.getRawValue().nt
      this.new_char.description=this.form.getRawValue().description
      this.navCtrl.push(CharacterDisadvantagesPage, { new_char: this.new_char });
    } else {
      this.form.markAsPending()
    }
  }
}