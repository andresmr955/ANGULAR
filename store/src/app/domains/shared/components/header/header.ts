import { Component, signal, Input, SimpleChanges } from '@angular/core';
import { ProductModel } from './../../../shared/models/product.model';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  hideSideMenu = signal(true)
  total = signal(0)

  @Input({required:true}) cart: ProductModel [] = [];

  toggleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState)
  }

  ngOnChanges(changes: SimpleChanges){
    const cart = changes['cart'];
    if (cart){
      this.total.set(this.calcTotal)
    }
  }
  get calcTotal(){
    return this.cart.reduce((total, product) => total + product.price, 0)
  }
}
