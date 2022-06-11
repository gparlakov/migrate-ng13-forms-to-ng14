import { Component, OnInit, Optional, Self } from '@angular/core';
import { NgControl, Validators, FormGroup, FormControl } from '@angular/forms';
import { EventForm, eventDefault } from './event-form.model';


const { dateStart: defaultDateStart, timeStart: defaultTimeStart } = eventDefault();

@Component({
  selector: 'fty-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  public form = new FormGroup({
    eventName: new FormControl(undefined, Validators.required),
    location: new FormControl(),
    dateStart: new FormControl(defaultDateStart),
    timeStart: new FormControl(defaultTimeStart)
  })
  constructor(@Optional() @Self() directive: NgControl) { }

  ngOnInit(): void {

  }
  onNameInputBlur() {
    // this.onTouch();
  }
  onLocationInputBlur() {
    // this.onTouch();
  }
  onStartDateInputBlur() {
    // this.onTouch();
  }
  onStartTimeInputBlur() {
    // this.onTouch();
  }
}
