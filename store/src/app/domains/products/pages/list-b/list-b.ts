import { Component, signal } from '@angular/core';
import { Productb } from '@products/components/product-b/productb';
import { CommonModule } from '@angular/common';
import { ProductModel } from "@shared/models/product.model";
import { Header } from "@shared/components/header/header";

@Component({
  selector: 'app-list-b',
  imports: [Productb, CommonModule,Header],
  templateUrl: './list-b.html',
  styleUrl: './list-b.css'
})
export default class ListB {
  test = "Ana"
  productsb = signal<ProductModel[]>([]);
  cart = signal<ProductModel[]>([]);

  constructor(){
    const initProducts: ProductModel[] = [
      {
        id: Date.now(),
        title: 'pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r24',
        creationAt: new Date().toISOString(),
        description: '',   
        category: { id: 0, name: '', image: '' },  
      },
      {
        id: Date.now() + 1,
        title: 'pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r22',
        creationAt: new Date().toISOString(),
        description: '', 
        category: { id: 0, name: '', image: '' },                
      }
    ]
    this.productsb.set(initProducts)
  }
  addToCart(product: ProductModel){
    //event: Event
    // console.log("We are in the parent")
    // console.log(event)
    
    this.cart.update(prevState => [...prevState, product])
  }
}