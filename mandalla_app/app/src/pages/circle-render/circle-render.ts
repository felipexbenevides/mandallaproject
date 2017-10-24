import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpServiceProvider } from "../../providers/http-service/http-service";
import { ModalPage } from "../modal/modal";



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

  sectors: any = {
    A11:{ name: "A1-1", value: ["A1", 1], _id: "59ecc86281bcb90c643f47d5"},
    A21:{ name: "A2-1", value: ["A2", 1], _id: "59ecc86281bcb90c643f47d6"},
    A31:{ name: "A3-1", value: ["A3", 1], _id: "59ecc86281bcb90c643f47d7"},
    A41:{ name: "A4-1", value: ["A4", 1], _id: "59ecc86281bcb90c643f47d8"},
    A12:{ name: "A1-2", value: ["A1", 2], _id: "59ecc86281bcb90c643f47d9"},
    A22:{ name: "A2-2", value: ["A2", 2], _id: "59ecc86281bcb90c643f47da"},
    A32:{ name: "A3-2", value: ["A3", 2], _id: "59ecc86281bcb90c643f47db"},
    A42:{ name: "A4-2", value: ["A4", 2], _id: "59ecc86281bcb90c643f47dc"},
    A13:{ name: "A1-3", value: ["A1", 3], _id: "59ecc86281bcb90c643f47dd"},
    A23:{ name: "A2-3", value: ["A2", 3], _id: "59ecc86281bcb90c643f47de"},
    A33:{ name: "A3-3", value: ["A3", 3], _id: "59ecc86281bcb90c643f47df"},
    A43:{ name: "A4-3", value: ["A4", 3], _id: "59ecc86281bcb90c643f47e0"},
    A14:{ name: "A1-4", value: ["A1", 4], _id: "59ecc86281bcb90c643f47e1"},
    A24:{ name: "A2-4", value: ["A2", 4], _id: "59ecc86281bcb90c643f47e2"},
    A34:{ name: "A3-4", value: ["A3", 4], _id: "59ecc86281bcb90c643f47e3"},
    A44:{ name: "A4-4", value: ["A4", 4], _id: "59ecc86281bcb90c643f47e4"},
    A15:{ name: "A1-5", value: ["A1", 5], _id: "59ecc86281bcb90c643f47e5"},
    A25:{ name: "A2-5", value: ["A2", 5], _id: "59ecc86281bcb90c643f47e6"},
    A35:{ name: "A3-5", value: ["A3", 5], _id: "59ecc86281bcb90c643f47e7"},
    A45:{ name: "A4-5", value: ["A4", 5], _id: "59ecc86281bcb90c643f47e8"},
    A16:{ name: "A1-6", value: ["A1", 6], _id: "59ecc86281bcb90c643f47e9"},
    A26:{ name: "A2-6", value: ["A2", 6], _id: "59ecc86281bcb90c643f47ea"},
    A36:{ name: "A3-6", value: ["A3", 6], _id: "59ecc86281bcb90c643f47eb"},
    A46:{ name: "A4-6", value: ["A4", 6], _id: "59ecc86281bcb90c643f47ec"},
    A17:{ name: "A1-7", value: ["A1", 7], _id: "59ecc86281bcb90c643f47ed"},
    A27:{ name: "A2-7", value: ["A2", 7], _id: "59ecc86281bcb90c643f47ee"},
    A37:{ name: "A3-7", value: ["A3", 7], _id: "59ecc86281bcb90c643f47ef"},
    A47:{ name: "A4-7", value: ["A4", 7], _id: "59ecc86281bcb90c643f47f0"},
    A18:{ name: "A1-8", value: ["A1", 8], _id: "59ecc86281bcb90c643f47f1"},
    A28:{ name: "A2-8", value: ["A2", 8], _id: "59ecc86281bcb90c643f47f2"},
    A38:{ name: "A3-8", value: ["A3", 8], _id: "59ecc86281bcb90c643f47f3"},
    A48:{ name: "A4-8", value: ["A4", 8], _id: "59ecc86281bcb90c643f47f4"},
    A19:{ name: "A1-9", value: ["A1", 9], _id: "59ecf2d8377a092d34be1c81"},
    A29:{ name: "A2-9", value: ["A2", 9], _id: "59ecf2d8377a092d34be1c82"},
    A39:{ name: "A3-9", value: ["A3", 9], _id: "59ecf2d8377a092d34be1c83"},
    A49:{ name: "A4-9", value: ["A4", 9], _id: "59ecf2d8377a092d34be1c84"}};

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public http: HttpServiceProvider) {
  }
  /**
   * modal
   */
  public modal(data) {
    data = (data[0] + data[1]).replace(" ", "");
    console.log(data);
    console.log(this.sectors[data]['_id']);

    let modal = this.navCtrl.push(ModalPage, {sector_id:this.sectors[data]['_id'],sector_name: this.sectors[data]["name"]});
    // modal.present();
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

