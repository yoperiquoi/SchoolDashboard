import { Component, OnInit } from '@angular/core';
import { Birthday } from '../models/birthday-model';
import { LocalDate } from '../entities/local-date';

@Component({
  selector: 'jhi-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.scss'],
})
export class BirthdaysComponent implements OnInit {
  public displayedBirthdays: Birthday[] = [];

  ngOnInit(): void {
    this.displayedBirthdays = this.getLastBirthdays();
  }

  /**
   * Get the last events from various sources.
   *
   * @return An array sorted by date (the latest are first).
   */
  getLastBirthdays(numberOfBirthdays?: number): Birthday[] {
    const lastBirthdays = [new Birthday('Jules', new LocalDate('2022-04-02T14:00:00'))];

    return lastBirthdays.slice(numberOfBirthdays);
  }
}
