import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs/internal/Observable';

export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable()
export class ConfigService {
  configUrl = 'assets/api/config.json';

  constructor(private http: HttpClient) {
  }

  getConfig() {
    return this.http.get<Config>(this.configUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      )
  }

  getConfig_1() {
    return this.http.get(this.configUrl);
  }

  getConfig_2() {
    return this.http.get<Config>(this.configUrl);
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.configUrl, {observe: 'response'});
  }

  private handleError(response: HttpErrorResponse) {
    if (response.error instanceof ErrorEvent) {
      console.error('An error occurred: ', response.error.message)
    } else {
      console.error(`Backend returned code ${response.status}, ` +
        `body was: ${response.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
