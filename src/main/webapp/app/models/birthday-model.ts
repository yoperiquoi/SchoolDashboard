import { LocalDate } from '../entities/local-date';

export class Birthday {
  public readonly name: string;

  public readonly icon: string;

  public readonly date: LocalDate;

  public constructor(name: string, date: LocalDate) {
    this.name = name;
    this.icon = '🎂';
    this.date = date;
  }
}
