import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { MatAnchor } from '@angular/material/button';
import { AsyncPipe, I18nPluralPipe } from '@angular/common';
import { Duration, intervalToDuration } from 'date-fns';
import { map, startWith } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop'
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatCard, MatCardContent, MatAnchor, I18nPluralPipe, MatIcon, MatCardActions]
})
export class AboutMeComponent implements OnInit {

  readonly age = intervalToDuration({ start: new Date(2000, 2, 22, 3, 30), end: Date.now() }).years
  readonly experience = intervalToDuration({ start: new Date(2020, 7), end: Date.now() })

  readonly durationStrings = {
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

  ngOnInit(): void { }

}
