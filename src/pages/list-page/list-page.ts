import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController,
   ModalController, PopoverController } from 'ionic-angular';

import { ContactPage } from '../contact/contact';
import { MailPage } from '../mail/mail';

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
  choose: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
   private toastCtrl: ToastController, public actionSheetCtrl: ActionSheetController,
   public modalCtrl: ModalController, private el: ElementRef, private popoverCtrl: PopoverController) {
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

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'action',
      buttons: [
        {
          text: 'add text',
          role: 'destructive',
          handler: () => {
            console.log("des");
          }
        },
        {
          text: 'save',
          handler: () => {
            console.log("des");
          }
        },
        {
          text: 'add photos',
          handler: () => {
            console.log("add photos");
          }
        },
        {
          text: 'cancel',
          role: 'cancel',
          handler: () => {
            console.log("cancel");
          }
        }
      ]
    });
    actionSheet.present();
  }

  select(e) {
    // this.el.nativeElement.style.background = "red";
    // e.target.nativeElement.style.background = "red";
    this.choose = e;
  }

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(MailPage);
    profileModal.present();
  }

  add(e) {
    let pop = this.popoverCtrl.create(MailPage);
    pop.present({
      ev: e
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
