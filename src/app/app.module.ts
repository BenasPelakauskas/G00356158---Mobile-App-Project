import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import {DataService} from './data.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AttractionsPage } from '../pages/attractions/attractions';
import { WeatherPage } from '../pages/weather/weather';
import { ContactPage } from '../pages/contact/contact';
//import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage, AttractionsPage, WeatherPage, ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)/*,
    IonicStorageModule.forRoot(),*/
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, AttractionsPage, WeatherPage, ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    /*DataService,*/
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

