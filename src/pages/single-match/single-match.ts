import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

// Service import for items
import { MatchApi } from '../../services/service';
import { SinglePlayer } from '../../pages/single-player/single-player';
import { Welcome } from '../../pages/welcome/welcome';
import { TimeFilter } from '../../filters/time.filter.pipe';


@Component({
  selector: 'page-single-team',
  templateUrl: 'single-match.html',
  providers: [Http]
})
export class SingleMatch {
  
  item: any;
  selectedSegment: any;

  constructor(
              public navCtrl: NavController,
              private navParams:NavParams,
              private matchApi: MatchApi
            )
            {
              this.item = this.navParams.data;
              console.log(this.item);
              
            }

  // ------------------------------------------------------------------------------------------
  // FUNCTIONS
  // ------------------------------------------------------------------------------------------
  ionViewWillEnter(){
    this.selectedSegment = 'game';
      setInterval(() => { 
        this.getData(); 
      }, 1000);
    }
    playerTapped($event, item) {
   

        this.navCtrl.push(SinglePlayer, item);
      
    }
  starTapped($event, item) {
   
    if(localStorage.userData){
      console.log("User is logged in")
      this.navCtrl.push(SinglePlayer, item);
    } else {
      console.log("User is not logged in")
      this.navCtrl.push(Welcome);
    }
    
  }

  getData(){
    console.log("getting data")
    this.matchApi.getSingleMatch(this.item._id).then(data => {
      this.item = data;

    });
}



}
