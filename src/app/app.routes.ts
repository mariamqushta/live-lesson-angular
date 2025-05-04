import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './components/student/student.component';
import { EmployeesComponent } from './components/employees/employees.component';

export const routes: Routes = [
    
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'student', component: StudentComponent },
      { path: 'employee', component: EmployeesComponent },
    ]
  },
  { path: '', redirectTo: '/home/student', pathMatch: 'full' },
];
