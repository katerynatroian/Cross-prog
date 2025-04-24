import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss'],
  standalone: true,
  imports: [IonTitle, IonToolbar, IonHeader],
})
export class MyHeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
