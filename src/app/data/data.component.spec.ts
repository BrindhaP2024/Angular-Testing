import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataComponent } from './data.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../service.service';
import { of } from 'rxjs';

fdescribe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let serviceService: ServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataComponent, FormsModule, CommonModule], // <-- Add DataComponent to imports instead of declarations
      providers: [ServiceService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    serviceService = TestBed.inject(ServiceService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the initial data list', () => {
    component.data = serviceService.getData();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('li').length).toBe(3);
  });

  it('should add a new item to the data list', () => {
    component.newItem = 'Date';
    component.addItem();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('li').length).toBe(4);
    expect(compiled.textContent).toContain('Date');
  });

  it('should not add an empty item to the list', () => {
    component.newItem = '';
    component.addItem();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('li').length).toBe(3);
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

  it('should not remove an item that does not exist', () => {
    component.removeItem('Mango');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('li').length).toBe(3);
  });

  it('should clear the input field after adding an item', () => {
    component.newItem = 'Grapes';
    component.addItem();
    fixture.detectChanges();

    expect(component.newItem).toBe('');
  });

  it('should reflect changes when service data is updated', () => {
    serviceService.addData('Pineapple');
    component.data = serviceService.getData();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('li').length).toBe(4);
    expect(compiled.textContent).toContain('Pineapple');
  });
});
