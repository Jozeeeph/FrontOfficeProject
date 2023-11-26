import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsActivityComponent } from './details-activity.component';

describe('DetailsActivityComponent', () => {
  let component: DetailsActivityComponent;
  let fixture: ComponentFixture<DetailsActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsActivityComponent]
    });
    fixture = TestBed.createComponent(DetailsActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
