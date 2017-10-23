import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from "../../providers/http-service/http-service";
/**
 * Generated class for the SectorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sector',
  templateUrl: 'sector.html',
})
export class SectorPage {
  enabled: any;
  sector_id: any;

  itens: any = [
    { name: "A1-1", value: ["A1", 1], _id: "59ecc86281bcb90c643f47d5" },
    { name: "A2-1", value: ["A2", 1], _id: "59ecc86281bcb90c643f47d6" },
    { name: "A3-1", value: ["A3", 1], _id: "59ecc86281bcb90c643f47d7" },
    { name: "A4-1", value: ["A4", 1], _id: "59ecc86281bcb90c643f47d8" },
    { name: "A1-2", value: ["A1", 2], _id: "59ecc86281bcb90c643f47d9" },
    { name: "A2-2", value: ["A2", 2], _id: "59ecc86281bcb90c643f47da" },
    { name: "A3-2", value: ["A3", 2], _id: "59ecc86281bcb90c643f47db" },
    { name: "A4-2", value: ["A4", 2], _id: "59ecc86281bcb90c643f47dc" },
    { name: "A1-3", value: ["A1", 3], _id: "59ecc86281bcb90c643f47dd" },
    { name: "A2-3", value: ["A2", 3], _id: "59ecc86281bcb90c643f47de" },
    { name: "A3-3", value: ["A3", 3], _id: "59ecc86281bcb90c643f47df" },
    { name: "A4-3", value: ["A4", 3], _id: "59ecc86281bcb90c643f47e0" },
    { name: "A1-4", value: ["A1", 4], _id: "59ecc86281bcb90c643f47e1" },
    { name: "A2-4", value: ["A2", 4], _id: "59ecc86281bcb90c643f47e2" },
    { name: "A3-4", value: ["A3", 4], _id: "59ecc86281bcb90c643f47e3" },
    { name: "A4-4", value: ["A4", 4], _id: "59ecc86281bcb90c643f47e4" },
    { name: "A1-5", value: ["A1", 5], _id: "59ecc86281bcb90c643f47e5" },
    { name: "A2-5", value: ["A2", 5], _id: "59ecc86281bcb90c643f47e6" },
    { name: "A3-5", value: ["A3", 5], _id: "59ecc86281bcb90c643f47e7" },
    { name: "A4-5", value: ["A4", 5], _id: "59ecc86281bcb90c643f47e8" },
    { name: "A1-6", value: ["A1", 6], _id: "59ecc86281bcb90c643f47e9" },
    { name: "A2-6", value: ["A2", 6], _id: "59ecc86281bcb90c643f47ea" },
    { name: "A3-6", value: ["A3", 6], _id: "59ecc86281bcb90c643f47eb" },
    { name: "A4-6", value: ["A4", 6], _id: "59ecc86281bcb90c643f47ec" },
    { name: "A1-7", value: ["A1", 7], _id: "59ecc86281bcb90c643f47ed" },
    { name: "A2-7", value: ["A2", 7], _id: "59ecc86281bcb90c643f47ee" },
    { name: "A3-7", value: ["A3", 7], _id: "59ecc86281bcb90c643f47ef" },
    { name: "A4-7", value: ["A4", 7], _id: "59ecc86281bcb90c643f47f0" },
    { name: "A1-8", value: ["A1", 8], _id: "59ecc86281bcb90c643f47f1" },
    { name: "A2-8", value: ["A2", 8], _id: "59ecc86281bcb90c643f47f2" },
    { name: "A3-8", value: ["A3", 8], _id: "59ecc86281bcb90c643f47f3" },
    { name: "A4-8", value: ["A4", 8], _id: "59ecc86281bcb90c643f47f4" },
    { name: "A1-9", value: ["A1", 9], _id: "59ecf2d8377a092d34be1c81" },
    { name: "A2-9", value: ["A2", 9], _id: "59ecf2d8377a092d34be1c82" },
    { name: "A3-9", value: ["A3", 9], _id: "59ecf2d8377a092d34be1c83" },
    { name: "A4-9", value: ["A4", 9], _id: "59ecf2d8377a092d34be1c84" }];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SectorPage');
  }
  modify() {
    console.log(this.enabled);
    console.log(this.sector_id);
    this.http.api('/sector/enabled', { sector_id: this.sector_id, enabled: this.enabled }).then((result) => {
      console.log(result);

    });


  }

}
