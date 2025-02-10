import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports:[],
  template: `
    <h1>{{ count }}</h1>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
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
