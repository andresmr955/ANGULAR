import { Component, signal, Input, SimpleChanges, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModel } from '@shared/models/product.model';
import { Cart } from '@services/cart';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header-c',
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive],
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
