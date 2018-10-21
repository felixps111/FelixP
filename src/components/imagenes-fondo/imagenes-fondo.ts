import { Component } from '@angular/core';

/**
 * Generated class for the ImagenesFondoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'imagenes-fondo',
  templateUrl: 'imagenes-fondo.html'
})
export class ImagenesFondoComponent {

  text: string;

  constructor() {
    console.log('Hello ImagenesFondoComponent Component');
    this.text = 'Hello World';
  }

}
