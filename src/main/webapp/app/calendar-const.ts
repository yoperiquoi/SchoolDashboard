import { LuncheventConst } from './lunchEvent-const';
import { DayModel } from './models/day-model';
import { EventModel } from './models/event-model';

export class CalendarConst {
  public static listDays: DayModel[] = [
    new DayModel('Lundi', '16', []),
    new DayModel('Mardi', '17', []),
    new DayModel('Mercredi', '18', []),
    new DayModel('Jeudi', '19', []),
    new DayModel('Vendredi', '20', []),
  ];
}
