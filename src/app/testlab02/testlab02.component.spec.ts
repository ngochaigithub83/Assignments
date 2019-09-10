import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testlab02Component } from './testlab02.component';

describe('Testlab02Component', () => {
  let component: Testlab02Component;
  let fixture: ComponentFixture<Testlab02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testlab02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testlab02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
