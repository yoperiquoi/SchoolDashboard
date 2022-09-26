import { FormStyle, getLocaleDayNames, getLocaleMonthNames, TranslationWidth } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HourService {
  private now: Date = new Date();
  private locale = navigator.languages[0];
  private readonly dayNames = getLocaleDayNames(this.locale, FormStyle.Standalone, TranslationWidth.Wide);
  private readonly monthNames = getLocaleMonthNames(this.locale, FormStyle.Standalone, TranslationWidth.Wide);

  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }

  public setLocale(locale: string): void {
    this.locale = locale;
  }

  public day(): string {
    return this.dayNames[this.now.getDay()];
  }

  public minutes(): string {
    return this.now.getMinutes().toLocaleString('fr-FR', { minimumIntegerDigits: 2, useGrouping: false });
  }

  public hour(): string {
    return this.now.getHours().toLocaleString('fr-FR', { minimumIntegerDigits: 2, useGrouping: false });
  }

  public dayNumber(): string {
    return this.now.getDate().toString();
  }

  public month(): string {
    return this.monthNames[this.now.getMonth()];
  }
}
