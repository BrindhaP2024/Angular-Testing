import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <h1>{{ count }}</h1>
    <button id="increment" (click)="increment()">Increment</button>
    <button id="decrement" (click)="decrement()">Decrement</button>
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
