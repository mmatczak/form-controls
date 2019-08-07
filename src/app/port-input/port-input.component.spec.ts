import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortInputComponent } from './port-input.component';

describe('PortInputComponent', () => {
  let component: PortInputComponent;
  let fixture: ComponentFixture<PortInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
