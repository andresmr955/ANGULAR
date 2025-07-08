import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Store {

  constructor() { }

  private shoppingCart: ProductModel[] = [];
  private myCart = new BehaviorSubject<ProductModel[]>([]);
  private total = 0

  myCart$ = this.myCart.asObservable(); 
  
  AddToShoppingCart(product: ProductModel){
    console.log(product)
    this.shoppingCart.push(product)
    this.myCart.next(this.shoppingCart)
  }
  getTotal(){
     this.total = this.shoppingCart.reduce((sum , item ) => sum + item.price, 0)
     return Number(this.total.toFixed(2));
  }
  getShoppingCart(){
    return this.shoppingCart;
  }
}
