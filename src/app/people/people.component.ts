import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap, take } from 'rxjs/operators';
import { forEachControlIn } from '../form-utils';
import { PersonContact } from '../person-contact/person-contact.model';

@Component({
  selector: 'fty-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  @ViewChild('formIsValid', { static: true })
  public formIsValidDialogTemplate?: TemplateRef<unknown>;

  people = new FormArray([new FormControl()]);
  get peopleControls(): FormControl[] {
    return this.people.controls as FormControl[];
  }
  constructor(private snackbar: MatSnackBar, private dialog: MatDialog) {}

  ngOnInit(): void {}

  add() {
    this.people.push(new FormControl());
  }

  removeAt(i: number) {
    if (this.people.at(i) != null) {
      this.people.removeAt(i);
    }
  }
  onSubmit() {
    forEachControlIn(this.people).call(
      'markAsTouched',
      'updateValueAndValidity'
    );
    if (this.people.valid) {
      this.dialog
        .open(this.formIsValidDialogTemplate!)
        .afterClosed()
        .pipe(take(1))
        .subscribe(() => {
          this.people = new FormArray([
            new FormControl({ name: '', email: '' }),
          ]);
        });
    } else {
      this.snackbar.open('Invalid: People form', 'OK', {
        verticalPosition: 'top',
        politeness: 'assertive',
        panelClass: 'invalid-form-for-people-component-specific-1231421123',

      });
    }
  }
}
