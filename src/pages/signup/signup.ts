import { Component } from '@angular/core';
import {  NavController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Login } from '../login/login';
import { AuthService } from '../../services/service';




/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({selector: 'page-signup', templateUrl: 'signup.html'})
export class SignupPage {
  resposeData : any;
  userData = {"password":"","email":"","name":""};
  constructor(public navCtrl : NavController, public authService : AuthService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

  signup() {
      console.log(this.userData);
      console.log("hallo?");
    if(this.userData.password && this.userData.email && this.userData.name){
      //Api connections
    this.authService.postData(this.userData, "create").then((result) =>{
    this.resposeData = result;
    if(this.resposeData.email){
      console.log(this.resposeData);
      localStorage.setItem('userData', JSON.stringify(this.resposeData) )
      this.navCtrl.push(TabsPage);
    }
    else{
      console.log("Please give valid username and password");
    }
    
    }, (err) => {
      //Connection failed message
    });
  }
  else {
    console.log("Give valid information.");
  }
  
  }

  login() {
    this
      .navCtrl
      .push(Login);
  }

 

}