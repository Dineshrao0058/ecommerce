import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { TempSignupComponent } from './temp-signup/temp-signup.component';
import { ProductsListComponent } from './admin/products-list/products-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { DeleteProductComponent } from './admin/delete-product/delete-product.component';
import { ProductDetailsComponent } from './admin/product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TempSignupComponent,
    ProductsListComponent,
    NavbarComponent,
    AdminComponent,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    ProductDetailsComponent,
    ProductsComponent,
    CartComponent
    
  
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
