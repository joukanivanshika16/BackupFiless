import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTrackerComponent } from './show-tracker.component';

describe('ShowTrackerComponent', () => {
  let component: ShowTrackerComponent;
  let fixture: ComponentFixture<ShowTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
