import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesBaseComponent } from './courses-base.component';

describe('CoursesBaseComponent', () => {
  let component: CoursesBaseComponent;
  let fixture: ComponentFixture<CoursesBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
