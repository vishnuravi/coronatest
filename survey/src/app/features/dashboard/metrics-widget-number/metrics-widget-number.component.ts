import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'dashboard-metrics-widget-number',
	templateUrl: './metrics-widget-number.component.html',
	styleUrls: ['./metrics-widget-number.component.less']
})
export class MetricsWidgetNumberComponent implements OnInit {
    @Input() $class: string;
	@Input() $heading: string;
	@Input() $subheading: string;
	@Input() $value: string;
	constructor() {}

	ngOnInit() {}
}
