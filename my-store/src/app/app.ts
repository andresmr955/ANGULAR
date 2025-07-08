import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import { Product } from './components/product/product';
// import { Img } from './components/img/img'
import { Nav } from './components/nav/nav';
import { FormsModule } from '@angular/forms';
// import { ProductModel } from './models/product.model';
import { ListProducts } from './../app/components/list-products/list-products'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ListProducts, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  imgParent = 'my-store';
  imgRandom = 'https://picsum.photos/200'
  //https://www.w3schools.com/howto/img_avatar.png
  imgInput = ''
  showImg = true;
  

  onLoaded(greet: string){
    console.log("log parent", greet);
    
  }
  toggleImag(){
    this.showImg = !this.showImg
  }
}
