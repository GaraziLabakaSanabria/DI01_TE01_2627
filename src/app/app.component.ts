import { Component, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  private auth = inject(Auth);
  constructor() {
    const {email, password} = environment.auth;
    signInWithEmailAndPassword(this.auth, email, password)
    .catch(err => console.error("Error al autenticar:" + err.message))

  }
}
