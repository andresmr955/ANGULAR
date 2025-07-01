
import { Component, signal } from '@angular/core';
import { ProductModel } from './../../../shared/models/product.model';
import { ProductC } from './../../../products/components/product-c/product-c';
import { Header } from "../../../shared/components/header/header";


@Component({
  selector: 'app-list-c',
  imports: [ProductC, Header],
  templateUrl: './list-c.html',
  styleUrl: './list-c.css'
})
export class ListC {
  test = "Ana"
  productsc = signal<ProductModel[]>([]);
  cart = signal<ProductModel[]>([]);

  constructor(){
    const initProducts: ProductModel[] = [
      {
        id: Date.now(),
        title: 'pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r24',
        creationAt: new Date().toISOString()     
      },
       {
        id: Date.now(),
        title: 'pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r23',
        creationAt: new Date().toISOString()           
      }
    ]
    this.productsc.set(initProducts)
  }
  addToCart(product: ProductModel){
    //event: Event
    // console.log("We are in the parent")
    // console.log(event)
    
    this.cart.update(prevState => [...prevState, product])
  }
}