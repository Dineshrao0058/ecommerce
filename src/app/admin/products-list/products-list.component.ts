import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';
import { productService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: any
  constructor(
    private ps: productService,
    private cs: CartService
  ) { }

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe(res => {
      this.products = res;
      console.log(this.products)
    })
  }
  addToCart(product: any) {
    this.cs.addCart(product)
  }
}
