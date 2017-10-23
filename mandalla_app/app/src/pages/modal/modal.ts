import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlantingPage } from "../planting/planting";
import { HttpServiceProvider } from "../../providers/http-service/http-service";

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  sector_id: any;
  sector_name: any;
  action: any;
  data: any = { area: null, line: null, enabled: null, sets:[{crop:'', planting_date:null, harvest_date:null}] };

  constructor(public http: HttpServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.sector_id = this.navParams.get("sector_id");
    this.sector_name = this.navParams.get("sector_name");
    this.http.api("/planting/sector/" + this.sector_id).then((result) => {
      console.log(JSON.parse(result['_body'])[0]);
      this.data = JSON.parse(result['_body'])[0];



    });

  }
  next() {
    console.log(this.action);
    this.navCtrl.push(PlantingPage, { sector_id: this.sector_id, sector_name: this.sector_name, action: this.action })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}
