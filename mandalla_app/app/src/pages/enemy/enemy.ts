import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EnemyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-enemy',
  templateUrl: 'enemy.html',
})
export class EnemyPage {
  data: any;
  name: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = this.navParams.get('name');

    this.data = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnemyPage');
  }

}
