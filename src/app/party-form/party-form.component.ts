// import { Component, OnInit } from '@angular/core';
// import { PartyForm } from './party-form.model';
// import { take } from 'rxjs/operators';
// import { eventDefault } from '../event-form/event-form.model';
// import { PersonContact } from '../person-contact/person-contact.model';
// import { FormGroup, FormControl, FormArray, AbstractControl } from '@angular/forms';

// @Component({
//   selector: 'fty-party-form',
//   templateUrl: './party-form.component.html',
//   styleUrls: ['./party-form.component.css'],
// })
// export class PartyFormComponent implements OnInit {
//   form = new FormGroup({
//     event: new FormControl({ disabled: true, value: eventDefault() }),
//     invitees: new FormArray([new FormControl()]),
//   });

//   get invitees() {
//     return this.form.controls['invitees'] as FormArray;
//   }

//   submitting = false;

//   constructor() {}

//   ngOnInit(): void {}

//   onPartyFormSubmit() {
//     if (!this.submitting) {
//       this.submitting = true;

//       // forEachControlIn(this.form)
//       //   // to show validation
//       //   .call('markAsTouched')
//       //   // to get the valid/invalid state from the "inner" components
//       //   // because we only receive the inner state on status changes or value changes
//       //   .call('updateValueAndValidity');

//       // if (this.form.pending) {
//       //   this.form.statusChanges.pipe(take(1)).subscribe(() => this.onPartyFormSubmit());
//       // } else if (this.form.valid) {
//       //   setTimeout(() => {
//       //     // do submit
//       //     this.submitting = false;
//       //     console.log(this.form.value);
//       //     console.log(this.form.getRawValue());
//       //   }, 5000);
//       // } else {
//       //   this.submitting = false;
//       // }
//     }
//   }

//   onAddInviteeClick() {
//     const c = new FormControl();
//     this.invitees.push(c);
//   }
//   onRemoveInviteeClick() {
//     if (Array.isArray(this.invitees.controls) && this.invitees.controls.length > 0) {
//       this.invitees.removeAt(this.invitees.controls.length - 1);
//     }
//   }

//   toggleEvent() {
//     const e = this.form.controls['event'];
//     e.enabled ? e.disable() : e.enable();
//   }
// }
