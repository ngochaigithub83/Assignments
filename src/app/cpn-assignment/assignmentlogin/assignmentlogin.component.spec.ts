import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentloginComponent } from './assignmentlogin.component';

describe('AssignmentloginComponent', () => {
  let component: AssignmentloginComponent;
  let fixture: ComponentFixture<AssignmentloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
