// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { CounterComponent } from './counter.component.spec';
// import { Store, StoreModule } from '@ngrx/store';
// import { MockStore, provideMockStore } from '@ngrx/store/testing';
// import { Observable, of } from 'rxjs';
// import { increment, decrement, reset } from '../counter.actions';
// import { selectCount } from '../counter.selectors';
// import { CommonModule } from '@angular/common';
// import { By } from '@angular/platform-browser';

// describe('CounterComponent', () => {
//   let fixture: ComponentFixture<CounterComponent>;
//   let component: CounterComponent;
//   let store: MockStore;
//   let mockCount$: Observable<number>;

//   beforeEach(async () => {
//     mockCount$ = of(0);  // Set an initial state for the count observable.

//     await TestBed.configureTestingModule({
//       declarations: [CounterComponent],
//       imports: [CommonModule],
//       providers: [
//         provideMockStore({
//           selectors: [
//             {
//               selector: selectCount,
//               value: 0, // initial state for the count observable
//             },
//           ],
//         }),
//       ],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CounterComponent);
//     component = fixture.componentInstance;
//     store = TestBed.inject(Store);
//     fixture.detectChanges(); // Triggers change detection
//   });

//   it('should display the initial count value from the store', () => {
//     const countElement = fixture.debugElement.query(By.css('h1')).nativeElement;
//     expect(countElement.textContent).toBe('Counter: 0');
//   });

//   it('should dispatch increment action on increment button click', () => {
//     const dispatchSpy = spyOn(store, 'dispatch');
//     const incrementButton = fixture.debugElement.query(By.css('button:nth-child(1)'));

//     incrementButton.triggerEventHandler('click', null);

//     expect(dispatchSpy).toHaveBeenCalledWith(increment());
//   });

//   it('should dispatch decrement action on decrement button click', () => {
//     const dispatchSpy = spyOn(store, 'dispatch');
//     const decrementButton = fixture.debugElement.query(By.css('button:nth-child(2)'));

//     decrementButton.triggerEventHandler('click', null);

//     expect(dispatchSpy).toHaveBeenCalledWith(decrement());
//   });

//   it('should dispatch reset action on reset button click', () => {
//     const dispatchSpy = spyOn(store, 'dispatch');
//     const resetButton = fixture.debugElement.query(By.css('button:nth-child(3)'));

//     resetButton.triggerEventHandler('click', null);

//     expect(dispatchSpy).toHaveBeenCalledWith(reset());
//   });

//   it('should update the displayed counter when the count changes', () => {
//     store.setState({ count: 5 }); // Change the state to 5
//     fixture.detectChanges(); // Detect changes

//     const countElement = fixture.debugElement.query(By.css('h1')).nativeElement;
//     expect(countElement.textContent).toBe('Counter: 5');
//   });
// });
