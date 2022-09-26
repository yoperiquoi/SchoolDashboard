import { LocalDate } from './local-date';

export class Event {
  public readonly label: string;

  public readonly image: string;

  public readonly date: LocalDate;

  public thumbsUp: number;

  public constructor(label: string, image: string, date: LocalDate, thumbsUp?: number) {
    this.label = label;
    this.image = image;
    this.date = date;

    if (thumbsUp) {
      this.thumbsUp = thumbsUp;
    } else {
      this.thumbsUp = 0;
    }
  }

  public addThumbUp(): void {
    this.thumbsUp++;
  }

  public removeThumbUp(): void {
    this.thumbsUp--;
  }
}
