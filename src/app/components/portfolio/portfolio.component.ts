import { Project } from './project.interface';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { NgIf, NgFor } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatCard, MatCardContent, MatIcon]
})
export class PortfolioComponent implements OnInit {

  projects: Project[] = [
    {
      image: '/assets/portfolio/pets.png',
      date: new Date(2025, 4),
      description: 'App made using ionic to track the weight of my parrots',
      repository: '',
      summary: $localize`App made using ionic to track the weight of my parrots`,
      title: 'Nor Pets',
      url: 'https://pets.nor.mx'
    },
    {
      image: '/assets/portfolio/qbitmc.png',
      date: new Date(2022, 12),
      description: 'Website for my private minecraft community',
      repository: 'https://github.com/daniromome/qbitmc-v2',
      summary: $localize`Website for my private minecraft community`,
      title: 'QbitMC',
      url: 'https://qbitmc.com'
    }
  ]

  ngOnInit(): void {
  }

  newTab(url: string): void {
    window.open(url, '_blank');
  }

}
