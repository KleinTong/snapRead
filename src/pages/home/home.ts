import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, PopoverController, ToastController, ModalController, Searchbar } from 'ionic-angular';

import { AddPage } from '../add-page/add-page';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: number[] =[];
  picArr: string[] = ['imgs/borealis.jpg', 'imgs/flowers_dribbble.jpg','imgs/blue.jpg',
     'imgs/pink.jpg', 'imgs/prop.jpg', 'imgs/fish.jpg'];
  constructor(public navCtrl: NavController, private popoverCtrl: PopoverController,
    private toastCtrl: ToastController, private modalCtrl: ModalController) {
      for(let i = 0; i < 30; i++) {
        this.items.push(1);
      }
      // setTimeout(() => {
      //     this.searchbar.setFocus();
      // }, 100);
  }

  add(e) {
    let pop = this.popoverCtrl.create(AddPage);
    pop.present({
      ev: e
    });
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

  randomPic() {
    let num = Math.floor(Math.random() * this.picArr.length);
    return this.picArr[num];
  }

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(ContactPage);
    profileModal.present();
  }


}
