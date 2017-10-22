import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from "../../providers/http-service/http-service";

/**
 * vermelho: #ff8487
 * amarelo: #faff91
 * verde: #c9ffc6
 * cinza: #dad3d5
 */

declare var Chart: any;

@Component({
  selector: 'page-circle-render',
  templateUrl: 'circle-render.html',
})
export class CircleRenderPage {
  @ViewChild('myChart1') myChart1: any;
  @ViewChild('myChart2') myChart2: any;
  @ViewChild('myChart3') myChart3: any;

  vermelho: string = '#ff8487';
  amarelo: string = '#faff91';
  verde: string = '#c9ffc6';
  cinza: string = '#dad3d5';


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpServiceProvider) {


  }
  /**
   * modal
   */
  public modal(data) {
    console.log(data);
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
          "A1", "A2", "A3", "A4", "A6", "A7", "A8", "A9", "A10",
        ],
        datasets: [
          {
            data: [
              100, 100, 100, 100, 100, 100, 100, 100, 100, 100
            ],
            backgroundColor: [
              this.vermelho
            ],
            label: 'circulo'
          },
          {
            data: [
              10, 10, 10, 10, 10, 10, 10, 10, 10, 10
            ],
            backgroundColor: [
              this.verde
            ],
            label: 'circulo'
          },
          {
            data: [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1
            ],
            backgroundColor: [
              this.amarelo
            ],
            label: 'circulo'
          }

        ]
      },
      options: {
        tooltips: {
          custom: (tooltipModel)=>{
            console.log(tooltipModel);
            console.log(tooltipModel.body[0].lines[0].split(":"));
            this.modal(tooltipModel.body[0].lines[0].split(":"));
          }
        },
        responsive: true,
        legend: {
          display: false,
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
              100, 100, 100, 100, 100, 100, 100, 100, 100, 100
            ],
            backgroundColor: [
              this.vermelho
            ],
            label: 'circulo'
          },
          {
            data: [
              10, 10, 10, 10, 10, 10, 10, 10, 10, 10
            ],
            backgroundColor: [
              this.verde
            ],
            label: 'circulo'
          },
          {
            data: [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1
            ],
            backgroundColor: [
              this.amarelo
            ],
            label: 'circulo'
          },
          {
            data: [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1
            ],
            backgroundColor: [
              this.amarelo
            ],
            label: 'circulo'
          },
          {
            data: [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1
            ],
            backgroundColor: [
              this.amarelo
            ],
            label: 'circulo'
          }

        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false,
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
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1
            ],
            backgroundColor: [
              this.amarelo
            ],
            label: 'circulo'
          }

        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false,
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
