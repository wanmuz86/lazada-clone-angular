import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ProductService} from './product.service';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import {CartService} from './cart.service'
const routes: Routes = [
  { path: 'products', component: PageListComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'orders', component:OrderComponent},
  {path: 'carts', component:CartComponent},
  { path: "**", redirectTo: "/products" }
];
@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    ProductDetailComponent,
    OrderComponent,
    CartComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
