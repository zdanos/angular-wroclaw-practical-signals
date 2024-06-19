import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { OutputsChildComponent } from './outputs-child.component';

@Component({
  standalone: true,
  imports: [OutputsChildComponent],
  template: '<app-outputs-child (pick)="showPickedMonth($event.month)" />'
})
export default class OutputsComponent implements AfterViewInit {
  @ViewChild(OutputsChildComponent) child?: OutputsChildComponent;

  ngAfterViewInit(): void {
    this.child?.pick.subscribe(console.log);
  }

  showPickedMonth(month: string): void {
    console.log(month);
  }
}
