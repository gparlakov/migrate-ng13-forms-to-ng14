import { Component, forwardRef, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { PersonContact } from './person-contact.model';

@Component({
  selector: 'fty-person-contact',
  templateUrl: './person-contact.component.html',
  styleUrls: ['./person-contact.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PersonContactComponent),
      multi: true,
    },
  ],
})
export class PersonContactComponent implements OnInit, ControlValueAccessor {
  form = new FormGroup({
    name: new FormControl(),
    email: new FormControl('', Validators.email),
  });
  onChange: (p: PersonContact) => void = () => {};
  onTouched: () => void = () => {};
  subs: Subscription = new Subscription();

  get email(): FormControl {
    return this.form.controls['email'] as FormControl;
  }

  constructor() {}

  writeValue(p: PersonContact): void {
    if (p != null && 'name' in p) {
      this.form.setValue(p);
    } else {
      this.form.reset();
    }
  }
  registerOnChange(fn: (p: PersonContact) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
    this.subs.add(
      this.form.valueChanges.subscribe((v) => {
        this.onChange(v);
      })
    );
  }

  onNameInputBlur() {
    this.onTouched();
  }
  onEmailInputBlur() {
    this.onTouched();
  }
}
