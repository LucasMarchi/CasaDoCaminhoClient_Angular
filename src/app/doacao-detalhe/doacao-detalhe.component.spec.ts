import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoacaoDetalheComponent } from './doacao-detalhe.component';

describe('DoacaoDetalheComponent', () => {
  let component: DoacaoDetalheComponent;
  let fixture: ComponentFixture<DoacaoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoacaoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoacaoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
