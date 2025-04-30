import { Skill } from './skill.interface';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillsService } from './skills.service';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class SkillsComponent implements OnInit {

  skills$: Observable<Skill[]>;

  constructor(private skillsService: SkillsService) {
    this.skills$ = this.skillsService.getSkills;
  }

  ngOnInit(): void {

  }

}
