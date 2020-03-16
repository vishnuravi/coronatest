import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent} from './form/form.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatStepperModule} from "@angular/material/stepper";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MatButtonModule} from "@angular/material/button";
import { LandingComponent } from './landing/landing.component';
import { ChipComponent } from './components/chip/chip.component';
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {RouterModule} from "@angular/router";
import { ResultsComponent } from './results/results.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {LoadingEllipsisComponent} from "./components/loading-ellipsis/loading-ellipsis.component";
import { DashboardModule } from './dashboard/dashboard.module';
import { InfoComponent } from './info/info.component';


@NgModule({
	declarations: [
		FormComponent,
		LandingComponent,
		ChipComponent,
		ResultsComponent,
		LoadingEllipsisComponent,
		InfoComponent
	],
	imports: [
		DashboardModule,
		CommonModule,
		MatRadioModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		FormsModule,
		MatInputModule,
		BrowserAnimationsModule,
		MatCheckboxModule,
		MatButtonToggleModule,
		MatStepperModule,
		HttpClientModule,
		TranslateModule.forChild({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		MatButtonModule,
		MatCardModule,
		MatSelectModule,
		RouterModule,
		MatProgressSpinnerModule
	]
})
export class FeaturesModule {}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
