import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiarioPerfilComponent } from './beneficiario-perfil.component';

describe('BeneficiarioPerfilComponent', () => {
  let component: BeneficiarioPerfilComponent;
  let fixture: ComponentFixture<BeneficiarioPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiarioPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiarioPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
