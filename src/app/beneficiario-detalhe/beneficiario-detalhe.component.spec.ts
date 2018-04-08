import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiarioDetalheComponent } from './beneficiario-detalhe.component';

describe('BeneficiarioDetalheComponent', () => {
  let component: BeneficiarioDetalheComponent;
  let fixture: ComponentFixture<BeneficiarioDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiarioDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiarioDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
