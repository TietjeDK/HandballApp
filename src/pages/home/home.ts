import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

// Import pages to allow links to the page
import { SingleMatch } from '../../pages/single-match/single-match';


// Service import for items
import { MatchApi } from '../../services/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Http]
})
export class HomePage {

  // The items array to populate with data is created
  items: any;

  constructor(
              public navCtrl: NavController,
              public params:NavParams,
              private matchApi: MatchApi
            )
            {}

  // This is where the data loads from the service.
  // It happens when the view loads for the first time.
  ionViewWillEnter() {
    this.matchApi.getMatches().then(data => this.items = data);
  }

  itemTapped($event, item) {
    this.navCtrl.push(SingleMatch, item);
  }


}
