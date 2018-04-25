import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public bluetoothSerial: BluetoothSerial) {
  }

  ionViewDidLoad() {
    this.bluetoothSerial.write('hello world').then(this.writeSuccess, this.writeFailure);
    console.log('ionViewDidLoad HomePage');
  }

  writeSuccess() {
    console.log('success from bluetoothSerial.write');
  }

  writeFailure() {
    console.log('success from bluetoothSerial.write');
  }
}
