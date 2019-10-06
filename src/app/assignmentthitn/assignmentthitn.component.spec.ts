import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentthitnComponent } from './assignmentthitn.component';

describe('AssignmentthitnComponent', () => {
  let component: AssignmentthitnComponent;
  let fixture: ComponentFixture<AssignmentthitnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentthitnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentthitnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
