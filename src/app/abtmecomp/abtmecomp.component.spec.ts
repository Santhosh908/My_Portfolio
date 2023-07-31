import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtmecompComponent } from './abtmecomp.component';

describe('AbtmecompComponent', () => {
  let component: AbtmecompComponent;
  let fixture: ComponentFixture<AbtmecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbtmecompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbtmecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
