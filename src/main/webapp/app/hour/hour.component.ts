import { Component } from '@angular/core';
import { HourService } from 'app/services/hour.service';

@Component({
  selector: 'jhi-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.scss'],
})
export class HourComponent {
  private readonly hourService;

  constructor(hourService: HourService) {
    this.hourService = hourService;
  }

  public day(): string {
    return this.hourService.day();
  }

  public minutes(): string {
    return this.hourService.minutes();
  }

  public hour(): string {
    return this.hourService.hour();
  }

  public dayNumber(): string {
    return this.hourService.dayNumber();
  }

  public month(): string {
    return this.hourService.month();
  }
}
