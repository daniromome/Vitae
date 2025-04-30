import { Component, OnInit } from '@angular/core';
import { fadeInAnimation, zoomInAnimation } from '../_animations/index';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    animations: [
        fadeInAnimation(),
        zoomInAnimation()
    ],
    standalone: false
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newTab(url: string): void {
    window.open(url, '_blank');
  }

}
