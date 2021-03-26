import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss'],
})
export class NestedFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });
    this.myForm = this.fb.group({
      email: '',
      homePhone: phone,
      cellPhone: phone,
    });
  }

  ngOnInit(): void {
    this.initalForm();
  }

  initalForm(): void {
    // const phone = this.fb.group({
    //   area: [],
    //   prefix: [],
    //   line: [],
    // });
    this.myForm = this.fb.group({
      email: '',
      homePhone: new FormGroup({
        area: new FormControl(''),
        prefix: new FormControl(''),
        line: new FormControl(''),
      }),
      cellPhone: new FormGroup({
        area: new FormControl(''),
        prefix: new FormControl(''),
        line: new FormControl(''),
      }),
    });
  }
}
