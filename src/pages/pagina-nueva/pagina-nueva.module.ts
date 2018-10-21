import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaNuevaPage } from './pagina-nueva';

@NgModule({
  declarations: [
    PaginaNuevaPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaNuevaPage),
  ],
})
export class PaginaNuevaPageModule {}
