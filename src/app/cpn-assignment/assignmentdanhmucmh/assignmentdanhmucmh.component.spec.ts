import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentdanhmucmhComponent } from './assignmentdanhmucmh.component';

describe('AssignmentdanhmucmhComponent', () => {
  let component: AssignmentdanhmucmhComponent;
  let fixture: ComponentFixture<AssignmentdanhmucmhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentdanhmucmhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentdanhmucmhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
