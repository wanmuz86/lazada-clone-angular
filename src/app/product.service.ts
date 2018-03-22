import { Injectable } from '@angular/core';
import {PRODUCTS } from './mock-phones'
import {Product} from './product'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
@Injectable()
export class ProductService {

 	private productsCollection: AngularFirestoreCollection<Product>;
  	products: Observable<Product[]>;

  	constructor(private afs: AngularFirestore) {
  		this.productsCollection  = afs.collection<Product>('products');
  		this.products=this.productsCollection.valueChanges();
  	}

  getProducts() : Observable<Product[]> {
  	return this.products
  }
  addItem(item){
  		this.productsCollection.add(item)
  ///	this.products.push(item)  
  }
/*  getProduct(id: number): Observable<Product> {

  return of(this.products.find(product => product.id === id));
}*/

}
