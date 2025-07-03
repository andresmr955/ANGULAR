import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModel } from '@shared/models/product.model';
import { Category } from '@shared/models/category.model';

@Component({
  selector: 'app-productb',
  imports: [CommonModule],
  templateUrl: './productb.html',
  styleUrl: './productb.css'
})
export class Productb {
  // @Input() product!: ProductModel;

  @Input({required: true}) image: string = "";
  @Input({required: true}) price: number = 0;
  @Input({required: true}) title: string = "";
  @Input({required: true}) creationAt: string = "";
  @Input() category: Category = {
    id: 0,
    name: '',
    image: ''
  };

  @Output() addToCart = new EventEmitter()

  addToCartHandler(){
    console.log('click from child')
    // this.addToCart.emit('Hello this is my msg output  =>  ' + this.title)
       const product: ProductModel = {
      id: 1,
      image: this.image,
      price: this.price,
      title: this.title,
      creationAt: this.creationAt,
      description: '',     
      category: this.category,
    };

    this.addToCart.emit(product);
  
  }
}
