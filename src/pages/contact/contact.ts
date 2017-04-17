import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController, Searchbar, Content } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  @ViewChild('search')
  searchbar: Searchbar;
  @ViewChild(Content)
  content: Content;
  constructor(public navCtrl: NavController, private viewCtrl: ViewController) {

  }

//  ionViewDidEnter() {
//       setTimeout(() => {
//         this.searchbar.setFocus();
//       });
//  }

 ngAfterViewInit() {
   this.searchbar.setFocus();
   setTimeout(() => {
    this.content.scrollToTop();
   }, 1000);
 }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
