import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDelayedMessageComponent } from './app-delayed-message.component';

describe('AppDelayedMessageComponent', () => {
  let component: AppDelayedMessageComponent;
  let fixture: ComponentFixture<AppDelayedMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDelayedMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDelayedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
