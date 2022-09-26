import { Component, OnInit } from '@angular/core';
import { JokeService } from 'app/services/jokes.service';

@Component({
  selector: 'jhi-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent implements OnInit {
  joke!: string;
  answer!: string;

  private readonly jokeService;
  constructor(jokeService: JokeService) {
    this.jokeService = jokeService;
  }

  ngOnInit(): void {
    this.jokeService.getRandomJoke().subscribe(response => {
      this.joke = response.joke;
      this.answer = response.answer;
    });
  }
}
