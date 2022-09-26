import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss'],
})
export class PollComponent implements OnInit {
  public percentage = 0;
  private positive = 0;
  private negative = 0;

  ngOnInit(): void {
    this.positive = 6;
    this.negative = 4;
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
