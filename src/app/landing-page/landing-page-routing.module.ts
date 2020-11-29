import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [{ path: '', component: LandingPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, MatIconModule]
})
export class LandingPageRoutingModule { }
