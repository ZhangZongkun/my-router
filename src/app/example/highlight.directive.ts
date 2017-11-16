import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @Input() defaultColor: string;
  // @Input()
  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.defaultColor);
    this.highlight(this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
