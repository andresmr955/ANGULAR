import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class Product {
  private http = inject(HttpClient)
  constructor() { }

  getProducts(){
    //return this.http.get<ProductModel[]>('https://fakestoreapi.com/products')
    return this.http.get<ProductModel[]>(`https://api.escuelajs.co/api/v1/products`)

  }
  getOne(id:string){
    return this.http.get<ProductModel>(`https://api.escuelajs.co/api/v1/products/${id}`)
    //return this.http.get<ProductModel>(`https://fakestoreapi.com/products/${id}`)
  }
  
}
