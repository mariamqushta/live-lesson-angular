import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from '../components/student/student.component';
import { EmployeesComponent } from '../components/employees/employees.component';
import { Router } from '@angular/router';
import { CertificateComponent } from '../components/certificate/certificate.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,StudentComponent,EmployeesComponent,CertificateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  currentRoute = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      const url = this.router.url;
      if (url.includes('student')) {
        this.currentRoute = 'student';
      } else if (url.includes('employee')) {
        this.currentRoute = 'employee';
      } else if (url.includes('certificate')) {
        this.currentRoute = 'certificate';
      }
  });
  }
}

