import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './components/student/student.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { CertificateComponent } from './components/certificate/certificate.component';

export const routes: Routes = [
    
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'student', component: StudentComponent },
      { path: 'employee', component: EmployeesComponent },
      { path: 'certificate', component: CertificateComponent},
    ]
  },
  { path: '', redirectTo: '/home/student', pathMatch: 'full' },
];
