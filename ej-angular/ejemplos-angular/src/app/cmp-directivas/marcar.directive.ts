import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective implements OnInit{

  @HostBinding('style.backgroundColor') colorFondo = 'white';
  @Input('appMarcar') color: string = 'green';

  constructor(private elementRef: ElementRef) {
    console.log(elementRef);
    //elementRef.nativeElement.style.backgroundColor = 'green';
  }

  ngOnInit() {
    console.log({color: this.color});
   // this.color = this.color ==='' ? 'blue' : this.color;
    this.color = this.color || 'blue';

    console.log({color1: this.color});
  }

  @HostListener('mouseover') onMouseOver() {
    this.colorFondo = this.color;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.colorFondo = 'white';
  }


}
