import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {
  server: any = 'http://localhost';

  constructor(public http: Http) {
    console.log('Hello HttpServiceProvider Provider');
  }

  /**
   * api
   */
  public api(url?: any) {
    return new Promise ((resolve,reject)=>{
    console.log('http://localhost'+url);
      this.http.get('http://localhost'+url).subscribe((res)=>{
        console.log(res);
        resolve(res);        
      });
    });
  }

}
