import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WappenComponent } from './wappen.component';

describe('WappenComponent', () => {
  let component: WappenComponent;
  let fixture: ComponentFixture<WappenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WappenComponent]
    });
    fixture = TestBed.createComponent(WappenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
