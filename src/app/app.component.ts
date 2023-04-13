import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.style.scss']
})
export class AppComponent {
  title = 'bigland-front';
}
