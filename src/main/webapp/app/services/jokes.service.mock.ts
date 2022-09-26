import { Injectable } from '@angular/core';
import { environment } from 'environment/environnement.dev';
import { JokeResponseModel } from 'models/joke-response.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class JokeServiceMock {
  apiJokeUrl: string;
  constructor() {
    this.apiJokeUrl = environment.apiJokeEndpoint;
  }

  getRandomJoke(): Observable<JokeResponseModel> {
    const jokeResponse: JokeResponseModel = {
      joke: 'Pourquoi est ce que le lapin est bleu ?',
      answer: 'Parce qu on lapin',
    };
    return of(jokeResponse);
  }
}
