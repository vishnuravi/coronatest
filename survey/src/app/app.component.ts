import {Component, OnInit} from '@angular/core';
import {LocaleService} from "./core/services/locale.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})


export class AppComponent{
  title = 'survey';

  constructor(private localeService: LocaleService) {
  }
}
