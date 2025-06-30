import { Component, SimpleChanges, Input} from '@angular/core';
import { Product } from "../../../products/components/product/product";

@Component({
  selector: 'app-counter',
  imports: [Product],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = "";

  constructor(){
    //NO ASYNC
    //before render
    //Once 
    console.log('constructor')
    console.log('_'.repeat(10))
  }
  ngOnChanges(changes: SimpleChanges){
    //before and during render
    console.log('ngOnChanges')
    console.log('_'.repeat(10))
    console.log(changes)
    const duration = changes['duration']
    if(duration && duration.currentValue !== duration.previousValue){
      this.doSomething();
    }
  }

  ngOnInit(){
    //AFTER RENDER
    //ONCE
    // Async, then , subs
    console.log('ngOnInit')
    console.log('_'.repeat(10))
    console.log('duration => ', this.duration)
    console.log('message => ', this.message)
    
  }
  ngAfterViewInit(){
  //After render
  // child were already rendered?
    console.log('ngAfterViewInit')
    console.log('_'.repeat(10))
    
  }
  ngOnDestroy(){
    console.log('ngOnDestroy')
    console.log('_'.repeat(10))
  }

  doSomething(){
    console.log('changes duration')
    //async
  }
}
