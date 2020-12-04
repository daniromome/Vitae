import { Inquiry } from './inquiry.interface';
import { map, startWith, takeUntil, tap } from 'rxjs/operators';
import { ContactService } from './contact.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { concat, timer, Observable, interval, from, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  disabled = false;
  timeLeft$: Observable<number> | undefined;
  name = new FormControl('', [
    Validators.required
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  inquiry = new FormControl('', [
    Validators.required
  ]);

  constructor(
    private contactService: ContactService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      inquiry: this.inquiry
    });
  }

  ngOnInit(): void {
  }

  submit(form: Inquiry): void {
    this.timeLeft$ = this.contactService.submitInquiry(form, this.snackBar);
    this.timeLeft$.subscribe();
  }

}
