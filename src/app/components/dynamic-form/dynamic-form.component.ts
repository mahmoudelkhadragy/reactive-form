import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      email: '',
      phones: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: '',
      phones: this.fb.array([]),
    });
  }

  // getter to get formArray from myForm
  get phoneForms(): FormArray {
    return this.myForm.get('phones') as FormArray;
  }

  // method to add formgroup in formArray
  addPhone(): void {
    this.phoneForms.push(
      new FormGroup({
        area: new FormControl(''),
        prefix: new FormControl(''),
        line: new FormControl(''),
      })
    );
  }

  deletePhone(i: number): void {
    this.phoneForms.removeAt(i);
  }
}
