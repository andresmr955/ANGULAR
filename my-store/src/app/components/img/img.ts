import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img.html',
  styleUrl: './img.css'
})
export class Img {

  @Input() imgInput: string = "";
  @Output() loaded = new EventEmitter<string>();

  imgDefault = "assets/default.png";
  imgErrors= "assets/any.png";

  imgError(){
    this.imgInput = this.imgErrors
  }
  imgLoaded(){
    console.log('log children');
    this.loaded.emit("Andres");
  }
}
