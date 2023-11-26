import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosPubComponent } from './infos-pub.component';

describe('InfosPubComponent', () => {
  let component: InfosPubComponent;
  let fixture: ComponentFixture<InfosPubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfosPubComponent]
    });
    fixture = TestBed.createComponent(InfosPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
