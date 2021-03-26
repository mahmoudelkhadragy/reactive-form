import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      email: '',
      message: '',
      career: '',
    });
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: '',
      message: '',
      career: '',
    });
    this.myForm.valueChanges.subscribe(console.log);
  }
}
