import { Injectable, signal, computed } from '@angular/core';
import { ProductModel } from '@shared/models/product.model';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class Cart {

  cart = signal<ProductModel[]>([]);  
  total = computed(() => { 
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0)
  })

  constructor() { }

  addToCart(product: ProductModel){
  //event: Event
  // console.log("We are in the parent")
  // console.log(event)
  
  this.cart.update(prevState => [...prevState, product])
  }

  
  
}
