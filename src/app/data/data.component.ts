import { CommonModule } from '@angular/common';
import { ServiceService } from './../service.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data',
  template: `
    <h2>Data List</h2>
    <ul>
      <li *ngFor="let item of data">{{ item }}
        <button (click)="removeItem(item)">Remove</button>
      </li>
    </ul>
    <input [(ngModel)]="newItem" placeholder="New Item">
    <button (click)="addItem()">Add</button>
  `,
  styleUrls: ['./data.component.css'],
  imports: [CommonModule, FormsModule]
})
export class DataComponent {
  data: string[] = [];
  newItem: string = '';

  constructor(private serviceService: ServiceService) {}

  ngOnInit() {
    this.data = this.serviceService.getData();
  }

  addItem() {
    if (this.newItem) {
      this.serviceService.addData(this.newItem);
      this.data = this.serviceService.getData();
      this.newItem = '';
    }
  }

  removeItem(item: string) {
    this.serviceService.removeData(item);
    this.data = this.serviceService.getData();
  }
}
