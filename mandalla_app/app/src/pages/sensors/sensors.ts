import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from "../../providers/http-service/http-service";
/**
 * Generated class for the SensorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sensors',
  templateUrl: 'sensors.html',
})
export class SensorsPage {
  sensors: any;
  analytics: any;
  url: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpServiceProvider) {
    this.url = this.navParams.get('url');
    if (this.url) {
      this.sensor().then((result) => {
        console.log(JSON.parse(result['_body']));
        this.sensors = JSON.parse(result['_body'])
      });
    } else {
      this.list().then((result) => {
        console.log(JSON.parse(result['_body']));
        this.sensors = JSON.parse(result['_body'])
        this.sensors = this.sensors['sensors']
      });
    }
  }
  /**
   * list
   */
  public list() {
    return new Promise((resolve, reject) => {
      this.http.api('/sensors').then((result) => {
        resolve(result);
      });
    });
  }
  /**
   * sensor
   */
  public sensor() {
    return new Promise((resolve, reject) => {
      this.http.api(this.url).then((result) => {
        resolve(result);
      });
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SensorsPage');
  }

}
