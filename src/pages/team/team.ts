import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

// Import pages to allow links to the page
import { SingleTeam } from '../../pages/single-team/single-team';

// Service import for items
import { TeamApi } from '../../services/service';

// The component imports the specific parts from the html and scss file.
// The Http provider is included to make the API call to the service.
@Component({
  selector: 'page-list',
  templateUrl: 'team.html',
  providers: [Http]
})

// The generic export class is created with the page name.
export class TeamPage {

  // The items array to populate with data is created
  items: any;

  // The navController and the ItemApi Service is injected into the constructor
  constructor(
              public navCtrl: NavController,
              public params:NavParams,
              private teamApi: TeamApi,
              public loadingController: LoadingController
            ) {}

  // ------------------------------------------------------------------------------------------
  // FUNCTIONS
  // ------------------------------------------------------------------------------------------

  // This is where the data loads from the service.
  // It happens when the view loads for the first time.
  ionViewDidLoad() {

    let loader = this.loadingController.create({
      content: "Getting items.."
    });
    loader.present();

    this.teamApi.getTeams().then(data => {
        loader.dismiss();
        this.items = data
    });
  }

  // The getItems function is called everytime the searchbar input changes
  getTeams(searchbar) {

    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;

    // if the value is an empty string don't filter the items
    if (!q) {

      // Show loader when search is cancelled
      let loader = this.loadingController.create({
        content: "Getting items.."
      });
      loader.present();

      // fetch the data and dismiss loader
      this.teamApi.getTeams().then(data => {
        loader.dismiss();
        this.items = data
      });
    }

    this.items = this.items.filter((v) => {
      if(v.title && q) {
        if (v.title.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }
  // End of Searchbar Code


  // This function is an event to listen to clicks on elements.
  // The SingleItem Page has been included to be passed in this function.
  itemTapped($event, item) {
    this.navCtrl.push(SingleTeam, item);
  }

}
