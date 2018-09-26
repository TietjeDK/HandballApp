import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Http import
import { HttpModule } from '@angular/http';


// Page imports
import { CategoryPage } from '../pages/category/category';
import { MatchPage } from '../pages/match/match';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { TeamPage } from '../pages/team/team';
import { TabsPage } from '../pages/tabs/tabs';
import { SingleItem } from '../pages/single-item/single-item';
import { SingleTeam } from '../pages/single-team/single-team';
import { SingleMatch } from '../pages/single-match/single-match';
import { SinglePlayer } from '../pages/single-player/single-player';
import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

// Service imports
import { ItemApi } from '../services/item-api.service';
import { TeamApi } from '../services/item-api.service';
import { MatchApi } from '../services/item-api.service';
import { SinglePlayerApi } from '../services/item-api.service';
import { AuthService } from '../services/auth-service';
import { TimeFilter } from '../filters/time.filter.pipe';

// Native imports
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    CategoryPage,
    ListPage,
    HomePage,
    TeamPage,
    MatchPage,
    SingleItem,
    SingleTeam,
    SingleMatch,
    SinglePlayer,
    TimeFilter,
    Welcome,
    Login,
    SignupPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
    }
  )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CategoryPage,
    ListPage,
    HomePage,
    TeamPage,
    MatchPage,
    SingleItem,
    SingleTeam,
    SingleMatch,
    SinglePlayer,
    Welcome,
    Login,
    SignupPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ItemApi,
    TeamApi,
    MatchApi,
    SinglePlayerApi,
    AuthService,
    TimeFilter,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  exports: [
    TimeFilter
  ]
})
export class AppModule {}
