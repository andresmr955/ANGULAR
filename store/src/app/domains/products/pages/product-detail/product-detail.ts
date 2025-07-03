import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Product } from '@shared/services/product.service';
import { ProductModel} from '@shared/models/product.model';
import { Cart } from '@shared/services/cart';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  @Input() id?: string;
  product = signal<ProductModel| null>(null);
  cover = signal('');

  private cartService = inject(Cart)
  
  private productService = inject(Product)

  ngOnInit(){
    if(this.id){
      this.productService.getOne(this.id)
      .subscribe({
        next: (product) => {
          this.product.set(product);
          if(product.image.length > 0){
            this.cover.set(product.image[0])
          }
        }
      })
    }
    
  }

  changeCover(newImg: string){
    this.cover.set(newImg)
  }

  addToCart(){
    const product = this.product();
    if (product){
      this.cartService.addToCart(product)
    }
  }
}
