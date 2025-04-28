import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { IProduct } from '../classes/IProduct';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { productType } from '../classes/productType';
import { ProductFactory } from '../classes/productFactory';
import { formConstructor } from '../classes/formconstructor';
import { ReactiveFormsModule } from '@angular/forms'; 
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonItem, IonButton } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
  standalone: true,
  imports: [IonButton,  IonCard, CommonModule, IonCardHeader, ReactiveFormsModule, IonCardTitle, IonCardContent, IonInput, IonItem ]
})
export class EditProductComponent  implements OnInit {
  @Input() product!: IProduct;
  @Output() productEdit: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  productForm!: FormGroup;
  types = productType;
  constructor(private fb: FormBuilder) { }

  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      formData.type = this.product.getType();
      const updateproduct = ProductFactory.createProduct(formData);
      this.productEdit.emit(updateproduct);
    } else {
      console.error('Form is invalid');
    }
  }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: [this.product.getName(), [Validators.required, Validators.minLength(3)]],
      price: [this.product.getPrice(), [Validators.required, Validators.min(0)]],
      brand: [this.product.getBrand(), [Validators.required, Validators.minLength(3)]],
    });
    formConstructor(this.product.getType(), this.productForm, this.fb);
  }
}
