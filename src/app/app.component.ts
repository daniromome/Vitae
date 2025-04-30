import { PortfolioService } from './landing-page/portfolio/portfolio.service';
import { SkillsService } from './landing-page/skills/skills.service';
import { Component, OnInit } from '@angular/core';
import { AboutMeService } from './landing-page/about-me/about-me.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'Vitae';

  constructor(
    private skills: SkillsService,
    private projects: PortfolioService,
    private about: AboutMeService
  ) {}

  ngOnInit(): void {
    this.skills.init();
    this.projects.init();
    this.about.init();
  }
}
