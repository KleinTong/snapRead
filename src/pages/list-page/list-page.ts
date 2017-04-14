import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list-page',
  templateUrl: 'list-page.html',
})
export class ListPage {
  cherish: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    // this.presentToast();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: "已删除",
      duration: 1500,
      position: 'bottom',
      // showCloseButton: true,
    });
    toast.onDidDismiss(() => {
      console.log("toast dismissed");
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
