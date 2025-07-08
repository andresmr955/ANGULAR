import { Component } from '@angular/core';
import { ProductModel } from './../../models/product.model';
import { Store } from './../../services/store';
@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  activeMenu = false;
  activeShoppingCart = false;

  myShoppingCart: ProductModel [] = [];
  
  constructor(
    private storeService: Store
  ){
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }
  toggleShoppingCart(){
    this.activeShoppingCart = !this.activeShoppingCart;
  }

  getTotal(){
    return this.storeService.getTotal();
  }
  
}
