import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { productService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  addProduct!: FormGroup;
  imageUrl: string = '';
  images: string[] = [];
  categoryList = []
  id: any;
  product: any;

  constructor(private fb: FormBuilder, private ps: productService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.addProduct = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      price: ['', [Validators.required]],
      Image: ['', [Validators.required]],
    });

    console.log(this.route.snapshot.params['id']);

    this.id = this.route.snapshot.params['id'];

    if (this.id) {
      this.ps.getProductById(this.id).subscribe((res: any) => {
        this.product = res
        console.log(res)
        this.addProduct.setValue({
          title: res.title ,
          description: res.description,
          category: res.category,
          rating: res.rating,
          price: res.price,
        });
        this.images = res.images;




      }, (err: any) => { console.log('error occured,', err) });
    }

  }
}