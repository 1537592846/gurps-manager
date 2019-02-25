import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ViewController, NavParams } from 'ionic-angular'
import { Component } from '@angular/core'

@Component({
  selector: 'modal-add-resource.html',
  templateUrl: 'modal-add-resource.html'
})
export class ModalAddResource {
  positiveValue: boolean
  value: number
  form: FormGroup

  constructor(public viewCtrl: ViewController, public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      value: ['', Validators.compose([Validators.pattern('[0-9]*')])]
    })
  }

  returnData() {

    if (this.positiveValue)
      this.viewCtrl.dismiss(this.value)
    else
      this.viewCtrl.dismiss(-1 * this.value)
  }
}