import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentdoimkComponent } from './assignmentdoimk.component';

describe('AssignmentdoimkComponent', () => {
  let component: AssignmentdoimkComponent;
  let fixture: ComponentFixture<AssignmentdoimkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentdoimkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentdoimkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
