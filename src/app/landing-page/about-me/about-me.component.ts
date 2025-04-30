import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AboutMeService } from './about-me.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AboutMeComponent implements OnInit {

  ageDuration$: Observable<Duration>;
  durationStrings = {
    singular: {
      year: $localize`year`,
      month: $localize`month`,
      day: $localize`day`,
      hour: $localize`hour`,
      minute: $localize`minute`,
      second: $localize`second`,
    },
    plural: {
      year: $localize`years`,
      month: $localize`months`,
      day: $localize`days`,
      hour: $localize`hours`,
      minute: $localize`minutes`,
      second: $localize`seconds`,
    }
  }

  constructor(private aboutMeService: AboutMeService) {
    this.ageDuration$ = this.aboutMeService.getAge;
  }

  ngOnInit(): void { }

}
