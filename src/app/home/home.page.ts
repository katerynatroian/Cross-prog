import { Component, OnInit } from '@angular/core';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { MyServiceService } from '../service/my-service.service'; 
import { CommonModule } from '@angular/common';
import { AddProductComponent } from "../add-product/add-product.component";
import { EditProductComponent } from "../edit-product/edit-product.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, MyHeaderComponent, IonLabel, IonItem, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, AddProductComponent, EditProductComponent],
})
export class HomePage implements OnInit {
  constructor(public service: MyServiceService) { }

  ngOnInit() {
    this.service.load();
//    console.log(this.service.products);
  }

  showAddForm = false;
  addFormShow() {
    this.showAddForm = true;
  }
  addProduct($event: any) { 
    this.service.addProduct($event);
    this.showAddForm = false;
  }


  showEditForm = false;
  editFormnumber = 0;
  editFormShow(i: number) {
    this.showEditForm = true;
    this.editFormnumber = i;
  }
  editProduct($event: any, i: number) {
    this.service.products[i] = $event;
    this.showEditForm = false;
  }
}
