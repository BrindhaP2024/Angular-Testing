import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

// Define the state shape
export interface CounterState {
  count: number;
}

// Set the initial state
export const initialState: CounterState = {
  count: 0,
};

// Define the reducer
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ count: state.count + 1 })),
  on(decrement, (state) => ({ count: state.count - 1 })),
  on(reset, () => initialState)
);
 