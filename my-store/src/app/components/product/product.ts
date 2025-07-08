import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Img } from './../img/img';
@Component({
  selector: 'app-product',
  imports: [CommonModule, Img],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  @Input() product!: ProductModel;
  
  @Output() addedProduct = new EventEmitter<ProductModel>();

  today = new Date();
  date = new Date(2021,1,21);
  
  onAddToCart(){
    this.addedProduct.emit(this.product)
  }
}
