import { Component, OnInit } from '@angular/core';
import { LocaleService } from 'src/app/core/services/locale.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-info',
	templateUrl: './info.component.html',
	styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit {
	lang = 'et';
	constructor(public localeService: LocaleService, public route: ActivatedRoute) {
		this.route.queryParams.subscribe(params => {
			this.localeService.changeLocale(params['lang']);
		});
	}

	ngOnInit() {
	}
}
