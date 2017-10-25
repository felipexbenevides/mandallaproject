import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list'
import { SensorsPage } from '../sensors/sensors';
import { PlantingPage } from '../planting/planting';

/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {
  items = [
    {
      title: 'Plantação',
      component: PlantingPage,
      desc: 'plantar e colher',
      icon: 'nutrition'
    },
    {
      title: 'API',
      component: ListPage,
      desc: 'lista das APIs disponíveis',
      icon: 'cloud-circle'
    },
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }
  itemTapped(title: any, event?: any, item?: any) {
    // That's right, we're pushing to ourselves!
    switch (title) {
      
      case 'API':
        this.navCtrl.push(ListPage, {
          // url: url
        });
        break;
      case 'Sensores':
        this.navCtrl.push(SensorsPage, {
          // url: url
        });
        break;
      case 'Plantação':
        this.navCtrl.push(PlantingPage, {
          // url: url
        });
        break;
      default:
        break;
    }

  }
}
