import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { CalendarResponseModel } from 'app/models/calendar-response.model';
import { DayModel } from 'app/models/day-model';
import { EventResponseModel } from 'app/models/event-response.model';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  days!: CalendarResponseModel;
  newDayList!: DayModel[];
  dayList!: CalendarResponseModel;

  constructor() {
    this.dayList = {
      items: [
        {
          summary: 'Compréhension du travail et des entreprises - Cours1',
          location: 'NA-J145',
          start: {
            dateTime: '2022-01-05T11:00:00+01:00',
          },
          end: {
            dateTime: '2022-01-05T12:15:00+01:00',
          },
        },
        {
          summary: 'Anglais - FIL1-N-ANG-GPE1',
          location: 'NA-B127/129 = centre de ressources',
          start: {
            dateTime: '2022-01-04T09:30:00+01:00',
          },
          end: {
            dateTime: '2022-01-04T10:45:00+01:00',
          },
        },
        {
          summary: 'Anglais - FIL1-N-ANG-GPE1',
          location: 'NA-B127/129 = centre de ressources',
          start: {
            dateTime: '2022-01-04T08:00:00+01:00',
          },
          end: {
            dateTime: '2022-01-04T09:15:00+01:00',
          },
        },
        {
          summary: 'Anglais - FIL1-N-ANG-GPE1',
          location: 'NA-B127/129 = centre de ressources',
          start: {
            dateTime: '2022-01-04T08:00:00+01:00',
          },
          end: {
            dateTime: '2022-01-04T09:15:00+01:00',
          },
        },
        {
          summary: 'Anglais - FIL1-N-ANG-GPE1',
          location: 'NA-B127/129 = centre de ressources',
          start: {
            dateTime: '2022-01-04T08:00:00+01:00',
          },
          end: {
            dateTime: '2022-01-04T09:15:00+01:00',
          },
        },
      ],
    };
  }

  resetDayList(): DayModel[] {
    return [
      new DayModel('Lundi', '', []),
      new DayModel('Mardi', '', []),
      new DayModel('Mercredi', '', []),
      new DayModel('Jeudi', '', []),
      new DayModel('Vendredi', '', []),
    ];
  }
  getDayList(): void {
    this.dateByDay();
    this.newDayList = this.getDateFormated();
  }

  setDayList(dayList: CalendarResponseModel): void {
    this.days = dayList;
    this.newDayList = this.resetDayList();
  }

  getDateName(day: EventResponseModel): string {
    const datTime = new Date(day.start.dateTime);
    return datTime.toLocaleDateString('fr-FR', { weekday: 'long' });
  }

  setBackgroundColor(event: EventResponseModel): string {
    const tampon = this.getSummaryFormated(event);
    switch (tampon) {
      case 'Anglais ':
        return '#FFE68E';
      case 'IHM ':
        return '#C4F2C7';
      case 'Mathématiques discrètes ':
        return '#7986CB';
      case 'Mathématiques de base':
        return '#3F51B5';
      case 'Architectures distribuées':
        return '#F0807D';
      case 'Entreprise ':
        return '#E2E2E2';
      case 'APSA ':
        return '#D99E82';
    }
    return '#D99E82';
  }

  getDateFormated(): DayModel[] {
    const tampon: DayModel[] = [];
    this.newDayList.forEach(day => {
      const jour = new Date(day.dayDate);
      const datePipe = new DatePipe('en-US');
      day.dayDate = <string>datePipe.transform(jour, 'dd');
      tampon.push(day);
    });
    return tampon;
  }

  getHourFormated(event: EventResponseModel): string {
    const dateTime = new Date(event.start.dateTime);
    const datePipe = new DatePipe('en-US');
    return <string>datePipe.transform(dateTime, `HH'h'mm`);
  }

  getSummaryFormated(event: EventResponseModel): string {
    const summary = event.summary;
    return summary.split('-')[0].split(':')[0].substring(0, 25);
  }

  getLocationFormated(event: EventResponseModel): string {
    const summary = event.location;
    return summary.split('=')[0];
  }
  sortDate(): void {
    this.days.items.sort((val1, val2) => <any>new Date(val1.start.dateTime) - <any>new Date(val2.start.dateTime));
  }

  sortDateFormated(): void {
    this.newDayList.sort((val1, val2) => <any>new Date(val1.dayDate) - <any>new Date(val2.dayDate));
  }

  dateByDay(): void {
    this.sortDate();
    this.days.items.forEach(event => {
      this.switchSortFunction(event);
    });
    this.sortDateFormated();
  }

  addEventConditions(event: EventResponseModel, dayNumber: number): void {
    const dateStart = new Date(event.start.dateTime);
    const dateTampon = new Date(event.start.dateTime);
    const dateEnd = new Date(event.end.dateTime);
    if (<any>dateEnd.getTime() - <any>dateStart.getTime() > 9900000) {
      this.newDayList[dayNumber].addEvent(
        this.getSummaryFormated(event),
        this.getHourFormated(event),
        this.setBackgroundColor(event),
        this.getLocationFormated(event)
      );
      dateTampon.setHours(dateStart.getHours() + 1, dateStart.getMinutes() + 30);
      event.start.dateTime = dateTampon.toString();
      this.newDayList[dayNumber].addEvent(
        this.getSummaryFormated(event),
        this.getHourFormated(event),
        this.setBackgroundColor(event),
        this.getLocationFormated(event)
      );
      dateTampon.setHours(dateTampon.getHours() + 1, dateTampon.getMinutes() + 30);
      event.start.dateTime = dateTampon.toString();
      this.newDayList[dayNumber].addEvent(
        this.getSummaryFormated(event),
        this.getHourFormated(event),
        this.setBackgroundColor(event),
        this.getLocationFormated(event)
      );
    } else if (<any>dateEnd.getTime() - <any>dateStart.getTime() < 9900000 && <any>dateEnd.getTime() - <any>dateStart.getTime() > 4500000) {
      this.newDayList[dayNumber].addEvent(
        this.getSummaryFormated(event),
        this.getHourFormated(event),
        this.setBackgroundColor(event),
        this.getLocationFormated(event)
      );
      dateTampon.setHours(dateStart.getHours() + 1, dateStart.getMinutes() + 30);
      event.start.dateTime = dateTampon.toString();
      this.newDayList[dayNumber].addEvent(
        this.getSummaryFormated(event),
        this.getHourFormated(event),
        this.setBackgroundColor(event),
        this.getLocationFormated(event)
      );
    } else {
      this.newDayList[dayNumber].addEvent(
        this.getSummaryFormated(event),
        this.getHourFormated(event),
        this.setBackgroundColor(event),
        this.getLocationFormated(event)
      );
    }
  }

  switchSortFunction(event: EventResponseModel): void {
    const actualDayName = this.getDateName(event);
    switch (actualDayName) {
      case 'lundi':
        this.newDayList[0].setDayDate(event.start.dateTime);
        if (this.newDayList[0].events.length === 3) {
          this.newDayList[0].addLunchEvent();
        }
        this.addEventConditions(event, 0);
        break;
      case 'mardi':
        this.newDayList[1].setDayDate(event.start.dateTime);
        if (this.newDayList[1].events.length === 3) {
          this.newDayList[1].addLunchEvent();
        }
        this.addEventConditions(event, 1);
        break;
      case 'mercredi':
        this.newDayList[2].setDayDate(event.start.dateTime);
        if (this.newDayList[2].events.length === 3) {
          this.newDayList[2].addLunchEvent();
        }
        this.addEventConditions(event, 2);
        break;
      case 'jeudi':
        this.newDayList[3].setDayDate(event.start.dateTime);
        if (this.newDayList[3].events.length === 3) {
          this.newDayList[3].addLunchEvent();
        }
        this.addEventConditions(event, 3);
        break;
      case 'vendredi':
        this.newDayList[4].setDayDate(event.start.dateTime);
        if (this.newDayList[4].events.length === 3) {
          this.newDayList[4].addLunchEvent();
        }
        this.addEventConditions(event, 4);
        break;
      case 'samedi':
        this.newDayList[5].setDayDate(event.start.dateTime);
        if (this.newDayList[5].events.length === 3) {
          this.newDayList[5].addLunchEvent();
        }
        this.addEventConditions(event, 5);
        break;
      case 'dimanche':
        this.newDayList[6].setDayDate(event.start.dateTime);
        if (this.newDayList[6].events.length === 3) {
          this.newDayList[6].addLunchEvent();
        }
        this.addEventConditions(event, 6);
        break;
    }
  }
}
