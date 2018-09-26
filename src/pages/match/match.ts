import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

// Import pages to allow links to the page
import { SingleMatch } from '../../pages/single-match/single-match';

// Service import for items
import { MatchApi } from '../../services/service';

// The component imports the specific parts from the html and scss file.
// The Http provider is included to make the API call to the service.
@Component({
  selector: 'page-category',
  templateUrl: 'match.html',
  providers: [Http]
})

export class MatchPage {

  // The items array to populate with data is created
  items: any;
  passedCategory: any;
  

  constructor(
              public navCtrl: NavController,
              private navParams:NavParams,
              private matchApi: MatchApi,
              public loadingController: LoadingController,
            )
            {
              //this.category = this.navParams.data;
              this.passedCategory = this.navParams.get('category');
            }

  // ------------------------------------------------------------------------------------------
  // FUNCTIONS
  // ------------------------------------------------------------------------------------------


  getData(){
    this.matchApi.getMatches().then(data => {
      this.items = data;

    });
}

  // This is where the data loads from the service.
  // It happens when the view loads for the first time.
  ionViewDidLoad() {

    let loader = this.loadingController.create({
      content: "Getting items.."
    });
    loader.present();

    // Get the JSON data from our itemApi
    this.getData();

    
  }
  


  // This function is an event to listen to clicks on elements.
  // The SingleItem Page has been included to be passed in this function.
  itemTapped($event, item) {
    this.navCtrl.push(SingleMatch, item);
  }


}
