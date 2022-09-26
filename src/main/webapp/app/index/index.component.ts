import { Component } from '@angular/core';

@Component({
  selector: 'jhi-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  public readonly CALENDAR = 0;
  public readonly TROMBINOSCOPE = 1;
  public readonly VIDEO = 2;
  public readonly GALLERY = 3;

  public tab: number = this.CALENDAR;

  setTab(tab: number): void {
    this.tab = tab;
  }
}
