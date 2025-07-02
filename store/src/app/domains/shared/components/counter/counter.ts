import { Component, SimpleChanges, Input, signal} from '@angular/core';
import { interval, Subscription } from 'rxjs';

import { Product } from "@products/components/product/product";

@Component({
  selector: 'app-counter',
  imports: [Product],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = "";

  counter = signal(0);
  counterRef: number | undefined

  contador = 0;
  private sub!: Subscription;

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

    this.counterRef = window.setInterval(() => {
      console.log('Runs interval')
      this.counter.update(statePrev => statePrev + 1);
    }, 1000)

    const timer$ = interval(1000);

    // Nos suscribimos al observable
    this.sub = timer$.subscribe(valor => {
      console.log('Runs contador', valor);
      this.contador = valor;
    });
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
    window.clearInterval(this.counterRef)
    console.log('interval canceled');
    if (this.sub) {
      this.sub.unsubscribe();
      console.log('Suscripción canceled');
    }
  }

  doSomething(){
    console.log('changes duration')
    //async
  }
}
