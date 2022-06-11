import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
interface Tag {
  name: string;
  value: string;
}

@Component({
  selector: 'fty-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.css'],
})
export class TagsListComponent implements OnInit {
  form = new FormArray([]);

  constructor() {}

  ngOnInit(): void {}

  tags(): FormControl[] {
    return this.form.controls as FormControl[]
  }

  add() {
    this.form.push(new FormControl(''));
  }

  removeAt(i: number) {
    if (this.form.at(i) != null) {
      this.form.removeAt(i);
    }
  }
  onSubmit() {
    this.form = new FormArray([]);
  }
}
