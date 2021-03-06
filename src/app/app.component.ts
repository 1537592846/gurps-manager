import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GurpsManagerPage } from '../pages/gurps-manager/gurps-manager';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = undefined;

  constructor(private httpClient:HttpClient,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      this.openHomePage(splashScreen);
    });
  }

  private openHomePage(splashScreen: SplashScreen) {
    splashScreen.hide();
    this.rootPage = GurpsManagerPage;
  }
}