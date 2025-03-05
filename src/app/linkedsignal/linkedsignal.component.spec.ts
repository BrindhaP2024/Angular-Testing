import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkedsignalComponent } from './linkedsignal.component';
import { By } from '@angular/platform-browser';

fdescribe('LinkedsignalComponent', () => {
  let component: LinkedsignalComponent;
  let fixture: ComponentFixture<LinkedsignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedsignalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkedsignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial count as 10', () => {
    expect(component.count()).toBe(10);
  });

  it('should update count when input changes', () => {
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = '20';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.count()).toBe(20);
  });

  it('should display the correct doubleCount value', () => {
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    const paragraph = fixture.debugElement.query(By.css('p')).nativeElement;

    input.value = '15';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(paragraph.textContent).toContain('Double Value: 30');
  });
});
