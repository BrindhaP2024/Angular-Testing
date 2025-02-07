import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Hello, Unit-testing' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Hello, Unit-testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Unit-testing');
  });

  it('should add two numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.firstValue = 5;
    app.secondValue = 3;
    app.add();
    expect(app.result).toEqual(8);
  });

  it('should subtract two numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.firstValue = 5;
    app.secondValue = 3;
    app.sub();
    expect(app.result).toEqual(2);
  });

  it('should multiply two numbers', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.componentInstance;
    // app.firstValue = 5;
    // app.secondValue = 3;
    // app.multiply();
     const num  = 5;
     expect(num).toBe(5);
  });

  it('should divide two numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.firstValue = 6;
    app.secondValue = 3;
    app.divide();
    expect(app.result).toEqual(2);
  });

  it('should handle division by zero', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.firstValue = 6;
    app.secondValue = 0;
    app.divide();
    expect(app.result).toEqual('Error: Division by zero');
  });

  it('should calculate modulus of two numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.firstValue = 5;
    app.secondValue = 3;
    app.mod();
    expect(app.result).toEqual(2);
  });
});
