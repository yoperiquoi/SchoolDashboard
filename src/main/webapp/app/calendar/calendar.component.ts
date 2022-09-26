import { Component, OnInit } from '@angular/core';
import { DayModel } from 'app/models/day-model';
import { CalendarService } from 'app/services/calendar.service';
import { DateService } from 'app/services/date.service';

@Component({
  selector: 'jhi-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  listDays!: DayModel[];
  events!: string;
  constructor(private calendarService: CalendarService, private dateService: DateService) {}

  ngOnInit(): void {
    this.calendarService.getCalendarEvents().subscribe(response => {
      this.dateService.setDayList(response);
      this.dateService.getDayList();
      this.listDays = this.dateService.newDayList;
    });
  }
}
