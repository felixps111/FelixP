import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Pagina2Page} from "../pagina2/pagina2";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private nombre:String;
  private apellidos:String;

  constructor(public navCtrl: NavController) {
  this.nombre="Félix";
  this.apellidos="Pérez Sobrino";
  }



}
