import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AttractionsPage } from '../attractions/attractions';
import { WeatherPage } from '../weather/weather';
import { ContactPage } from '../contact/contact';

// ^^ Imports


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  // NavController to navigate to each page

  goAttractions()
  {
    this.navCtrl.push(AttractionsPage);
  }

  goWeather()
  {
    this.navCtrl.push(WeatherPage);
  }

  goContact()
  {
    this.navCtrl.push(ContactPage);
  }

}


