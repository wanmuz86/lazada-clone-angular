import { Injectable } from '@angular/core';
import {CartItem} from './cart-item'
import {Cart} from './cart'
import {Product} from './product';

@Injectable()
export class CartService {
	public items : CartItem[] = [];
	public itemCount : number = 0;
	public itemPrice : number  = 0;

  constructor() { }
  public addItem(newProduct: Product, quantity:number =1 ){
  	let isNew : boolean = true
  	this.items.forEach((p)=>{
  		if (p.product.id === newProduct.id){
  			  isNew = false
  			  p.quantity += quantity
		
  		}
  	}
  	)
  	if (isNew){
  		this.items.push(new CartItem(newProduct,quantity));
  	}
	this.calculateTotalAndPrice()
  }

  public removeItem(item:CartItem){

  	this.items.forEach((p,i)=>{
  		console.log(i)
  		if (p.product.id == item.product.id){
  			console.log("delete "+i)
  			 this.items.splice(i,1)
  		}

  	})
  	console.log(this.items);
  	this.calculateTotalAndPrice()

  }

  public removeAllItemInCart(){
  	this.items = [];
  	this.itemPrice = 0;
  	this.itemCount = 0;

  }

  private calculateTotalAndPrice(){
  	let totalCount = 0;
  	let totalPrice = 0
  	this.items.forEach((item)=>{
  		totalPrice += item.quantity * item.product.price
  		totalCount += item.quantity
  	})
  	this.itemPrice = totalPrice;
  	this.itemCount = totalCount;

  }

}
