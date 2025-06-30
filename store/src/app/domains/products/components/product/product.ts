import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  // image = "https://picsum.photos/640/640?r=" + Math.random()
  @Input({required: true}) image: string = "";
  @Input() price: number = 0;
  @Input() title: string = "";
  @Input() test: string = "";

  @Output() addToCart = new EventEmitter()

  addToCartHandler(){
    console.log('click from child')
    this.addToCart.emit('Hello this is my msg output  =>  ' + this.title)
  }
}
