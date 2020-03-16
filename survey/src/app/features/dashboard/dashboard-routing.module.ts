import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardPageMapComponent } from './dashboard-page-map/dashboard-page-map.component';
import { DashboardPageSettingsComponent } from './dashboard-page-settings/dashboard-page-settings.component';

export const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: 'map',
				component: DashboardPageMapComponent,
				data: {
					routeIdx: 1,
				}
			},
			{
				path: 'settings',
				component: DashboardPageSettingsComponent,
				data: {
					routeIdx: 2,
				}
			},
        ]
    }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule {}
