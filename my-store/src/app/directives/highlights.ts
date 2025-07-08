import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class Highlights {

  @HostListener('mouseenter') onMouseEnter() {
        this.element.nativeElement.style.backgroundColor = 'green'

  }
  @HostListener('mouseleave') onMouseLeave() {
        this.element.nativeElement.style.backgroundColor = ''

  }
  constructor(
    private element: ElementRef
  ) { 
    this.element.nativeElement.style.backgroundColor = 'red'
  }

}
 