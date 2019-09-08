import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployorsComponent } from './employors.component';

describe('EmployorsComponent', () => {
  let component: EmployorsComponent;
  let fixture: ComponentFixture<EmployorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
