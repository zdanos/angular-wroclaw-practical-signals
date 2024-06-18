import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';

import { SignalInputsChildComponent } from './signal-inputs-child.component';

@Component({
  standalone: true,
  imports: [MatButton, SignalInputsChildComponent],
  template: `
    <app-signal-inputs-child [user]="selectedUser()" />
    <button mat-button (click)="selectRandomUser()">Select random user</button>
  `,
  styleUrl: './signal-inputs.component.sass'
})
export default class SignalInputsComponent {
  private users = [
    {
      firstName: "John",
      lastName: "Doe",
      age: 28
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      age: 34
    },
    {
      firstName: "Michael",
      lastName: "Johnson",
      age: 45
    },
    {
      firstName: "Emily",
      lastName: "Davis",
      age: 22
    },
    {
      firstName: "David",
      lastName: "Brown",
      age: 30
    },
    {
      firstName: "Sarah",
      lastName: "Miller",
      age: 27
    },
    {
      firstName: "Christopher",
      lastName: "Wilson",
      age: 38
    },
    {
      firstName: "Amanda",
      lastName: "Moore",
      age: 33
    },
    {
      firstName: "Joshua",
      lastName: "Taylor",
      age: 29
    },
    {
      firstName: "Olivia",
      lastName: "Anderson",
      age: 24
    }
  ];
  selectedUser = signal(this.pickRandomUser());

  selectRandomUser(): void {
    this.selectedUser.set(this.pickRandomUser());
  }

  private pickRandomUser(): typeof this.users[number] {
    return this.users[Math.floor(Math.random() * this.users.length)];
  }
}
