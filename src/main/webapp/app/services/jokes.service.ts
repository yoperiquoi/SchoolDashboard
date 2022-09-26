import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment/environnement.dev';
import { JokeResponseModel } from 'models/joke-response.model';
import { Observable } from 'rxjs';

@Injectable()
export class JokeService {
  apiJokeUrl: string;
  constructor(private httpClient: HttpClient) {
    this.apiJokeUrl = environment.apiJokeEndpoint;
  }

  getRandomJoke(): Observable<JokeResponseModel> {
    return this.httpClient.get<JokeResponseModel>(this.apiJokeUrl, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${environment.apiJokeToken}`,
      }),
    });
  }
}
