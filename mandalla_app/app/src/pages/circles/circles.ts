import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from "../results/results";
import { SensorsPage } from "../sensors/sensors";
import { CircleRenderPage } from "../circle-render/circle-render";
import { SectorPage } from "../sector/sector";




@Component({
  selector: 'page-circles',
  templateUrl: 'circles.html'
})
export class CirclesPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string, type: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        title: '/circles/life',
        note: 'circulo da qualidade de vida',
        icon: 'water',
        type: 'circle'
      },
      {
        title: '/circles/economic',
        note: 'circulo da produtividade econômica',
        icon: 'restaurant',
        type: 'circle'
      },
      {
        title: '/circles/environment',
        note: 'circulo do equilibrio ambiental',
        icon: 'flower',
        type: 'circle'
      },
      {
        title: '/sector/enabled',
        note: 'habilitar ou indisponibilizar setor',
        icon: 'checkmark-circle-outline',
        type: 'sector'
      }
    ];
    // // If we navigated to this page, we will have an item available as a nav param
    // this.selectedItem = navParams.get('item');

    // // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];

    // this.items = [];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }
  itemTapped(url: any, event?: any, item?: any) {
    // That's right, we're pushing to ourselves!
    switch (item.type) {
      case 'circle':
        this.navCtrl.push(CircleRenderPage, {
          url: url
        });
        break;
        case 'sector':
        this.navCtrl.push(SectorPage, {
          url: url
        });
      default:
        break;
    }

  }
}
