import { PortfolioService } from './landing-page/portfolio/portfolio.service';
import { SkillsService } from './landing-page/skills/skills.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Vitae';

  constructor(
    private skills: SkillsService,
    private projects: PortfolioService
  ) {}

  ngOnInit(): void {
    this.skills.init();
    this.projects.init();
  }
}
