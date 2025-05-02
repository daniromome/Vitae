import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { TitleCasePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatChip, MatChipAvatar, MatChipSet } from '@angular/material/chips';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCard, MatCardContent, TitleCasePipe, MatIcon, MatChip, MatChipSet, MatChipAvatar]
})
export class SkillsComponent {

  skillCategories = [
    {
      label: $localize`The following technologies I work with a daily basis and have the most experience on. I consider them to be my strongest of suits and what I shine the most at`,
      skills: [
        'angular',
        'typescript',
        'ngrx',
        'ionic',
        'capacitor',
        'cordova'
      ]
    },
    {
      label: $localize`I ocassionally use the following tools and I feel confident enough to develop in codebases that leverage them`,
      skills: [
        'java',
        'springboot',
        'postgres',
      ]
    }
  ]
}
