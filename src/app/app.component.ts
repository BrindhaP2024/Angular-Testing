import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataComponent } from "./data/data.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, DataComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hello, Unit-testing';
  firstValue: number = 0;
  secondValue: number = 0;
  result: number | string = '';

  add() {
    this.result = this.firstValue + this.secondValue;
  }

  sub() {
    this.result = this.firstValue - this.secondValue;
  }

  multiply() {
    this.result = this.firstValue * this.secondValue;
  }

  divide() {
    if (this.secondValue !== 0) {
      this.result = this.firstValue / this.secondValue;
    } else {
      this.result = 'Error: Division by zero';
    }
  }

  mod() {
    this.result = this.firstValue % this.secondValue;
  }
}
