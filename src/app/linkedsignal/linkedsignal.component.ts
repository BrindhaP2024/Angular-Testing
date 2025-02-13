import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-linkedsignal',
  standalone: true,
  imports: [],
  template: `
    <input type="number" [value]="count()" (input)="updateCount($event)">
    <p>Double Value: {{ doubleCount() }}</p>
  `,
  styleUrls: ['./linkedsignal.component.css']
})
export class LinkedsignalComponent {
  count = signal(10);  // Base signal
  doubleCount = computed(() => this.count() * 2);  // Linked Signal (Computed)

  updateCount(event: Event) {
    const inputValue = +(event.target as HTMLInputElement).value;
    this.count.set(inputValue);
  }
}
