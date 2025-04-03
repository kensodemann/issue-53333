import { Component } from '@angular/core';
import { IonContent, IonHeader, IonInput, IonItem, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonHeader, IonInput, IonItem, IonList, IonTitle, IonToolbar],
})
export class HomePage {}
