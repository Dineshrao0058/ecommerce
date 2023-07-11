import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { productService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  @Input() productId: any;
  @Output() flag = new EventEmitter<boolean>();

  constructor(private ps: productService, private router: Router) { }
  ngOnInit(): void {
    // console.log('delete id',this.productId);
  }

  deleteProduct() {

    this.ps.deleteProduct(this.productId).subscribe((res: any) => {
      console.log('deleted succesfully..')
      this.flag.emit(false);
      this.router.navigateByUrl('home/admin/products-list')
    }, (err: any) => {
      console.log('error occured', err);

    });
  }
  cancel() {
    this.flag.emit(false)
  }


}


