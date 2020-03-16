import {Injectable} from '@angular/core';
import {RestService} from './rest.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private rest: RestService) {
    }

    /**
     * Application
     */
    public async sendSurvey(data) {
        return await this.rest.app.post('submissions', data);
    }
}
