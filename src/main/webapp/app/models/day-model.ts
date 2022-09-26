import { EventModel } from './event-model';

export class DayModel {
  constructor(public dayName: string, public dayDate: string, public events: EventModel[]) {}
  setDayName(name: string): void {
    this.dayName = name;
  }
  setDayDate(date: string): void {
    this.dayDate = date;
  }
  addEvent(eventName: string, eventHour: string, backgroundColor: string, eventArea: string): void {
    this.events.push(new EventModel(eventName, eventHour, backgroundColor, eventArea));
  }

  addLunchEvent(): void {
    this.events.push(new EventModel('Repas', '', '', ''));
  }
}
