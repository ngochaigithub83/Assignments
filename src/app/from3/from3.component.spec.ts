import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { From3Component } from './from3.component';

describe('From3Component', () => {
  let component: From3Component;
  let fixture: ComponentFixture<From3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ From3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(From3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
