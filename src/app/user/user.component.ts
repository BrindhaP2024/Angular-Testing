import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <h2>{{ name }}</h2>
    <p>{{ case }} years old</p>
    <button (click)="incrementCase()">Increment test case</button>
    <button (click)="decrementCase()">Decrement test case</button>
  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name: string = 'Test case';
  case: number = 5;

  incrementCase() {
    this.case++;
  }

  decrementCase() {
    this.case--;
  }
}
