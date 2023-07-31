import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardcompComponent } from './awardcomp.component';

describe('AwardcompComponent', () => {
  let component: AwardcompComponent;
  let fixture: ComponentFixture<AwardcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwardcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
