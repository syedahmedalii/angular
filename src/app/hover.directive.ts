import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.background = 'red';
  }

}
