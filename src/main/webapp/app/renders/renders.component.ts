import { Component, OnInit } from '@angular/core';
import { Render } from '../models/render-model';
import { LocalDate } from '../entities/local-date';

@Component({
  selector: 'jhi-renders',
  templateUrl: './renders.component.html',
  styleUrls: ['./renders.component.scss'],
})
export class RendersComponent implements OnInit {
  public displayedRenders: Render[] = [];

  ngOnInit(): void {
    this.displayedRenders = this.getLastRenders();
  }

  /**
   * Get the last events from various sources.
   *
   * @return An array sorted by date (the latest are first).
   */
  getLastRenders(numberOfRenders?: number): Render[] {
    const lastRenders = [
      new Render('Entreprise', '🏢', new LocalDate('2022-03-25T14:00:00')),
      new Render('Rapport', '📙', new LocalDate('2022-12-18T18:00:00')),
    ];

    return lastRenders.slice(numberOfRenders);
  }
}
