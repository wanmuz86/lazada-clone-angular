import { Component, OnInit } from '@angular/core';
import {Product} from '../product'
import {ProductService} from '../product.service'
import {CartService} from '../cart.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

selectedProduct : Product
phones : Product[] = []
newprod : Product= {
  id:0,
	name:'',
	description:'',
	price:0
}
  constructor(public productService : ProductService, 
    public cartService: CartService, public router : Router) { }

  ngOnInit() {
  this.productService.getProducts().subscribe(data=>{
  	this.phones = data 
  });
  console.log(this.phones)
  }

  addItem(){
	this.productService.addItem(this.newprod)
	this.newprod = {
    id:0,
	name:'',
	description:'',
	price:0
}
}
selectProduct(phone){
	this.selectedProduct = phone
}
public addProductIntoCart(product : Product){
  this.cartService.addItem(product)
  this.router.navigateByUrl('/carts');
  console.log(this.cartService.items)
}
}
