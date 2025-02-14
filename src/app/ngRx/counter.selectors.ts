import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CounterState } from './counter.reducer';

// Select the counter feature state
export const selectCounterState = createFeatureSelector<CounterState>('counter');

// Select the count value
export const selectCount = createSelector(
  selectCounterState,
  (state) => state?.count ?? 0  // Handle undefined state safely
);
