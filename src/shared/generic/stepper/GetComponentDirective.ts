import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[getComponentDirective]'
})
export class GetComponentDirective {
  @Input() getComponent: (contentType: string) => any;
}
