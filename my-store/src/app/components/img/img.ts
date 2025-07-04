import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  imports: [],
  templateUrl: './img.html',
  styleUrl: './img.css'
})
export class Img {
  @Input() img: string = "valor initial";

}
