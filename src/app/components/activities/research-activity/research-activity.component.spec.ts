import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchActivityComponent } from './research-activity.component';

describe('ResearchActivityComponent', () => {
  let component: ResearchActivityComponent;
  let fixture: ComponentFixture<ResearchActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchActivityComponent]
    });
    fixture = TestBed.createComponent(ResearchActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
