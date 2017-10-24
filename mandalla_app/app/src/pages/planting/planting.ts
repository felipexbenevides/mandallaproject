import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { HttpServiceProvider } from "../../providers/http-service/http-service";

/**
 * Generated class for the PlantingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-planting',
  templateUrl: 'planting.html',
})
export class PlantingPage {
  planting_date: any = (new Date()).toISOString();
  crop_name: any;
  sector_id: any;
  sector_name: any;
  enabled: any;
  
  planting_flag: any = 1;
  harvest_flag: any = 1;
  modify_flag: any = 0;

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
  itens2: any = [
    { _id: "59d1397f9d8ccf4ee02752ec", name: "Abobrinha" },
    { _id: "59d1397f9d8ccf4ee02752ed", name: "Alface" },
    { _id: "59d1397f9d8ccf4ee02752ee", name: "Berinjela" },
    { _id: "59d1397f9d8ccf4ee02752ef", name: "Beterraba" },
    { _id: "59d1397f9d8ccf4ee02752f0", name: "Cebola" },
    { _id: "59d1397f9d8ccf4ee02752f1", name: "Cebolinha" },
    { _id: "59d1397f9d8ccf4ee02752f2", name: "Cenoura" },
    { _id: "59d1397f9d8ccf4ee02752f3", name: "Couve" },
    { _id: "59d1397f9d8ccf4ee02752f4", name: "Espinafre" },
    { _id: "59d1397f9d8ccf4ee02752f5", name: "Pepino" },
    { _id: "59d1397f9d8ccf4ee02752f6", name: "Pimentao" },
    { _id: "59d1397f9d8ccf4ee02752f7", name: "Quiabo" },
    { _id: "59d1397f9d8ccf4ee02752f8", name: "Rabanete" },
    { _id: "59d1397f9d8ccf4ee02752f9", name: "Repolho" },
    { _id: "59d1397f9d8ccf4ee02752fa", name: "Tomate" },
    { _id: "59d1397f9d8ccf4ee02752fb", name: "Coentro" },
    { _id: "59d1397f9d8ccf4ee02752fc", name: "Milho" },
    { _id: "59d1397f9d8ccf4ee02752fd", name: "Feijao" },
    { _id: "59d1397f9d8ccf4ee02752fe", name: "Salsa" }
  ];



  constructor(public http: HttpServiceProvider, public platform: Platform, public navCtrl: NavController, public navParams: NavParams, private qrScanner: QRScanner) {
    console.log(this.navParams);

    if (this.navParams.get("sector_id")) {
      this.sector_id = this.navParams.get("sector_id");
      this.modify_flag = 0;
      this.planting_flag = 0;
      this.harvest_flag = 0;
    }
    if (this.navParams.get("action")) {
      console.log('action ', this.navParams.get("action"))
      switch (this.navParams.get("action")) {
        case "0":
          this.planting_flag = 1;
          break;
        case "1":
          this.harvest_flag = 1;
          break;
        case "2":
          this.modify_flag = 1;
          break;
        default:
          break;
      }
    }
    if (this.navParams.get("sector_name")) {
      this.sector_name = this.navParams.get("sector_name");
    }
    console.log(this.planting_date);
    console.log(platform);
    // Optionally request the permission early
    /*
    let scanSub = this.qrScanner.scan().subscribe((text: string) => {
      console.log('Scanned something', text);

      this.qrScanner.hide(); // hide camera preview
      scanSub.unsubscribe(); // stop scanning
    });
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted


          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);

            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

          // show camera preview
          this.qrScanner.show();

          // wait for user to scan something, then the observable callback will be called

        } else if (status.denied) {
          console.log('Scanned something');
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          console.log('Scanned something');
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  
  
    */
  }
  modify() {
    console.log(this.enabled);
    console.log(this.sector_id);
    this.http.api('/sector/enabled', { sector_id: this.sector_id, enabled: this.enabled }).then((result) => {
      console.log(result);
      this.navCtrl.popToRoot();
    });


  }

  planting() {
    var data = { planting_date: this.planting_date, crop_name: this.crop_name, sector_id: this.sector_id }
    this.http.api('/planting/', data).then((result) => {
      console.log(result);
      this.navCtrl.popToRoot();
    });
  }
  harvest() {
    var data = { harvest_date: this.planting_date, sector_id: this.sector_id }
    this.http.api('/harvest/', data).then((result) => {
      console.log(result);
      this.navCtrl.popToRoot();
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PlantingPage');
  }

}
