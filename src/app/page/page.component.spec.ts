import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAGEComponent } from './page.component';

describe('PAGEComponent', () => {
  let component: PAGEComponent;
  let fixture: ComponentFixture<PAGEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAGEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
