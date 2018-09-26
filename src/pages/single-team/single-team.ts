import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

// Service import for items
import { TeamApi } from '../../services/service';
import { SinglePlayer } from '../../pages/single-player/single-player';

@Component({
  selector: 'page-single-team',
  templateUrl: 'single-team.html',
  providers: [Http]
})
export class SingleTeam {

  item: any;
  players;
  constructor(
              public navCtrl: NavController,
              private navParams:NavParams,
              private teamApi: TeamApi
            )
            {
              this.item = this.navParams.data;
              console.log(this.item);
            }

  // ------------------------------------------------------------------------------------------
  // FUNCTIONS
  // ------------------------------------------------------------------------------------------
  ionViewWillEnter(){

    console.log("getting data")
    this.teamApi.getTeamPlayers(this.item._id).then(data => {
      this.players = data;

    });

}

playerTapped($event, item) {
   

  this.navCtrl.push(SinglePlayer, item);

}

} 
