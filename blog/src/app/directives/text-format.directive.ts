import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextFormat]'
})
export class TextFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur(){
    let value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();
  }

}
