import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data/data.component';
import { AppShellComponent } from './app-shell/app-shell.component';
import { RouterOutlet } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, CommonModule, FormsModule, DataComponent, AppShellComponent, RouterOutlet]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Unit-testing');
  });

  it('should add two numbers correctly', () => {
    component.firstValue = 5;
    component.secondValue = 3;
    component.add();
    expect(component.result).toBe(8);
  });

  it('should subtract two numbers correctly', () => {
    component.firstValue = 10;
    component.secondValue = 4;
    component.sub();
    expect(component.result).toBe(6);
  });

  it('should multiply two numbers correctly', () => {
    component.firstValue = 3;
    component.secondValue = 4;
    component.multiply();
    expect(component.result).toBe(12);
  });

  it('should divide two numbers correctly', () => {
    component.firstValue = 10;
    component.secondValue = 2;
    component.divide();
    expect(component.result).toBe(5);
  });

  it('should return "Error: Division by zero" when dividing by zero', () => {
    component.firstValue = 10;
    component.secondValue = 0;
    component.divide();
    expect(component.result).toBe('Error: Division by zero');
  });

  it('should calculate the modulus correctly', () => {
    component.firstValue = 10;
    component.secondValue = 3;
    component.mod();
    expect(component.result).toBe(1);
  });

  it('should handle PWA installation event', () => {
    const mockEvent = new Event('beforeinstallprompt') as any;
    component.onBeforeInstallPrompt(mockEvent);
    expect(component.deferredPrompt).toBe(mockEvent);
  });

  it('should mark app as installed when user accepts installation', () => {
    component.deferredPrompt = {
      prompt: jasmine.createSpy('prompt'),
      userChoice: Promise.resolve({ outcome: 'accepted' })
    };
    component.installPWA();
    expect(component.deferredPrompt.prompt).toHaveBeenCalled();
    setTimeout(() => {
      expect(component.isInstalled).toBeTrue();
    }, 100);
  });

  it('should not mark app as installed when user dismisses installation', () => {
    component.deferredPrompt = {
      prompt: jasmine.createSpy('prompt'),
      userChoice: Promise.resolve({ outcome: 'dismissed' })
    };
    component.installPWA();
    expect(component.deferredPrompt.prompt).toHaveBeenCalled();
    setTimeout(() => {
      expect(component.isInstalled).toBeFalse();
    }, 100);
  });

  it('should mock Web Worker initialization', () => {
    spyOn(window, 'Worker').and.returnValue({
      postMessage: () => {},
      onmessage: () => {},
      terminate: () => {},
    } as unknown as Worker);

    component.ngOnInit();
    expect(component.worker).toBeDefined();
  });

  it('should start Web Worker on Runheavytask', () => {
    const mockWorker = {
      postMessage: jasmine.createSpy('postMessage'),
      onmessage: () => {},
      terminate: () => {},
    } as unknown as Worker;

    spyOn(window, 'Worker').and.returnValue(mockWorker);
    component.ngOnInit();
    component.Runheavytask();

    expect(mockWorker.postMessage).toHaveBeenCalledWith(1000000000);
  });
});
