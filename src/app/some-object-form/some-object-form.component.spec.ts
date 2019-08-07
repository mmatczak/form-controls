import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeObjectFormComponent } from './some-object-form.component';

describe('SomeObjectFormComponent', () => {
  let component: SomeObjectFormComponent;
  let fixture: ComponentFixture<SomeObjectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeObjectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeObjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
