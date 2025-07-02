import { Component, signal, Input, SimpleChanges, inject} from '@angular/core';
import { ProductModel } from '@shared/models/product.model';
import { Cart } from '@services/cart';
@Component({
  selector: 'app-header-c',
  imports: [],
  templateUrl: './header-c.html',
  styleUrl: './header-c.css'
})
export class Header {
  hideSideMenu = signal(true)
  private cartService = inject(Cart)

  cart = this.cartService.cart;
  total = this.cartService.total;

  toggleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState)
  }
  
}
