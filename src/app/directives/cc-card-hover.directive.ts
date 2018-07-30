import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCcCardHover]'
})
export class CcCardHoverDirective {
  // @HostBinding('class.bg-primary') private ishovering: boolean;
  //
  // @Input('appCcCardHover') config: Object = {
  //   querySelector: '.card-text'
  // };

  /*
     * The ElementRef gives the directive direct access to the DOM element upon which it’s attached.
     * Angular team has provided a platform independent way of
     setting properties on our elements via something called a Renderer
   */

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
  }

  // @HostListener('mouseover') onHover() {
    // window.alert('Hi Hover');
    // const jokeText = this.el.nativeElement.querySelector('.card-text');
    // const jokeText = this.el.nativeElement.querySelector(this.config.querySelector);
    // this.renderer.setStyle(jokeText, 'display', 'block');
    // this.ishovering = true;
  // }
  // @HostListener('mouseout') onLeave() {
    // const jokeText = this.el.nativeElement.querySelector('.card-text');
    // const jokeText = this.el.nativeElement.querySelector(this.config.querySelector);
    // this.renderer.setStyle(jokeText, 'display', 'none');
    // this.ishovering = false;
  // }

}
