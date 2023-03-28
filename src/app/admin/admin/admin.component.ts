import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  allProducts: any = [];
  categories: any;
  showProducts=true
  constructor(private ps: productService, private router:Router) { }

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe((res: any) => {
      console.log(res);
      this.allProducts = res;
    });
  }
  addProduct(){
this.showProducts=false
  }
}
