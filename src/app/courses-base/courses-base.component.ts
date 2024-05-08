import { Component } from '@angular/core';
import { COURSES } from '../Data/db-data';

@Component({
  selector: 'courses-base',
  templateUrl: './courses-base.component.html',
  styleUrl: './courses-base.component.scss'
})
export class CoursesBaseComponent {
  //#  region  prop
  Visable:boolean=false;
  CourseObj=COURSES[0];
  //#endregion
  
  //#  region  function
  ShodHide(){
    this.Visable=!this.Visable;
  }
  
  //#endregion
}
