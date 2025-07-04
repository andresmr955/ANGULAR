import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Product } from './components/product/product';
import { Img } from './components/img/img'
import { FormsModule } from '@angular/forms';
import { ProductModel } from './models/product.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, Img, Product, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  imgParent = 'my-store';
  imgRandom = 'https://picsum.photos/200'
  //https://www.w3schools.com/howto/img_avatar.png
  imgInput = ''

  products: ProductModel[] = [
  { id: '1', name: 'Product 1', price: 15.99, image: 'https://picsum.photos/200' },
  { id: '2', name: 'Product 2', price: 12.49, image: 'https://picsum.photos/200' },
  { id: '3', name: 'Product 3', price: 19.99, image: 'https://picsum.photos/200' },
  { id: '4', name: 'Product 4', price: 9.99,  image: 'https://picsum.photos/200' },
  { id: '5', name: 'Product 5', price: 14.00, image: 'https://picsum.photos/200' },
  { id: '6', name: 'Product 6', price: 22.25, image: 'https://picsum.photos/200' },
  { id: '7', name: 'Product 7', price: 17.75, image: 'https://picsum.photos/200' },
  { id: '8', name: 'Product 8', price: 8.50,  image: 'https://picsum.photos/200' },
  { id: '9', name: 'Product 9', price: 11.30, image: 'https://picsum.photos/200' },
  { id: '10', name: 'Product 10', price: 20.99, image: 'https://picsum.photos/200'},

  ]

  onLoaded(greet: string){
    console.log("log parent", greet);
    
  }
}
