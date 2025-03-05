// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { AppComponent } from './app.component';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';
// import { AppShellComponent } from "./app-shell/app-shell.component";
// import { DataComponent } from "./data/data.component";
// import { UserComponent } from "./user/user.component";

// describe('AppComponent', () => {
//   let component: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;

//   // Mocking the Web Worker
//   class MockWorker {
//     onmessage: (event: { data: any }) => void;

//     postMessage(data: any) {
//       // Simulate a response from the worker
//       setTimeout(() => {
//         this.onmessage({ data: data * 2 }); // Example: just doubling the input
//       }, 100);
//     }

//     terminate() {
//       // Mock terminate function
//     }
//   }

//   beforeEach(async () => {
//     // Replace the global Worker with the mock
//     (window as any).Worker = MockWorker;

//     await TestBed.configureTestingModule({
//       imports: [
//         CommonModule,
//         FormsModule,
//         RouterOutlet,
//         AppComponent, // Import the standalone component here
//         AppShellComponent,
//         DataComponent,
//         UserComponent
//       ],
//       declarations: [],
//     }).compileComponents();

//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create the app component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should add two numbers correctly', () => {
//     component.firstValue = 5;
//     component.secondValue = 3;
//     component.add();
//     expect(component.result).toBe(8);
//   });

//   it('should subtract two numbers correctly', () => {
//     component.firstValue = 5;
//     component.secondValue = 3;
//     component.sub();
//     expect(component.result).toBe(2);
//   });

//   it('should multiply two numbers correctly', () => {
//     component.firstValue = 5;
//     component.secondValue = 3;
//     component.multiply();
//     expect(component.result).toBe(15);
//   });

//   it('should divide two numbers correctly', () => {
//     component.firstValue = 6;
//     component.secondValue = 3;
//     component.divide();
//     expect(component.result).toBe(2);
//   });

//   it('should handle division by zero', () => {
//     component.firstValue = 5;
//     component.secondValue = 0;
//     component.divide();
//     expect(component.result).toBe('Error: Division by zero');
//   });

//   it('should calculate modulus correctly', () => {
//     component.firstValue = 5;
//     component.secondValue = 3;
//     component.mod();
//     expect(component.result).toBe(2);
//   });

//   it('should initialize the Web Worker', () => {
//     component.ngOnInit();
//     expect(component.worker).toBeDefined();
//   });

//   it('should terminate the Web Worker on destroy', () => {
//     component.ngOnInit();
//     const workerTerminateSpy = spyOn(component.worker!, 'terminate').and.callThrough();
//     component.ngOnDestroy();
//     expect(workerTerminateSpy).toHaveBeenCalled();
//     expect(component.worker).toBeUndefined();
//   });

//   it('should handle PWA installation prompt', async () => {
//     const mockEvent = {
//       preventDefault: jasmine.createSpy('preventDefault'),
//     };
//     component.onBeforeInstallPrompt(mockEvent as any);
//     expect(mockEvent.preventDefault).toHaveBeenCalled();
//     expect(component.deferredPrompt).toBeDefined();
//   });

//   it('should install PWA when prompt is accepted', async () => {
//     const mockEvent = {
//       preventDefault: jasmine.createSpy('preventDefault'),
//       prompt: jasmine.createSpy('prompt'),
//       userChoice: Promise.resolve({ outcome: 'accepted' }),
//     };
//     component.deferredPrompt = mockEvent as any;
//     await component.installPWA();
//     expect(mockEvent.prompt).toHaveBeenCalled();
//     expect(component.isInstalled).toBeTrue();
//     expect(component.deferredPrompt).toBeNull();
//   });

//   it('should not install PWA when prompt is rejected', async ()
//     const mockEvent = {
//       preventDefault: jasmine.createSpy('preventDefault'),
//       prompt: jasmine.createSpy('prompt'),
//       userChoice: Promise.resolve({ outcome: 'dismissed' }),
//     };
//     component.deferredPrompt = mockEvent as any;
//     await component.installPWA();
//     expect(mockEvent.prompt).toHaveBeenCalled();
//     expect(component.isInstalled).toBeFalse();
//     expect(component.deferredPrompt).toBeNull();
//   });
// });
// }
