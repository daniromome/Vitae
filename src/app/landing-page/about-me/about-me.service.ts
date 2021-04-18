import { Injectable } from '@angular/core';
import { getDaysInMonth, intervalToDuration } from 'date-fns';
import { BehaviorSubject, interval } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  ageSubject: BehaviorSubject<Duration>;
  birthday = new Date(2000, 2, 22, 3, 30);
  today = new Date();

  constructor() {
    this.ageSubject = new BehaviorSubject<Duration>(intervalToDuration({ start: this.birthday, end: this.today }));
  }

  init(): void {
    const seconds$ = interval(1000);
    const one$ = seconds$.pipe(mapTo(1))
    one$.subscribe(x => this.ageSubject.next({
      years: this.ageSubject.value.hours === 0 && this.ageSubject.value.minutes === 0 && this.ageSubject.value.seconds  && this.ageSubject.value.days === 0 && this.ageSubject.value.months === 0 ? this.nextNumber(this.ageSubject.value.years, null): this.ageSubject.value.years,
      months: this.ageSubject.value.hours === 0 && this.ageSubject.value.minutes === 0 && this.ageSubject.value.seconds  && this.ageSubject.value.days === 0 ? this.nextNumber(this.ageSubject.value.months, 12): this.ageSubject.value.months,
      days: this.ageSubject.value.hours === 0 && this.ageSubject.value.minutes === 0 && this.ageSubject.value.seconds === 0 ? this.nextNumber(this.ageSubject.value.days, getDaysInMonth(this.today)+1): this.ageSubject.value.days,
      hours: this.ageSubject.value.minutes === 0 && this.ageSubject.value.seconds === 0 ? this.nextNumber(this.ageSubject.value.hours, 24) : this.ageSubject.value.hours,
      minutes: this.ageSubject.value.seconds === 0 ? this.nextNumber(this.ageSubject.value.minutes, 60) : this.ageSubject.value.minutes,
      seconds: this.nextNumber(this.ageSubject.value.seconds, 60)
    }));
  }

  get getAge() {
    return this.ageSubject.asObservable();
  }

  nextNumber(value: number | undefined, max: number | null) {
    if (typeof value === 'undefined') return 0
    if (!max) return value + 1
    if (value < max - 1) return value + 1
    return 0
  }

}
