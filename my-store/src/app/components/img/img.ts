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

  constructor(){
    //before render 
    //NO async -- once time
      console.log('constructor', 'ImagValue =>', this.imgInput)

  }

  ngOnChanges(){
    //before render
    //changes inputs --times
    console.log('ngOnChanges', 'ImagValue =>', this.imgInput)

  }
  ngOnInit(){
    //before render
    // async - fetch --once time
    console.log('ngOnInit', 'ImagValue =>', this.imgInput)

  }
  ngAfterViewInit(){
    // after render
    // handler children
    console.log('ngAfterViewInit')
  }
  ngOnDestroy(){
    //delete
    console.log('ngAfterViewInit','ImagValue =>', this.imgInput)
  }
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
