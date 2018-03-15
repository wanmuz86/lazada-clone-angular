import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../product'
import {ProductService} from '../product.service'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
@Input() currentProduct: Product;
  constructor(private route: ActivatedRoute, public productService:ProductService) { }

  ngOnInit() {
  	this.getProduct()
  }

  getProduct(){
  	 const id = +this.route.snapshot.paramMap.get('id');
  	 this.productService.getProduct(id).subscribe(data=>{
  	 	this.currentProduct = data
  	 	console.log()
  	 })
  }

}
