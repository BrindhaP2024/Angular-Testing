import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTestComponent } from './sample-test.component';

describe('SampleTestComponent', () => {
  let component: SampleTestComponent;
  let fixture: ComponentFixture<SampleTestComponent>;
  let h1:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display original title', () => {
        expect(h1.textContent).toContain(component.title);
   });
   it('should display original title',() =>{
      expect(h1.textContent).toEqual('')
   })
});
