import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoacaoCadastroComponent } from './doacao-cadastro.component';

describe('DoacaoCadastroComponent', () => {
  let component: DoacaoCadastroComponent;
  let fixture: ComponentFixture<DoacaoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoacaoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoacaoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
