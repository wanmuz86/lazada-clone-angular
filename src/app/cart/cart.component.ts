import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service'
import {CartItem} from '../cart-item';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartItems : CartItem[]  = []
totalPrice : number 
totalCount : number
  constructor(public cartService : CartService) { }

  ngOnInit() {
  	this.refreshCart();
  }

  deleteProduct(item){
  	this.cartService.removeItem(item);
  	this.refreshCart();
  }

  private refreshCart(){
  	this.cartItems = this.cartService.items
  	this.totalPrice = this.cartService.itemPrice
  	this.totalCount = this.cartService.itemCount
  }

}
