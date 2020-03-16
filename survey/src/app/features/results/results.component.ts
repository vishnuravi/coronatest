import {Component, OnInit} from '@angular/core';
import {PageService} from 'src/app/core/services/page.service';
import { LocaleService } from 'src/app/core/services/locale.service';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.less']
})
export class ResultsComponent implements OnInit {
    texts = null;
    probabilityTexts = {
        SEVERE: 'high_risk_severe_symptoms_message',
        LOW: 'low_risk_message',
        MEDIUM: 'medium_risk_message',
        HIGH: 'high_risk_message'
    };
    scenarioTexts = {
        SCENARIO_1: [
            'wear_a_mask',
            'call_ambulance',
            'isolate_until_ambulance_arrives',
            // 'isolate_yourself',
            'exposed_persons_stay_home'
        ],
        SCENARIO_2: [
            'quarantine_2_weeks',
            'check_your_health',
            'if_sick_call_112'
        ],
        SCENARIO_3: [
            'home_care_2_weeks',
            'monitor_health_detailed',
            'monitor_health_risk_group',
            'exposed_persons_stay_home'
        ],
        SCENARIO_5: [
            'home_care_2_weeks',
            'call_your_general_practicioner',
            'monitor_health_call_112',
            'exposed_persons_stay_home'
        ],
        SCENARIO_9: ['home_care_monitor', 'monitor_health_detailed', 'monitor_health_risk_group', 'notify_close_people'],
        SCENARIO_10: ['healthy_person_does_not_need_quarantine', 'if_sick_call_112', 'precautionary_measures_recommended']
    };

    constructor(private pageService: PageService, public localeService: LocaleService) {
    }

    ngOnInit() {
        if (this.pageService.submissionResult) {
            console.log(this.pageService.submissionResult);
            this.texts = {
                message: this.probabilityTexts[this.pageService.submissionResult.probability],
                risk_message: this.pageService.submissionResult.risk_message,
                act_message: this.pageService.submissionResult.act_message,
                instructions: this.scenarioTexts[this.pageService.submissionResult.scenario]
            };
        }
    }
}
