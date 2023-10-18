import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandeshauptstadtComponent } from './landeshauptstadt.component';

describe('LandeshauptstadtComponent', () => {
  let component: LandeshauptstadtComponent;
  let fixture: ComponentFixture<LandeshauptstadtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandeshauptstadtComponent]
    });
    fixture = TestBed.createComponent(LandeshauptstadtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
