import {Component, OnInit} from '@angular/core';
import {LocaleService} from "../../core/services/locale.service";

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {

    constructor(
        public localeService: LocaleService
    ) {
    }

    ngOnInit() {
    }

}
