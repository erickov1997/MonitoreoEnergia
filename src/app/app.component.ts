import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  respuesta: any;
  readonly VAPID_PUBLIC_KEY = "BOpsbzeKK6zvO3cYxa8jc64OsaqYk0O4kDNLNkUso4MzSxEShX2-N6Q-7AwdRJKdDWeD-2rDTBU6Ftyil4Q6Pfc";

  constructor(
    private swPush: SwPush) {

  }

  subscribeToNotifications() {
    this.swPush.requestSubscription(
      {
        serverPublicKey: this.VAPID_PUBLIC_KEY
      }
    ).then(respuesta => {
      this.respuesta = respuesta
       
    })
      .catch(err => {
        this.respuesta = err
      })
  }
}
