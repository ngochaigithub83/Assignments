import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentquenmkComponent } from './assignmentquenmk.component';

describe('AssignmentquenmkComponent', () => {
  let component: AssignmentquenmkComponent;
  let fixture: ComponentFixture<AssignmentquenmkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentquenmkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentquenmkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
