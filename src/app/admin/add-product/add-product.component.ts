import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { productI } from 'src/app/shared/interface/product';
import { productService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProduct!: FormGroup;
  images: string[] = [];
  categoryList = []
  imageUrl: any;

  constructor(private fb: FormBuilder, private ps: productService) {

  }

  ngOnInit(): void {
    this.addProduct = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]], 
      rating: ['', [Validators.required]],
      price: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
    })
  }


  submit() {
    if (this.addProduct.valid) {
      let ProductData = {
        title: this.addProduct.value.title,
        price: this.addProduct.value.price,
        description: this.addProduct.value.description,
        category: this.addProduct.value.category,
        images: [this.addProduct.value.imageUrl],
        rating: this.addProduct.value.rating,
      };
      this.ps.addproduct(ProductData).subscribe((res: any) => {
        alert('product added successfully')
      }, (err: any) => {
        console.log('error occured', err);


      });

    }
  }
}
