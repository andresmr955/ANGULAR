
import { Component, signal, inject, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductC } from '@products/components/product-c/product-c';
import { ProductModel } from '@shared/models/product.model';
import { Category } from '@shared/models/category.model';
import { Header } from "@shared/components/header-c/header-c";
import { Cart } from '@shared/services/cart';
import { Product } from '@shared/services/product.service';
import { CategoryService  } from '@shared/services/category';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list-c',
  imports: [ProductC, CommonModule, RouterLinkWithHref],
  templateUrl: './list-c.html',
  styleUrl: './list-c.css'
})
export class ListC {
  test = "Ana"
  productsc = signal<ProductModel[]>([]);
  categories = signal<Category[]>([]);

  // cart = signal<ProductModel[]>([]);
  private cartService = inject(Cart)
  private productService = inject(Product)
  private categoryService = inject(CategoryService)
  
  @Input() category_id?:string;
  cart = this.cartService.cart;

  ngOnInit(){
    this.getProducts();
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges){
    const category_id = changes['category_id']
    if (category_id){
      this.getProducts()
    }
  }

  constructor(){
    // const initProducts: ProductModel[] = [
    //   {
    //     id: Date.now(),
    //     title: 'pro 1',
    //     price: 100,
    //     image: 'https://picsum.photos/640/640?r24',
    //     creationAt: new Date().toISOString()     
    //   },
    //    {
    //     id: Date.now(),
    //     title: 'pro 1',
    //     price: 100,
    //     image: 'https://picsum.photos/640/640?r23',
    //     creationAt: new Date().toISOString()           
    //   }
    // ]
    // this.productsc.set(initProducts)
  }
  addToCart(product: ProductModel){
    //event: Event
    // console.log("We are in the parent")
    // console.log(event)
    
    // this.cart.update(prevState => [...prevState, product])
    this.cartService.addToCart(product)
  }

  private getProducts(){
    this.productService.getProducts(this.category_id)
    .subscribe({
        next: (products) => {
          this.productsc.set(products);
        },
        error: () => {

        }
      }
    )
  }

  private getCategories(){
    this.categoryService.getAll()
    .subscribe({
        next: (category) => {
          this.categories.set(category);
        },
        error: () => {

        }
      }
    )
  }
}