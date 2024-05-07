import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesAddEditeComponent } from './courses-add-edite.component';

describe('CoursesAddEditeComponent', () => {
  let component: CoursesAddEditeComponent;
  let fixture: ComponentFixture<CoursesAddEditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesAddEditeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesAddEditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
