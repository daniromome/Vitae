import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { fadeInAnimation, zoomInAnimation } from './_animations';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
      fadeInAnimation(),
      zoomInAnimation()
    ],
    imports: [
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSnackBarModule,
      ReactiveFormsModule,
      MatProgressBarModule,
      AboutMeComponent, SkillsComponent, PortfolioComponent
    ]
})
export class AppComponent {

  private readonly icons = ['angular', 'capacitor', 'cordova', 'github', 'ionic', 'java', 'linkedin', 'ngrx', 'ngxs', 'postgres', 'springboot', 'typescript'] as const;

  constructor() {
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);
    this.icons.forEach(icon => iconRegistry.addSvgIcon(`vitae-${icon}`, sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`)))
  }
}
