import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { From4Component } from './from4.component';

describe('From4Component', () => {
  let component: From4Component;
  let fixture: ComponentFixture<From4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ From4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(From4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
