import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConfigPage } from '../pages/config/config';
import { ChartsPage } from '../pages/charts/charts';
import { SensorsPage } from '../pages/sensors/sensors';
import { PlantingPage } from '../pages/planting/planting';
import { CirclesPage } from '../pages/circles/circles';


import { ListPage } from '../pages/list/list';
import { ResultsPage } from '../pages/results/results';
import { CompanionPage } from '../pages/companion/companion';
import { EnemyPage } from '../pages/enemy/enemy';
import { IntercroppingPage } from '../pages/intercropping/intercropping';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpServiceProvider } from '../providers/http-service/http-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ResultsPage,
    CompanionPage,
    EnemyPage,
    IntercroppingPage,
    ConfigPage,
    ChartsPage,
    SensorsPage,
    PlantingPage,
    CirclesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ResultsPage,
    CompanionPage,
    EnemyPage,
    IntercroppingPage,
    ConfigPage,
    ChartsPage,
    SensorsPage,
    PlantingPage,
    CirclesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpServiceProvider
  ]
})
export class AppModule {}
