import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, of, interval } from 'rxjs';
import { map, filter, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  template: `
    <h2>RxJS in Angular</h2>
    <div>
      <h3>Observable Data:</h3>
      <p>{{ observableData }}</p>
      <h3>Interval Data:</h3>
      <p>{{ intervalData }}</p>
    </div>
  `,
  styleUrls: ['./app-rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {
  observableData: string = '';
  intervalData: number = 0;
  private subscription: Subscription = new Subscription();

  ngOnInit() {
    // Creating an Observable
    const simpleObservable: Observable<string> = of('Hello', 'World', 'RxJS', 'Angular');

    // Subscribing to the Observable
    this.subscription.add(
      simpleObservable.subscribe(data => {
        this.observableData += `${data} `;
      })
    );

    // Creating an Interval Observable
    const intervalObservable: Observable<number> = interval(1000).pipe(
      take(10), // Take only the first 10 values
      map(value => value * 2), // Multiply each value by 2
      filter(value => value % 4 === 0), // Filter values divisible by 4
      tap(value => console.log(`Interval value: ${value}`)) // Log the value
    );

    // Subscribing to the Interval Observable
    this.subscription.add(
      intervalObservable.subscribe(value => {
        this.intervalData = value;
      })
    );
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    this.subscription.unsubscribe();
  }
}
