import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { map, takeUntil } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { Inquiry } from './inquiry.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, interval, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private subject = new BehaviorSubject(0);
  countdown$ = this.subject.asObservable();

  constructor(private http: HttpClient) {}

  submitInquiry(form: Inquiry, snackBar: MatSnackBar): Observable<number> {
    this.http
      .post<any>(`${environment.apiUrl}/api/inquiry/submit`, form)
      .pipe(
        map((res) => res.result as unknown as string)
      )
      .subscribe((inquiry) => {
        snackBar.open(inquiry, 'DISMISS', { duration: 5000 });
      });
    from(interval(1000))
      .pipe(
        takeUntil(timer(61000)),
        map(x => 59 - x)
      )
      .subscribe(x => this.subject.next(x));
    return this.countdown$;
  }
}
