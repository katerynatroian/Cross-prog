import { Component, OnInit } from '@angular/core';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { MyServiceService } from '../service/my-service.service'; 
import { CommonModule } from '@angular/common';
import { AddProductComponent } from "../add-product/add-product.component";
import { EditProductComponent } from "../edit-product/edit-product.component";
import { ConfigService } from '../service/config.service';
import { Subscription } from 'rxjs';
import { productType, ProductType } from '../classes/productType';
import { IProduct } from '../classes/IProduct';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, MyHeaderComponent, IonLabel, IonItem, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, AddProductComponent, EditProductComponent],
})
export class HomePage implements OnInit {
  products: IProduct[] = [];
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
    this.service.editProduct($event);
    this.showEditForm = false
  }
  constructor(private service: MyServiceService) {}

  ngOnInit(): void {
    this.service.products$.subscribe((products) => {
      this.products = products;
    });
    this.service.fetchProducts();
  }
  
/*  
  type: ProductType = productType[0];
  count = 0;
  showAddForm = false;
  showEditForm = false;
  editFormnumber = 0;
  subscriptions: Subscription[] = [];

  ngOnInit() {
    this.service.load();
    const typeSub = this.configService.type$.subscribe(() => {
      this.type = this.configService.type$.value;
    });
    this.subscriptions.push(typeSub);
  }

  editProduct($event: any, i: number) {
    this.service.products[i] = $event;
    this.showEditForm = false;
  }
  nextType() {
    if (this.count < productType.length - 1) {
      this.count++;
    } else {
      this.count = 0;
    }
    this.configService.setType(productType[this.count]);
  }

  addFormShow() {
    this.showAddForm = true;
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  } 
*/
}
