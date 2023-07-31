import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecompComponent } from './coursecomp.component';

describe('CoursecompComponent', () => {
  let component: CoursecompComponent;
  let fixture: ComponentFixture<CoursecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursecompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
