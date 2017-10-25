import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from "../../providers/http-service/http-service";
/**
 * Generated class for the SensorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var Chart: any;

@Component({
  selector: 'page-sensors',
  templateUrl: 'sensors.html',
})
export class SensorsPage {
  @ViewChild('myChart1') myChart1: any;
  @ViewChild('myChart2') myChart2: any;
  @ViewChild('myChart3') myChart3: any;
  reads: any = [{ sensor: "1", reads: [{ value: "0" }] }, { sensor: "2", reads: [{ value: "0" }] }, { sensor: "3", reads: [{ value: "0" }] }]
  time: any = 500;
  sensors: any;
  analytics: any;
  url: any;
  ctx1: any = null;
  color:any = [{value: "secondary"},
  {value: "danger"},
  {value: "primary"}];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpServiceProvider) {
    (<any>window).myChart = {ctx1:'', ctx2:'', ctx3:''};    
    console.log(this.reads);
    this.url = this.navParams.get('url');
    if (this.url) {
      this.sensor().then((result) => {
        console.log(JSON.parse(result['_body']));
        this.sensors = JSON.parse(result['_body'])
      });
    } else {
      this.plotter();
    }
  }

  public plotter() {
    setTimeout(() => {
      this.list().then((result) => {
        console.log(JSON.parse(result['_body']));
        this.sensors = JSON.parse(result['_body'])
        this.sensors = this.sensors['sensors']
        console.log('sasdasd', this.sensors[0].sensors[0].value);
        (this.reads[0].reads).push({ "value": this.sensors[0].sensors[0].value });
        (this.reads[1].reads).push({ "value": this.sensors[1].sensors[0].value });
        (this.reads[2].reads).push({ "value": this.sensors[2].sensors[0].value });


        this.ctx1 = this.myChart1.nativeElement.getContext('2d');
        (<any>window).myChart.ctx1 = new Chart(this.ctx1, {
          type: 'line',
          data: {
            labels: this.reads[0].reads.map((item, index, c) => { return index }),
            datasets: [{
              label: this.sensors[0].sensors[0].name.replace("_", " ").toUpperCase(),
              data: this.reads[0].reads.map((item, index, c) => { return (item.value * 200 / 350) }),
              borderWidth: 1,
              fill: false,
              backgroundColor: "#008000",
              borderColor: "#008000",
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });

        var ctx2 = this.myChart2.nativeElement.getContext('2d');
        (<any>window).myChart.ctx2 = new Chart(ctx2, {
          type: 'line',
          data: {
            labels: this.reads[1].reads.map((item, index, c) => { return index }),
            datasets: [{
              label: this.sensors[1].sensors[0].name.replace("_", " ").toUpperCase(),
              data: this.reads[1].reads.map((item, index, c) => { return (item.value * 14 / 350) }),
              borderWidth: 1,
              fill: false,
              backgroundColor: "red",
              borderColor: "red",
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });


        var ctx3 = this.myChart3.nativeElement.getContext('2d');
        (<any>window).myChart.ctx3 = new Chart(ctx3, {
          type: 'line',
          data: {
            labels: this.reads[2].reads.map((item, index, c) => { return index }),
            datasets: [{
              label: this.sensors[2].sensors[0].name.replace("_", " ").toUpperCase(),
              data: this.reads[2].reads.map((item, index, c) => { return (item.value * 99 / 350) }),
              borderWidth: 1,
              fill: false,
              backgroundColor: "#0000FF",
              borderColor: "#0000FF",
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });



      });
      console.log((this.reads[0].reads).length);
      this.time = ((this.reads[0].reads).length) * 1000;
      this.plotter();
    }, this.time);
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
