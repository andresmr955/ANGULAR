import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  // image = "https://picsum.photos/640/640?r=" + Math.random()
  @Input({required: true}) image: string = "";
  @Input() price: number = 0;
  @Input() title: string = "";

}
