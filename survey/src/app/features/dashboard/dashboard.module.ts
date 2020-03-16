import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { MetricsWidgetNumberComponent } from './metrics-widget-number/metrics-widget-number.component';
import { DashboardPageMapComponent } from './dashboard-page-map/dashboard-page-map.component';
import { DashboardPageSettingsComponent } from './dashboard-page-settings/dashboard-page-settings.component';
import { DashboardPageAnalyticsComponent } from './dashboard-page-analytics/dashboard-page-analytics.component';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { AgmCoreModule } from '@agm/core';

@NgModule({
	declarations: [
		DashboardComponent,
		DashboardHeaderComponent,
		DashboardSidebarComponent,
		MetricsWidgetNumberComponent,
		DashboardPageMapComponent,
		DashboardPageSettingsComponent,
		DashboardPageAnalyticsComponent
	],
	imports: [
    CommonModule, 
    RouterModule,
    TranslateModule,
    DashboardRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBJxJ2dglY1DBSDWM92lYOiF05_Sp3yC4s'
    })
  ]
})
export class DashboardModule {}
