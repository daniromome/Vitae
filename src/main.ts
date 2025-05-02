import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

bootstrapApplication(AppComponent, {
    providers: [
      provideAnimations(),
      provideHttpClient(),
      provideExperimentalZonelessChangeDetection()
    ]
})
  .catch(err => console.error(err));
