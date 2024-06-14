import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [MatButton],
  templateUrl: './signals-basics.component.html',
  styleUrl: './signals-basics.component.sass'
})
export default class SignalsBasicsComponent {
  classicField = 'test';
  signalWithArray = signal(['test']);
  signalWithPrimitive = signal('test');

  setArray(): void {
    this.signalWithArray.set(['test', 'test2']);
  }

  setClassic(): void {
    this.classicField = 'test2';
  }

  setPrimitive(): void {
    this.signalWithPrimitive.set('set');
  }

  updateArray(): void {
    this.signalWithArray.update(currentArray => [...currentArray, 'update']);
  }

  updatePrimitive(): void {
    this.signalWithPrimitive.update(currentValue => currentValue + 'update');
  }
}
