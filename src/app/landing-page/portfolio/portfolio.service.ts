import { Project } from './project.interface';
import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private subject = new BehaviorSubject<Project[]>([]);

  projects$: Observable<Project[]> = this.subject.asObservable();

  constructor(private http: HttpClient) {}

  init(): void {
    this.http
      .get<any>(`${environment.apiUrl}/api/project/get`)
      .pipe(map((res) => Object.values(res.result) as Project[]))
      .subscribe((projects) => this.subject.next(projects));
  }

  get getProjects(): Observable<Project[]> {
    return this.projects$;
  }
}
