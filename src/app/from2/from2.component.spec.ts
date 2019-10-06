import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { From2Component } from './from2.component';

describe('From2Component', () => {
  let component: From2Component;
  let fixture: ComponentFixture<From2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ From2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(From2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
