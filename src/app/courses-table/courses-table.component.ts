import { Component } from '@angular/core';
import { COURSES } from '../Data/db-data';

@Component({
  selector: 'courses-table',
  templateUrl: './courses-table.component.html',
  styleUrl: './courses-table.component.scss'
})
export class CoursesTableComponent {
AllCourses=COURSES;
}
