import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RestService {
    public app: any;

    apiUrl = environment.apiURL;

    constructor() {
        this.app = axios;
        axios.defaults.baseURL = this.apiUrl;
        axios.defaults.withCredentials = true;
    }

}
