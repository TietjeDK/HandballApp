import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ItemApi {

  constructor(private http: Http) {}

  getItems(){
    return new Promise(resolve => {
        this.http.get('http://178.62.243.55:9113/players')
          .subscribe(res => resolve(res.json()));
    });
  }

  
}
@Injectable()
export class TeamApi {

  constructor(private http: Http) {}

  getTeams(){
    return new Promise(resolve => {
        this.http.get('http://178.62.243.55:9113/teams')
          .subscribe(res => resolve(res.json()));
    });
  }
  getTeamPlayers(id){
    return new Promise(resolve => {
        this.http.get('http://178.62.243.55:9113/teams/players/' + id)
          .subscribe(res => resolve(res.json()));
    });
  }
  } 

  @Injectable()
export class MatchApi {

  constructor(private http: Http) {}

  getMatches(){
    return new Promise(resolve => {
        this.http.get('http://178.62.243.55:9113/matches')
          .subscribe(res => resolve(res.json()));
    });
  }

  getSingleMatch(id){
    return new Promise(resolve => {
        this.http.get('http://178.62.243.55:9113/matches/' + id)
          .subscribe(res => resolve(res.json()));
    });
  }
  } 


  
  @Injectable()
export class PlayerApi {

  constructor(private http: Http) {}

  getPlayers(){
    return new Promise(resolve => {
        this.http.get('http://178.62.243.55:9113/players')
          .subscribe(res => resolve(res.json()));
    });
  }
  } 

  @Injectable()
  export class SinglePlayerApi {
  
    constructor(private http: Http) {}
  
    getSinglePlayer(id){
      return new Promise(resolve => {
          this.http.get('http://178.62.243.55:9113/players/' + id)
            .subscribe(res => resolve(res.json()));
      });
    }



    
    } 


