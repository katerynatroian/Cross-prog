import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { productType, ProductType } from "../classes/productType";

@Injectable({
    providedIn: 'root',
})
export class ConfigService {
    currentType = productType[0];
    type$: BehaviorSubject<ProductType> = new BehaviorSubject<ProductType>( 
        productType[0]
    );

    setType(type: ProductType) {
        console.log('Changes are activated');
        this.type$.next(type);
    }
    constructor() {}
}