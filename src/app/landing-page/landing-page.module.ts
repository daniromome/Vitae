import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [LandingPageComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ContactComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ]
})
export class LandingPageModule { }
