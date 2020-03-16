import { Component, OnInit, ViewChild } from '@angular/core';
import { AgmMap } from '@agm/core';

@Component({
	selector: 'app-dashboard-page-map',
	templateUrl: './dashboard-page-map.component.html',
	styleUrls: ['./dashboard-page-map.component.less']
})
export class DashboardPageMapComponent implements OnInit {
	latitude = 58.6398299;
	longitude = 24.5691653;
    mapType = 'roadmap';
    
    @ViewChild('map', {static: true}) map: AgmMap

	constructor() {}

    ngOnInit() {
        this.getMarkers(null);
    }
    
    markers = [
        
    ];
    public getMarkers(options) {
        // TODO: fetch markers from API
        this.markers = [
			{
				lat: 58.6398299,
				lon: 24.5691653
			}
		];
    }
}
