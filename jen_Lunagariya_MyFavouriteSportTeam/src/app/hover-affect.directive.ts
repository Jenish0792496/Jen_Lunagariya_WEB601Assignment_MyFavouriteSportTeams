import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[hover-affect]'
})
export class HoverAffectDirective {
  @HostBinding('style.text-decoration') textDecoration: string;
  @HostBinding('style.font-weight') fontWeight: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.textDecoration = 'underline';
    this.fontWeight = 'bold';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textDecoration = 'none';
    this.fontWeight = 'normal';
  }
}
