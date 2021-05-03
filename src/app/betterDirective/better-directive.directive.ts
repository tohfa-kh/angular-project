import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer:Renderer2) { }
  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'purple')
  }

}
