import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from "../../providers/http-service/http-service";
import { HomePage } from "../home/home";
import { CompanionPage } from "../companion/companion";
import { EnemyPage } from "../enemy/enemy";
import { IntercroppingPage } from "../intercropping/intercropping";

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  url: any;
  results: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpServiceProvider) {
        this.url = navParams.get('url');
        this.get(this.url).then((result)=>{
          this.results = result;
        });;
        
  }
  
  /**
   * get
   */
  public get(url:any) {
    return new Promise ((resolve,reject)=>{
            this.http.api(url).then((result)=>{
          console.log(result);
          resolve(JSON.parse(result['_body']));
        });
    });

  }
  /**
   * itemTapped
   */
  public itemTapped(page?:any, url?: any , name?: any) {
    
    switch (page) {
      case 'companion':
      console.log('companion');
      console.warn(url);     
      this.get(url).then((result)=>{
         this.navCtrl.push(CompanionPage,{ data : result, name: name});    
      });
        
        break;
      case 'enemy':
      console.log('enemy');
      this.get(url).then((result)=>{
        this.navCtrl.push(EnemyPage,{ data : result, name: name});    
      });
        
        break;
      case 'intercropping':
      console.log('intercropping');
       this.get(url).then((result)=>{
        this.navCtrl.push(IntercroppingPage,{ data : result, name: name});    
      });
        break;
            
      default:
      console.log('default');
        break;
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

}
