import { Component } from '@angular/core';

import { ModelsChildComponent } from './models-child.component';

@Component({
  standalone: true,
  imports: [ModelsChildComponent],
  template: `
    <app-models-child [month]="month" (monthChange)="showPickedMonth($event)" />
    <div>{{ month }}</div>
  `
})
export default class ModelsComponent {
  month: string | undefined = 'May';

  showPickedMonth(month: string | undefined): void {
    this.month = month;
  }
}
