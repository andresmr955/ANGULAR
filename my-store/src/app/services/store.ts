import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class Store {

  constructor() { }

  private shoppingCart: ProductModel[] = [];
  private total = 0

  AddToShoppingCart(product: ProductModel){
    console.log(product)
    this.shoppingCart.push(product)
    
  }
  getTotal(){
     this.total = this.shoppingCart.reduce((sum , item ) => sum + item.price, 0)
     return Number(this.total.toFixed(2));
  }
  getShoppingCart(){
    return this.shoppingCart;
  }
}
