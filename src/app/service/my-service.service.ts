import { Injectable } from '@angular/core';
import { IProduct } from '../classes/IProduct';
import { ProductFactory } from '../classes/productFactory';
import { BehaviorSubject } from 'rxjs';
import { Database, ref, set, push, update, remove } from '@angular/fire/database';
import { onValue } from 'firebase/database';
import { productType } from '../classes/productType';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private productsSubject = new BehaviorSubject<IProduct[]>([]);
  products$ = this.productsSubject.asObservable();
  constructor(private db: Database) {}
  fetchProducts(): void {
    const productRef = ref(this.db, 'products');
    console.log(productRef);
    onValue(productRef, (snapshot) => {
      const data = snapshot.val();
      const products = data ?
        Object.entries(data).map(([key, value]: [string, any]) => 
          ProductFactory.createProduct({...value, id: key})): [];
        this.productsSubject.next(products);
    });
  }
  addProduct(product: IProduct): void {
    const productRef = ref(this.db, 'products');
    const newProductRef = push(productRef);
    set(newProductRef, {
      ...product,
      id: newProductRef.key,
      type: product.getType(),
    });
  }
  editProduct(updatedProduct: IProduct): void {
    console.log(updatedProduct);
    const productRef = ref(this.db, `products/${updatedProduct.getId()}`);
    update(productRef, updatedProduct);
  }
  deleteProduct(productId: string): void {
    const productRef = ref(this.db, `products/${productId}`);
    remove(productRef);
  }
}
