import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { SpamReportComponent } from '../../spam-report/spam-report.component';

export const AdminLayoutRoutes: Routes = [
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'spam-report', component: SpamReportComponent },
];
