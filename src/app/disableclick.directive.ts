import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDisableclick]'
})
export class DisableclickDirective {

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.pointerEvents='none';
  }

}
