import { Component, OnInit, Optional, Self } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NgControl, Validators
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { forEachControlIn } from '../form-utils';
import { PersonContact } from './person-contact.model';

@Component({
  selector: 'fty-person-contact',
  templateUrl: './person-contact.component.html',
  styleUrls: ['./person-contact.component.css']
})
export class PersonContactComponent implements OnInit, ControlValueAccessor {
  form = new FormGroup({
    name: new FormControl(),
    email: new FormControl('', Validators.email),
  });
  onChange: (p: PersonContact) => void = () => {};
  onTouched: () => void = () => {};

  private touching: boolean = false;

  subs: Subscription = new Subscription();

  get email(): FormControl {
    return this.form.controls['email'] as FormControl;
  }

  constructor(@Self() @Optional() private  parentControl: NgControl) {
    if(parentControl !== null) {
      parentControl.valueAccessor = this;
    }
  }

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
    this.onTouched = () => {
      this.touching = true;
      fn();
      this.touching = false;
    }
  }

  ngOnInit(): void {
    forEachControlIn(this.form)
      .addValidatorsTo(this.parentControl?.control)
      .markAsDirtySimultaneouslyWith(this.parentControl?.control)
      .markAsTouchedSimultaneouslyWith(this.parentControl?.control, () => this.touching);

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
