import { Directive, ElementRef, EventEmitter, HostListener, Input, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[DisableButton]'
})
export class DisableButtonDirective {

  @Input('DisableButton') reEnableButton: EventEmitter<boolean>;
  subscription: Subscription;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  @HostListener('click')
  onClick() {
    console.log('clicked');
    this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
  }

  ngOnInit(): void {
    this.subscription = this.reEnableButton.subscribe(v => {
      if(!v) this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    });
  }
  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }

}
