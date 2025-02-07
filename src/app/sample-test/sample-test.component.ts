import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-sample-test',
  imports: [],
  template: `<h1>{{title()}}</h1>`,
  styles: []
})
export class SampleTestComponent {
  title =signal('Testing the component ');
}
