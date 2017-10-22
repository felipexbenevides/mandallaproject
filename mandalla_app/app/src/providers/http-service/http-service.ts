import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {
  private headers: any;
  server: any = 'http://localhost';

  constructor(public http: Http) {
    this.headers = new Headers();
    this.headers.set('content-type', 'application/json');
    console.log('Hello HttpServiceProvider Provider');
  }

  /**
   * api
   */
  public api(url?: any, data?: any) {
    return new Promise((resolve, reject) => {
      console.log('http://localhost' + url);
      if (data) {
        this.http.post('http://localhost' + url, data, { headers: this.headers }).subscribe((res) => {
          console.log(res);
          resolve(res);
        });
      } else {
        this.http.get('http://localhost' + url).subscribe((res) => {
          console.log(res);
          resolve(res);
        });
      }
    });
  }

}
