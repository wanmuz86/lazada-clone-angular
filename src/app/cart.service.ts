import { Injectable } from '@angular/core';
import {CartItem} from './cart-item'
import {Cart} from './cart'
import {Product} from './product';

@Injectable()
export class CartService {
	public items : CartItem[];
	public itemCount : number = 0;
	public itemPrice : number  = 0;

  constructor() { }
  public addItem(newProduct: Product, quantity:number =1 ){


  }

  public removeItem(item:Product){

  }

  public removeAllItemInCart(){

  }

  private calculateItemAndPrice(){

  }

}
