import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentlienheComponent } from './assignmentlienhe.component';

describe('AssignmentlienheComponent', () => {
  let component: AssignmentlienheComponent;
  let fixture: ComponentFixture<AssignmentlienheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentlienheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentlienheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
