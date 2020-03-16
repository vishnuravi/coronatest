import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer} from "@angular/forms";

@Component({
    selector: 'app-chip',
    template: `
        <div class="chip" (click)="changeValue(!control.value)" [ngClass]="{'selected': this.control.value === true}">
            {{$formControlName | translate}}
        </div>
    `,
    styleUrls: ['./chip.component.less']
})
export class ChipComponent implements OnInit {
    /**
     * Associated form control given by parent form
     */
    @Input() $formControlName;

    control;

    constructor(
        public controlContainer: ControlContainer
    ) {
    }

    ngOnInit() {
        this.control = this.controlContainer.control.get(this.$formControlName);
    }

    changeValue(value) {
        this.control.setValue(value);
    }

}
