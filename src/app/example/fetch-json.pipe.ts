import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/delay';

@Pipe({
  name: 'fetch',
  pure: false
})
export class FetchJsonPipe implements PipeTransform {
  private cachedData: any = null;
  private cachedUrl = '';

  constructor(private http: HttpClient) {
  }

  transform(url: string): any {
    if (url !== this.cachedUrl) {
      this.cachedData = null;
      this.cachedUrl = url;
      this.http.get(url).delay(1000)
        .subscribe(result => this.cachedData = result);
    }

    return this.cachedData;
  }
}
