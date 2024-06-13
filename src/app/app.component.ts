import { Component } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatSidenav, MatSidenavContainer, MatSidenavContent, MatToolbar, RouterOutlet],
  templateUrl: './app.component.html',
  styles: `
    .mat-drawer-container
      height: 100%
  `
})
export class AppComponent {}
