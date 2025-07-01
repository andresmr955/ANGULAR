import { Component, signal, Input } from '@angular/core';
import { ProductModel } from './../../../shared/models/product.model';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  hideSideMenu = signal(true)
  @Input({required:true}) cart: ProductModel [] = [];

  toggleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState)
  }
}
