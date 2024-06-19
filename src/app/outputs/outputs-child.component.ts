import { Component, output } from '@angular/core';
import { MatChipListbox, MatChipOption } from '@angular/material/chips';

@Component({
  selector: 'app-outputs-child',
  standalone: true,
  imports: [MatChipListbox, MatChipOption],
  templateUrl: './outputs-child.component.html'
})
export class OutputsChildComponent {
  pick = output<{ month: string }>();

  months = Array.from({ length: 12 }, (_, index) => new Date(0, index).toLocaleString('en-US', { month: 'short' }));

  pickMonth(month: string): void {
    this.pick.emit({ month });
  }
}
