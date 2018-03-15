import { Injectable } from '@angular/core';
import {PRODUCTS } from './mock-phones'
import {Product} from './product'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
@Injectable()
export class ProductService {
products = [{
	id:1,
	name:"iPhone 10",
	description:"Best phone ever",
	price: 1999
},
{
	id:2,
	name:"Samsung 10",
	description:"Best phone ever",
	price: 2999
},
{
	id:3,
	name:"Huawei P10",
	description:"Best phone ever",
	price: 2099
}

]
  constructor() { }

  getProducts() : Observable<Product[]> {
  	return of(this.products)
  }
  addItem(item){
  	this.products.push(item)
  }
  getProduct(id: number): Observable<Product> {

  return of(this.products.find(product => product.id === id));
}

}
