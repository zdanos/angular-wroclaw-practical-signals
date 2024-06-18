import { Component, input } from '@angular/core';

@Component({
  selector: 'app-signal-inputs-child',
  standalone: true,
  template: '{{ user()?.firstName }} {{ user()?.lastName }}',
  styles: `
    :host
      display: block
  `
})
export class SignalInputsChildComponent {
  user = input<{ age: number, firstName: string, lastName: string }>();
}
