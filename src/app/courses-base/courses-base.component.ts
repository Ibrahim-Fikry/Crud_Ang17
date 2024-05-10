import { Component } from '@angular/core';
import { COURSES } from '../Data/db-data';
import { ICourse } from './../Interfaces/ICourse';

@Component({
  selector: 'courses-base',
  templateUrl: './courses-base.component.html',
  styleUrl: './courses-base.component.scss'
})
export class CoursesBaseComponent {
  //#  region  prop
  Visable:boolean=false;
  CourseObj!:ICourse;
  //#endregion
  
  //#  region  function
  ShodHide(){
    this.Visable=!this.Visable;
  }
  
  //#endregion
}
