import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class PageService {
    constructor(private router: Router) {}
    
	private _submissionResult: any;
	get submissionResult() {
		if (!this._submissionResult) {
			this.router.navigate(['/']);
			return;
		}
		return this._submissionResult;
	}
	set submissionResult(value) {
		this._submissionResult = value;
	}
}
