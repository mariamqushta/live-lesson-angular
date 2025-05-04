import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LessonService } from '../../services/lesson.service';

declare var bootstrap: any;

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  constructor(private lessonService: LessonService) {}

  classrooms = ['Room 1', 'Room 2', 'Room 3'];
  weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
  subjects = ['Math', 'Science', 'English'];

  lessons: any[] = [];

  newLesson = {
    classroom: '',
    weekday: '',
    subject: '',
    period: 0,
    live: '',
    record: ''
  };

  index: number | null = null;

 addLesson() {
  if (
    this.newLesson.classroom &&
    this.newLesson.weekday &&
    this.newLesson.subject &&
    this.newLesson.period &&
    this.newLesson.live &&
    this.newLesson.record
  ) {
    if (this.index !== null) {
      this.lessons[this.index] = {...this.newLesson};
      this.index = null;
    } else {
      const lesson = {
        title: this.newLesson.subject,  
        links: this.newLesson.live,     
        period: this.newLesson.period,  
        createdAt: new Date()         
      };
      this.lessonService.addLesson(lesson);
      this.lessons.push({ ...this.newLesson });
    }

    this.resetForm();
  } else {
    alert('Please fill all fields');
  }
}


  editLesson(index: number) {
    this.newLesson = { ...this.lessons[index] };
    this.index = index;
    const modal = new bootstrap.Modal(document.getElementById('myModal')!);
    modal.show();
  }

  deleteLesson(index: number) {
    if (confirm('Are you sure you want to delete this lesson?')) {
      this.lessons.splice(index, 1);
    }
  }

  resetForm() {
    this.newLesson = {
      classroom: '',
      weekday: '',
      subject: '',
      period: 0,
      live: '',
      record: ''
    };

    const modalElement = document.getElementById('myModal');
    const bsModal = bootstrap.Modal.getInstance(modalElement!);
    bsModal?.hide();
  }
}
