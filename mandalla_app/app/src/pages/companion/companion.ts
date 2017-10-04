import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CompanionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-companion',
  templateUrl: 'companion.html',
})
export class CompanionPage {
  data: any;
  name: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = this.navParams.get('name');
    this.data = this.navParams.get('data');
    console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanionPage');
  }

}
