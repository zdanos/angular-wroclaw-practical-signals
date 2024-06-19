import { Component, model } from '@angular/core';
import { MatChipListbox, MatChipOption } from '@angular/material/chips';

@Component({
  selector: 'app-models-child',
  standalone: true,
  imports: [MatChipListbox, MatChipOption],
  templateUrl: './models-child.component.html'
})
export class ModelsChildComponent {
  month = model<string>();

  months = Array.from({ length: 12 }, (_, index) => new Date(0, index).toLocaleString('en-US', { month: 'short' }));

  pickMonth(month: string): void {
    this.month.set(month);
  }
}
