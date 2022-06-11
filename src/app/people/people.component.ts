import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { PersonContact } from '../person-contact/person-contact.model';

@Component({
  selector: 'fty-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people = new FormArray([new FormControl()]);
  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.people.push(new FormControl());
  }

  removeAt(i: number) {
    if (this.people.at(i) != null) {
      this.people.removeAt(i);
    }
  }
  onSubmit() {
    this.people = new FormArray([new FormControl({name: '', email: ''})]);
  }
}
