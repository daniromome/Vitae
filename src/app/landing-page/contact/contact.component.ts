import { Inquiry } from './inquiry.interface';
import { map, startWith, takeUntil, tap } from 'rxjs/operators';
import { ContactService } from './contact.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, Validators, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { concat, timer, Observable, interval, from, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {

  form: UntypedFormGroup;
  disabled = false;
  timeLeft$: Observable<number> | undefined;
  name = new UntypedFormControl('', [
    Validators.required
  ]);
  email = new UntypedFormControl('', [
    Validators.required,
    Validators.email
  ]);
  inquiry = new UntypedFormControl('', [
    Validators.required
  ]);

  constructor(
    private contactService: ContactService,
    private snackBar: MatSnackBar,
    private formBuilder: UntypedFormBuilder
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
