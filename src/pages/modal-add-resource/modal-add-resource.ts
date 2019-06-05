import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ViewController, NavParams } from 'ionic-angular'
import { Component } from '@angular/core'

@Component({
  selector: 'modal-add-resource.html',
  templateUrl: 'modal-add-resource.html'
})
export class ModalAddResource {
  resources: number
  form: FormGroup

  constructor(public viewCtrl: ViewController, public formBuilder: FormBuilder, public params: NavParams) {
    this.resources = params.get("resources")
    this.form = this.formBuilder.group({
      value: ['', Validators.compose([Validators.pattern('[0-9]*')])],
      operation:[]
    })
  }
  returnData() {
    var form = this.form.getRawValue();
    if (this.form.valid) {
      var finalValue=0
      switch (form.operation) {
        case "add": {
          finalValue=1*form.value
          break
        }
        case "remove": {
          finalValue=-1*form.value
          break
        }
        case "all": {
          finalValue=-1*this.resources
          break
        }
        default:{
          finalValue=1*form.value
          break
        }
      }
      this.viewCtrl.dismiss(finalValue).catch(()=>alert())
    }
    else {
      this.form.markAsPending()
    }
  }
}