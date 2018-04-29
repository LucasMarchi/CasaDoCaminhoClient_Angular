import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoBeneficiariosComponent } from './projeto-beneficiarios.component';

describe('ProjetoBeneficiariosComponent', () => {
  let component: ProjetoBeneficiariosComponent;
  let fixture: ComponentFixture<ProjetoBeneficiariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoBeneficiariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoBeneficiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
