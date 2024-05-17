import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'detail/:id', component: StudentDetailComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'about', component: AboutComponent },
];
