import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ActionSheetController, PopoverController } from 'ionic-angular';

import { PopoverPage } from '../../components/popover-page/popover-page'
/**
 * Generated class for the Mail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mail',
  templateUrl: 'mail.html',
})
export class MailPage {
  items: number[] = [1, 2, 3, 4];
  constructor(public navCtrl: NavController, public navParams: NavParams,
   public viewCtrl: ViewController, public actionSheetCtrl: ActionSheetController,
   public popoverCtrl: PopoverController) {
  }

  dismiss() {
    // this.viewCtrl.dismiss();
    let actionSheet = this.actionSheetCtrl.create({
      title: "Confirmation",
      buttons: [
        {
          text: 'Save Draft',
          handler: () => {

          }
        },
        {
          text: 'Discard Draft',
          role: 'destructive',
          handler: () => {
            this.viewCtrl.dismiss();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.viewCtrl.dismiss();
          }
        }
      ]
    });
    actionSheet.present();
  }

  presentPopover() {
    let pop = this.popoverCtrl.create(PopoverPage);
    pop.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mail');
  }

}

