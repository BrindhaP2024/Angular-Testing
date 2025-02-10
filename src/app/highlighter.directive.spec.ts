import { HighlightDirective } from './highlighter.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<p appHighlight="cyan">Highlight me!</p>`
})
class TestComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, HighlightDirective]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should highlight the text with cyan on mouse enter', () => {
    const debugElement = fixture.debugElement.query(By.css('p'));
    const p: HTMLElement = debugElement.nativeElement;

    debugElement.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(p.style.backgroundColor).toBe('cyan');

    debugElement.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(p.style.backgroundColor).toBe('');
  });
});
