import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, pipe } from 'rxjs';
import { selectCount } from '../counter.selectors';
import { decrement, increment, reset } from '../counter.actions';


@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter: {{ count$ | async }}</h1>
    <button (click)="onIncrement()">Increment</button>
    <button (click)="onDecrement()">Decrement</button>
    <button (click)="onReset()">Reset</button>
  `,
  imports:[CommonModule]
})
export class CounterComponent {
  count$: Observable<number>; 

  constructor(private store: Store) {
    this.count$ = this.store.select(selectCount);
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
