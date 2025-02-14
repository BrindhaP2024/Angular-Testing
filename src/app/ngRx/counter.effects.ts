import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { increment } from './counter.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class CounterEffects {
  // Log when the increment action is dispatched
  logIncrement$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment), // Listen for the "increment" action
        tap(() => console.log('Increment action dispatched'))
      ),
    { dispatch: false } // No need to modify state
  );

  constructor(private actions$: Actions) {}
}
