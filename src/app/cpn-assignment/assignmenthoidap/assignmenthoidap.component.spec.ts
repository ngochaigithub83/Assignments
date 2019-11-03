import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmenthoidapComponent } from './assignmenthoidap.component';

describe('AssignmenthoidapComponent', () => {
  let component: AssignmenthoidapComponent;
  let fixture: ComponentFixture<AssignmenthoidapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmenthoidapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmenthoidapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
