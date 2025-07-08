import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img.html',
  styleUrl: './img.css'
})
export class Img {
  private  counterFn: number | undefined;
  
  constructor(){
    //before render 
    //NO async -- once time
      console.log('constructor', 'ImagValue =>', this.imgInput)

  }

  ngOnChanges(changes: SimpleChanges){
    //before render
    //changes inputs --times
    console.log('ngOnChanges', 'ImagValue =>', this.imgInput)
    console.log(changes)
  }
  ngOnInit(){
    //before render
    // async - fetch --once time
    console.log('ngOnInit', 'ImagValue =>', this.imgInput)

    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000);

  }
  ngAfterViewInit(){
    // after render
    // handler children
    console.log('ngAfterViewInit')
  }
  ngOnDestroy(){
    //delete
    console.log('ngOnDestroy','ImagValue =>', this.imgInput)
    clearInterval(this.counterFn)
  }

  imgInput: string = '';

  @Input('imgInput')
  set changeImg(newImage: string){
    this.imgInput = newImage
    console.log('change just image', this.imgInput);
  }
  //@Input() imgInput: string = "";
  @Output() loaded = new EventEmitter<string>();

  imgDefault = "assets/default.png";
  imgErrors= "assets/any.png";

  
  // counter = 0;
 

  imgError(){
    this.imgInput = this.imgErrors
  }
  imgLoaded(){
    console.log('log children');
    this.loaded.emit("Andres");
  }
}
