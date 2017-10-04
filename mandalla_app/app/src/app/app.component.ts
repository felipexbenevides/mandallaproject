import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HttpServiceProvider } from '../providers/http-service/http-service';

@Component({
  templateUrl: 'app.html',
  providers: [HttpServiceProvider]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any, desc: any, icon: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public http: HttpServiceProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {
        title: 'Projeto',
        component: HomePage,
        desc: 'página inicial',
        icon: 'home'
      },
      {
        title: 'API',
        component: ListPage,
        desc: 'lista das APIs disponíveis',
        icon: 'cloud-circle'
      },
      {
        title: 'Configurações',
        component: HomePage,
        desc: 'configurações básicas',
        icon: 'construct'
      }
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
