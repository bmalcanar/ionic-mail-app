import { Component, OnInit } from '@angular/core';

import { Platform, NavController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inbox',
      url: '/pages/Inbox',
      icon: 'mail',
    },
    {
      title: 'Outbox',
      url: '/pages/Outbox',
      icon: 'paper-plane',
    },
    {
      title: 'Favorites',
      url: '/pages/Favorites',
      icon: 'heart',
    },
    {
      title: 'Archived',
      url: '/pages/Archived',
      icon: 'archive',
    },
    {
      title: 'Trash',
      url: '/pages/Trash',
      icon: 'trash',
    },
    {
      title: 'Spam',
      url: '/pages/Spam',
      icon: 'warning',
    },
    {
      title: 'Settings',
      url: '/pages/Settings',
      icon: 'cog',
    },
  ];
  public labels = ['Family', 'Friends'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navControl: NavController,
    private alertController: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  public logout(): void {
    this.presentAlertMultipleButtons();
  }

  private async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      message: 'Are you sure you want to sign out?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.navControl.navigateRoot('/login');
          },
        },
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
        },
      ],
    });
    await alert.present();
  }
}
