import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

fdescribe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should increment count when increment() is called', () => {
    component.increment();
    expect(component.count).toBe(1);
  });

  it('should decrement count when decrement() is called', () => {
    component.count = 1;
    component.decrement();
    expect(component.count).toBe(0);
  });

  it('should update UI when increment button is clicked', () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('#increment'));
    expect(button).not.toBeNull();
    button.nativeElement.click();
    fixture.detectChanges();
    const h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1.textContent).toBe('1');
  });

  it('should update UI when decrement button is clicked', () => {
    component.count = 2;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('#decrement'));
    expect(button).not.toBeNull();
    button.nativeElement.click();
    fixture.detectChanges();
    const h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1.textContent).toBe('1');
  });
});
