import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-some-object-form',
  templateUrl: './some-object-form.component.html',
  styleUrls: ['./some-object-form.component.scss']
})
export class SomeObjectFormComponent {
  someObjectForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.someObjectForm = formBuilder.group({
      ports: new FormGroup({
        portOfLoading: new FormControl({code: 'PLGDY', name: 'Gdynia'}),
        portOfDischarge: new FormControl({code: 'DEHAM', name: 'Hamburg'})
      }, (control: AbstractControl) => {
        const portOfLoading = control.get('portOfLoading');
        const portOfDischarge = control.get('portOfDischarge');

        if (portOfLoading.value && portOfDischarge.value && portOfLoading.value.code === portOfDischarge.value.code) {
          return {
            samePortsSelected: true
          };
        }

        return null;
      })
    });
  }

  save() {
    console.log(this.someObjectForm.value);
  }
}
