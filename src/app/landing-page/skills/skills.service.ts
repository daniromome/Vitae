import { environment } from './../../../environments/environment';
import { Skill } from './skill.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private subject = new BehaviorSubject<Skill[]>([]);

  skills$: Observable<Skill[]> = this.subject.asObservable();

  constructor(private http: HttpClient) {}

  init(): void {
    this.http
      .get<any>(`${environment.apiUrl}/api/skill/get`)
      .pipe(map((res) => Object.values(res.result) as Skill[]))
      .subscribe((skills) => this.subject.next(skills));
  }

  get getSkills(): Observable<Skill[]> {
    return this.skills$;
  }

}
