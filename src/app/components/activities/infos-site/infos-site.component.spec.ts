import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosSiteComponent } from './infos-site.component';

describe('InfosSiteComponent', () => {
  let component: InfosSiteComponent;
  let fixture: ComponentFixture<InfosSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfosSiteComponent]
    });
    fixture = TestBed.createComponent(InfosSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
