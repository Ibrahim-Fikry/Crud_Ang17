import { Component, Input } from '@angular/core';
import{ICourse}from '../Interfaces/ICourse';
import { COURSES } from '../Data/db-data';

@Component({
  selector: 'courses-add-edite',
  templateUrl: './courses-add-edite.component.html',
  styleUrl: './courses-add-edite.component.scss'
})
export class CoursesAddEditeComponent {
//@Input() AddEditObj!:ICourse;    //optional input prop
 AddEditObj!:ICourse;  //required input prop
AddCourse(obj:ICourse){
  debugger
COURSES.push(obj)
}
}
