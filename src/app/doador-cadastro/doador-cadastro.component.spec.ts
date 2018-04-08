import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoadorCadastroComponent } from './doador-cadastro.component';

describe('DoadorCadastroComponent', () => {
  let component: DoadorCadastroComponent;
  let fixture: ComponentFixture<DoadorCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoadorCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoadorCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
