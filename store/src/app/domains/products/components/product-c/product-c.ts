import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModel } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse-pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-c',
  imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLink],
  templateUrl: './product-c.html',
  styleUrl: './product-c.css'
})
export class ProductC {

  @Input({required: true}) product!: ProductModel;

  @Output() addToCart = new EventEmitter()

  addToCartHandler(){
    console.log('click from child')
    // this.addToCart.emit('Hello this is my msg output  =>  ' + this.product.title)
    this.addToCart.emit(this.product)
  }
}
