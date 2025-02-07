import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataComponent } from './data.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceService } from './../service.service';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let serviceService: ServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataComponent, FormsModule, CommonModule], // Add DataComponent to imports
      providers: [ServiceService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    serviceService = TestBed.inject(ServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the initial data list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('li').length).toBe(3); // Apple, Banana, Cherry
  });

  it('should add a new item to the data list', () => {
    component.newItem = 'Date';
    component.addItem();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('li').length).toBe(4);
    expect(compiled.textContent).toContain('Date');
  });

  it('should remove an item from the data list', () => {
    component.newItem = 'Date';
    component.addItem();
    fixture.detectChanges();

    component.removeItem('Date');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('li').length).toBe(3);
    expect(compiled.textContent).not.toContain('Date');
  });
});
