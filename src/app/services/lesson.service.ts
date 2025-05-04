import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Lesson {
  title: string;
  links: string;
  period: number;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private lessons: Lesson[] = [];

  private lessonsSubject = new BehaviorSubject<Lesson[]>(this.getLessonsFromLocalStorage());

  constructor() {
    
    const storedLessons = localStorage.getItem('lessons');
    if (storedLessons) {
      this.lessons = JSON.parse(storedLessons);
      this.lessonsSubject.next(this.lessons);
    }
  }

 
  getLessons(): Observable<Lesson[]> {
    return this.lessonsSubject.asObservable();
  }

  addLesson(lesson: Lesson) {
    this.lessons.push(lesson);
    this.updateLocalStorage();
    this.lessonsSubject.next(this.lessons);
  }

  deleteLesson(index: number) {
    this.lessons.splice(index, 1);
    this.updateLocalStorage();
    this.lessonsSubject.next(this.lessons);
  }

 
  private getLessonsFromLocalStorage(): Lesson[] {
    const storedLessons = localStorage.getItem('lessons');
    return storedLessons ? JSON.parse(storedLessons) : [];
  }

  private updateLocalStorage() {
    localStorage.setItem('lessons', JSON.stringify(this.lessons));
  }
}




