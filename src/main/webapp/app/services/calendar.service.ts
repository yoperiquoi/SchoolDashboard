import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarResponseModel } from 'app/models/calendar-response.model';
import { environment } from 'environment/environnement.dev';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  apiCalendarUrl: string;
  constructor(private httpClient: HttpClient) {
    this.apiCalendarUrl = environment.apiCalendarEndpoint;
  }

  getCalendarEvents(): Observable<CalendarResponseModel> {
    this.getActualDateFormated();
    return this.httpClient.get<CalendarResponseModel>(this.apiCalendarUrl, {
      params: {
        timeMax: this.getNextDateFormated(),
        timeMin: this.getActualDateFormated(),
        timeZone: 'Europe/Paris',
        key: 'APIKEY',
      },
    });
  }

  getActualDateFormated(): string {
    const date = new Date();
    date.setHours(0, 0, 0);
    const datePipe = new DatePipe('fr-FR');
    return <string>datePipe.transform(date, 'yyyy-MM-ddTHH:mm:ss-HH:mm:ss');
  }

  getNextDateFormated(): string {
    const date = new Date();
    date.setHours(20, 0, 0);
    date.setDate(date.getDate() + 5);
    const datePipe = new DatePipe('fr-FR');
    return <string>datePipe.transform(date, 'yyyy-MM-ddTHH:mm:ss-HH:mm:ss');
  }
}
