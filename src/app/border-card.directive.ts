import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmonBorderCard]',
})
export class BorderCardDirective {
  @Input('pkmonBorderCard') defaultBorderColor?: string;

  constructor(private elt: ElementRef) {
    this.setBorder('#f5f5f5');
    this.setHeight(180);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.defaultBorderColor || '#009688');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  setBorder(color: string) {
    let newBorder = 'solid 4px ' + color;
    this.elt.nativeElement.style.border = newBorder;
  }

  setHeight(height: number) {
    this.elt.nativeElement.style.height = height + 'px';
  }
}
