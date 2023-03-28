import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { productI } from "../interface/product";

@Injectable({ providedIn: "root" })

export class productService {
  editProduct(productId: any, productData: productI) {
    return this.http.put('http://localhost:3000/products' + productId ,productData);

  }
  deleteProduct(productId: any) {
    return this.http.delete('http://localhost:3000/products' + productId);

  }
    baseUrl = 'http://localhost:3000'

    rawProducts = [];

    constructor(private http: HttpClient) {

    }

getAllProducts() {
    return this.http.get(this.baseUrl + '/products');
}
 getProductById(id:any){
    return this.http.get(this.baseUrl + '/products/'+id);
 } 

addproduct(Payload: productI) {
    return this.http.post('http://localhost:3000/products', Payload);
}
}
