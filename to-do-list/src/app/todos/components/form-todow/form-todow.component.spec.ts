import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTodowComponent } from './form-todow.component';

describe('FormTodowComponent', () => {
  let component: FormTodowComponent;
  let fixture: ComponentFixture<FormTodowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTodowComponent]
    });
    fixture = TestBed.createComponent(FormTodowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
