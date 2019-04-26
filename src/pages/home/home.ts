import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AttractionsPage } from '../attractions/attractions';
import { WeatherPage } from '../weather/weather';
import { ContactPage } from '../contact/contact';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

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


