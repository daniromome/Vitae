import { PortfolioService } from './portfolio.service';
import { Observable } from 'rxjs';
import { Project } from './project.interface';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent implements OnInit {

  projects$: Observable<Project[]>;

  constructor(private portfolioService: PortfolioService) {
    this.projects$ = this.portfolioService.getProjects;
  }

  ngOnInit(): void {
  }

  newTab(url: string): void {
    window.open(url, '_blank');
  }

}
