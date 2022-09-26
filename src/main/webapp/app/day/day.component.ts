import { Component, Input, OnInit } from '@angular/core';
import { DayModel } from 'app/models/day-model';
import { EventModel } from 'app/models/event-model';

@Component({
  selector: 'jhi-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
})
export class DayComponent implements OnInit {
  @Input() day!: DayModel;
  listEvents!: EventModel[];

  ngOnInit(): void {
    this.listEvents = this.day.events;
  }
}
