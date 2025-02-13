import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Hello, Unit-testing';
  firstValue: number = 0;
  secondValue: number = 0;
  result: number | string = '';
  worker: Worker | undefined;
  isInstalled: boolean = false;
  deferredPrompt: any;

  // Basic Math Operations
  add() { this.result = this.firstValue + this.secondValue; }
  sub() { this.result = this.firstValue - this.secondValue; }
  multiply() { this.result = this.firstValue * this.secondValue; }
  divide() {
    this.result = this.secondValue !== 0 ? this.firstValue / this.secondValue : 'Error: Division by zero';
  }
  mod() { this.result = this.firstValue % this.secondValue; }

  // Initialize Web Worker
  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('./my-worker.worker', import.meta.url));
      this.worker.onmessage = ({ data }) => {
        this.result = data;
      };
    }
  }

  // Run Heavy Task Using Web Worker
  Runheavytask(): void {
    if (this.worker) {
      this.worker.postMessage(1000000000);
      console.log("Web Worker started at:", performance.now());
    }

    let start = performance.now();
    let sum = 0;
    for (let i = 0; i <= 1000000000; i++) {
      sum += i;
    }
    let end = performance.now();
    console.log("Time taken without Web Worker:", end - start, "ms");
  }

  // Handle PWA Installation
  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event) {
    event.preventDefault();
    this.deferredPrompt = event;
  }

  installPWA() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          this.isInstalled = true;
        }
        this.deferredPrompt = null;
      });
    }
  }
}
