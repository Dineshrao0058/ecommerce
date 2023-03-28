import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { productI } from 'src/app/shared/interface/product';
import { productService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editProduct!: FormGroup
  imgUrl: string = '';
  images: string[] = [];
  categoryList = [];
  id: any;
  product: any;
  constructor(private fb: FormBuilder, private ps: productService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.editProduct = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      category: ['', [Validators.required]],
      rating: ['', [Validators.required]],

    });
    console.log(this.route.snapshot.params['id']);

    this.id = this.route.snapshot.params['id'];

    if (this.id) {
      this.ps.getProductById(this.id).subscribe((res: any) => {
        this.product = res

        this.editProduct.setValue({
          title: res.title,
          description: res.description,
          price: res.price,
          category: res.category,
          rating: res.rating,

        });

        this.images = res.images;

      }, (err: any) => { console.log('error occured', err) });

    }

  }

  addImage() {
    if (this.imgUrl) {
      this.images.push(this.imgUrl);
      this.imgUrl = ''
    }
  }

  removeImgUrl(index: any) {
    if (this.images.length > 0) {
      this.images = this.images.filter((img: any, i: any) => i != index)
    }
  }

  cancel() {
    this.router.navigate(['home/admin/products-details/' + this.id])
  }

  submit() {
    if (this.editProduct.valid) {
      let productData: productI = {
        title: this.editProduct.value.title,
        price: this.editProduct.value.price,
        description: this.editProduct.value.description,
        category: this.editProduct.value.category,
        images: this.images,
        rating: this.editProduct.value.rating,
      };

      this.ps.editProduct(this.id, productData).subscribe((res: any) => {
        console.log('product edited succesfully');

        this.router.navigateByUrl('home/admin/products-details/' + this.id);
        //  this.router.navigate(['/admin/products-list',this.id]); 

      }, (err: any) => {
        console.log('error occred', err);

      });


    }

  }
}





