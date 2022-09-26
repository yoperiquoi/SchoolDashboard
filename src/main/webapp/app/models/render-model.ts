import { LocalDate } from '../entities/local-date';

export class Render {
  public readonly title: string;

  public readonly icon: string;

  public readonly date: LocalDate;

  public constructor(title: string, icon: string, date: LocalDate) {
    this.title = title;
    this.icon = icon;
    this.date = date;
  }
}
