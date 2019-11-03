import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentdangkyComponent } from './assignmentdangky.component';

describe('AssignmentdangkyComponent', () => {
  let component: AssignmentdangkyComponent;
  let fixture: ComponentFixture<AssignmentdangkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentdangkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentdangkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
