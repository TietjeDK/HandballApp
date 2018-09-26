import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

// Service import for items
import { SinglePlayerApi } from '../../services/service';

@Component({
  selector: 'page-single-team',
  templateUrl: 'single-player.html',
  providers: [Http]
})
export class SinglePlayer {

  item: any;

  constructor(
              public navCtrl: NavController,
              private navParams:NavParams,
              private singlePlayerApi: SinglePlayerApi
            )
            {
              this.item = this.navParams.data;
              console.log(this.item);
            }

  // ------------------------------------------------------------------------------------------
  // FUNCTIONS
  // ------------------------------------------------------------------------------------------
  ionViewWillEnter() {
    this.singlePlayerApi.getSinglePlayer(this.item._id).then(data => this.item = data);
  }
}
