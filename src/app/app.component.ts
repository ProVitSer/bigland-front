import { Component } from '@angular/core';

declare const $: any;

@Component({
	selector: 'app-root',
	template: '<router-outlet></router-outlet>',
})
export class AppComponent {
	title = 'bigland-front';
}
