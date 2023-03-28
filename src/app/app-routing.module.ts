import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { TempSignupComponent } from './temp-signup/temp-signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsListComponent } from './admin/products-list/products-list.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ProductDetailsComponent } from './admin/product-details/product-details.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { DeleteProductComponent } from './admin/delete-product/delete-product.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login/t-signup', component: TempSignupComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'navbar', component: NavbarComponent, children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductsListComponent },
      { path: 'cart', component: CartComponent },
      { path: 'products-list', component: ProductsListComponent },
      { path: 'products', component: ProductsComponent},
      {
        path: 'admin', component: AdminComponent, children: [

          { path: 'products-details/:id', component: ProductDetailsComponent },
          { path: 'edit/:id', component: EditProductComponent },
          { path: 'delete', component: DeleteProductComponent },
          { path: 'add-product', component: AddProductComponent },

        ]
      },


    ],
  },
  { path: 'register-user', component: TempSignupComponent },
];
// {path:'',redirectTo:'login',pathMatch:'full'},
// {path:'login',component:LoginPageComponent},

// {path:'home',component:NavbarComponent,children:[
//   {path:'',redirectTo:'products',pathMatch:'full'},
//   {path:'products',component:ProductsComponent},
//   {path:'cart',component:CartComponent},
//   {path:'admin',component:AdminComponent,children: [
//   {path:'',redirectTo:'products-list',pathMatch:'full'},  
//   {path:'products-list',component:ProductsListComponent},
//   {path:'products-details/:id',component:ProductDetailsComponent},
//   {path:'product-edit/:id',component:ProductsListComponent},
//   {path:'product-delete',component:ProductsComponent},
//   {path:'add-product',component:AddProductComponent},
    
//   ]},
// ]},

// {path:'temp-signup',component:TempSignupComponent},
// {path:'register-user',component:TempSignupComponent},

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
