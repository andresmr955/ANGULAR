import { Component } from '@angular/core';
import { Product } from './../../components/product/product';
import { Header } from "../../../shared/components/header/header";
@Component({
  selector: 'app-list',
  imports: [Product, Header],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  test = "Ana"
  
  fromChild(event: string){
    console.log("We are in the parent")
    console.log(event)
  }
}
