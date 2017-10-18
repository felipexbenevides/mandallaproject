import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from "../../providers/http-service/http-service";

/**
 * Generated class for the PlantingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var Chart: any;

@Component({
  selector: 'page-planting',
  templateUrl: 'planting.html',
})
export class PlantingPage {
  @ViewChild('myChart1') myChart1: any;
  @ViewChild('myChart2') myChart2: any;
  @ViewChild('myChart3') myChart3: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpServiceProvider) {


  }

  public randomScalingFactor() {
    return Math.round(Math.random() * 100);
  }

  public circle1() {
    var ctx1 = this.myChart1.nativeElement.getContext('2d');
    var myChart1 = new Chart(ctx1, {
      type: 'doughnut',
      data: {
        labels: [
          "A1",
          "A2",
          "A3",
          "A4",
          "A5"
        ],
        datasets: [
          {
            data: [
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 206, 86, 0.2)'
            ],
            label: 'circulo'
          },
          {
            data: [
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 206, 86, 0.2)'
            ],
            label: 'circulo'
          },
          {
            data: [
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 206, 86, 0.2)'
            ],
            label: 'circulo'
          }

        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'QUALIDADE DE VIDA'
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    });
  }
  public circle2() {
    this.myChart1.nativeElement.style.display = 'none';
    var ctx2 = this.myChart2.nativeElement.getContext('2d');
    var myChart2 = new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: [
          "A1",
          "A2",
          "A3",
          "A4",
          "A5"
        ],
        datasets: [
          {
            data: [
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 206, 86, 0.2)'
            ],
            label: 'circulo'
          },
          {
            data: [
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 206, 86, 0.2)'
            ],
            label: 'circulo'
          },
          {
            data: [
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 206, 86, 0.2)'
            ],
            label: 'circulo'
          },
          {
            data: [
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 206, 86, 0.2)'
            ],
            label: 'circulo'
          },
          {
            data: [
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 206, 86, 0.2)'
            ],
            label: 'circulo'
          }

        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'PRODUTIVIDADE ECONÔMICA'
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    });

  }
  public circle3() {
    this.myChart1.nativeElement.style.display = 'none';
    this.myChart2.nativeElement.style.display = 'none';
    
    var ctx3 = this.myChart3.nativeElement.getContext('2d');
    var myChart3 = new Chart(ctx3, {
      type: 'doughnut',
      data: {
        labels: [
          "A1",
          "A2",
          "A3",
          "A4",
          "A5"
        ],
        datasets: [
          {
            data: [
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),

            ],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(255, 206, 86, 0.2)'
            ],
            label: 'circulo'
          }

        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'EQUILIBRIO AMBIENTAL'
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    });
  }
  ionViewDidLoad() {

    var url = this.navParams.get('url');
    switch (url) {
      case '/circles/life':
      this.circle1();
        break;
      case '/circles/economic':
      this.circle2();
        break;
      case '/circles/environment':
      this.circle3();
        break;

      default:
        break;
    }
    console.log('ionViewDidLoad PlantingPage');
  }

}
