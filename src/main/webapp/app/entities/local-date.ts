import { FormStyle, getLocaleDayNames, getLocaleMonthNames, TranslationWidth } from '@angular/common';

export class LocalDate {
  private date: Date = new Date();
  private locale = navigator.languages[0];
  private readonly dayNames = getLocaleDayNames(this.locale, FormStyle.Standalone, TranslationWidth.Wide);
  private readonly monthNames = getLocaleMonthNames(this.locale, FormStyle.Standalone, TranslationWidth.Wide);

  constructor(value: string | number) {
    this.date = new Date(value);
  }

  public setLocale(locale: string): void {
    this.locale = locale;
  }

  public day(): string {
    return this.dayNames[this.date.getDay()];
  }

  public minutes(): string {
    return this.date.getMinutes().toLocaleString('fr-FR', { minimumIntegerDigits: 2, useGrouping: false });
  }

  public hour(): string {
    return this.date.getHours().toLocaleString('fr-FR', { minimumIntegerDigits: 2, useGrouping: false });
  }

  public dayNumber(): string {
    return this.date.getDate().toString();
  }

  public month(): string {
    return this.monthNames[this.date.getMonth()];
  }
}
