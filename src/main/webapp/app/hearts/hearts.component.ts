import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-hearts',
  templateUrl: './hearts.component.html',
  styleUrls: ['./hearts.component.scss'],
})
export class HeartsComponent implements OnInit {
  public percentage = 0;
  private positive = 0;
  private negative = 0;

  ngOnInit(): void {
    this.positive = 12;
    this.negative = 3;
    this.updatePercentage();
  }

  numberOfVotes(): number {
    return this.positive + this.negative;
  }

  updatePercentage(): void {
    this.percentage = (this.positive / (this.positive + this.negative)) * 100;
  }

  setPositive(n: number): void {
    this.positive = n;
    this.updatePercentage();
  }

  setNegative(n: number): void {
    this.negative = n;
    this.updatePercentage();
  }
}
