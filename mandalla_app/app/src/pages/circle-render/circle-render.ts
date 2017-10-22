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


  colors: any = [
    { name: "gray", value: '#dad3d5' },
    { name: "green", value: '#c9ffc6' },
    { name: "yellow", value: '#faff91' },
    { name: "red", value: '#ff8487' }
  ];



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

  public circle1(planted) {
    var ctx1 = this.myChart1.nativeElement.getContext('2d');
    var myChart1 = new Chart(ctx1, {
      type: 'doughnut',
      data: {
        labels: [
          "A1", "A2", "A3", "A4"
        ],
        datasets: [
          {
            data: [
              3, 3, 3, 3
            ],
            backgroundColor: [
              this.colors[(planted[8].status)].value,
              this.colors[planted[9].status].value,
              this.colors[planted[10].status].value,
              this.colors[planted[11].status].value
            ],
            label: 'circulo'
          },
          {
            data: [
              2, 2, 2, 2
            ],
            backgroundColor: [
              this.colors[planted[4].status].value,
              this.colors[planted[5].status].value,
              this.colors[planted[6].status].value,
              this.colors[planted[7].status].value
            ],
            label: 'circulo'
          },
          {
            data: [
              1, 1, 1, 1
            ],
            backgroundColor: [
              this.colors[planted[0].status].value,
              this.colors[planted[1].status].value,
              this.colors[planted[2].status].value,
              this.colors[planted[3].status].value
            ],
            label: 'circulo'
          }

        ]
      },
      options: {
        tooltips: {
          custom: (tooltipModel) => {
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
  public circle2(planted) {
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
              8, 8, 8, 8
            ],
            backgroundColor: [
              this.colors[planted[28].status].value,
              this.colors[planted[29].status].value,
              this.colors[planted[30].status].value,
              this.colors[planted[31].status].value,
            ],
            label: 'circulo'
          },
          {
            data: [
              7, 7, 7, 7
            ],
            backgroundColor: [
              this.colors[planted[24].status].value,
              this.colors[planted[25].status].value,
              this.colors[planted[26].status].value,
              this.colors[planted[27].status].value,
            ],
            label: 'circulo'
          },
          {
            data: [
              6, 6, 6, 6
            ],
            backgroundColor: [
              this.colors[planted[20].status].value,
              this.colors[planted[21].status].value,
              this.colors[planted[22].status].value,
              this.colors[planted[23].status].value,
            ],
            label: 'circulo'
          },
          {
            data: [
              5, 5, 5, 5
            ],
            backgroundColor: [
              this.colors[planted[16].status].value,
              this.colors[planted[17].status].value,
              this.colors[planted[18].status].value,
              this.colors[planted[19].status].value,

            ],
            label: 'circulo'
          },
          {
            data: [
              4, 4, 4, 4
            ],
            backgroundColor: [
              this.colors[planted[12].status].value,
              this.colors[planted[13].status].value,
              this.colors[planted[14].status].value,
              this.colors[planted[15].status].value
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
  public circle3(planted) {
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
              1, 1, 1, 1
            ],
            backgroundColor: [
              this.colors[planted[32].status].value,
              this.colors[planted[33].status].value,
              this.colors[planted[34].status].value,
              this.colors[planted[35].status].value,
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
    this.http.api('/planting/sector/planted').then((result) => {
      console.log(JSON.parse(result["_body"]));
      switch (url) {
        case '/circles/life':
          this.circle1(JSON.parse(result["_body"]));
          break;
        case '/circles/economic':
          this.circle2(JSON.parse(result["_body"]));
          break;
        case '/circles/environment':
          this.circle3(JSON.parse(result["_body"]));
          break;

        default:
          break;
      }
    });

    console.log('ionViewDidLoad PlantingPage');
  }

}
