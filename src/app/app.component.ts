import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Бизнес',
      url: '/business',
      icon: 'briefcase'
    },
    {
      title: 'Забавление',
      url: '/entertainment',
      icon: 'beer'
    },
    {
      title: 'Здраве',
      url: '/health',
      icon: 'body'
    },
    {
      title: 'Наука',
      url: '/science',
      icon: 'logo-buffer'
    },
    {
      title: 'Спорт',
      url: '/sport',
      icon: 'bicycle'
    },
    {
      title: 'Технологии',
      url: '/technology',
      icon: 'easel'
    },
    {
      title: 'Търси',
      url: '/search',
      icon: 'easel'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
