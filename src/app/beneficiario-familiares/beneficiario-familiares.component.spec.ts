import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiarioFamiliaresComponent } from './beneficiario-familiares.component';

describe('BeneficiarioFamiliaresComponent', () => {
  let component: BeneficiarioFamiliaresComponent;
  let fixture: ComponentFixture<BeneficiarioFamiliaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiarioFamiliaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiarioFamiliaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
