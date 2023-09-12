import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeauSuperieurComponent } from './bandeau-superieur.component';

describe('BandeauSuperieurComponent', () => {
  let component: BandeauSuperieurComponent;
  let fixture: ComponentFixture<BandeauSuperieurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandeauSuperieurComponent]
    });
    fixture = TestBed.createComponent(BandeauSuperieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
