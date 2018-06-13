import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4Component } from './lib4.component';

describe('Lib4Component', () => {
  let component: Lib4Component;
  let fixture: ComponentFixture<Lib4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
