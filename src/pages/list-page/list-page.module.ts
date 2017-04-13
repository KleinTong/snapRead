import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListPage } from './list-page';

@NgModule({
  declarations: [
    ListPage,
  ],
  exports: [
    ListPage
  ]
})
export class ListPageModule {}
