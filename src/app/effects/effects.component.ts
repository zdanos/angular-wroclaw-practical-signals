import { Component, effect, inject, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  imports: [MatButton, MatDialogModule, MatFormField, MatInput, MatLabel, MatSlideToggle, ReactiveFormsModule],
  templateUrl: './effects.component.html',
  styleUrl: './effects.component.sass'
})
export default class EffectsComponent {
  private dialog = inject(MatDialog);

  @ViewChild('adminRoleAssignmentConfirmationDialog') private adminRoleAssignmentConfirmationDialogTemplate?: TemplateRef<unknown>;

  userForm = new FormGroup({
    admin: new FormControl(false),
    firstName: new FormControl(),
    lastName: new FormControl(),
  });

  private adminSignal = toSignal(this.userForm.controls.admin.valueChanges);

  constructor() {
    effect(() => {
      if (this.adminSignal() && this.adminRoleAssignmentConfirmationDialogTemplate) {
        this.dialog
          .open(this.adminRoleAssignmentConfirmationDialogTemplate)
          .afterClosed()
          .subscribe(confirmed => !confirmed && this.userForm.controls.admin.setValue(false));
      }
    });
  }
}
