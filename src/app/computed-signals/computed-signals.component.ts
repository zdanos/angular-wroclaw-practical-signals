import { Component, computed, signal, untracked } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatList, MatListItem } from '@angular/material/list';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  imports: [MatButton, MatCheckbox, MatFormField, MatInput, MatList, MatListItem, ReactiveFormsModule],
  templateUrl: './computed-signals.component.html',
  styleUrl: './computed-signals.component.sass'
})
export default class ComputedSignalsComponent {
  searchControl = new FormControl('', { nonNullable: true });

  private carBrands = signal([
    'Toyota',
    'Volkswagen',
    'Ford',
    'Honda',
    'Chevrolet',
    'Mercedes-Benz',
    'BMW',
    'Nissan',
    'Hyundai',
    'Audi'
  ]);
  private searchValue = toSignal(this.searchControl.valueChanges, { initialValue: this.searchControl.value });
  additionalListVisible = signal(false);
  filteredBrands = computed(() => {
    console.log('computed');
    return this.carBrands().filter(brand => brand.toLowerCase().includes(this.searchValue().toLowerCase()))
  });
  // filteredWithPremium = computed(() => {
  //   const premiumBrands = ['Mercedes-Benz', 'BMW', 'Audi'];
  //   return this.filteredBrands().filter(brand => untracked(() => !this.premiumOnly()) || premiumBrands.includes(brand));
  // });
  // premiumOnly = signal(false);

  // setPremiumFilter(checked: boolean): void {
  //   this.premiumOnly.set(checked);
  // }

  toggleAdditionalListVisibility(): void {
    this.additionalListVisible.update(visible => !visible);
  }
}
