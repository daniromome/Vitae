import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AboutMeService } from './about-me.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeComponent implements OnInit {

  ageInSeconds$: Observable<Duration>;

  constructor(private aboutMeService: AboutMeService) {
    this.ageInSeconds$ = this.aboutMeService.getAge;
  }

  readableAge(d: Duration | null) {
    if (!d) return '?';
    const months = this.getProperAmountNouns(d.months, 'month');
    const days = this.getProperAmountNouns(d.days, 'day');
    const minutes = this.getProperAmountNouns(d.minutes, 'minute');
    const hours = this.getProperAmountNouns(d.hours, 'hour');
    const seconds = this.getProperAmountNouns(d.seconds, 'second');
    return `${d.years} years, ${months} ${days} ${hours} ${minutes} and ${seconds} ago`;
  }

  getProperAmountNouns(value: number | undefined, singular: string) {
    return value === 0 || value === undefined ? `0 ${singular}s` : value === 1 ? `${value} ${singular}` : `${value} ${singular}s`;
  }

  ngOnInit(): void {
  }

}
