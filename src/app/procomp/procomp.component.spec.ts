import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcompComponent } from './procomp.component';

describe('ProcompComponent', () => {
  let component: ProcompComponent;
  let fixture: ComponentFixture<ProcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
