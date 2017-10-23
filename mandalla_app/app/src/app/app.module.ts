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
import { CircleRenderPage } from '../pages/circle-render/circle-render';
import { CirclesPage } from '../pages/circles/circles';
import { SectorPage } from '../pages/sector/sector';
import { ModalPage } from '../pages/modal/modal';



import { ListPage } from '../pages/list/list';
import { ResultsPage } from '../pages/results/results';
import { CompanionPage } from '../pages/companion/companion';
import { EnemyPage } from '../pages/enemy/enemy';
import { IntercroppingPage } from '../pages/intercropping/intercropping';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpServiceProvider } from '../providers/http-service/http-service';

import { QRScanner } from '@ionic-native/qr-scanner';
import { Camera } from '@ionic-native/camera';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

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
    CirclesPage,
    CircleRenderPage,
    SectorPage,
    ModalPage
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
    CirclesPage,
    CircleRenderPage,
    SectorPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpServiceProvider,
    QRScanner,
    Camera,
    AndroidPermissions,
    BarcodeScanner
  ]
})
export class AppModule {}
