import { Injectable } from '@angular/core';
import { IProduct } from '../classes/IProduct';
import { ProductFactory } from '../classes/productFactory';
import { ConfigService } from './config.service';
import { ProductType } from '../classes/productType';

const API_URL = 'https://api.jsonbin.io/v3/b/6808e96c8a456b79668f9cab';
const API_KEY_Master = '$2a$10$0AOXojDkIORgxTm/qixBo.Z4yl44tO9.SlMRFYU0ZL7DqbzVqOysC';
const API_KEY_ACCESS = '$2a$10$uZ307WYFzhJza.TJamVD2uUF/YA9Jtwx/ZUKNSle7YrsEJMpFn58e';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  public products: IProduct[] = [];
  addProduct(product: IProduct) {
    this.products.push(product);
  }
    public async load() {
      fetch(API_URL, {
        method: 'GET',
        headers: { 
          'X-Master-Key': API_KEY_Master, 
          'X-Access-Key': API_KEY_ACCESS, 
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((json) => {
          let data = json;
          data = data.record;
          console.log(data);
          let products = data.record.map((item: any) => ProductFactory.createProduct(item));
          this.products = [];
          products.forEach((product: any) => this.addProduct(product));
          let type = this.configService.type$.value;
          this.search(type);
        });
    }
    searchProducts: IProduct[] = [];
    search(type: ProductType) {
      this.searchProducts = this.products.filter((product) => {
        return product.getType() == type;
      });
      console.log(this.searchProducts);
    }
    constructor(private configService: ConfigService) { }
    typeSub = this.configService.type$
      .subscribe(() => {
        let type = this. configService.type$.value;
        this.search(type);
      });
}
