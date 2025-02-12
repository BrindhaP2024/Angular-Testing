import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataComponent } from "./data/data.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hello, Unit-testing';
  firstValue: number = 0;
  secondValue: number = 0;
  result: number | string = '';
  worker: Worker | undefined;
  result1: number | undefined;

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

  // web workers

  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('./my-worker.worker', import.meta.url));

      this.worker.onmessage = ({ data }) => {
        this.result = data;
      };
    }
  }

  runHeavyTask(): void {
    if (this.worker) {
      this.worker.postMessage(1000000000);
    }
  }
}
