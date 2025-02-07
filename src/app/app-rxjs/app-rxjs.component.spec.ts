import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRxjsComponent } from './app-rxjs.component';

describe('AppRxjsComponent', () => {
  let component: AppRxjsComponent;
  let fixture: ComponentFixture<AppRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRxjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
