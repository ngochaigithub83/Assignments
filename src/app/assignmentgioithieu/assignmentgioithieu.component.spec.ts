import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentgioithieuComponent } from './assignmentgioithieu.component';

describe('AssignmentgioithieuComponent', () => {
  let component: AssignmentgioithieuComponent;
  let fixture: ComponentFixture<AssignmentgioithieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentgioithieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentgioithieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
