import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductType } from '../classes/productType';
import { IProduct } from '../classes/IProduct';
import { formConstructor } from '../classes/formconstructor';
import { ProductFactory } from '../classes/productFactory';
import { ReactiveFormsModule } from '@angular/forms'; 
import { IonCard, IonSegmentContent, IonSegmentView, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonSegment, IonSegmentButton, IonLabel, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  standalone: true,
  imports: [IonButton, IonSegmentContent, ReactiveFormsModule, IonSegmentView, IonLabel, IonSegmentButton, IonSegment, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard,  ]
})
export class AddProductComponent  implements OnInit {
  productForm!: FormGroup;
  currentType: ProductType = 'Drums';

  @Output() productAdd: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor(private fb: FormBuilder) { 
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(0)]],
      brand: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onTypeChange(type: any) {
    this.currentType = type as ProductType;
    formConstructor(type, this.productForm, this.fb);
  }
  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      formData.type = this.currentType;
      const product = ProductFactory.createProduct(formData);
      this.productAdd.emit(product);
    } else {
      console.error('Form is invalid');
    }
  }

  ngOnInit() {
    this.onTypeChange(this.currentType);
  }
}
