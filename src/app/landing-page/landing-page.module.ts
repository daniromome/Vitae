import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';


@NgModule({
  declarations: [LandingPageComponent, AboutMeComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MatCardModule
  ]
})
export class LandingPageModule { }
