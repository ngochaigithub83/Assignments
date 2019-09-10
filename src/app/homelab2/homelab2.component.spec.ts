import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homelab2Component } from './homelab2.component';

describe('Homelab2Component', () => {
  let component: Homelab2Component;
  let fixture: ComponentFixture<Homelab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homelab2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homelab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
