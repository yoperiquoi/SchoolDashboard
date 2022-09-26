import { Component, Input, OnInit } from '@angular/core';
import { EventModel } from 'app/models/event-model';

@Component({
  selector: 'jhi-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  backgroundColor!: string;
  @Input() event!: EventModel;

  ngOnInit(): void {
    this.backgroundColor = this.event.backgroundColor;
  }
}
