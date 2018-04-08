import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiarioCadastroComponent } from './beneficiario-cadastro.component';

describe('BeneficiarioCadastroComponent', () => {
  let component: BeneficiarioCadastroComponent;
  let fixture: ComponentFixture<BeneficiarioCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiarioCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiarioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
