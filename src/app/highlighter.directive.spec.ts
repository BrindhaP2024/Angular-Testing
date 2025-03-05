import { HighlightDirective } from './highlighter.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  standalone: true,
  template: `<p appHighlight="cyan">Highlight me!</p>`,
  imports: [HighlightDirective]
})
class TestComponent { }

@Component({
  standalone: true,
  template: `<p appHighlight>Highlight me!</p>`,
  imports: [HighlightDirective]
})
class TestComponentWithDefaultColor { }

fdescribe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let defaultFixture: ComponentFixture<TestComponentWithDefaultColor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent, TestComponentWithDefaultColor, HighlightDirective]
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

  it('should highlight the text with default yellow on mouse enter if no color is provided', () => {
    defaultFixture = TestBed.createComponent(TestComponentWithDefaultColor);
    defaultFixture.detectChanges();

    const debugElement = defaultFixture.debugElement.query(By.css('p'));
    const p: HTMLElement = debugElement.nativeElement;

    debugElement.triggerEventHandler('mouseenter', null);
    defaultFixture.detectChanges();
    expect(p.style.backgroundColor).toBe('yellow');

    debugElement.triggerEventHandler('mouseleave', null);
    defaultFixture.detectChanges();
    expect(p.style.backgroundColor).toBe('');
  });
});
