import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioFamiliaresComponent } from './relatorio-familiares.component';

describe('RelatorioFamiliaresComponent', () => {
  let component: RelatorioFamiliaresComponent;
  let fixture: ComponentFixture<RelatorioFamiliaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioFamiliaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioFamiliaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
