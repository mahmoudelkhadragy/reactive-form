import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';

// const emailRegex = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';

interface IndexSignature {
  [key: string]: FormControl;
}

@Component({
  selector: 'app-dynamic-reactive-form',
  templateUrl: './dynamic-reactive-form.component.html',
  styleUrls: ['./dynamic-reactive-form.component.scss'],
})
export class DynamicReactiveFormComponent implements OnInit {
  public form: FormGroup;

  person: { [key: string]: any } = {
    firstName: 'mahmoud',
    age: 27,
    job: 'front-end',
    status: 'single',
  };
  personProps: string[] = [];

  constructor(private fb: FormBuilder) {
    this.form = new FormGroup({});
    this.personProps = [];
  }

  ngOnInit(): void {
    const formObject: IndexSignature = {};
    for (const prop of Object.keys(this.person)) {
      formObject[prop] = new FormControl(this.person[prop]);
      this.personProps.push(prop);
    }
    this.form = new FormGroup(formObject);
  }
}
