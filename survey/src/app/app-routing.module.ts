import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormComponent} from "./features/form/form.component";
import {LandingComponent} from "./features/landing/landing.component";
import { ResultsComponent } from './features/results/results.component';
import { InfoComponent } from './features/info/info.component';


const routes: Routes = [
	{
		path: '',
		component: LandingComponent
	},
	{
		path: 'form',
		component: FormComponent
	},
	{
		path: 'results',
		component: ResultsComponent
	},
	{
		path: 'info',
		component: InfoComponent
	},
	{
		path: 'dashboard',
		loadChildren: () => import('./features/dashboard/dashboard.module').then(mod => mod.DashboardModule)
	},
	{
		path: '**',
		redirectTo: '',
		pathMatch: 'full'
	}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
