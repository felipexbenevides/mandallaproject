import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from "../results/results";
import { SensorsPage } from "../sensors/sensors";


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string, type: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        title: '/planting/crop/:crop',
        note: 'informações específicas de uma cultura',
        icon: 'ios-flower',
        type: 'planting'
      },
      {
        title: '/planting/crop',
        note: 'culturas presentes',
        icon: 'ios-flower',
        type: 'planting'
      },
      {
        title: '/planting/crop/:id/companion',
        note: 'culturas companheiras',
        icon: 'ios-flower',
        type: 'planting'
      },
      {
        title: '/planting/crop/:id/enemy',
        note: 'culturas inimigas',
        icon: 'ios-flower',
        type: 'planting'
      },
      {
        title: '/planting/crop/:id/intercropping',
        note: 'consórcio',
        icon: 'ios-flower',
        type: 'planting'
      },
      {
        title: '/sensor/water/level',
        note: 'nível de água do tanque central',
        icon: 'cog',
        type: 'sensor'

      },
      {
        title: '/sensor/water/ph',
        note: 'nível do ph da água do tanque central',
        icon: 'cog',
        type: 'sensor'

      },
      {
        title: '/sensor/soil/moisture',
        note: 'umidade do solo',
        icon: 'cog',
        type: 'sensor'

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
      case 'planting':
        this.navCtrl.push(ResultsPage, {
          url: url
        });
        break;
        case 'sensor':
        this.navCtrl.push(SensorsPage, {
          url: url
        });
        break;
      default:
        break;
    }

  }
}
