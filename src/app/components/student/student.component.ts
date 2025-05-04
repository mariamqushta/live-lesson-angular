import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonService } from '../../services/lesson.service';

interface Lesson {
  title: string;
  links: string;
}

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  lessons: Lesson[] = [];  

  constructor(private lessonService: LessonService) {}

  ngOnInit() {
    this.lessonService.getLessons().subscribe(lessons => {
      this.lessons = lessons;  
    });
  }
}

