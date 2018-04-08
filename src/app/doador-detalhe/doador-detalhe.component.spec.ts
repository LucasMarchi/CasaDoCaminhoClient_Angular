import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoadorDetalheComponent } from './doador-detalhe.component';

describe('DoadorDetalheComponent', () => {
  let component: DoadorDetalheComponent;
  let fixture: ComponentFixture<DoadorDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoadorDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoadorDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
