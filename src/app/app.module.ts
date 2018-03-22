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
import {CartService} from './cart.service';
import { LoginComponent } from './login/login.component'
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AuthService} from './auth.service';
import {UserService} from './user.service'
import { NavHeaderComponent } from './nav-header/nav-header.component'
const routes: Routes = [
  { path: 'products', component: PageListComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'orders', component:OrderComponent},
  {path: 'carts', component:CartComponent},
  {path: 'login', component:LoginComponent},
  { path: "**", redirectTo: "/products" }
];
@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    ProductDetailComponent,
    OrderComponent,
    CartComponent,
    LoginComponent,
    NavHeaderComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule

  ],
  providers: [ProductService,CartService, AuthService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
