import { LocalDate } from './local-date';

export class Post {
  public readonly author: string;

  public readonly text: string;

  public readonly image: string;

  public readonly date: LocalDate;

  public constructor(author: string, text: string, image: string, date: LocalDate) {
    this.author = author;
    this.text = text;
    this.image = image;
    this.date = date;
  }
}
