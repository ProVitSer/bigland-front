import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpamReportComponent } from './spam-report.component';

describe('SpamReportComponent', () => {
	let component: SpamReportComponent;
	let fixture: ComponentFixture<SpamReportComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SpamReportComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SpamReportComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
