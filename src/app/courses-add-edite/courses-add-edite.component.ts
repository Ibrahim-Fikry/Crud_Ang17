import { Component, Input } from '@angular/core';
import{ICourse}from '../Interfaces/ICourse';

@Component({
  selector: 'courses-add-edite',
  templateUrl: './courses-add-edite.component.html',
  styleUrl: './courses-add-edite.component.scss'
})
export class CoursesAddEditeComponent {
//@Input() AddEditObj!:ICourse;    //optional input prop
@Input({required:true}) AddEditObj!:ICourse;  //required input prop
}
